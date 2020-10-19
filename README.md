# Newscrew Interview Coding Assignment

The following repo is for Newscred Coding Assignment, which was completed on 10/19/2020

## Pre-requisties

* Docker
* Java 11
* Node >=10.X.X

## Launching App

The application can be launched by running the following commands

```
git clone git@github.com:mohsiur/newscred-interview-omdb.git
chmod +x build.sh
./build.sh
```

If Docker is not installed you can run the following as well

```
mvn clean install
mvn spring-boot:run
```

In another Terminal Run the following command
```
npm install
yarn start
```

On your browser the app can be run in `localhost:3000`

** NOTE: BOTH SPRING BOOT AND FRONTEND APP NEEDS TO RUN AT THE SAME TIME **

## Approach

My approach to building a movie listing app was to initially figure out what the MvP could be. I had come to the conclusion that the MVP for a user should be

* See a list of movies given a title
* See a movies info given an ID
* Recent movies seen shows in Profile
* Can add Movies to favourite lists
* A Profile page which shows favorites and recent movies
 
With prior experience of SpringBoot, I decided to choose that as my framework for calling the API.

## How I would implement remaining tasks

* Due to lack of knowledge on authentication in React I was not able to do a user sign in at the start.
* Notification Listener was the same due to lack of knowledge on React/Front end technologies.