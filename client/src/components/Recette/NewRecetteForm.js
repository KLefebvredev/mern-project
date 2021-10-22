import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRecette, getRecette } from "../../actions/recette.actions";
import { isEmpty, timestampParser } from "../Utils";

const NewRecetteForm = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [titre, setTitre] = useState("");
  const [personne, setPersonne] = useState("");
  const [ingredient1, setIngredient1] = useState("");
  const [ingredient2, setIngredient2] = useState("");
  const [ingredient3, setIngredient3] = useState("");
  const [ingredient4, setIngredient4] = useState("");
  const [ingredient5, setIngredient5] = useState("");
  const [ingredient6, setIngredient6] = useState("");
  const [ingredient7, setIngredient7] = useState("");
  const [ingredient8, setIngredient8] = useState("");
  const [ingredient9, setIngredient9] = useState("");
  const [qtingredient1, setQtIngredient1] = useState("");
  const [qtingredient2, setQtIngredient2] = useState("");
  const [qtingredient3, setQtIngredient3] = useState("");
  const [qtingredient4, setQtIngredient4] = useState("");
  const [qtingredient5, setQtIngredient5] = useState("");
  const [qtingredient6, setQtIngredient6] = useState("");
  const [qtingredient7, setQtIngredient7] = useState("");
  const [qtingredient8, setQtIngredient8] = useState("");
  const [qtingredient9, setQtIngredient9] = useState("");
  const [preparation, setPreparation] = useState("");
  const [conseil, setConseil] = useState("");
  const [saison, setSaison] = useState("");
  const [calories, setCalories] = useState("");
  const [proteines, setProteines] = useState("");
  const [lipides, setLipides] = useState("");
  const [glucides, setGlucides] = useState("");
  const [tags, setTags] = useState("");
  const [postPicture, setPostPicture] = useState(null);
  const [file, setFile] = useState();
  const userData = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const ingredients = [
    ingredient1,
    ingredient2 ||
      ingredient3 ||
      ingredient4 ||
      ingredient5 ||
      ingredient6 ||
      ingredient7 ||
      ingredient8 ||
      ingredient9 ||
      qtingredient1 ||
      qtingredient2 ||
      qtingredient3 ||
      qtingredient4 ||
      qtingredient5 ||
      qtingredient6 ||
      qtingredient7 ||
      qtingredient8 ||
      qtingredient9,
  ];

  const handlePicture = (e) => {
    setPostPicture(URL.createObjectURL(e.target.files[0]));
    setFile(e.target.files[0]);
  };

  const handleRecette = async () => {
    if (
      titre ||
      postPicture ||
      personne ||
      ingredient1 ||
      ingredient2 ||
      ingredient3 ||
      ingredient4 ||
      ingredient5 ||
      ingredient6 ||
      qtingredient1 ||
      qtingredient2 ||
      qtingredient3 ||
      qtingredient4 ||
      qtingredient5 ||
      qtingredient6 ||
      preparation ||
      saison ||
      calories ||
      proteines ||
      lipides ||
      glucides
    ) {
      const data = new FormData();
      data.append("posterId", userData._id);
      data.append("titre", titre);
      data.append("personne", personne);
      if (file) data.append("file", file);
      data.append("ingredient1", ingredient1);
      data.append("ingredient2", ingredient2);
      data.append("ingredient3", ingredient3);
      data.append("ingredient4", ingredient4);
      data.append("ingredient5", ingredient5);
      data.append("ingredient6", ingredient6);
      data.append("ingredient7", ingredient7);
      data.append("ingredient8", ingredient8);
      data.append("ingredient9", ingredient9);
      data.append("qtingredient1", qtingredient1);
      data.append("qtingredient2", qtingredient2);
      data.append("qtingredient3", qtingredient3);
      data.append("qtingredient4", qtingredient4);
      data.append("qtingredient5", qtingredient5);
      data.append("qtingredient6", qtingredient6);
      data.append("qtingredient7", qtingredient7);
      data.append("qtingredient8", qtingredient8);
      data.append("qtingredient9", qtingredient9);
      data.append("preparation", preparation);
      data.append("saison", saison);
      data.append("conseil", conseil);
      data.append("proteines", proteines);
      data.append("lipides", lipides);
      data.append("glucides", glucides);
      data.append("calories", calories);
      data.append("tags", tags);

      await dispatch(addRecette(data));
      dispatch(getRecette());
      cancelRecette();
    } else {
      alert("Veuillez remplir le formulaire");
    }
  };

  const cancelRecette = () => {
    setTitre("");
    setPersonne("");
    setIngredient1("");
    setIngredient2("");
    setIngredient3("");
    setIngredient4("");
    setIngredient5("");
    setIngredient6("");
    setIngredient7("");
    setIngredient8("");
    setIngredient9("");
    setQtIngredient1("");
    setQtIngredient2("");
    setQtIngredient3("");
    setQtIngredient4("");
    setQtIngredient5("");
    setQtIngredient6("");
    setQtIngredient7("");
    setQtIngredient8("");
    setQtIngredient9("");
    setPreparation("");
    setSaison("");
    setConseil("");
    setCalories("");
    setProteines("");
    setLipides("");
    setGlucides("");
    setTags("");
    setPostPicture("");
    setFile("");
  };

  useEffect(() => {
    if (!isEmpty(userData)) setIsLoading(false);
  }, [userData]);

  return (
    <div className="recette-container">
      {isLoading ? (
        <i className="fas fa-spinner fa-pulse"></i>
      ) : (
        <>
          <div>
            <img src="./img/icons/recipe.svg" alt="Icon d'ajout de recette" />
          </div>
          <br />

          <div className="recette-form">
            <textarea
              className="titre"
              name="titre"
              id="titre"
              placeholder="Titre de la recette"
              onChange={(e) => setTitre(e.target.value)}
              value={titre}
            />
            <input
              className="titre"
              type="number"
              name="personne"
              id="personne"
              placeholder="Nombre de personnes"
              onChange={(e) => setPersonne(e.target.value)}
              value={personne}
            />
            <br />
            <textarea
              className="ingre"
              name="ingredient1"
              id="ingredient1"
              placeholder="1er ingredient"
              onChange={(e) => setIngredient1(e.target.value)}
              value={ingredient1}
            />
            <textarea
              className="ingre"
              name="qtingredient1"
              id="qtingredient1"
              placeholder="Quantité"
              onChange={(e) => setQtIngredient1(e.target.value)}
              value={qtingredient1}
              title="g/ml/pièce, càc, cas ..."
            />
            <textarea
              className="ingre"
              name="ingredient2"
              id="ingredient2"
              placeholder="2ème ingredient"
              onChange={(e) => setIngredient2(e.target.value)}
              value={ingredient2}
            />
            <textarea
              className="ingre"
              name="qtingredient2"
              id="qtingredient2"
              placeholder="Quantité"
              onChange={(e) => setQtIngredient2(e.target.value)}
              value={qtingredient2}
              title="g/ml/pièce, càc, cas ..."
            />
            <textarea
              className="ingre"
              name="ingredient3"
              id="ingredient3"
              placeholder="3ème ingredient"
              onChange={(e) => setIngredient3(e.target.value)}
              value={ingredient3}
            />
            <textarea
              className="ingre"
              name="qtingredient3"
              id="qtingredient3"
              placeholder="Quantité"
              onChange={(e) => setQtIngredient3(e.target.value)}
              value={qtingredient3}
              title="g/ml/pièce, càc, cas ..."
            />
            <textarea
              className="ingre"
              name="ingredient4"
              id="ingredient4"
              placeholder="4ème ingredient"
              onChange={(e) => setIngredient4(e.target.value)}
              value={ingredient4}
            />
            <textarea
              className="ingre"
              name="qtingredient4"
              id="qtingredient4"
              placeholder="Quantité"
              onChange={(e) => setQtIngredient4(e.target.value)}
              value={qtingredient4}
              title="g/ml/pièce, càc, cas ..."
            />
            <textarea
              className="ingre"
              name="ingredient5"
              id="ingredient5"
              placeholder="5ème ingredient"
              onChange={(e) => setIngredient5(e.target.value)}
              value={ingredient5}
            />
            <textarea
              className="ingre"
              name="qtingredient5"
              id="qtingredient5"
              placeholder="Quantité"
              onChange={(e) => setQtIngredient5(e.target.value)}
              value={qtingredient5}
              title="g/ml/pièce, càc, cas ..."
            />
            <textarea
              className="ingre"
              name="ingredient6"
              id="ingredient6"
              placeholder="6ème ingredient"
              onChange={(e) => setIngredient6(e.target.value)}
              value={ingredient6}
            />
            <textarea
              className="ingre"
              name="qtingredient6"
              id="qtingredient6"
              placeholder="Quantité"
              onChange={(e) => setQtIngredient6(e.target.value)}
              value={qtingredient6}
              title="g/ml/pièce, càc, cas ..."
            />
            <textarea
              className="ingre"
              name="ingredient7"
              id="ingredient7"
              placeholder="7ème ingredient"
              onChange={(e) => setIngredient7(e.target.value)}
              value={ingredient7}
            />
            <textarea
              className="ingre"
              name="qtingredient7"
              id="qtingredient7"
              placeholder="Quantité"
              onChange={(e) => setQtIngredient7(e.target.value)}
              value={qtingredient7}
              title="g/ml/pièce, càc, cas ..."
            />
            <textarea
              className="ingre"
              name="ingredient8"
              id="ingredient8"
              placeholder="8ème ingredient"
              onChange={(e) => setIngredient8(e.target.value)}
              value={ingredient8}
            />
            <textarea
              className="ingre"
              name="qtingredient8"
              id="qtingredient8"
              placeholder="Quantité"
              onChange={(e) => setQtIngredient8(e.target.value)}
              value={qtingredient8}
              title="g/ml/pièce, càc, cas ..."
            />
            <textarea
              className="ingre"
              name="ingredient9"
              id="ingredient9"
              placeholder="9ème ingredient"
              onChange={(e) => setIngredient9(e.target.value)}
              value={ingredient9}
            />
            <textarea
              className="ingre"
              name="qtingredient9"
              id="qtingredient9"
              placeholder="Quantité"
              onChange={(e) => setQtIngredient9(e.target.value)}
              value={qtingredient9}
              title="g/ml/pièce, càc, cas ..."
            />
            <textarea
              className="prepa"
              name="preparation"
              id="preparation"
              placeholder="Préparation"
              onChange={(e) => setPreparation(e.target.value)}
              value={preparation}
            />
            <textarea
              className="titre"
              name="conseil"
              id="conseil"
              placeholder="Conseil"
              onChange={(e) => setConseil(e.target.value)}
              value={conseil}
            />
            <textarea
              className="titre"
              name="saison"
              id="saison"
              placeholder="Saisonnalité"
              onChange={(e) => setSaison(e.target.value)}
              value={saison}
            />
            <textarea
              className="ingre"
              name="calories"
              id="calories"
              placeholder="Calories / personne"
              onChange={(e) => setCalories(e.target.value)}
              value={calories}
            />
            <textarea
              className="ingre"
              name="proteines"
              id="proteines"
              placeholder="Proteines / personne"
              onChange={(e) => setProteines(e.target.value)}
              value={proteines}
            />
            <textarea
              className="ingre"
              name="lipides"
              id="lipides"
              placeholder="Lipides / personne"
              onChange={(e) => setLipides(e.target.value)}
              value={lipides}
            />
            <textarea
              className="ingre"
              name="glucides"
              id="glucides"
              placeholder="Glucides / personne"
              onChange={(e) => setGlucides(e.target.value)}
              value={glucides}
            />
            <textarea
              className="titre"
              name="tags"
              id="tags"
              placeholder="Tags"
              onChange={(e) => setTags(e.target.value)}
              value={tags}
            />
            {titre ||
            postPicture ||
            personne ||
            ingredient1 ||
            ingredient2 ||
            ingredient3 ||
            ingredient4 ||
            ingredient5 ||
            ingredient6 ||
            ingredient7 ||
            ingredient8 ||
            ingredient9 ||
            qtingredient1 ||
            qtingredient2 ||
            qtingredient3 ||
            qtingredient4 ||
            qtingredient5 ||
            qtingredient6 ||
            qtingredient7 ||
            qtingredient8 ||
            qtingredient9 ||
            preparation ||
            saison ||
            calories ||
            proteines ||
            lipides ||
            glucides ||
            tags ||
            conseil ? (
              <li className="card-container">
                <div className="card-left">
                  <img src={userData.picture} alt="User picture" />
                </div>
                <div className="card-right">
                  <div className="card-header">
                    <div className="pseudo">
                      <h3>{userData.pseudo}</h3>
                    </div>
                    <span>{timestampParser(Date.now())}</span>
                  </div>
                  <div className="content">
                    <h4>{titre}</h4>
                    {personne ? <p>Pour {personne} personnes</p> : null}
                    {postPicture ? (
                      <img src={postPicture} alt="Photo de la recette" />
                    ) : null}
                    {
                      (ingredient1,
                      ingredient2 ||
                      ingredient3 ||
                      ingredient4 ||
                      ingredient5 ||
                      ingredient6 ||
                      ingredient7 ||
                      ingredient8 ||
                      ingredient9 ||
                      qtingredient1 ||
                      qtingredient2 ||
                      qtingredient3 ||
                      qtingredient4 ||
                      qtingredient5 ||
                      qtingredient6 ||
                      qtingredient7 ||
                      qtingredient8 ||
                      qtingredient9 ? (
                        <h4 className="underline">Ingrédients</h4>
                      ) : null)
                    }
                    <li>
                      <ul>
                        <li className="ingredients-previ">
                          {qtingredient1 || ingredient1 ? (
                            <li>
                              {qtingredient1} {ingredient1}
                            </li>
                          ) : null}
                          {qtingredient2 || ingredient2 ? (
                            <li>
                              {qtingredient2} {ingredient2}
                            </li>
                          ) : null}
                          {qtingredient3 || ingredient3 ? (
                            <li>
                              {qtingredient3} {ingredient3}
                            </li>
                          ) : null}
                          {qtingredient4 || ingredient4 ? (
                            <li>
                              {qtingredient4} {ingredient4}
                            </li>
                          ) : null}
                          {qtingredient5 || ingredient5 ? (
                            <li>
                              {qtingredient5} {ingredient5}
                            </li>
                          ) : null}
                          {qtingredient6 || ingredient6 ? (
                            <li>
                              {qtingredient6} {ingredient6}
                            </li>
                          ) : null}
                          {qtingredient7 || ingredient7 ? (
                            <li>
                              {qtingredient7} {ingredient7}
                            </li>
                          ) : null}
                          {qtingredient8 || ingredient8 ? (
                            <li>
                              {qtingredient8} {ingredient8}
                            </li>
                          ) : null}
                          {qtingredient9 || ingredient9 ? (
                            <li>
                              {qtingredient9} {ingredient9}
                            </li>
                          ) : null}
                        </li>
                      </ul>
                      <br />
                      <p>{preparation}</p>
                      {(calories || proteines || lipides || glucides ? (
                        <h4 className="underline">Valeurs nutritionnelles pour une personne</h4>
                      ) : null)
                    }
                    <div className="card-footer-recette">
                      <div className="icon">
                      {calories ? (
                        <>
                        <img src="./img/icons/kcal.png" alt='Icon de calories' />
                        <span>{calories} kcal</span>
                        </>
                      ) : null }
                      </div>
                      <div className="icon">
                      {proteines ? (
                        <>
                        <img src="./img/icons/proteine.png" alt='Icon de proteines' />
                        <span>{proteines}</span>
                        </>
                      ) : null }
                      </div>
                      <div className="icon">
                      {glucides ? (
                        <>
                        <img src="./img/icons/glucide.png" alt='Icon de glucide' />
                        <span>{glucides}</span>
                        </>
                      ) : null }
                      </div>
                      <div className="icon">
                      {lipides ? (
                        <>
                        <img src="./img/icons/oil.png" alt='Icon de lipide' />
                        <span>{lipides}</span>
                        </>
                      ) : null }
                      </div>
                    </div>
                      {saison ? (
                        <>
                        <h4 className="underline">Saisonnalité</h4>
                        <p>{saison}</p>
                        </>
                      ) : null }
                      {conseil ? (
                        <>
                        <h4 className="underline">Conseils</h4>
                        <p>{conseil}</p>
                        </>
                      ) : null }
                    </li>
                  </div>
                </div>
              </li>
            ) : null}
            {}
            <div className="footer-form">
              <div className="icon">
                <>
                  <img src="./img/icons/picture.svg" alt="Img" />
                  <input
                    type="file"
                    id="file-upload"
                    name="file"
                    accept=".jpg, .jpeg, .png"
                    onChange={(e) => handlePicture(e)}
                  />
                </>
              </div>
              <div className="btn-send">
                {titre ||
                postPicture ||
                personne ||
                ingredient1 ||
                ingredient2 ||
                ingredient3 ||
                ingredient4 ||
                ingredient5 ||
                ingredient6 ||
                ingredient7 ||
                ingredient8 ||
                ingredient9 ||
                qtingredient1 ||
                qtingredient2 ||
                qtingredient3 ||
                qtingredient4 ||
                qtingredient5 ||
                qtingredient6 ||
                qtingredient7 ||
                qtingredient8 ||
                qtingredient9 ||
                preparation ||
                saison ||
                calories ||
                proteines ||
                lipides ||
                glucides ||
                tags ||
                conseil ? (
                  <button className="cancel" onClick={cancelRecette}>
                    Annuler
                  </button>
                ) : null}
                <button className="send" onClick={handleRecette}>
                  Envoyer
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default NewRecetteForm;
