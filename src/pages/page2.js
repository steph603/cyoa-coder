import React from "react";

var page2 = {
  title: "School",
  image: "img/sci.png",
  text: () => (
    <div>
      <p>
        At school, the girl loved science, especially biology! </p>
        <p> How do things work? </p>
        <p> What are they made of? </p> 
        <p> How can we use this to make lives better??<p/>
        <br />
        <p>Everyone said the girl should be a doctor, or a veterinarian. She loved
        taking care of pets, so a veterinarian seemed the obvious choice for
        her.  </p>
        <p>She also excelled in her computer classes, but wanted to learn
        MORE! She was stuck learning word processing when she wanted to know how
        computers worked and how to build exciting games and websites for people
        to enjoy.</p>
        <p> She had a big choice to make about what to study at
        university…
        </p>
     </p>
        <br />
    </div>
  ),
  options: [
    {
      text: "Computer Science!",
      turnTo: 3,
    },
    {
      text: "Veterinary Science!",
      turnTo: 4,
    },
  ],
};

export default page2;
