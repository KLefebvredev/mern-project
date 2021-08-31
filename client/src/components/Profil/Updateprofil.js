import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateBio } from "../../actions/user.actions";
import LeftNav from "../LeftNav";
import { dateParser } from "../Utils";
import UploadImg from "./UploadImg";

const Updateprofil = () => {
  const [bio, setBio] = useState("");
  const [updateForm, setUpdateForm] = useState(false);
  const dispatch = useDispatch();

  const [followingPopup, SetFollowingPopup] = useState(false);
  const [followersPopup, SetFollowersPopup] = useState(false);
  const usersData = useSelector((state) => state.usersReducer);

  const handleUpdate = () => {
    dispatch(updateBio(userData._id, bio));
    setUpdateForm(false);
  };

  const userData = useSelector((state) => state.userReducer);

  return (
    <div className="profil-container">
      <LeftNav />
      <h1> Profil de {userData.pseudo}</h1>
      <div className="update-container">
        <div className="left-part">
          <h3>Photo de profil</h3>
          <img src={userData.picture} alt="user-pic" />
          <UploadImg />
        </div>
        <div className="right-part">
          <div className="bio-update">
            <h3>Bio</h3>
            {updateForm === false && (
              <>
                <p onClick={() => setUpdateForm(!updateForm)}>{userData.bio}</p>
                <button onClick={() => setUpdateForm(!updateForm)}>
                  Modifier bio
                </button>
              </>
            )}
            {updateForm && (
              <>
                <textarea
                  type="text"
                  defaultValue={userData.bio}
                  onChange={(e) => setBio(e.target.value)}
                ></textarea>
                <button onClick={handleUpdate}>Valider modification</button>
              </>
            )}
          </div>
          <h4>Membre depuis le : {dateParser(userData.createdAt)}</h4>
          <h5 onClick={() => SetFollowingPopup(true)}>
            Abonnements : {userData.following ? userData.following.length : "0"}
          </h5>
          <h5 onClick={() => SetFollowersPopup(true)}>
            Abonnés : {userData.followers ? userData.followers.length : "0"}
          </h5>
        </div>
      </div>
      {followingPopup && (
        <div className="popup-profil-container">
          <div className="modal">
            <h3>Abonnements</h3>
            <span className="cross" onClick={() => SetFollowingPopup(false)}>
              &#10005;
            </span>
            <ul>
              {usersData.map((user) => {
                for (let i = 0; i < userData.following.length; i++) {
                  if (user._id === userData.following[i]) {
                    return (
                      <li key={user._id}>
                        <img src={user.picture} alt={user.pseudo} />
                        <h4>{user.pseudo}</h4>
                        <h3>FOLLOW HANDLER</h3>
                      </li>
                    );
                  }
                }
              })}
            </ul>
          </div>
        </div>
      )}
      {followersPopup && (
        <div className="popup-profil-container">
          <div className="modal">
            <h3>Abonnés</h3>
            <span className="cross" onClick={() => SetFollowersPopup(false)}>
              &#10005;
            </span>
            <ul>
              {usersData.map((user) => {
                for (let i = 0; i < userData.followers.length; i++) {
                  if (user._id === userData.followers[i]) {
                    return (
                      <li key={user._id}>
                        <img src={user.picture} alt={user.pseudo} />
                        <h4>{user.pseudo}</h4>
                        <h3>FOLLOW HANDLER</h3>
                      </li>
                    );
                  }
                }
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Updateprofil;
