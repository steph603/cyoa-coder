import React from "react";

var page4 = {
  title: "University",
  image: "img/city.png",
  text: () => (
    <div>
      <p>
        The girl headed off to Vet School, she was excited and had big dreams
        about her future. </p>
        <p> 
        Unfortunately, she hated studying at university. </p>
        <p> Her lectures were
        boring, she didn’t feel like she was learning anything useful and she
        couldn’t imagine five or more years of living in her small university
        town. </p>
        <p>She was heartbroken, she thought that this was her dream. She had
        to consider her options again...
      </p>
    </div>
  ),
  options: [
    {
      text: "Study something else?",
      turnTo: 5,
    },
    {
      text: "If you can’t be a vet, you can always become a vet nurse… ",
      turnTo: 6,
    },
  ],
};

export default page4;
