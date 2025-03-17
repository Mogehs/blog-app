import React from "react";
import Badges from "./Badges";
import PopularBlogs from "./PopularBlogs";
import FeaturedBlogs from "./FeaturedBlogs";
import OurValues from "./OurValues";
import FreeQuote from "./FreeQuote";
import MoreArticles from "./MoreArticles";
import StayInKnow from "./StayInKnow";
import ForgettheRest from "./ForgettheRest";

function Main() {
  return (
    <div className="my-8">
      <Badges />
      <PopularBlogs />
      <FeaturedBlogs />
      <OurValues />
      <div className="md:px-28 px-4">
        <FreeQuote />
      </div>
      <MoreArticles />
      <StayInKnow />
      <div className="md:px-28 px-4">
        <ForgettheRest />
      </div>
    </div>
  );
}

export default Main;
