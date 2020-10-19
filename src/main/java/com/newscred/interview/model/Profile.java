package com.newscred.interview.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.HashSet;
import java.util.Set;

public class Profile {

    @JsonProperty("favourites")
    private HashSet<Movie> favourites;

    @JsonProperty("recent")
    private HashSet<Movie> recent;

    public HashSet<Movie> getFavourites() {
        return favourites;
    }

    public void setFavourites(HashSet<Movie> favourites) {
        this.favourites = favourites;
    }

    public HashSet<Movie> getRecent() {
        return recent;
    }

    public void setRecent(HashSet<Movie> recent) {
        this.recent = recent;
    }
}
