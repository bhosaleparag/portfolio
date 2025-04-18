import React from "react";
import search from "../assets/project/search.png";
import foodDis from "../assets/project/foodDis.png";
import foodHomePage from "../assets/project/foodHomePage.png";
import dishes from "../assets/project/dishes.png";
import url from "../assets/project/url.png";
import ingredient from "../assets/project/ingredient.png";

export default function Project2() {
  return (
    <>
      <p>Food Info</p>
      <div className="projectImg projectImg2">
        <img src={search} className="projectImgsearch" loading="lazy" />
        <img src={foodHomePage} className="projectImgfoodHomePage" loading="lazy" />
        <img src={ingredient} className="projectImgingredient" loading="lazy" />
        <img src={dishes} className="projectImgdishes" loading="lazy" />
        <img src={foodDis} className="projectImgfoodDis" loading="lazy" />
        <img src={url} className="projectImgUrl" loading="lazy" />
      </div>
    </>
  );
}
