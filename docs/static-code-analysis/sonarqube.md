# SonarQube

## Maven Example

```
mvn clean package
sonar-scanner -Dsonar.projectKey=kwsp-webapp -Dsonar.sources=. -Dsonar.host.url=http://10.168.0.66:9000 -Dsonar.login=b8670e9d500e2c403edc9f550233dd6a3a3e0327 -Dsonar.java.binaries=target/classes -Dsonar.qualitygate.wait=true
```

## Go Example

Start sonar-scanner and push results to server

```
sonar-scanner -Dsonar.projectKey=app-go-web -Dsonar.sources=. -Dsonar.host.url=http://10.168.0.66:9000 -Dsonar.login=33e0b35978bfcc4685ce3d0a87dc6bf04efa9aca
```