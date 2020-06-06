import React from "react";
import loadingGif from "../images/gif/loading-arrow.gif";
const Loading = () => {
  return (
    <div className="loading">
      <h4>Chargement des données des chambres....</h4>
      <img src={loadingGif} alt="" />
    </div>
  );
};

export default Loading;