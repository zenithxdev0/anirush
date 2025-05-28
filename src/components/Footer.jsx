import React from "react";
import Container from "../util/Container";
import footerpic from "../assets/footerpic.png";
import Logo from "../util/Logo";
import Alphabet from "./Alphabet";

const Footer = ({currentChar}) => {
  const characters = [
    "All",
    // "#",
    "0-9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  return (
    <footer className="block w-full bg-neutral-800 py-4 bottom-0">
      <Container className={`space-y-4`}>
        <Alphabet currentChar={currentChar} className={'flex gap-2 flex-wrap'}/>

        <div>
            <Logo />
          <p className="text-white font-medium">
            <small>Copyright © AniRush. All Rights Reserved</small>
          </p>
          <p className="text-white">
            <small>
              Disclaimer: This site does not store any files on its server. All
              contents are provided by non-affiliated third parties.
            </small>
          </p>
        </div>

        <img
          src={footerpic}
          alt="vampire"
          className="w-96 absolute bottom-[-2rem] right-0 z-0 xl:block hidden"
        />
      </Container>
    </footer>
  );
};

export default Footer;
