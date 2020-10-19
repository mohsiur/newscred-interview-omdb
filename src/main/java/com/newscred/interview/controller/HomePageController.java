package com.newscred.interview.controller;

import com.newscred.interview.model.Movie;
import com.newscred.interview.service.OMDBService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Controller
public class HomePageController {

    private static final Logger logger = LoggerFactory.getLogger(HomePageController.class);

    @Autowired
    private OMDBService omdbService;

    @RequestMapping(
            value = {"/search"},
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    @ResponseBody
    public List<Movie> searchMovies(@RequestParam String title) {

        return omdbService.getMovieList(title);
    }

    @RequestMapping(
            value = {"/movie"},
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    @ResponseBody
    public Movie getMovie(@RequestParam String title) {

        return omdbService.getMovie(title);
    }


}
