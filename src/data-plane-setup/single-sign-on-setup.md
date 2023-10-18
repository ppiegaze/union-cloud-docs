# Single Sign On setup

Union Cloud authentication uses OAuth2 with Okta and supports SAML and OIDC-compliant Identity Providers (IdP) to configure Single Sign On (SSO).

To enable SSO you create an app for your preferred IdP and provide the associated secrets to the Union Cloud team.
The team will then complete the process. Here are the steps in more detail:

## Create an app with the Identity Provider

1. Identify and click on your preferred IdP from the available options [here](https://developer.okta.com/docs/guides/identity-providers/).
2. Navigate to the section with the heading **Create an app at the Identify Provider**.
3. Complete all the steps in that section and make a note of the **Client ID** (also referred to as **Application ID**)
4. Where a callback URI needs to be specified, use
`https://signin.hosted.unionai.cloud/oauth2/v1/authorize/callback`
5. The last step in the setup will generate the client secret. Follow the directions below to share these secrets securely with the Union Cloud team.

## Share the Client ID and Secret securely with Union

1. Go to [https://pgptool.org](https://pgptool.org/)
2. Click Encrypt tab
3. Upload the public key provided by Union (see below) under **Receiver's public key**.
Skip the **Signer’s Private Key** section.
4. Enter the secret in plain text.
5. Encrypt the message, download it, and share it with the Union team over Slack.
Also, please include the associated **Client or Application ID**.

The Union Cloud team will complete the remaining steps and notify you.
You will then be able to sign into Union Cloud installation.

## Public key

Here’s the public key referenced in the steps above:

* [**public-key.txt**](../../resources/public-key.txt)
