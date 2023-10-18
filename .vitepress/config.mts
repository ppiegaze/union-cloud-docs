import { defineConfig } from "vitepress";
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs';

export default defineConfig({
  title: "Union Cloud",
  description: "Union Cloud",
  cleanUrls: true,
  appearance: false,
  srcDir: "./src",
  themeConfig: {
    logo: "/logo.svg",
    search: {
      provider: "local",
    },
    siteTitle: false,
    nav: [],
    sidebar: [
      {
        text: "Introduction",
        link: "/index"
      },
      {
        text: "Union Cloud and Flyte",
        link: "/union-cloud-and-flyte"
      },
      {
        text: "Platform architecture",
        link: "/platform-architecture"
      },
      {
        text: "Data plane setup",
        link: "/data-plane-setup/index",
        collapsed: false,
        items: [
          {
            text: "Data plane setup on AWS",
            link: "/data-plane-setup/data-plane-setup-on-aws",
          },
          {
            text: "Data plane setup on GCP",
            link: "/data-plane-setup/data-plane-setup-on-gcp",
          },
          {
            text: "Single Sign On setup",
            link: "/data-plane-setup/single-sign-on-setup",
          },
        ],
      },
      {
        text: "Getting started",
        link: "/getting-started/index",
        collapsed: false,
        items: [
          {
            text: "Installing development tools",
            link: "/getting-started/installing-development-tools",
          },
          {
            text: "Creating the project",
            link: "/getting-started/creating-the-project",
          },
          {
            text: "Looking at the workflow code",
            link: "/getting-started/looking-at-the-workflow-code",
          },
          {
            text: "Running in a local Python environment",
            link: "/getting-started/running-in-a-local-python-environment",
          },
          {
            text: "Setting up the project on Union Cloud",
            link: "/getting-started/setting-up-the-project-on-union-cloud",
          },
          {
            text: "Building the container image",
            link: "/getting-started/building-the-container-image",
          },
          {
            text: "Deploying the project on Union Cloud",
            link: "/getting-started/deploying-the-project-on-union-cloud",
          },
          {
            text: "Registering workflows",
            link: "/getting-started/registering-workflows",
          },
          {
            text: "Setting up CI/CD deployment",
            link: "/getting-started/setting-up-ci-cd-deployment",
          },
        ],
      },
      {
        text: "Web console",
        link: "/web-console/index",
        collapsed: false,
        items: [
          {
            text: "Execution list",
            link: "/web-console/execution-list"
          },
          {
            text: "Execution view",
            link: "/web-console/execution-view"
          },
          {
            text: "Logging",
            link: "/web-console/logging"
          },
          {
            text: "Task-level monitoring",
            link: "/web-console/task-level-monitoring",
          },
          {
            text: "Workflow list",
            link: "/web-console/workflow-list"
          },
          {
            text: "Workflow view",
            link: "/web-console/workflow-view"
          },
          {
            text: "Launching workflows and tasks",
            link: "/web-console/launching-workflows-and-tasks",
          },
          {
            text: "Task list",
            link: "/web-console/task-list"
          },
          {
            text: "Task view",
            link: "/web-console/task-view"
          },
          {
            text: "Launch plan list",
            link: "/web-console/launch-plan-list"
          },
          {
            text: "Launch plan view",
            link: "/web-console/launch-plan-view"
          },
          {
            text: "Usage",
            link: "/web-console/usage"
          },
        ],
      },
      {
        text: "Developing workflows",
        link: "/developing-workflows/index",
        collapsed: false,
        items: [
          {
            text: "Heterogeneous tasks",
            link: "/developing-workflows/heterogeneous-tasks",
          },
          {
            text: "Task execution context",
            link: "/developing-workflows/task-execution-context",
          },
          {
            text: "Customizing task resources",
            link: "/developing-workflows/customizing-task-resources",
          },
          {
            text: "FlyteFile",
            link: "/developing-workflows/flytefile"
          },
          {
            text: "Caching",
            link: "/developing-workflows/caching"
          },
        ],
      },
      {
        text: "Administration",
        link: "/administration/index",
        collapsed: false,
        items: [
          {
            text: "User management",
            link: "/administration/user-management"
          },
          {
            text: "Applications",
            link: "/administration/applications"
          },
          {
            text: "CLI Authentication",
            link: "/administration/cli-authentication",
          },
        ],
      },
      {
        text: "Integrations",
        link: "/integrations/index",
        collapsed: false,
        items: [
          {
            text: "Enabling AWS resources",
            link: "/integrations/enabling-aws-resources/index",
            collapsed: false,
                items: [
              {
                text: "Enabling AWS S3",
                link: "/integrations/enabling-aws-resources/enabling-aws-s3",
              },
              {
                text: "Enabling AWS Secrets Manager",
                link: "/integrations/enabling-aws-resources/enabling-aws-secrets-manager",
              },
              {
                text: "Enabling AWS ECR",
                link: "/integrations/enabling-aws-resources/enabling-aws-ecr",
              },
            ],
          },
          {
            text: "Enabling GCP resources",
            link: "/integrations/enabling-gcp-resources/index",
            collapsed: false,
                items: [
              {
                text: "Enabling Google Cloud Storage",
                link: "/integrations/enabling-gcp-resources/enabling-google-cloud-storage",
              },
              {
                text: "Enabling Google Secret Manager",
                link: "/integrations/enabling-gcp-resources/enabling-google-secret-manager",
              },
              {
                text: "Enabling Google Artifact Registry",
                link: "/integrations/enabling-gcp-resources/enabling-google-artifact-registry",
              },
              {
                text: "Enabling BigQuery",
                link: "/integrations/enabling-gcp-resources/enabling-bigquery",
              },
            ],
          },
          {
            text: "Plugins",
            link: "/integrations/plugins"
          },
        ],
      },
      {
        text: "Concepts",
        link: "/concepts"
      },
      {
        text: "FAQ",
        link: "/faq"
      },
      {
        text: "Release Notes",
        link: "/release-notes"
      },
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/flyteorg/flyte"
      },
      {
        icon: "twitter",
        link: "https://twitter.com/union_ai"
      },
    ],
  },
  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)
    }
  }
});
