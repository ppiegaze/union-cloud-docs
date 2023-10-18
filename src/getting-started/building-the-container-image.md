# Building the container image

## The Dockerfile

Below we will deploy the image from that registry to Union Cloud, but first let's take a look at the `Dockerfile` that builds the image:

```docker
FROM python:3.10-slim-buster

WORKDIR /root
ENV VENV /opt/venv
ENV LANG C.UTF-8
ENV LC_ALL C.UTF-8
ENV PYTHONPATH /root
ENV GIT_PYTHON_REFRESH quiet

RUN apt-get update && apt-get install -y build-essential
RUN pip3 install awscli

ENV VENV /opt/venv

# Virtual environment
RUN python3 -m venv ${VENV}
ENV PATH="${VENV}/bin:$PATH"

# Install Python dependencies
COPY ./requirements.txt /root
RUN pip install -r /root/requirements.txt

# Copy the actual code
COPY . /root
RUN pip install -e /root

# This tag is supplied by the build script and will be used to determine the version
# when registering tasks, workflows, and launch plans
ARG tag
ENV FLYTE_INTERNAL_IMAGE $tag
```

Notice the following:

* Installing the dependencies (see `# Install Python dependencies`, above).
* Copying over the code (see `# Copy the actual code`, above).

These are the key steps that set up the image to be able to run your workflow.

## Build and push the container image

The next step is to build the container image for your project and push it to a container registry.
From there Union Cloud will pull the image and use it to create the task containers in your data plane when you register and run your workflow.

You will need to have the ability to push images to your container registry from your local machine using `docker`or another container management tool (we will use `docker` in these examples).

Additionally, your Union Cloud data plane will need to be able to pull images from your container registry.

If you make your images public, Union Cloud will have no trouble pulling them.
If you make them private then you have to ensure that your data plane has sufficient permissions to perform the pull.
Here we provide examples for using **public images in the GitHub Container registry** and for using **private images in AWS ECR**.

### AWS ECR

We assume that you have provisioned an AWS ECR instance.
See [Amazon Elastic Container Registry Documentation](https://docs.aws.amazon.com/ecr/index.html) for details.

Note that, unlike most container registries, AWS ECR requires that you create a repository within the registry corresponding to the image that you wish to push _before_ you push that image.
For this example, it means that you must create a repository in your ECR called `wine-classification`.

Once you have created the `wine-classification` repository on the ECR side, you can get the required commands for creating and pushing an image directly from the ECR web interface by selecting **View push commands**.
The commands below are generalized versions of the commands you will see there.

Log in to the registry:

```shell
[~/wine-classification]:wine-classification
$ aws ecr get-login-password --region <Region> | \
  docker login --username AWS --password-stdin \
  <AwsAccount>.dkr.ecr.<Region>.amazonaws.com
```

Next, build the image:

```shell
[~/wine-classification]:wine-classification
$ docker build \
         --platform linux/amd64 \
         --tag <AwsAccount>.dkr.ecr.<Region>.amazonaws.com/wine-classification:0.0.1 \
         .
```

::: info Ensure the correct architecture

You need to build the docker image for the architecture of your Union Cloud data plane cluster, which is `amd64`.

If, for example, you build a docker image on`arm64` Mac without explicitly specifying the target architecture as`amd64`, it will create an incompatible image.

To ensure the correct architecture, use the option `--platform linux/amd64`, as shown above.

:::

Once the image is built, push it to the registry:

```shell
[~/wine-classification]:wine-classification
$ docker push <AwsAccount>.dkr.ecr.<Region>.amazonaws.com/wine-classification:0.0.1
```

::: info Ensure that the image package is accessible from your data plane

In order to ensure that your Union Cloud data plane can pull your image follow the instructions in _§ Configuring permissions for AWS ECR_.

:::


### GitHub Container registry

We assume that you have a GitHub account with the GitHub Packages feature, which includes the GitHub Container registry.
See [Working with the Container registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry) for directions on how to set up authentication.

First, log in to the registry:

```shell
$ docker login ghcr.io
```

Next, build the image:

```shell
[~/wine-classification]:wine-classification
$ docker build --platform linux/amd64 \
    --tag ghcr.io/<your-gh-org>/wine-classification:0.0.1 \
    .
```

::: info Ensure the correct architecture

You need to build the docker image for the architecture of your Union Cloud data plane cluster, which is `amd64`.

If, for example, you build a docker image on`arm64` Mac without explicitly specifying the target architecture as`amd64`, it will create an incompatible image.

To ensure the correct architecture, use the option `--platform linux/amd64`, as shown above.

:::

Once the image is built, push it to the registry:

```shell
[~/wine-classification]:wine-classification
$ docker push ghcr.io/<your-gh-org>/wine-classification:0.0.1
```

::: info Ensure that the image package is public

In order to ensure that your Union Cloud data plane can pull your image, go to the GitHub Packages, find your image package page, select **Package settings**, then **Change visibility** and change the visibility of the package to `public`.

:::
