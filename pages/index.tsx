import React, { useState, MouseEvent } from "react";
import Fader from "../components/fader";
import { NextPage } from "next";

const Home: NextPage = () => {
  const [showNotes, setShowNotes] = useState<boolean>(false);
  const [mousePosition, setMousePosition] = useState<{
    left: number;
    top: number;
  }>({ left: 0, top: 0 });

  const trackPosition = (e: MouseEvent) =>
    setMousePosition({ left: e.clientX, top: e.clientY });

  return (
    <>
      <div className="__headline">
        <h1>
          Max Smouha is a developer <Fader />
        </h1>
      </div>

      <h6 className="h6 kern my2 mxa pointer">
        VAGUELY RECENT PROJECTS{" "}
        <sup
          onMouseMove={trackPosition}
          onMouseOver={() => setShowNotes(true)}
          onMouseOut={() => setShowNotes(false)}
        >
          1
        </sup>
      </h6>

      <div className="f fw mt1">
        {links.map((link, i) => (
          <div className="col-25 px075 my1" key={i}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              <h5>{link.name}</h5>
            </a>
            <p className="mt05">{link.desc}</p>
          </div>
        ))}
      </div>

      <div className="x left ac mt1 mb2">
        <a href="mailto:maxsmouha@gmail.com">email</a>{" "}
        <a href="https://github.com/squamgulia">git</a>{" "}
      </div>

      {showNotes && (
        <div style={mousePosition} className="abs al p1 tooltip">
          Most of my current projects are ongoing. This is more or less a
          collection of early, extant work.
        </div>
      )}
    </>
  );
};

export default Home;

const links: Array<{
  name: any;
  url: string;
  desc: string;
}> = [
  {
    name: "TriBeCa Art Walk",
    url: "https://www.tribecaarts.org",
    desc: "react, mapbox"
  },
  { name: <s>Fridge Freud</s>, url: "", desc: "react, node, returning soon" },
  {
    name: "Piano Friend",
    url: "https://pianofriend.netlify.com/",
    desc: "vanilla js"
  },
  {
    name: "Net Effective Rent",
    url: "https://squamuglia.github.io/neteffect/",
    desc: "vanilla js"
  }
];
