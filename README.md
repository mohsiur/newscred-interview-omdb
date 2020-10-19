# Newscrew Interview Coding Assignment

The following repo is for Newscred Coding Assignment, which was completed on 10/19/2020

## Pre-requisties

* Docker
* Java 11

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

On your browser the app can be run in `localhost:8080`

Username and Password to login is
```
Username: user
Password: pass
```

The following api's result in the appropriate results.

* List of all movies named `Ocean` can be called by the following `GET` `localhost:8080/search?title=Ocean`
* Specific movie using the id can be called by the following `GET` `http://localhost:8080/movie?id=tt5203824`
* A list of all recent movies viewed at and favorites can be called by the following `GET` `http://localhost:8080/profile`
* You can favourite a movie by calling a `POST` request to the following endpoint `http://localhost:8080/favourite?id=tt5203824`

NOTE: It should be noted, recents will only get populated when `/movie` endpoint is called.

## Approach

My approach to building a movie listing app was to initially figure out what the MvP could be. I had come to the conclusion that the MVP for a user should be

* Able to login
* See a list of movies given a title
* See a movies info given an ID
* Recent movies seen shows in Profile
* Can add Movies to favourite lists
 
With prior experience of SpringBoot, I decided to choose that as my framework for calling the API.

Due to time constraints and lack of frontend experience, I was not able to get a frontend up and running. The requirements for the backend works as is, with Notifications of when adding to favourites missing.

## How I would implement remaining tasks

* Choose a frontend framework that would allow me to call `/search` endpoint as I'm typing in the navbar.
* Show results in card/box view for all movies with their images.
* Implement a notifiction listener, whenever List<Movie> favourites has a new item, this listener would show on frontend.
* Implement JUnit5 tests across all services and models.

If given a full day, I would be able to get an app running