# Launching workflows and tasks

## Launching a workflow

From the [individual workflow view](workflow-view) (accessed, for example, by selecting a workflow in the [**Workflows** list](workflow-list)) you can select **Launch Workflow** in the top right:

![](../../images/launching-a-workflow.png)

This opens the **Create New Execution** dialog for workflows:

![](../../images/create-new-execution.png)

Here you can:

* Select the **Workflow Version** to launch.
* Select the **Launch Plan** to be used.
* Enter any Inputs that the workflow may require.

Selecting **Advanced options** expands the dialog:

![](../../images/advanced-options-1.png)

![](../../images/advanced-options-2.png)

* **IAM Role:** If your task code needs an IAM role that you have configured in your cloud environment, and you want to specify it specifically for this execution (as opposed to for all executions of a workflow or globally for this project) then add it here.
* **Kubernetes Service Account**: If your workflow code needs to access a service that you have configured in your cloud environment, and you want to specify that account specifically for this execution (as opposed to for all executions of this workflow or globally for this project) then add the name of that account here.
* **Labels**: Open the drop-down arrow to add labels.
* **Annotations**: Open the dropdown arrow to add annotations.
* **Disable all notifications**: A checkbox.
* **Raw output data config**: By default, workflow output will be written to the built-in metadata storage.
Alternatively, you can specify a custom location for output at the organization, project-domain, or individual execution levels.
This field is for specifying this setting at the execution level.
If this field is filled in it overrides any settings at higher levels.
The parameter is expected to be a URL to a writable resource (for example, `http://s3.amazonaws.com/my-bucket/`).
* **Max parallelism**: The maximum number of parallel executions.
* **Override interruptible flag**: A three-value setting:
  * **Interruptible (disabled)**: This execution will not be interruptible, regardless of the workflow-level setting.
  * **Interruptible (no override)**: The interruptible status of this execution will be determined by the workflow-level setting.
  * **Interruptible (enabled)**: This execution will be interruptible, regardless of the workflow-level setting
* **Caching**: If **Overwrite cached outputs** is enabled, then Flyte will ignore all previously computed and stored outputs for this single execution and run all calculations again, overwriting any cached data after a successful execution.

Finally, select **Launch** to launch the execution. This will take you to the [Execution view](execution-view).

## Launching a task

From the [individual task view](task-view) (accessed, for example, by selecting a task in the [**Tasks** list](task-list)) you can select **Launch Task** in the top right:

![](../../images/launching-a-task.png)

This opens the **Create New Execution** dialog for tasks:

![](../../images/create-new-execution-task-1.png)

![](../../images/create-new-execution-task-2.png)

The settings are similar to those for workflows, with a few missing:

* **Task Version**: Select which version of the task to launch.
* **IAM Role:** If your task code needs an IAM role that you have configured in your cloud environment, and you want to specify it specifically for this execution (as opposed to for all executions of a workflow or globally for this project) then add it here.
* **Kubernetes Service Account**: If your workflow code needs to access a service that you have configured in your cloud environment, and you want to specify that account specifically for this execution (as opposed to for all executions of a workflow or globally for this project) then add the name of that account here.
* **Inputs**: Enter any parameters that the task may require.
* **Override interruptible flag**: A three-value setting:
  * **Interruptible (disabled)**: This execution will not be interruptible, regardless of the workflow-level setting.
  * **Interruptible (no override)**: The interruptible status of this execution will be determined by the workflow-level setting.
  * **Interruptible (enabled)**: This execution will be interruptible, regardless of the workflow-level setting
* **Caching**: If **Overwrite cached outputs** is enabled, then Flyte will ignore all previously computed and stored outputs for this single execution and run all calculations again, overwriting any cached data after a successful execution.

Finally, select **Launch** to launch the execution. This will take you to the [Execution view](execution-view).
