import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LikeButtonRecette from "../Recette/LikeButtonRecette";
import FollowHandler from "../Profil/FollowHandler";
import { dateParser, isEmpty } from "../Utils";
import CardRecetteComments from "./CardRecetteComments";
import { updateRecette } from "../../actions/recette.actions";
import DeleteCardRecette from "./DeleteCardRecette";

const CardRecette = ({ recette }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdated, setIsUpdated] = useState(false);
  const [textUpdate, setTextUpdate] = useState(null);
  const [showComments, setShowComments] = useState(false);
  const usersData = useSelector((state) => state.usersReducer);
  const userData = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const updateItem = () => {
    if (textUpdate) {
      dispatch(updateRecette(recette._id, textUpdate))
    }
    setIsUpdated(false);
  }

  useEffect(() => {
    !isEmpty(usersData[0]) && setIsLoading(false);
  }, [usersData]);

  return (
    <li className="card-container" key={recette._id}>
      {isLoading ? (
        <i className="fas fa-spinner fa-spin"></i>
      ) : (
        <>
          <div className="card-left">
            <img
              src={
                !isEmpty(usersData[0]) &&
                usersData
                  .map((user) => {
                    if (user._id === recette.posterId) return user.picture;
                    else return null
                  })
                  .join("")
              }
              alt="Poster recette Pic"
            />
          </div>
          <div className="card-right">
            <div className="card-header">
              <div className="pseudo">
                <h3>
                  {!isEmpty(usersData[0]) &&
                    usersData.map((user) => {
                      if (user._id === recette.posterId) return user.pseudo;
                      else return null
                    })}
                </h3>
                {recette.posterId !== userData._id && (
                  <FollowHandler idToFollow={recette.posterId} type={"card"} />
                )}
              </div>
              <span>{dateParser(recette.createdAt)}</span>
            </div>
            <h4>
              {!isEmpty(usersData[0]) &&
                usersData.map((user) => {
                  if (user._id === recette.posterId) return recette.titre;
                  else return null
                })}{" "}
            </h4>
            <p>
              Pour{" "}
              {!isEmpty(usersData[0]) &&
                usersData.map((user) => {
                  if (user._id === recette.posterId) return recette.personne;
                  else return null
                })}{" "}
              personnes
            </p>
            {recette.picture && (
              <img
                src={recette.picture}
                alt="recette-pic"
                className="card-pic"
              />
            )}
            <ul>
              <br />
              <h4 className="underline">Ingrédients</h4>
              <li>
                {!isEmpty(usersData[0]) &&
                  usersData.map((user) => {
                    if (user._id === recette.posterId)
                      return recette.qtingredient1;
                      else return null
                  })}{" "}
                {!isEmpty(usersData[0]) &&
                  usersData.map((user) => {
                    if (user._id === recette.posterId)
                      return recette.ingredient1;
                      else return null
                  })}
              </li>
              <li>
                {!isEmpty(usersData[0]) &&
                  usersData.map((user) => {
                    if (user._id === recette.posterId)
                      return recette.qtingredient2;
                      else return null
                  })}{" "}
                {!isEmpty(usersData[0]) &&
                  usersData.map((user) => {
                    if (user._id === recette.posterId)
                      return recette.ingredient2;
                      else return null
                  })}
              </li>
              <li>
                {!isEmpty(usersData[0]) &&
                  usersData.map((user) => {
                    if (user._id === recette.posterId)
                      return recette.qtingredient3;
                      else return null
                  })}{" "}
                {!isEmpty(usersData[0]) &&
                  usersData.map((user) => {
                    if (user._id === recette.posterId)
                      return recette.ingredient3;
                      else return null
                  })}
              </li>
              <li>
                {!isEmpty(usersData[0]) &&
                  usersData.map((user) => {
                    if (user._id === recette.posterId)
                      return recette.qtingredient4;
                      else return null
                  })}{" "}
                {!isEmpty(usersData[0]) &&
                  usersData.map((user) => {
                    if (user._id === recette.posterId)
                      return recette.ingredient4;
                      else return null
                  })}
              </li>
              <li>
                {!isEmpty(usersData[0]) &&
                  usersData.map((user) => {
                    if (user._id === recette.posterId)
                      return recette.qtingredient5;
                      else return null
                  })}{" "}
                {!isEmpty(usersData[0]) &&
                  usersData.map((user) => {
                    if (user._id === recette.posterId)
                      return recette.ingredient5;
                      else return null
                  })}
              </li>
              <li>
                {!isEmpty(usersData[0]) &&
                  usersData.map((user) => {
                    if (user._id === recette.posterId)
                      return recette.qtingredient6;
                      else return null
                  })}{" "}
                {!isEmpty(usersData[0]) &&
                  usersData.map((user) => {
                    if (user._id === recette.posterId)
                      return recette.ingredient6;
                      else return null
                  })}
              </li>
              <li>
                {!isEmpty(usersData[0]) &&
                  usersData.map((user) => {
                    if (user._id === recette.posterId)
                      return recette.qtingredient7;
                      else return null
                  })}{" "}
                {!isEmpty(usersData[0]) &&
                  usersData.map((user) => {
                    if (user._id === recette.posterId)
                      return recette.ingredient7;
                      else return null
                  })}
              </li>
              <li>
                {!isEmpty(usersData[0]) &&
                  usersData.map((user) => {
                    if (user._id === recette.posterId)
                      return recette.qtingredient8;
                      else return null
                  })}{" "}
                {!isEmpty(usersData[0]) &&
                  usersData.map((user) => {
                    if (user._id === recette.posterId)
                      return recette.ingredient8;
                      else return null
                  })}
              </li>
              <li>
                {!isEmpty(usersData[0]) &&
                  usersData.map((user) => {
                    if (user._id === recette.posterId)
                      return recette.qtingredient9;
                      else return null
                  })}{" "}
                {!isEmpty(usersData[0]) &&
                  usersData.map((user) => {
                    if (user._id === recette.posterId)
                      return recette.ingredient9;
                      else return null
                  })}
              </li>
            </ul>
            <br />
            {isUpdated === false && <p>{recette.preparation}</p>}
            {isUpdated && (
                <div className="update-post">
                    <textarea 
                        defaultValue={recette.preparation}
                        onChange={(e) => setTextUpdate(e.target.value)}
                    />
                    <div className="button-container">
                        <button className="btn" onClick={updateItem}>
                            Valider modification
                        </button>
                    </div>
                </div>
            )}
            <br />
            <h4 className="underline">
              Valeurs nutritionnelles pour une personne
            </h4>
            <div className="card-footer-recette">
              <div className="icon">
                <img
                  src="./img/icons/kcal.png"
                  alt="Icon de calorie"
                  title="Calories"
                />
                <span>
                  {!isEmpty(usersData[0]) &&
                    usersData.map((user) => {
                      if (user._id === recette.posterId) return recette.calories;
                      else return null
                    })}{" "}
                  kcal
                </span>
              </div>
              <div className="icon">
                <img
                  src="./img/icons/proteine.png"
                  alt="Icon de proteine"
                  title="Proteines"
                />
                <span>
                  {!isEmpty(usersData[0]) &&
                    usersData.map((user) => {
                      if (user._id === recette.posterId)
                        return recette.proteines;
                        else return null
                    })}{" "}
                  g
                </span>
              </div>
              <div className="icon">
                <img
                  src="./img/icons/glucide.png"
                  alt="Icon de glucide"
                  title="Glucides"
                />
                <span>
                  {!isEmpty(usersData[0]) &&
                    usersData.map((user) => {
                      if (user._id === recette.posterId)
                        return recette.glucides;
                        else return null
                    })}{" "}
                  g
                </span>
              </div>
              <div className="icon">
                <img
                  src="./img/icons/oil.png"
                  alt="Icon de lipide"
                  title="Lipides"
                />
                <span>
                  {!isEmpty(usersData[0]) &&
                    usersData.map((user) => {
                      if (user._id === recette.posterId) return recette.lipides;
                      else return null
                    })}{" "}
                  g
                </span>
              </div>
            </div>
            <br />
            <h4 className="underline">Saisonnalité</h4>
            <p>
              {!isEmpty(usersData[0]) &&
                usersData.map((user) => {
                  if (user._id === recette.posterId) return recette.saison;
                  else return null
                })}
            </p>
            <br />
            <h4 className="underline">Conseils</h4>
            <p>
              {!isEmpty(usersData[0]) &&
                usersData.map((user) => {
                  if (user._id === recette.posterId) return recette.conseil;
                  else return null
                })}
            </p>
            {userData._id === recette.posterId && (
                <div className="button-container">
                    <div onClick={() => setIsUpdated(!isUpdated)}>
                        <img src="./img/icons/edit.svg" alt="Icon de modification" />
                    </div>
                    <DeleteCardRecette id={recette._id} />
                </div>
            )}
            <div className="card-footer">
              <div className="comment-icon">
                <img
                  onClick={() => setShowComments(!showComments)}
                  src="./img/icons/message1.svg"
                  alt="Icon de commentaire"
                />
                <span>{recette.comments.length}</span>
              </div>
              <LikeButtonRecette recette={recette} />
            </div>
            {showComments && <CardRecetteComments recette={recette} />}
          </div>
        </>
      )}
    </li>
  );
};

export default CardRecette;
