#!/bin/bash

mvn clean install

yes | cp target/*.jar app.jar

docker build -t omdb-app:1.0

docker run -p 8080:8080 omdb-app:1.0