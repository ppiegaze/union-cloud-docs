# Enabling Google Cloud Storage

For Union Cloud customers whose data plane is in GCP, we walk through setting up access to your own Google Cloud Storage bucket.

::: info Google Cloud Storage in the Union Cloud environment

Your data plane is set up with a Kubernetes cluster and other resources.
Among these are a number of Google Cloud Storage (GCS) buckets used internally by the Union Cloud operator running in the cluster (see [Platform architecture](../../platform-architecture)) to store things like workflow metadata.

**These are not the GCS buckets we are talking about in this section.**

**We are discussing the case where you have **_**your own GCS bucket**_** that you set up to store input and output data used by your workflows.**

:::

## Grant `<UserFlyteGSA>` access to the bucket

To enable access to a GCS bucket you have to add the `<UserFlyteGSA>` Google Service Account as a principal to that bucket and assign it a role that includes the permissions that you want your code to have.

* Find the actual name and email of the `<UserFLyteGSA>` in your Union Cloud data plane GCP project (See [Find the actual name of `<UserFlyteGSA>`](index#find-the-actual-name-of-userflytegsa))
* Go to **Cloud Storage > Buckets** and select the bucket to which you want to grant access.
* In the **Bucket details** view select the **Permissions** tab and then select **GRANT ACCESS**:

![](../../../images/bucket-details.png)

* In the **Grant access** panel:
  * Under **Add principals**, paste the actual name (in email form) of the `<UserFlyteGSA>` into the **New principals** field.
  * Under **Assign roles** add as many roles as you need.
  In the example below we add the roles enabling reading and writing: **Storage Object Viewer** and **Storage Object Creator**.

![](../../../images/grant-access-to-bucket.png)

* Click **SAVE**.

Your bucket should now be **globally accessible** to task code in all Flyte projects and domains in your Union Cloud organization.

::: info Domain-scoped permissions are not self-service

If you want to assign permissions in a more fine-grained way, per project and/or domain, you need to contact the Union Cloud team.
See [Domain-scoped access](index#domain-scoped-access).

:::
