FROM openjdk:11-jdk
COPY "app.jar" .
CMD java -Dspring.profiles.active=${APP_ENVIRONMENT} -jar app.jar
