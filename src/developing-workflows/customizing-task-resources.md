# Customizing task resources

When defining a task function, you can specify resource requirements for the pod that runs the task.
Union Cloud will take this into account to ensure that the task pod is scheduled to run on a Kubernetes node that meets the specified resource profile.

Resources are specified in the `@task` decorator. Here is an example:

```python
@task(
    requests=Resources(mem="120Gi", cpu="44", gpu="8", storage="100Gi", ephemeral_storage="100Gi"),
    limits=Resources(mem="200Gi", cpu="100", gpu="12", storage="200Gi", ephemeral_storage="200Gi")
)
def my_task()
    ...
```

As you can see tasks have two separate resource-related settings:

* `requests`
* `limits`

Each of these takes a [`Resource` object](https://docs.flyte.org/projects/flytekit/en/latest/generated/flytekit.Resources.html#flytekit-resources) which itself has five possible attributes:

* `cpu`: Number of CPU cores. This can be fractional.
* `gpu`: Number of GPU cores. This can be fractional.
* `mem`: Main memory (in `Mi`, `Gi`, etc.).
* `storage`: Storage (in `Mi`,  `Gi` etc.).
* `ephemeral_storage`: Ephemeral storage (in `Mi`,  `Gi` etc.).

The `requests` setting tells the system that the task requires _at least_ the resources specified and therefore the pod running this task should be scheduled only on a node that meets or exceeds the resource profile specified.

The `limits` setting serves as a hard upper bound on the resource profile of nodes to be scheduled to run the task.
The task will not be scheduled on a node that exceeds the resource profile specified (in any of the specified attributes).

::: info Tasks can only rely on resources if they have been explicitly requested

If you know that a task requires significant resources, be sure to specify these in the decorator.
A task can only rely on a given level of a resource if it has been explicitly requested in the task decorator, otherwise, the system cannot guarantee that the task will be allocated sufficient resources and the task might fail.

:::

See also [Customizing Task Resources](https://docs.flyte.org/projects/cookbook/en/stable/auto_examples/deployment/customizing_resources.html) in the Flyte OSS docs.

## The `with_overrides` method

When resource `requests` or `limits` are specified in the `@task` decorator, they apply every time that a task is invoked from a workflow.
In some cases, you may wish to change the resources specified from one invocation to another.
To do that, use the [`with_overrides` method](https://docs.flyte.org/projects/cookbook/en/latest/auto_examples/deployment/customizing_resources.html#using-with-overrides) of the task function.
For example:

```python
@task
def my_task(ff: FlyteFile):
    ...

@workflow
def my_workflow():
    my_task(ff=smallFile)
    my_task(ff=bigFile).withoverrides(requests=Resources(mem="120Gi", cpu="10"))
```
