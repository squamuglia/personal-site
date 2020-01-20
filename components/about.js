import React from "react";

const About = ({ toggle, style }) => (
  <div
    className={"__about abs top left vw vh f aic jcc border p1 z10 " + style}
    onClick={toggle}
  >
    <div className="fa gutter ac">
      <div className="round mxa mb1 __me" />
      <h3>Hi, it's me.</h3>
      <p>
        I'm a full-stack design developer based in Brooklyn. I build friendly
        things in React, Node, WordPress {"&"} Shopify.
      </p>
      <p>
        I like fun projects and people. If you'd like to collaborate,{" "}
        <a href="mailto:maxsmouha@gmail.com">email me</a>, or just feel a sense
        of satisfaction from knowing you could contact me at any time.
      </p>
    </div>
  </div>
);

export default About;
