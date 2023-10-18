# CLI Authentication

The command line tools `uctl` or `pyflyte` must authenticate to Union Cloud in order to perform operations on the platform.
The authentication mechanism is configured in the `config.yaml` file used by the command line tool.
There are three authentication mechanisms available: **PKCE**, **DeviceFlow**, and **ClientSecret**.

## PKCE

Proof Key of Code Exchange (PKCE) is the default mechanism.
It is used, for example, in the [getting-started](../getting-started/index) examples.
It opens a browser window allowing the user to login. The authentication flow with this mechanism works like this:

* The user invokes `uctl` or `pyflyte` to perform an operation in Union Cloud.
* A browser window opens allowing the user to log in.
* On successful login, the command-line action completes.

Here is an example `config.yaml` that uses PKCE:

```yaml
admin:
  endpoint: https://<YourOrg>.hosted.unionai.cloud
  insecure: false
  authType: Pkce
logger:
  show-source: true
  level: 0
union:
  connection:
    host: https://<YourOrg>.hosted.unionai.cloud
    insecure: false
  auth:
    type: Pkce
```

## DeviceFlow

With DeviceFlow the command line tool returns a URL that the user can then navigate to.
The authentication flow with this mechanism works like this:

* The user invokes `uctl` or `pyflyte` to perform an operation in Union Cloud.
* The command returns a URL.
* The user navigates to that URL and follows the instructions.
* Upon successful login, the command-line action completes.

Here is an example `config.yaml` that uses DeviceFlow:

```yaml
admin:
  endpoint: https://<YourOrg>.hosted.unionai.cloud
  insecure: false
  <a data-footnote-ref href="#user-content-fn-1">authType: DeviceFlow</a>
logger:
  show-source: true
  level: 0
union:
  connection:
    host: https://<YourOrg>.hosted.unionai.cloud
    insecure: false
  auth:
    type: DeviceFlow
```

## ClientSecret

This is the headless option. It is useful for CIs and other bots.

The authentication flow with ClientSecret works like this:

* The user (or machine bot) invokes `uctl` or `pyflyte` to perform an operation in Union Cloud.
* Internally the tool authenticates to using the configured secret.
* Upon successful authentication, the command-line action completes.

With this mechanism, you need to first set up an application.
Create the app as described in [Applications](applications), assigning it a `clientId` and recording the `AppSecret` that is returned.

You then store the `AppSecret` in either a local file or an environment variable and set up your `config.yaml` to reference it.

Here is an example `config.yaml` that uses ClientSecret with a file:

```yaml
admin:
  endpoint: https://<YourOrg>.hosted.unionai.cloud
  insecure: false
  authType: ClientSecret
  clientId: <YourAppId>
  clientSecretLocation: /path/to/secret.txt
logger:
  show-source: true
  level: 0
union:
  connection:
    host: https://<YourOrg>.hosted.unionai.cloud
    insecure: false
  auth:
    type: ClientSecret
    clientId: <YourAppId>
    clientSecretLocation: /path/to/secret.txt
```

Here is an example that uses ClientSecret with an environment variable:

```yaml
admin:
  endpoint: https://<YourOrg>.hosted.unionai.cloud
  insecure: false
  authType: ClientSecret
  clientId: <YourAppId>
  clientSecretEnvVar: YOUR_APP_SECRET
logger:
  show-source: true
  level: 0
union:
  connection:
    host: https://<YourOrg>.hosted.unionai.cloud
    insecure: false
  auth:
    type: ClientSecret
    clientId: <YourAppId>
    clientSecretEnvVar: YOUR_APP_SECRET
```