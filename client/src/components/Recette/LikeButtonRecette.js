import React, { useContext, useEffect, useState } from 'react';
import { UidContext } from "../AppContext";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { useDispatch } from 'react-redux';
import { likeRecette, unlikeRecette } from '../../actions/recette.actions';

const LikeButton = ({recette}) => {
    const [liked, setLiked] = useState(false);
    const uid = useContext(UidContext);
    const dispatch = useDispatch();

    const like = () => {
        dispatch(likeRecette(recette._id, uid))
        setLiked(true);
    }

    const unlike = () => {
        dispatch(unlikeRecette(recette._id, uid))
        setLiked(false);
    }
    

    useEffect(() => {
        if (recette.likers.includes(uid)) setLiked(true);
        else setLiked(false);
    }, [uid, recette.likers, liked])


    return (
        <div className="like-container">
            {uid === null && 
            <Popup trigger={<img src="./img/icons/heart.svg" alt="like" />}
            position={["bottom center", "bottom right", "bottom left"]}
            closeOnDocumentClick>
            <div>Connectez-vous pour aimer un post !</div>
          </Popup>
        }
        {uid && liked === false && (
            <img src="./img/icons/heart.svg" alt="like" onClick={like}/>
        )}
        {uid && liked && (
            <img src="./img/icons/heart-filled.svg" alt="unlike" onClick={unlike}/>
        )}
        <span>{recette.likers.length}</span>
        </div>
    );
};

export default LikeButton;