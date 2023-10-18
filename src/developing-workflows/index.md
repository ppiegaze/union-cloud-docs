---
prev:
  text: 'Usage'
  link: '/web-console/usage'
next:
  text: 'Task execution context'
  link: '/developing-workflows/task-execution-context'
---

# Developing workflows

Most users of Flyte and Union Cloud are familiar with programming for machine learning and data science.
However, many might not be familiar with features specific to the Flyte platform.
In this section we highlight some of the most important concepts, tools and techniques of Flyte.

Programming in Flyte differs from programming in a purely local machine environment in a number of ways.
To help you understand the fundamentals, in this section we will explore:

* [**The task execution context**](task-execution-context):
In Flyte, each task runs in its own container.
Understanding this context is the first step to understanding how your code will work.
* **Getting data in and out of your tasks**:
[`FlyteFile`](flytefile) is one of the most important classes provided by the Flytekit library.
It is designed to make managing files across task container boundaries as transparent as possible.
