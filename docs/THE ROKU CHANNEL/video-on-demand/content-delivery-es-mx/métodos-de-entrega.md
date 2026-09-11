---
title: Métodos de entrega
excerpt: >-
  Métodos de transferencia admitidos: Aspera (Shares/P2P) y conexión directa a
  S3.
deprecated: false
hidden: true
metadata:
  robots: index
---
## Descripción general

Roku admite dos métodos principales de entrega de contenido:

1. **Aspera**: mediante Aspera Shares (aplicación de escritorio) o Aspera Enterprise/P2P (autenticado con clave SSH)
2. **Conexión directa a S3:** transferencia S3 a S3 entre cuentas

Roku confirmará qué método de entrega aplica a una empresa socia determinada durante la incorporación. Los métodos alternativos de transferencia de archivos o de entrega física **pueden** evaluarse caso por caso, pero **deben** contar con la aprobación previa de Roku. **Si se aprueban, cualquier medio físico o disco duro entregado a Roku no será devuelto.**

***

## Aspera

Roku acepta contenido a través de Aspera, configurado como:

* **Aspera Shares** (mediante la aplicación IBM Aspera para escritorio), o
* **Aspera Enterprise/P2P** (mediante Aspera Client o Console)

**Cómo elegir entre ambos:** Aspera Shares es una opción más sencilla, basada en una aplicación de escritorio, adecuada para transferencias ocasionales o de menor escala. Aspera Enterprise/P2P utiliza autenticación con clave SSH y suele emplearse para transferencias automatizadas de mayor volumen o frecuencia. Roku confirmará cuál aplica a tu incorporación.

### Entrega a través de Aspera Shares

Proporciona el nombre o los nombres y las direcciones de correo electrónico de las personas usuarias que transmitirán contenido a Roku para Roku Channel.

* **URL de Aspera Shares de Roku:** [https://aspera.sr.roku.com](https://aspera.sr.roku.com)
* **Aplicación requerida:** [IBM Aspera para escritorio](https://ibmaspera.com/help/downloads/desktop) — es necesario instalarla para cargar contenido a través de Aspera Shares.

> **Correos de invitación:** las invitaciones para crear una cuenta de Aspera Shares se envían desde el servidor de Aspera Shares de Roku. Estos correos automáticos suelen marcarse como correo no deseado, o bien pueden ser bloqueados por el sistema de filtrado de correo o el cortafuegos de una organización. Si no ves la invitación, **revisa tu carpeta de correo no deseado** y muévela antes de intentar usar el enlace.

### Entrega a través de Aspera Enterprise, P2P o HSTS

Roku realiza la autenticación mediante el **intercambio de claves RSA públicas o privadas**. Para completar la configuración, proporciona una **clave pública RSA-SSH**.

* Pasos para crear claves SSH: [documentación oficial de Aspera](https://download.asperasoft.com/download/docs/ascp/3.5.2/html/dita/creating_public_key.html)
* Roku proporcionará la **información de host y nombre de usuario** durante la incorporación.
* **Aplicación requerida:** [Aspera Client](https://www.ibm.com/support/fixcentral/swg/selectFixes?parent=ibm~Other%20software\&product=ibm/Other%20software/IBM%20Aspera%20Desktop%20Client\&release=All\&platform=All\&function=all)

#### Ancho de banda de transferencia

Roku aplica un **límite global de ancho de banda de 300 Mbps**. Roku recomienda verificar o actualizar las preferencias globales y de usuario de tu Aspera Client para que se ajusten al ancho de banda de carga que prefieras.

![Ejemplo de preferencias de Aspera](https://image.roku.com/ZHZscHItMTc2/asperaPreferences.jpg)

Dónde configuras la velocidad de transferencia depende del tipo de cliente/conexión que estés utilizando:

| Tipo de conexión                                              | Dónde configurarlo                                                                                                                  | Referencia                                                                                                                                                                                                                                                             |
| ------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Interfaz gráfica del cliente de escritorio (ajustes globales) | Preferencias globales de ancho de banda                                                                                             | [Documentación de IBM: configuración global de ancho de banda](https://www.ibm.com/docs/en/asdc/4.4.x?topic=gui-global-bandwidth-settings)                                                                                                                             |
| Interfaz gráfica del cliente de escritorio (por conexión)     | Ajuste de "velocidad" al agregar o editar una conexión                                                                              | [Documentación de IBM: agregar o editar conexiones](https://www.ibm.com/docs/en/asdc/4.4.x?topic=gui-adding-editing-connections)                                                                                                                                       |
| Línea de comandos                                             | Parámetro `-l` en el comando de transferencia; por ejemplo, `ascp -l 100m ...` establece una velocidad de transferencia de 100 Mbps | —                                                                                                                                                                                                                                                                      |
| Aspera Shares (interfaz web)                                  | Velocidad objetivo para todo el sistema o por persona usuaria                                                                       | [Configuración de ajustes de transferencia](https://www.ibm.com/docs/en/aspera-shares/1.10?topic=options-configuring-transfer-settings) / [Configuración de ajustes de usuario](https://www.ibm.com/docs/en/aspera-shares/1.10?topic=accounts-configure-user-settings) |

> Elige la fila que corresponda a tu tipo de conexión — son rutas de configuración alternativas, no pasos secuenciales.

***

## Conexión directa a S3

Roku admite la transferencia directa S3 a S3 para la entrega de contenido. El bucket de entrega de Roku para la conexión directa a S3 utiliza una **clave KMS administrada por el cliente**. Debido a que se trata de una transferencia entre cuentas, se requiere una clave KMS y una política que otorgue permiso a la cuenta de la empresa socia.

### Qué necesita Roku de las empresas socias

El **ARN del rol de IAM** de la empresa socia, utilizado (asumido) para la carga multiparte/copia en S3. Una vez recibido, Roku lo agrega a la lista de permitidos de la clave KMS/política.

Formato típico de ARN:

```
arn:aws:iam::<AWS_ACCOUNT>:role/<ROLE_NAME>
```

La siguiente política de IAM se presenta en la especificación de origen como el conjunto de permisos requerido para el rol asumido por la empresa socia:

```json
{
"Version": "2012-10-17",
"Statement": [
  {
    "Effect": "Allow",
    "Action": [
      "kms:\*",
      "s3:\*"
    ],
    "Resource": "\*"
  }
]
}
```

### Qué necesitan las empresas socias de Roku

1. **Nombre del bucket del entorno de producción de Roku** para la ingesta directa:

   ```
   ingest-direct1-886239521314
   ```

2. **Prefijo específico de la empresa socia** dentro del bucket, proporcionado por Roku durante la incorporación, siguiendo esta convención:

   **Convención:**

   ```
   ingest/<partner_name>/prod/
   ```

   **Ejemplo de ruta completa del bucket:**

   ```
   ingest-direct1-886239521314/ingest/<partner_name>/prod/
   ```

### Mejores prácticas / Optimización

El bucket de S3 de Roku está ubicado en la región **us-east-1** — se espera que las transferencias entre regiones distintas sean más lentas. Las transferencias pueden optimizarse mediante los ajustes de carga/copia multiparte:

```
aws configure set default.s3.multipart_chunksize 128MB
aws configure set default.s3.max_concurrent_requests 30
```

### Pruebas

Para validar la configuración, realiza lo siguiente:

1. Prueba cargar un archivo al bucket de S3 de Roku, dentro del prefijo designado para la empresa socia.
2. Prueba copiar un archivo desde el bucket de S3 de la empresa socia hacia el bucket de S3 de Roku, dentro del prefijo designado para la empresa socia.

***

## Glosario

| Término                         | Definición                                                                                                                                                                                           |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Aspera Shares**               | Un método de entrega de Aspera basado en navegador/aplicación de escritorio que utiliza invitaciones de usuario en lugar de autenticación con clave SSH.                                             |
| **Aspera Enterprise/P2P/HSTS**  | Un método de entrega de Aspera autenticado con clave SSH, utilizado normalmente para transferencias más grandes o automatizadas. _(Aquí, HSTS se refiere al "High-Speed Transfer Server" de Aspera)_ |
| **Clave KMS**                   | Clave de AWS Key Management Service, utilizada aquí para cifrar/descifrar contenido en el bucket de entrega de S3 de Roku.                                                                           |
| **ARN del rol de IAM**          | Amazon Resource Name que identifica un rol de IAM de AWS: la identidad que el sistema de la empresa socia asume para realizar la transferencia.                                                      |
| **Carga multiparte**            | Un método de carga en S3 que divide un archivo grande en partes que se cargan en paralelo, mejorando la velocidad y la confiabilidad de la transferencia.                                            |
| **Transferencia entre cuentas** | Una transferencia entre dos cuentas de AWS distintas (la de la empresa socia y la de Roku), que requiere el otorgamiento explícito de permisos en ambos lados.                                       |
