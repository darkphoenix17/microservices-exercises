# Overview
This is a very simple, bare-bones NodeJS project created for you to use with Docker.

# Local Setup
* Install dependencies: `npm install`
* Run server: `node server.js`

# Container Setup
* Build image: `docker build .`
* Run container with image: `docker run {image_id}` where `image_id` can be retrieved by running `docker images` and found under the column `IMAGE ID`

# Container teardown
* Remove container: `docker kill {container_id}` where `container_id` can be retrieved by running `docker ps` and found under the column `CONTAINER ID`

# Changed made
* `kubecli` installed and configured for my corresponding IAM role which i am using.


# Commands ran
* Install `kubecli` and see the following [link](https://docs.aws.amazon.com/eks/latest/userguide/create-kubeconfig.html) for configuration.
* To config kubectl for the cluster created on AWS: `aws eks --region <region>(eg.south-ap-1) update-kubeconfig --name <cluster_name_on_AWS>`
    This command will create a config file in the `~/.kube/` directory
* To apply the development and service configuration for the cluster: `kubectl apply -f <file_name>.yaml`
* Check pods: `kubectl get pods`
* to check for services running: `kubectl describe services`
* To see cluster information: `kubectl cluster-info`