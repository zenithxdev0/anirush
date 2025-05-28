import React from "react";

const Alphabet = ({ currentChar, className }) => {
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

  //flex gap-2 flex-wrap

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <strong className="text-amber-300">A-Z LIST</strong>
        <ins className="text-white">|</ins>
        <small className="text-white font-medium">
          Filter anime order by A to Z alphabet.
        </small>
      </div>
      <div className={className}>
        {characters.map((char, idx) => (
          <a
            href={`/anime-list/${char}?page=1`}
            key={idx}
            className={`text-black px-2.5 py-1.5 bg-amber-300 text-xs flex items-center justify-center text-center z-50 font-medium cursor-pointer hover:bg-amber-400 active:bg-amber-500 
                  ${currentChar === char ? "bg-rose-500 text-white" : ""}`}
          >
            {char}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Alphabet;
