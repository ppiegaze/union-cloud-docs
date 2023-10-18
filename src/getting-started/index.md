---
prev:
  text: 'Single Sign On setup'
  link: '/data-plane-setup/single-sign-on-setup'
next:
  text: 'Installing development tools'
  link: '/getting-started/installing-development-tools'
---

# Getting started

::: info Prerequisites

Your administrator should complete [Data plane setup](../data-plane-setup/index) before you move to this section.

**Typographic conventions**

In the examples below, we show commands being invoked within a terminal.
When the context of a command is important we show a terminal prompt that looks like this:

```shell
[current-directory]: current-python-virtual-environment
$ command
```

Your terminal prompt may, of course, look slightly different.

:::

This section walks you through building your first Flyte workflow and deploying it on Union Cloud.

The first part of this tutorial is similar to [Getting Started](https://docs.flyte.org/projects/cookbook/en/latest/index.html) for Flyte, but adapted for Union Cloud.

## Learning more about Flyte

There is a lot to learn about Flyte and we won't be covering all of it in these docs.
The best source for that information is the Flyte open-source project itself:

* [Flyte project homepage](https://flyte.org/)
* [Flyte docs](https://docs.flyte.org/en/latest/)

And here are some pointers to specific sections that you might find helpful:

* [Flyte Fundamentals](https://docs.flyte.org/projects/cookbook/en/latest/getting_started/flyte_fundamentals.html)
* [Core Use Cases](https://docs.flyte.org/projects/cookbook/en/latest/getting_started/core_use_cases.html)
* [User Guide](https://docs.flyte.org/projects/cookbook/en/latest/userguide.html)
* [Tutorials](https://docs.flyte.org/projects/cookbook/en/latest/tutorials.html)
* [Integrations](https://docs.flyte.org/projects/cookbook/en/latest/integrations.html)
* [Concepts](https://docs.flyte.org/en/latest/concepts/basics.html)
* [Flytekit](https://docs.flyte.org/projects/flytekit/en/latest/)

::: info Differences between Flyte and Union Cloud

As you read the Flyte docs keep in mind a few of the differences between Flyte and Union Cloud:

* The command-line tool for Flyte OSS is `flytectl`.
The one for Union Cloud is `uctl`.
They are identical except that `uctl` has a few extra Union Cloud-specific features.
* The default local configuration location for Flyte is `~/.flyte/` while for Union Cloud it is `~/.uctl/`.

:::
