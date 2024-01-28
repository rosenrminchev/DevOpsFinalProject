# Complete CI/CD with Terraform, AWS and Kubernetes

## Technologies:
- Terraform
- GitHub Actions
- Docker
- Node.js
- AWS EC2
- AWS S3
- AWS ECR
- Kubernetes (EKS)
- Lens
- Prometheus
- Grafana

## Overview:
This repository contains a comprehensive setup for Continuous Integration and Continuous Deployment (CI/CD) using Terraform and AWS services. The goal is to automate the deployment process of a Node.js application on an AWS EC2 instance while managing infrastructure as code with Terraform. Additionally, it integrates with a Kubernetes cluster (EKS) for container orchestration.

## Tasks:
1. Get AWS Credentials
Before you begin, ensure that you have access credentials from AWS. You'll need an Access Key ID and Secret Access Key to interact with AWS services programmatically.

2. Develop a Simple Node.js App
Create a basic Node.js application. The provided code is a minimal example that sets up a web server using Express.js.

const express = require('express');
const app = express();
const port = 3000;

// Array of facts about Bulgaria
const facts = [
  "Bulgaria is the oldest country in Europe that hasn't changed its name since it was first established.",
  "The Bulgarian army has never lost a single flag in battle.",
  "Bulgaria is known for its natural diversity, with mountains, plains, seas, and rivers.",
  "The Cyrillic alphabet, used in Bulgaria, was developed in the 9th century by two brothers, Saint Cyril and Saint Methodius.",
  "Bulgaria has a rich tradition in folk music and dances.",
  // Add more facts as needed
];

app.get('/', (req, res) => {
  const randomFact = facts[Math.floor(Math.random() * facts.length)];
  res.send(`<h1>Interesting Fact about Bulgaria</h1><p>${randomFact}</p>`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

3. Write Dockerfile for the Application
Create a Dockerfile to containerize your Node.js application. This file specifies how the application should be built and run within a Docker container.

Dockerfile
Copy code
FROM node:14
WORKDIR /user/app
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]

4. Generate SSH Keys for EC2 Instance
Generate SSH keys that will be used to securely connect to your EC2 instance.

5. Create an S3 Bucket for Terraform State
Set up an S3 bucket to store the Terraform state files. This ensures consistent state management across your infrastructure.

6. Write Terraform Scripts
Create Terraform scripts for provisioning an EC2 instance, IAM roles, security groups, EKS cluster, and any other necessary AWS resources. The provided main.tf file is a starting point for your infrastructure.

7. Write CI/CD Pipeline
Configure a CI/CD pipeline using GitHub Actions to automate the deployment process. Below are the key steps within your GitHub Actions workflow:

## Deployment Workflow (Application Deployment)
- Triggered on pushes to the main branch.
- Sets environment variables for AWS and SSH.
- Builds and pushes the Docker image to AWS ECR.
- SSHs into the EC2 instance and deploys the Docker container with the updated image.
## CI/CD Workflow (CI/CD with Terraform)
- Triggered on pushes to the main branch.
- Initializes Terraform, plans, applies infrastructure changes, and sets EC2 instance public IP as an output.

8. Kubernetes (EKS) Integration
An EKS cluster is used for container orchestration. Ensure you have configured the necessary AWS credentials for EKS.

9. Lens Installation
Lens is a Kubernetes IDE that simplifies cluster management. Install Lens using the following command:

## Example installation command, please refer to Lens documentation for the latest version.
This assumes you are using Linux, adjust for your OS.
- wget https://github.com/lensapp/lens/releases/download/v4.0.3/Lens-4.0.3.AppImage -O lens.AppImage
- chmod +x lens.AppImage
- ./lens.AppImage

10. Prometheus and Grafana Installation
Prometheus and Grafana are monitoring and visualization tools. Deploy them to your Kubernetes cluster using Helm:

## Install Helm if not already installed
## Add Prometheus Helm repository
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo update

## Install Prometheus and Grafana
helm install prometheus-stack prometheus-community/kube-prometheus-stack
