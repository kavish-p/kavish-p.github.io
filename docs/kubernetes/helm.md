# Helm
## Artifact Hub
https://artifacthub.io/packages/search?kind=0

## Add Helm Repository
```
helm repo add bitnami https://charts.bitnami.com/bitnami
```

## Search Repo
```
helm search repo bitnami
```

## Obtain Information about Chart
```
helm show chart bitnami/mysql
helm show all bitnami/mysql
```

## Install Chart
```
helm repo update              # Make sure we get the latest list of charts
helm install bitnami/mysql --generate-name
```
Whenever you install a chart, a new release is created. So one chart can be installed multiple times into the same cluster. And each can be independently managed and upgraded.

## List Deployed Releases
```
helm list
```

## Uninstall a Release
```
helm uninstall mysql-1612624192
```
This will uninstall mysql-1612624192 from Kubernetes, which will remove all resources associated with the release as well as the release history.
If the flag --keep-history is provided, release history will be kept. You will be able to request information about that release:

```
helm status mysql-1612624192
```
Because Helm tracks your releases even after you've uninstalled them, you can audit a cluster's history, and even undelete a release (with `helm rollback`).

## Create Helm Chart
```
helm create kavishapp
```
Below is an example of the file structure expected by Helm
```
wordpress/
  Chart.yaml          # A YAML file containing information about the chart
  LICENSE             # OPTIONAL: A plain text file containing the license for the chart
  README.md           # OPTIONAL: A human-readable README file
  values.yaml         # The default configuration values for this chart
  values.schema.json  # OPTIONAL: A JSON Schema for imposing a structure on the values.yaml file
  charts/             # A directory containing any charts upon which this chart depends.
  crds/               # Custom Resource Definitions
  templates/          # A directory of templates that, when combined with values,
                      # will generate valid Kubernetes manifest files.
  templates/NOTES.txt # OPTIONAL: A plain text file containing short usage notes
```

## Example Template
Regular Manifest
```
apiVersion: apps/v1
kind: Deployment
metadata:
  name: zaqar
  namespace: default
  labels:
    app: zaqar
    version: v1.0.0
    env: production
spec:
  replicas: 1
  selector:
    matchLabels:
      app: zaqar
      env: production
  template:
    metadata:
      labels:
        app: zaqar
        version: v1.0.0
        env: production
    spec:
      containers:
        - name: zaqar
          image: "khaosdoctor/zaqar:v1.0.0"
          imagePullPolicy: IfNotPresent
          env:
            - name: SENDGRID_APIKEY
              value: "MY_SECRET_KEY"
            - name: DEFAULT_FROM_ADDRESS
              value: "my@email.com"
            - name: DEFAULT_FROM_NAME
              value: "Lucas Santos"
          ports:
            - name: http
              containerPort: 3000
              protocol: TCP
          resources:
            requests:
              cpu: 100m
              memory: 128Mi
            limits:
              cpu: 250m
              memory: 256Mi
```

Helm Template
```
apiVersion: apps/v1
kind: Deployment
metadata:
  name: zaqar
  namespace: default
  labels:
    app: zaqar
    version: #!VERSION!#
    env: #!ENV!#
spec:
  replicas: 1
  selector:
    matchLabels:
      app: zaqar
      env: #!ENV!#
  template:
    metadata:
      labels:
        app: zaqar
        version: #!VERSION!#
        env: #!ENV!#
    spec:
      containers:
        - name: zaqar
          image: "khaosdoctor/zaqar:#!VERSION!#"
          imagePullPolicy: IfNotPresent
          env:
            - name: SENDGRID_APIKEY
              value: "#!SENDGRID_KEY!#"
            - name: DEFAULT_FROM_ADDRESS
              value: "#!FROM_ADDR!#"
            - name: DEFAULT_FROM_NAME
              value: "#!FROM_NAME!#"
          ports:
            - name: http
              containerPort: 3000
              protocol: TCP
          resources:
            requests:
              cpu: 100m
              memory: 128Mi
            limits:
              cpu: 250m
              memory: 256Mi
```