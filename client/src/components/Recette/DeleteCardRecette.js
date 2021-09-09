import React from 'react';
import { useDispatch } from "react-redux";
import { deleteRecette } from "../../actions/recette.actions";

const DeleteCardRecette = (props) => {
    const dispatch = useDispatch();

    const deleteQuote = () => dispatch(deleteRecette(props.id))
    
  return (
    <div
      onClick={() => {
        if (window.confirm("Voulez-vous vraiment supprimer cet article")) {
          deleteQuote();
        }
      }}
    >
        <img src="./img/icons/trash.svg" alt="trash" />
    </div>
  );
};

export default DeleteCardRecette;