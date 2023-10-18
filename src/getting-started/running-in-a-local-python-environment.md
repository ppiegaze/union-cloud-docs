# Running in a local Python environment

To quickly try out the code, you can run it in your local Python environment using `pyflyte run`:

```shell
[~/wine-classification]:wine-classification
$ pyflyte run workflows/example.py \
              training_workflow \
              --hyperparameters '{"C": 0.1}'
```

Here you are invoking `pyflyte run` and passing the name of the Python file and the name of the workflow within that file that you want to run.
In addition, you are passing the named parameter `hyperparameters` and its value.

You should see the following output:

```shell
LogisticRegression(C=0.1, max_iter=3000)
```

This output above tells you that your workflow was executed successfully, but little else.
To see actual results, we will need to run the workflow in a local Kubernetes cluster (see below).

## Passing parameters

`pyflyte run` enables you to execute a specific workflow using the syntax:

```shell
pyflyte run <path/to/script.py> <workflow_or_task_function_name>
```

Keyword arguments can be supplied to `pyflyte run` by passing them in like this:

```shell
--<keyword> <value>
```

For example, if file `foo.py` has a workflow `bar` with a named parameter `baz` , you would invoke it like this:

```shell
pyflyte run foo.py bar --baz 'qux'
```

Here the the value `qux` is passed for the parameter `baz`.

With `snake_case` argument names, you have to convert them to `kebab-case`. For example,

```shell
pyflyte run foo.py bar --baz-luhrmann 'qux'
```

would pass the value `qux` for the parameter `baz_luhrmann`.

## Why `pyflyte run` rather than `python`?

Notice that `example.py` has a `main` guard at the end of the script.

```python
if __name__ == "__main__":
    training_workflow(hyperparameters={"C": 0.1})
```

This lets you run it with `python example.py`, though you have to hard code your arguments.
It becomes even more verbose if you want to pass in arguments:

```python
if __name__ == "__main__":
    import json
    from argparse import ArgumentParser

    parser = ArgumentParser()
    parser.add_argument("--hyperparameters", type=json.loads)
    ...  # add the other options

    args = parser.parse_args()
    training_workflow(hyperparameters=args.hyperparameters)Py

```

`pyflyte run` lets you dispense with this verbosity and run the workflow with the desired arguments conveniently.
