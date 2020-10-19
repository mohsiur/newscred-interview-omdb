import React, { useReducer, useEffect } from "react";
import Movie from "./MovieCard";

const initialState = {
    loading: true,
    recentMovies: [],
    favouriteMovies: [],
    errorMessage: null
};



const reducer = (state, action) => {
switch (action.type) {
    case "PROFILE_REQUEST":
    return {
        ...state,
        loading: true,
        errorMessage: null
    };
    case "PROFILE_SUCCESS":
    return {
        ...state,
        loading: false,
        recentMovies: action.payload.recent,
        favouriteMovies: action.payload.favourites
    };
    case "PROFILE_FAILURE":
    return {
        ...state,
        loading: false,
        errorMessage: action.error
    };
    default:
    return state;
}
};
  
const Profile = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
    
        fetch("/profile")
            .then(response => response.json())
            .then(jsonResponse => {
        
            dispatch({
                type: "PROFILE_SUCCESS",
                payload: jsonResponse
        	});
      	});
  	}, []);
    const { recentMovies, favouriteMovies, errorMessage, loading } = state;

    return (
        <div>
        <div>
            <h2>Favourite Movies</h2>
        </div>
        <div className="movies">
        
        {loading && !errorMessage ? (
          <span>loading... </span>
        ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
            favouriteMovies.map((movie, index) => (
            <Movie key={`${index}-${movie.Title}`} movie={movie} />
          ))
        )}
        </div>
        <div>
            <h2>Recent Movies</h2>
        </div>
        <div className="movies">
            {loading && !errorMessage ? (
            <span>loading... </span>
            ) : errorMessage ? (
            <div className="errorMessage">{errorMessage}</div>
            ) : (
                recentMovies.map((movie, index) => (
                <Movie key={`${index}-${movie.Title}`} movie={movie} />
            ))
            )}
        </div>
        </div>
    );
};


export default Profile;
