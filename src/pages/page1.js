import React from "react";

var page1 = {
  title: "The Beginning",
  image: "img/cover.png",
  text: () => (
    <div>
      <p>
        There was once a girl who had cats and dogs… </p>
        <p> and rabbits and fish, </p>
        <p> and ferrets and birds,</p>  
        <p> and rats and chickens! </p> 
        <br />
        <p> And when she wasn’t busy
        caring for her furry, feathered or scaly friends, she loved to play
        video games, and somehow, had time for some digital pets too.</p>
        <p> She discovered that with a few lines of code, she could design and create
        her own toys and treats for her digital pets to enjoy, and then learned
        to build her own websites to share those creations with others around
        the world. </p>
        <p>
        She began to become curious about the possibilities of
        creations made with her computer...
      </p>
      <br />
    </div>
  ),
  options: [
    {
      text: "Next",
      turnTo: 2,
    },
  ],
};

export default page1;
