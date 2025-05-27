import React from "react";
import Container from "../util/Container";
import footerpic from "../assets/footerpic.png";
import Logo from "../util/Logo";
const Footer = () => {
  const characters = [
    "All",
    "#",
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
        <div className="flex items-center gap-4">
          <strong className="text-amber-300">A-Z LIST</strong>
          <ins className="text-white">|</ins>
          <small className="text-white font-medium">
            Filter anime order by A to Z alphabet.
          </small>
        </div>

        <div className="flex">
          <div className="flex gap-2 flex-wrap">
            {characters.map((char, idx) => (
              <a href={`/anime-list/${char}?page=1`} key={idx}
                className={`text-black px-2.5 py-1.5 bg-amber-300 text-xs flex items-center justify-center text-center z-50 font-medium cursor-pointer hover:bg-amber-400 active:bg-amber-500`}
              >
                {char}
              </a>
            ))}
          </div>
        </div>

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
