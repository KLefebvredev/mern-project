import {
    GET_RECETTE,
    DELETE_RECETTE,
    LIKE_RECETTE,
    UNLIKE_RECETTE,
    UPDATE_RECETTE,
    EDIT_COMMENT,
    DELETE_COMMENT,
  } from "../actions/recette.actions";
  
  const initialState = {};
  
  export default function postReducer(state = initialState, action) {
    switch (action.type) {
      case GET_RECETTE:
        return action.payload;
        
      case LIKE_RECETTE:
        return state.map((recette) => {
          if (recette._id === action.payload.recetteId) {
            return {
              ...recette,
              likers: [action.payload.userId, ...recette.likers],
            };
          }
          return recette;
        });
      case UNLIKE_RECETTE:
        return state.map((recette) => {
          if (recette._id === action.payload.recetteId) {
            return {
              ...recette,
              likers: recette.likers.filter((id) => id !== action.payload.userId),
            };
          }
          return recette;
        });
      case UPDATE_RECETTE:
        return state.map((recette) => {
          if (recette._id === action.payload.recetteId) {
            return {
              ...recette,
              preparation: action.payload.preparation,
            };
          } else return recette;
        });
      case DELETE_RECETTE:
        return state.filter((recette) => recette._id !== action.payload.recetteId);

      case EDIT_COMMENT:
          return state.map((recette) => {
            if (recette._id === action.payload.recetteId) {
              return {
                ...recette,
                comments: recette.comments.map((comment) => {
                  if (comment._id === action.payload.commentId) {
                    return {
                      ...comment,
                      text: action.payload.text,
                    };
                  } else {
                    return comment;
                  }
                }),
              };
            } else return recette;
          });
        case DELETE_COMMENT:
          return state.map((recette) => {
            if (recette._id === action.payload.recetteId) {
              return {
                ...recette,
                comments: recette.comments.filter(
                  (comment) => comment._id !== action.payload.commentId
                ),
              };
            } else return recette;
          });
      default:
        return state;
    }
  }
  