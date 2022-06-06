import React from "react";
import Banner from "../Banner/Banner";
import Reviews from "../Reviews/Reviews";
import TeamMember from "../TeamMember/TeamMember";
import TeamMembers from "../TeamMembers/TeamMembers";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Reviews></Reviews>
      <TeamMembers></TeamMembers>
    </div>
  );
};

export default Home;
