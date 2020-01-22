import React, { useState } from "react";
import Fader from "../components/fader";
import { NextPage } from "next";

const Home: NextPage = () => {
  const [showNotes, setShowNotes] = useState<boolean>(false);

  return (
    <>
      <div className="__headline">
        <h1>
          Max Smouha is a developer <Fader />
        </h1>
      </div>

      <div className="my2">
        <p className="h6 kern">
          VAGUELY RECENT PROJECTS{" "}
          <sup className="pointer" onClick={() => setShowNotes(!showNotes)}>
            1
          </sup>
        </p>
      </div>

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
        <div className="abs bottom left ml2 mb1 al">
          <p>
            1. Most of my current work is ongoing. This is more or less a
            collection of early, extant work.
          </p>
        </div>
      )}
    </>
  );
};

export default Home;

const links: Array<{
  name: string;
  url: string;
  desc: string;
}> = [
  {
    name: "TriBeCa Art Walk",
    url: "https://www.tribecaarts.org",
    desc: "react, mapbox"
  },
  { name: "Fridge Freud", url: "http://freud.fun", desc: "react, node" },
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
