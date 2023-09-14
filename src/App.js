import React from "react";
import NavBar from "./components/NavBar";
import ImageSlider from "./components/ImageSlider";
import CenterArticle from "./components/CenterArticle"
import RoundedAvatar from "./components/RoundedAvatar";

function App() {
  return (
    // <div className="no-scrollbar overflow-x-auto">
    <>
      <NavBar />
      <ImageSlider />
      <CenterArticle/>
      <RoundedAvatar/>
    </>
    // </div>
  );
}

export default App;
