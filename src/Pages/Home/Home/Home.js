import React from "react";
import Banner from "../Banner/Banner";
import HomeEvents from "../HomeEvents/HomeEvents";
import Reviews from "../Reviews/Reviews";
import TeamMember from "../TeamMember/TeamMember";
import TeamMembers from "../TeamMembers/TeamMembers";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HomeEvents></HomeEvents>
      <Reviews></Reviews>
      <TeamMembers></TeamMembers>
    </div>
  );
};

export default Home;
