import React from "react";
import "./loading.styles.css";
import img from "../../assets/loading_spinner.gif";

const Loading = ({ isLoading }) =>
  isLoading && (
    <div className="loading">
      <h1>Using The Force</h1>
      <img src={img} alt="loading" />
    </div>
  );

export default Loading;
