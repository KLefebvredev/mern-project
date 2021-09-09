import axios from "axios";

//recettes
export const GET_RECETTE = "GET_RECETTE";
export const ADD_RECETTE = "ADD_RECETTE";
export const LIKE_RECETTE = "LIKE_RECETTE";
export const UNLIKE_RECETTE = "UNLIKE_RECETTE";
export const UPDATE_RECETTE = "UPDATE_RECETTE";
export const DELETE_RECETTE = "DELETE_RECETTE";

//comments
export const ADD_COMMENT = "ADD_COMMENT";
export const EDIT_COMMENT = "EDIT_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";

//errors

export const GET_RECETTE_ERRORS = "GET_RECETTE_ERRORS";

export const getRecette = () => {
    return (dispatch) => {
      return axios
        .get(`${process.env.REACT_APP_API_URL}api/recette/`)
        .then((res) => {
          dispatch({ type: GET_RECETTE, payload: res.data });
        })
        .catch((err) => console.log(err));
    };
  };

  export const addRecette = (data) => {
    return (dispatch) => {
      return axios
        .post(`${process.env.REACT_APP_API_URL}api/recette/`, data)
        .then((res) => {
          if (res.data.errors) {
            dispatch({ type: GET_RECETTE_ERRORS, payload: res.data.errors });
          } else {
            dispatch({ type: GET_RECETTE_ERRORS, payload: "" });
          }
        });
    };
  };


  export const likeRecette = (recetteId, userId) => {
    return (dispatch) => {
      return axios({
        method: "patch",
        url: `${process.env.REACT_APP_API_URL}api/recette/like-recette/` + recetteId,
        data: { id: userId },
      })
        .then((res) => {
          dispatch({ type: LIKE_RECETTE, payload: { recetteId, userId } });
        })
        .catch((err) => console.log(err));
    };
  };
  
  export const unlikeRecette = (recetteId, userId) => {
    return (dispatch) => {
      return axios({
        method: "patch",
        url: `${process.env.REACT_APP_API_URL}api/recette/unlike-recette/` + recetteId,
        data: { id: userId },
      })
        .then((res) => {
          dispatch({ type: UNLIKE_RECETTE, payload: { recetteId, userId } });
        })
        .catch((err) => console.log(err));
    };
  };

  export const updateRecette = (recetteId, preparation) => {
    return (dispatch) => {
      return axios({
        method: "put",
        url: `${process.env.REACT_APP_API_URL}api/recette/${recetteId}`,
        data: { preparation },
      })
        .then((res) => {
          dispatch({ type: UPDATE_RECETTE, payload: { preparation, recetteId } });
        })
        .catch((err) => console.log(err));
    };
  };

  export const deleteRecette = (recetteId) => {
    return (dispatch) => {
      return axios({
        method: "delete",
        url: `${process.env.REACT_APP_API_URL}api/recette/${recetteId}`,
      })
        .then((res) => {
          dispatch({ type: DELETE_RECETTE, payload: { recetteId } });
        })
        .catch((err) => console.log(err));
    };
  };

  export const addComment = (recetteId, commenterId, text, commenterPseudo) => {
    return (dispatch) => {
      return axios({
        method: "patch",
        url: `${process.env.REACT_APP_API_URL}api/recette/comment-recette/${recetteId}`,
        data: { commenterId, text, commenterPseudo },
      })
        .then((res) => {
          dispatch({ type: ADD_COMMENT, payload: { recetteId } });
        })
        .catch((err) => console.log(err));
    };
  };
  
  export const editComment = (recetteId, commentId, text) => {
    return (dispatch) => {
      return axios({
        method: "patch",
        url: `${process.env.REACT_APP_API_URL}api/recette/edit-comment-recette/${recetteId}`,
        data: { commentId, text },
      })
        .then((res) => {
          dispatch({ type: EDIT_COMMENT, payload: { recetteId, commentId, text } });
        })
        .catch((err) => console.log(err));
    };
  };
  
  export const deleteComment = (recetteId, commentId) => {
    return (dispatch) => {
      return axios({
        method: "patch",
        url: `${process.env.REACT_APP_API_URL}api/recette/delete-comment-recette/${recetteId}`,
        data: { commentId },
      })
        .then((res) => {
          dispatch({ type: DELETE_COMMENT, payload: { recetteId, commentId } });
        })
        .catch((err) => console.log(err));
    };
  };