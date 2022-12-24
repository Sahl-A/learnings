### general cluster & nodes info

- cluster info
  `kubectl cluster-info`

- version
  `kubectl version`

- simple diagnoses to know the components of a cluster
  `kubectl get componentstatuses`

- get number of nodes
  `kubectl get nodes`

- describe node
  `kubectl describe nodes NODE_NAME`

- deploy dashboard UI
  `kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.3.1/aio/deploy/recommended.yaml`

- start UI
  `kubectl proxy`

- access dashboard UI
  `http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/`

- dashboard UI docs
  `https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/`

---

### namespaces

- it is like a folder in filesystem.
- use flag `--all-namespaces` to get the thing from all namespaces
- `kubectl -n project1 get pods`
- `kubectl get pods --all-namespaces`

---

### contexts

- If you want to change the default namespace more permanently, you can use a context
- This gets recorded in a kubectl configuration file, usually located at $HOME/.kube/config
- `kubectl config set-context my-context --namespace=mystuff`
- `kubectl config use-context my-context`

---

### view resources (API Objects)

- View list of all resources in current namespace
  `kubectl get <resource-name>`
  `kubectl get pods`

- View a specific resource
  `kubectl get <resource-name> <obj-name>`
  `kubectl get pods my-pod`

- use -o wide, json or yaml for more details
  `kubectl get pods my-pod -o wide`
  `kubectl get pods my-pod -o json`
  `kubectl get pods my-pod -o yaml`

- use flag `--no-headers` to remove headers when piping the output

- use jsonpath query language to select fields in the returned object
  `$ kubectl get pods my-pod -o jsonpath --template={.status.podIP}`

- describe any obj
  `kubectl describe <resource-name> <obj-name>`

---

### Creating, Updating, and Destroying Kubernetes Objects

- create an object
  `kubectl apply -f obj.yaml`

- update an object by modifying the yaml file then
  `kubectl apply -f obj.yaml`

- if you want to know what apply will do without making the changes
  `--dry-run`

- If you feel like making interactive edits instead of editing a local file, you can instead use the edit command, which will download the latest object state and then launch an editor that contains the definition:
  `kubectl edit <resource-name> <obj-name>`

- After you save the file, it will be automatically uploaded back to the Kubernetes cluster.

- Delete an object
  `kubectl delete -f obj.yaml`
  `kubectl delete <resource-name> <obj-name>`

- add the color=red label to a Pod named bar
  `kubectl label pods bar color=red`

- same for annotation

- By default, label and annotate will not let you overwrite an existing label. To do this, you need to add the --overwrite flag.

- If you want to remove a label, you can use the <label-name>- syntax:
  `kubectl label pods bar color-`

---

### debugging

- You can use the following to see the logs for a running container:
  `kubectl logs <pod-name>`

- If you have multiple containers in your Pod, you can choose the container to view using the `-c`flag.

- If you want to continuously stream the logs back to the terminal without exiting, you can add the `-f` (follow) command-line flag.

- interactive shell inside the running container so that you can perform more debugging.
  `kubectl exec -it <pod-name> -- bash`
  `kubectl exec -it <pod-name> -- sh`

- If you don’t have bash or some other terminal available within your container, you can always attach to the running process:
`kubectl attach -it <pod-name>`

- This will attach to the running process. It is similar to kubectl logs but will allow you to send input to the running process, assuming that process is set up to read from standard input.

- You can also copy files to and from a container using the cp command:
`kubectl cp <pod-name>:</path/to/remote/file> </path/to/local/file>`

- This will copy a file from a running container to your local machine. You can also specify directories, or reverse the syntax to copy a file from your local machine back out into the container.

- port forward
`kubectl port-forward <pod-name> 8080:80`

- You can also use the port-forward command with services by specifying services/<service-name> instead of <pod-name>, but note that if you do port-forward to a service, the requests will only ever be forwarded to a single Pod in that service. They will not go through the service load balancer.

---

### Pods

- run a pod
`kubectl apply -f <pod-name>`

- get pod(s)
`kubectl get pods`

- describe pod
`kubectl describe pods <pod-name>`

- delete a pod
`kubectl delete pods/<pod-name>`
`kubectl delete -f YAML-FILE-NAME.yaml`

- port forward
`kubectl port-forward <pod-name> 8080:8080`

- logs
`kubectl logs <pod-name>`

- `-f` will cause you to continuesly stream logs

- The kubectl logs command always tries to get logs from the currently running container. Adding the --previous flag will get logs from a previous instance of the container. This is useful, for example, if your containers are continuously restarting due to a problem at container startup.

- excute commands in the context of the container itself
`kubectl exec <pod-name> -- <command>`
- if container has sh `kubectl exec <pod-name> -- sh`

- copy file from container to filesystem
`$ kubectl cp <pod-name>:<file-in-container-path> <path-to-new-file-in-filesystem>`