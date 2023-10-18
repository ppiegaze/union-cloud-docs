# Union Cloud and Flyte

## Similarities and differences

Union Cloud is based on the open-source [Flyte](http://flyte.org) orchestration system.
It takes Flyte’s Kubernetes-native workflow engine and builds a fully-managed enterprise cloud service around it.

This means that you get all the advantages of Flyte, such as:

* Reusable, immutable tasks and workflows
* Declarative task-level resource provisioning
* GitOps-style versioning and branching
* Strongly-typed interfaces between tasks enabling more reliable code
* Caching, intra-task checkpointing, and spot instance provisioning
* Mass task parallelism ("map tasks")
* Dynamic workflows created at runtime for process flexibility
* Multi-tenancy

And, in addition, Union Cloud adds the following features:

* Deployment and management of all infrastructure
* Fine-grained role-based access control (RBAC)
* Granular task-level resource monitoring
* Single sign-on (SSO)
* SOC-2 Type 2 compliance.

## Moving from Flyte to Union Cloud

Moving your project from a self-hosted Flyte setup to Union Cloud is easy.
All you have to do is change the deployment target of your project.
See [Setting up the project on Union Cloud](getting-started/setting-up-the-project-on-union-cloud).
