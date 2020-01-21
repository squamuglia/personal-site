import React from "react";
import { NextPage } from "next";

interface Props {
  toggle: () => void;
  style: string;
}

const About: NextPage<Props> = ({ toggle, style }) => (
  <div
    className={"bg-blue abs top left vw vh f aic jcc border p1 z10 " + style}
    onClick={toggle}
  >
    <div className="fa container-sm ac">
      <div className="round mxa mb1 __me" />
      <h3>Hi, it's me.</h3>
      <p>
        I'm a front-end developer based in Brooklyn with an eye for design and
        product. I build friendly things in React, Node, Shopify, {"&"} more.
      </p>
      <p>
        I currently work at{" "}
        <a href="https://www.simplehealth.com/" target="_blank">
          Simple Health
        </a>{" "}
        where we make birth control affordable and accessible online.
      </p>
      <p>
        I like fun projects and people, especially when they exploit surprising
        sensory phenomena. My interests include VR, Video Chat, SMS and
        experiential design.
      </p>
      <p>
        If you'd like to collaborate,{" "}
        <a href="mailto:maxsmouha@gmail.com">email me</a>, or just feel a sense
        of satisfaction from knowing you could contact me at any time.
      </p>
    </div>
  </div>
);

export default About;
