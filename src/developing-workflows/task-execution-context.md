# Task execution context

Each task in a workflow is executed in its own container.
The image used to instantiate that container is the one that you built from the `Dockerfile` in your project, pushed to a container registry, and then specified when you registered your workflow.

**The version of Python used, all dependencies, and any other static resources you want must be specified in the Dockerfile or, at least, included in the workflows directory of your project.**

## Static resources

Since you control the contents of the runtime environment of each task, this means that any static resources that your tasks need can simply be included in the container image.
This can be useful when iterating during development.
For example, if you are working on code that processes images, you can do an initial test by just including a sample image in the container, reading it in locally (that is, local to your running task, i.e., inside the container) and processing it.

## Fast vs standard registration

You should keep in mind that the mode of registration affects what ends up in the container image:

* If you perform a _standard registration_ (that is, one using `pyflyte package` and then `uctl register`) the contents of the task container image at runtime are immutable and fixed at the time that the container is built.
This means that you must, as part of your container build process, copy in your workflow code and any other static resources required.
* If you perform a _fast registration_ (that is, on using `pyflyte register`) the contents of the task container are:
  * Whatever you defined at build time with your `Dockerfile` and, in addition,
  * An overlay of the contents of the workflow directory specified in the `pyflyte register` command.
  The contents of the specified directory are copied into the root directory of the container.
