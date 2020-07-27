import React from "react";

var page9 = {
  title: "Things don't always go to plan...",
  image: "img/path.png",
  text: () => (
    <div>
      <p>
         Things don’t always go to plan, thought the girl. The girl wondered
        what else she could do with her talents that would be fulfilling and
        allow her to enjoy her personal life?
      </p>
    </div>
  ),
  options: [
    {
      text: "Teaching veterinary nurses?",
      turnTo: 10,
    },
    {
      text: "Fixing ’blood-sucking robots’?!",
      turnTo: 11,
    },
    {
      text: "Better food for pets??",
      turnTo: 12,
    },
    {
      text: "Maybe I could learn to code after all???",
      turnTo: 13,
    },
  ],
};

export default page9;
