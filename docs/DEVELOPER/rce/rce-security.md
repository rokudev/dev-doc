---
title: Roku Cloud Emulator Partner Security Brief
excerpt: 'Security controls and isolation model for the Roku Cloud Emulator, including compute, storage, network, and data lifecycle'
deprecated: false
hidden: false
metadata:
  title: 'Roku Cloud Emulator Partner Security Brief'
  description: 'How the Roku Cloud Emulator isolates Partner organizations across compute, storage, network, and the data lifecycle on the Roku Managed Cloud Platform.'
  robots: index
next:
  description: ''
---

# Roku Cloud Emulator Partner Security Brief

## Overview

The Roku Cloud Emulator (RCE) runs on the Roku Managed Cloud Platform (RMCP) and inherits its platform security controls. Each Partner is assigned a separate RCE organization, which is the technical tenant and authorization boundary used throughout this brief. RCE adds organization-aware API authorization, Partner-specific session tokens and instance-specific Emulator access controls.

The platform provides logical isolation across the application, session and RMCP layers. The Core API applies organization-aware code controls to separate Partner data. Each Emulator session receives a separate fresh EC2 instance and a session-specific cloud identity limited to the device state and logs required for that session.

RCE uses shared RMCP infrastructure rather than physically dedicated infrastructure for every organization. Its security model combines identity, application authorization, workload separation, private storage and network policy to maintain the Partner boundary.

## Isolating developer environments

### Compute

The Core Cluster hosts customer-facing APIs, token exchange and control-plane services. The Device Cluster runs Emulator sessions behind a separate network boundary. Lifecycle commands cross this boundary through RabbitMQ to the Agent (the Device Cluster service that creates and removes Emulator resources).

Each Emulator session receives a separate, new EC2 instance (instances are not reused), session-specific routes and its own workload identity. Scheduling controls ensure that only one active Emulator pod runs on a worker node at a time, preventing concurrent Partner Emulator sessions from sharing that node.

RMCP supplies reviewed namespace provisioning, group-based RBAC, restricted production access, hardened Amazon EKS hosts, OPA Gatekeeper admission controls, resource quotas, service identities and GitOps-managed configuration. These controls restrict platform access, enforce consistent deployment standards and separate RCE from unrelated RMCP workloads.

### Storage

Persistent snapshots and completed-session logs are stored in private S3 storage with public access blocked. Access is granted through controlled service identities rather than public permissions.

The Core API applies organization-aware code checks before reading, writing or deleting Partner data. These checks derive the organization from the authenticated identity and resolve devices, snapshots and logs within that organization.

The Emulator Session Lifecycle Manager (the component responsible for loading and saving state and uploading session logs) receives a session-specific cloud role. Its permissions are limited to the state and log objects for the device used by that Emulator session. The Agent removes the temporary session identity after the Emulator pod is deleted and performs cleanup for orphaned identities.

### Network

RMCP supplies service-to-service mTLS, mesh-level JWT authentication, certificate rotation and policy-controlled namespace communication. Namespace traffic is restricted unless trust is configured, and trusted-service policies can limit inbound connections to approved services.

RCE adds authenticated, instance-specific routes for direct Emulator access. Session JWTs carry the organization identity, and route policies require it to match the organization that owns the running Emulator instance. Network traffic between instances is specifically disallowed.

## Protecting sideloaded apps and content

The external Core API authenticates each user and derives the Partner organization from that identity. Devices, snapshots and logs are resolved within the authenticated organization.

The Cloud Emulator frontend and backend-for-frontend use short-lived, user-specific tokens for Core API and direct Emulator operations. The backend-for-frontend uses Core to resolve the requested device and its active instance route before relaying traffic. The Device Cluster remains the final authorization enforcement point for video, logs, sideloading and device-control requests. The backend-for-frontend also separates cached authorization by user, account context and device.

Direct Instance API, sideloading, Roku External Control Protocol (ECP) and video routes are created for the active Emulator instance. Organization-aware JWT policy binds access to the Partner organization that owns the instance. Automated two-organization scenarios verify denial for the Instance API and video-signaling paths.

Installed apps may intentionally change device state or generate logs. Those outputs are retained only through the normal snapshot and log lifecycle and remain subject to organization-aware access controls.

## Managing the data lifecycle

During normal shutdown, the Emulator Session Lifecycle Manager attempts to upload the live device state and session logs before the Emulator pod is removed. It retries temporary cloud-credential failures within the shutdown grace period. Deleting the Emulator pod removes its pod-lifetime storage and memory-backed staging.

Session logs stored in S3 are configured to expire after 30 days. Snapshots are deleted 180 days after last use. They are protected by organization-aware Core API controls and are deleted through the product's normal snapshot-management workflow. Snapshots can be deleted by users and the live snapshot can be reset by launching an instance using the "initial snapshot".

An abrupt pod or node failure may prevent the final state or logs from being uploaded, affecting availability of the latest session artifacts.
