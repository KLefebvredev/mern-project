import React, { useContext } from 'react';
import { UidContext } from '../components/AppContext';
import LeftNav from '../components/LeftNav';
import NewRecetteForm from '../components/Recette/NewRecetteForm';
import ThreadsRecette from '../components/ThreadsRecette';

const Recette = () => {
    const uid = useContext(UidContext);

    return (
        <div className="home">
            <LeftNav />
            <div className="main">
                <div className="home-header">
                    {uid ? <NewRecetteForm /> : ""}
                </div>
                <ThreadsRecette/>
            </div>
        </div>
    );
};

export default Recette;
