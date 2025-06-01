import React from "react";
import Container from "../util/Container";
import footerpic from "../assets/footerpic.png";
import Logo from "../util/Logo";
import Alphabet from "./Alphabet";

const Footer = ({currentChar}) => {

  return (
    <footer className="block w-full bg-neutral-800 py-4 bottom-0">
      <Container className={`space-y-4`}>
        <Alphabet currentChar={currentChar} className={'flex gap-2 flex-wrap'}/>

        <div>
            <Logo className={'w-24'} />
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
          className="w-72 absolute bottom-[-2rem] right-0 z-0 xl:block hidden"
        />
      </Container>
    </footer>
  );
};

export default Footer;
