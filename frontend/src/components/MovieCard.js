import React, { useState, useReducer } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Toast from 'react-bootstrap/Toast';

const initialState = {
  loading: true,
  currMovie: "",
  errorMessage: null
};

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

  const reducer = (state, action) => {
    switch (action.type) {
      case "GET_MOVIES_REQUEST":
        return {
          ...state,
          loading: true,
          errorMessage: null
        };
      case "GET_MOVIES_SUCCESS":
        return {
          ...state,
          loading: false,
          currMovie: action.payload
        };
      case "GET_MOVIES_FAILURE":
        return {
          ...state,
          loading: false,
          errorMessage: action.error
        };
      default:
        return state;
    }
  };
  
const Movie = ({ movie }) => {
  const [show, setShow] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleClose = () => setShow(false);
  
  const addToFavorites = () => {
    const requestOptions = {
      method: 'POST'
    }
    fetch(`favourite?id=${movie.imdbID}`, requestOptions)
      .then(response => response.json());
    
    setShow(false);
  };

  
  const handleShow = () => {

    setShow(true);
    dispatch({
      type: "GET_MOVIES_REQUEST"
    });
    fetch(`movie?id=${movie.imdbID}`)
    .then(response => response.json())
    .then(jsonResponse => {
      dispatch({
          type: "GET_MOVIES_SUCCESS",
          payload: jsonResponse
      });
  
  });
  }
  const { currMovie, errorMessage, loading} = state;
  console.log(currMovie);
  const poster =
    movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
  return (
    <CardDeck className="movie">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={poster} />
        <Card.Body>
          <Card.Title>{movie.Title}</Card.Title>
          <Button variant="primary" onClick={handleShow}>View Plot</Button>
        </Card.Body>
      </Card>
      
      {/* This section is for the modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{currMovie.Title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {currMovie.Plot}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addToFavorites}>
            Favorite
          </Button>
        </Modal.Footer>
      </Modal>
    </CardDeck>
    
    
  );
};


export default Movie;
