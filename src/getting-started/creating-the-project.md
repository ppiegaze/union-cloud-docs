# Creating the project

## Wine classification example

To demonstrate the essential elements of a Flyte project we will start with a simple model training workflow called `wine-classification`.
It consists of three steps:

1. Get the classic [wine dataset](https://scikit-learn.org/stable/datasets/toy_dataset.html#wine-recognition-dataset) using [scikit-learn](https://scikit-learn.org/stable/).
2. Process the data that simplifies the 3-class prediction problem into a binary classification problem by consolidating class labels `1` and `2` into a single class.
3. Train a `LogisticRegression` model to learn a binary classifier.

## Create the project using pyflyte init

We will use the `pyflyte` (the CLI tool that ships with `flytekit`) to quickly initialize the project, from a template.
The `wine-classification` example is among the installable examples published in the GitHub repository [`flyteorg/flytekit-python-template`](https://github.com/flyteorg/flytekit-python-template).

Install the example, and `cd` into it:

```shell
[~]:wine-classification
$ pyflyte init --template wine-classification wine-classification

[~]:wine-classification
$ cd wine-classification

[~/wine-classification]:wine-classification
$
```

### Project Structure

If you examine the `wine-classification` directory you’ll see the following file structure:

```shell
[~/wine-classification]:wine-classification
$ tree
.
├── Dockerfile
├── LICENSE
├── README.md
├── requirements.txt
└── workflows
    ├── __init__.py
    └── example.py
```

::: info Note

You can create your own conventions and file structure for your Flyte projects.
The `pyflyte init` command just provides a good starting point.

:::

## Install Python dependencies

The Python dependencies that you will need for your workflow code are listed in the `requirements.txt` file.
For this example we will need the following:

```shell
flytekit>=1.4.2
pandas==1.5.3
scikit-learn==1.2.2
```

Install the dependencies:

```shell
[~/wine-classification]:wine-classification
$ pip install -r requirements.txt
```

