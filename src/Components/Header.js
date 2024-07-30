import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGE } from "../utils/constant";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    //unsubscribe when component unmount(we prevent onAuthStateChanged function from re-render)
    return () => unsubscribe();
  }, []);

  const handleGptSearchView = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="flex justify-between w-screen absolute px-8  bg-gradient-to-br from-black z-10">
      <img className="w-44" src={LOGO} alt="logo" />
      {user && (
        <div className="flex p-2">
          {/* for multilingual - this is the best way instead of hardcoding <options/> */}

          {showGptSearch && (
            <select
              className="p-2 m-2 bg-blue-800 rounded-lg text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGE.map((lge) => (
                <option key={lge.identifier} value={lge.identifier}>
                  {lge.name}
                </option>
              ))}
            </select>
          )}

          <button
            className="py-2 px-4 mr-4  my-2 bg-red-800 text-white rounded-lg "
            onClick={handleGptSearchView}
          >
            {showGptSearch ? "Homepage" : "GPT Search"}
          </button>
          <img
            className="w-8 h-10 pt-2 pr-1 rounded-lg"
            alt="user-icon"
            src={user?.photoURL}
          />

          <button
            onClick={handleSignOut}
            className="text-white hover:font-semibold"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
