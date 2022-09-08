FROM openjdk:latest
ADD target/appointment-service-0.0.1-SNAPSHOT.jar /tmp
WORKDIR /tmp
EXPOSE 9006
ENTRYPOINT ["java", "-jar", "appointment-service-0.0.1-SNAPSHOT.jar"]