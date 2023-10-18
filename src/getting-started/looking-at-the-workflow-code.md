# Looking at the workflow code

## Workflow code

Now let's look at the actual workflow code.
Take a look at the file `workflows/example.py`:

```python
:name: wine-classification/workflows/example.py

import pandas as pd

from sklearn.datasets import load_wine
from sklearn.linear_model import LogisticRegression
from flytekit import task, workflow

@task
def get_data() -> pd.DataFrame:
    """Get the wine dataset."""
    return load_wine(as_frame=True).frame

@task
def process_data(data: pd.DataFrame) -> pd.DataFrame:
    """Simplify the task from a 3-class to a binary classification problem."""
    return data.assign(target=lambda x: x["target"].where(x["target"] == 0, 1))

@task
def train_model(data: pd.DataFrame, hyperparameters: dict) -> LogisticRegression:
    """Train a model on the wine dataset."""
    features = data.drop("target", axis="columns")
    target = data["target"]
    return LogisticRegression(max_iter=3000, **hyperparameters).fit(features, target)

@workflow
def training_workflow(hyperparameters: dict = {"C": 0.1}) -> LogisticRegression:
    """Put all of the steps together into a single workflow."""
    data = get_data()
    processed_data = process_data(data=data)
    return train_model(
        data=processed_data,
        hyperparameters=hyperparameters,
    )

if __name__ == "__main__":
    training_workflow(hyperparameters={"C": 0.1})
```

This example shows a few key features of Flyte workflow code:

### @task

The `@task` decorator indicates functions that define **tasks**:

* A task is a Python function that takes some inputs and produces an output.
* When deployed to a Kubernetes cluster (see below) each task runs in its own Kubernetes pod.
* Tasks are assembled into workflows.

### @workflow

The `@workflow` decorator indicates a function that defines a **workflow**:

* A workflow appears to be a Python function but is actually a [DSL](https://en.wikipedia.org/wiki/Domain-specific_language) that only supports a subset of Python syntax and semantics.
* When deployed to Union Cloud the workflow function is "compiled" to construct the directed acyclic graph of tasks, defining the order of execution of task pods and the data flow dependencies between them.

::: info Details on `@task` and `@workflow` syntax

* The `@task` and `@workflow` decorators are transparent to Python provided that they are used only on _functions at the top-level scope of the module_. You can invoke tasks and workflows as regular Python methods and even import and use them in other Python modules or scripts.
* Task and workflow function signatures must be _type-annotated with Python type hints_.
* Task and workflow functions must be _invoked with keyword arguments_.

:::
