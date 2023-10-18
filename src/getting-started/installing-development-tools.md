# Installing development tools

## Gather your credentials

After your administrator has onboarded you to Union Cloud, you should have the following at hand:

* Your Union Cloud credentials.
* The credentials to access the AWS or GCP account hosting your Union Cloud instance.
* The URL of your Union Cloud instance. We will refer to this as `<union-cloud-host-url>` below.

## Install Python and Docker

Next, make sure that you have the following installed on your local machine:

* [Python](https://www.python.org/):
Versions 3.8.x - 3.10.x are supported.
Version 3.10.x is used in this guide and is recommended.
* [Conda](https://docs.conda.io/projects/conda/en/stable/):
In this guide, we use the `conda` tool (installed via [Miniconda](https://docs.conda.io/en/latest/miniconda.html)) to manage Python versions and virtual environments.
You can also use other tools such as [`pyenv`](https://github.com/pyenv/pyenv) and [`venv`](https://docs.python.org/3/library/venv.html).
Using some type of Python virtual environment manager is highly recommended.
* [Docker](https://docs.docker.com/get-docker/):
Any [OCI-compatible](https://opencontainers.org/) container engine like [Podman](https://podman.io/), [LXD](https://linuxcontainers.org/lxd/introduction/), or [Containerd](https://containerd.io/) should also work.
Ensure that the associated client daemon is running.

## Install Uctl

Install the Union Cloud command-line tool, `uctl`:

::: tabs

== macOS

To use [Homebrew](https://brew.sh/), do this:

```shell
brew tap unionai/homebrew-tap
brew install uctl
```

To use `curl`, set `BINDIR` to the install location (it defaults to `./bin`) and do this:

```shell
$ curl -sL https://raw.githubusercontent.com/unionai/uctl/main/install.sh | bash
```

To download manually, see the [UCTL releases](https://github.com/unionai/uctl/releases).

== Linux

To use `curl`, set `BINDIR` to the install location (it defaults to `./bin`) and do this:

```shell
$ curl -sL https://raw.githubusercontent.com/unionai/uctl/main/install.sh | bash
```

To download manually, see the [UCTL releases](https://github.com/unionai/uctl/releases).

== Windows

To use `curl`, in a Linux shell (such as [WSL](https://learn.microsoft.com/en-us/windows/wsl/install)), set `BINDIR` to the install location (it defaults to `./bin`) and do this:

```shell
$ curl -sL https://raw.githubusercontent.com/unionai/uctl/main/install.sh | bash
```

To download manually, see the [UCTL releases](https://github.com/unionai/uctl/releases).

:::

::: info Note

`uctl`is an enhanced version of `flytectl`, [the Flyte command-line tool](https://docs.flyte.org/projects/flytectl/en/latest/).
It adds Union Cloud-specific functionality, letting you manage not only Flyte entities (projects, domains, workflows, tasks, and launch plans) but also Union Cloud-specific entities like users, roles, and Union Cloud configurations.

:::

## Set up a Python virtual environment

Create a Python virtual environment for our `wine-classification` example and switch to it:

```shell
[~]:base
$ conda create -n wine-classification python=3.10 -y

[~]:base
$ conda activate wine-classification

[~]:wine-classification
$
```

::: info Note

We use[`conda`](https://docs.conda.io/en/latest/miniconda.html) to manage the Python version and virtual environments.
You are free to use other tools such as[`pyenv`](https://github.com/pyenv) and[`venv`](https://docs.python.org/3/library/venv.html).

:::

## Install Flytekit

Finally, install [`flytekit`](https://pypi.org/project/flytekit/), Flyte’s Python SDK, within the virtual environment that you just set up:

```shell
[~]:wine-classification
$ pip install -U flytekit
```
