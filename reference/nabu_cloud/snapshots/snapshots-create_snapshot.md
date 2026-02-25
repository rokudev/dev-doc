---
title: Create Snapshot
excerpt: |-
  Snapshots can either be created from a device's current filesystem state (or
  most recent filesystem state if the device is currently off) or by creating
  a modified version of an existing snapshot.

  If both SnapshotCreate.system_setting_changes and
  SnapshotCreate.config_server_overrides_changes are None then the snapshot
  will be created from the device state. However if either is not None then
  parent_id must be provided and the new snapshot will be created as a
  modified version of the parent snapshot.

  If creating from a running device parent_id is purely organisational and
  will not effect the content of the created snapshot.

  If creating from a parent snapshot the parent snapshot must belong to the
  same device.
api:
  file: openapi.json
  operationId: snapshots-create_snapshot
hidden: false
---