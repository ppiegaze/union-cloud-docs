# Deploying the project on Union Cloud

## Deploying your project

Having built and pushed your image, you are now ready to deploy your project to Union Cloud.
The process of deploying is called registration.
The phrase "register your workflow" means the same things as "deploy your project".

For a full overview of the various ways that workflows can be deployed and run with Flyte and Union Cloud see [Registering workflows](registering-workflows).

Here we will look at the two main techniques for deploying and running your workflow on your Union Cloud data plane.

### Fast registration

Fast registration is used for quick prototyping:

```shell
$ pyflyte register workflows \
          --project wine-classification \
          --image <YourRegistryUrl>/wine-classification:0.0.1
```

This command does the following:

* Pulls the image `<YourRegistryUrl>/wine-classification:0.0.1` to Union Cloud
* Overlays the Python code in your `workflows` directory onto that image.
* Sets up the workflow DAG and its constituent task containers.
* Registers the workflow in the `dev` domain of your `wine-classification` project in Union Cloud (which, recall, you have already created with `uctl`).

At this point, you can run the workflow from the Union Cloud interface.

### Production registration

To register for production, first package your workflow with `pyflyte package`:

```shell
$ pyflyte --pkgs workflows \
          package
          --image <YourRegistryUrl>/wine-classification:0.0.1
```

This command does the following:

* Pulls the image `<YourRegistryUrl>/wine-classification:0.0.1` to your local machine.
* Overlays the Python code in your `workflows` directory onto that image.
* Packages it up into an archive `flyte-package.tgz`

You then register it with `uctl`:

```shell
$ uctl register files \
       --project wine-classification \
       --domain development \
       --archive flyte-package.tgz \
       --version 1.0
```

* Pushes the archive file to Union Cloud.
* Sets up the workflow DAG and its constituent task containers.
* Registers the workflow in the `dev` domain of your `wine-classification` project in Union Cloud (which, recall, you have already created with `uctl`).

### Difference between fast and production registration

Fast registration only sends the Python code to Union Cloud where it is dynamically overlaid onto the container image pulled from the registry.
In contrast, with production registration, you construct the final container image on your local machine and then send the whole thing up to Union Cloud for deployment.
The former is quicker while the latter preserves the immutability of the image.

::: info A common error: An inaccessible image

As we mentioned in [Building the container image](building-the-container-image), when you push your image to a container registry, you must make sure that it is accessible to Union Cloud, either by making the image public or, if it is private, by ensuring that your task code has permission to pull the image.

If the your image is not accessible, you will get an **`Error: ImagePullBackOff`** in the Union Cloud console.

:::
