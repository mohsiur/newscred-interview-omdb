package com.newscred.interview.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.newscred.interview.model.Movie;
import com.newscred.interview.model.Search;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.util.List;

@Service
public class OMDBService {

    private static final Logger logger = LoggerFactory.getLogger(OMDBService.class);

    @Value("${omdb.search.api.url}")
    private String omdbSearchAPI;

    @Value("${omdb.title.api.url}")
    private String omdbTitleAPI;

    @Value("${omdb.api.key}")
    private String omdbApiKey;

    @Autowired
    private RestTemplate omdbRestClient;

    @Autowired
    private ObjectMapper objectMapper;

    public List<Movie> getMovieList(String title) {
        try {
            return omdbRestClient.getForObject(buildUri(omdbSearchAPI, title), Search.class).getMovieList();
        }
        catch (Exception e) {
            logger.error("Error could not cal omdb search api");
            throw e;
        }
    }

    public Movie getMovie(String title) {
        try {
            return omdbRestClient.getForObject(buildUri(omdbTitleAPI, title), Movie.class);
        }
        catch (Exception e) {
            logger.error("Error could not cal omdb search api");
            throw e;
        }
    }



    private URI buildUri(String endpoint, String title) {


        return UriComponentsBuilder.fromHttpUrl(endpoint).buildAndExpand(omdbApiKey, title).toUri();
    }

}
