package com.newscred.interview.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

public class Profile {

    @JsonProperty("favourites")
    private List<Movie> favourites;

    @JsonProperty("recent")
    private List<Movie> recent;

    public List<Movie> getFavourites() {
        return favourites;
    }

    public void setFavourites(List<Movie> favourites) {
        this.favourites = favourites;
    }

    public List<Movie> getRecent() {
        return recent;
    }

    public void setRecent(List<Movie> recent) {
        this.recent = recent;
    }
}
