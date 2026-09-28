import React from "react";
import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";

const App = () => {
  const users = [
    {
      img: "https://images.unsplash.com/photo-1762341104634-998bbee0ccba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2ZmZXNpb25hbHMlMjB3b21lbnxlbnwwfHwwfHx8MA%3D%3D",
      intro: " ",
      color: "royalblue",
      tag: "Satisfied",
    },
    {
      img: "https://images.unsplash.com/photo-1588410338542-63c826c2024a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fHdvcmtpbmclMjBwcm9mZmVzaW9uYWxzfGVufDB8fDB8fHww",
      intro: " ",
      color: "green",
      tag: "Underserved",
    },

    {
      img: "https://images.unsplash.com/photo-1747741744095-609572aa59ad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHdvcmtpbmclMjBwcm9mZmVzaW9uYWxzJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",
      intro: " ",
      color: "orange",
      tag: "UnderBanked",
    },

    {
      img: "https://images.unsplash.com/photo-1662483820416-9cfac24f459b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHdvcmtpbmclMjBwcm9mZmVzaW9uYWxzJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",
      intro: " ",
      color: "pink",
      tag: "Bagunnav",
    },
  ];
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  );
};

export default App;
