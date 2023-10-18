# Glossary

* [Tasks](https://docs.flyte.org/en/latest/concepts/tasks.html#divedeep-tasks):
A **task** is an independent unit of processing within the Union Cloud system.
It performs the actual computational work in the system.
Tasks are implemented as containers running in your data plane.
Tasks are a type of node.
* [Workflows](https://docs.flyte.org/en/latest/concepts/workflows.html#divedeep-workflows):
A **workflow** is as directed acyclic graphs (DAGs) composed of one or more nodes (tasks or other workflows).
Workflows are themselves a type of node.
* [Nodes](https://docs.flyte.org/en/latest/concepts/nodes.html#divedeep-nodes):
A **node** is either a task or a workflow.
Since a node can be a workflow, this means that workflows can consist of tasks or sub-workflows.
* [Launch Plans](https://docs.flyte.org/en/latest/concepts/launchplans.html#divedeep-launchplans):
**Launch Plans** provide a mechanism to specialize input parameters for workflows associated with different schedules.
* [Executions](https://docs.flyte.org/en/latest/concepts/executions.html):
**Executions** are instances of workflows or tasks created in the system as a result of a user-requested execution or a scheduled execution.
* [Scheduling](https://docs.flyte.org/en/latest/concepts/schedules.html#concepts-schedules):
 **Scheduling** is critical to data and ML jobs.
 Union Cloud provides a native Cron-style scheduler.
* [Registration](https://docs.flyte.org/en/latest/concepts/registration.html#divedeep-registration):
**Registration** is the process of uploading a workflow and its task definitions to the Union Cloud.
Registration creates an inventory of available tasks, workflows, and launch plans, declared per project and domain.
