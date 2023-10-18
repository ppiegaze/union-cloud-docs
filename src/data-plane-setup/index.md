---
prev:
  text: 'Platform architecture'
  link: '/platform-architecture'
next:
  text: 'Data plane setup on AWS'
  link: '/data-plane-setup/data-plane-setup-on-aws'
---
# Data plane setup

Union Cloud uses a hybrid model cloud service: Union Cloud maintains the control plane of the application on its own cloud infrastructure in Amazon Web Services (AWS).
This is where all administration and management functionality resides.

Your data and the actual computation involved in executing your Flyte tasks and workflows takes place on the execution plane, a virtual private cloud that you control but that is administered and managed by the Union Cloud control plane.
To enable the administration and management of your data plane, you grant Union Cloud the required permissions when you set up your data plane.

Union Cloud supports data planes on Amazon WebServices (AWS) or Google Cloud Platform (GCP).
