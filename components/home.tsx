import React from "react";
import Fader from "./fader";
import { NextPage } from "next";

const Home: NextPage = () => (
  <div className="fadeIn">
    <div className="__headline">
      <h1>
        Max Smouha is a developer <Fader />
      </h1>
    </div>

    <div className="my2">
      <p className="h6 kern">RECENT PROJECTS</p>
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
  </div>
);

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
    url: "http://pianofriend.cool/",
    desc: "vanilla js"
  },
  {
    name: "Net Effective Rent",
    url: "https://squamuglia.github.io/neteffect/",
    desc: "vanilla js"
  }
];
