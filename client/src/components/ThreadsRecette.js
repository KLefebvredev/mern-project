import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecette } from "../actions/recette.actions";
import CardRecette from "./Recette/CardRecette";
import { isEmpty } from "./Utils";

const ThreadsRecette = () => {
  const [loadRecette, setLoadRecette] = useState(true);
  const dispatch = useDispatch();
  const recette = useSelector((state) => state.recetteReducer);

  useEffect(() => {
    if (loadRecette) {
      dispatch(getRecette());
      setLoadRecette(false);
    }
  }, [loadRecette, dispatch]);

  return (
    <div className="thread-container">
        <ul>
            {!isEmpty(recette[0]) && 
                recette.map((recette) => {
                    return <CardRecette recette={recette} key={recette._id} />;
                })
            }
        </ul>
    </div>
   );
};

export default ThreadsRecette;
