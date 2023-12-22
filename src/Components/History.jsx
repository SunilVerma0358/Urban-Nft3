import React from "react";
import HistoryOne from "../assets/image/HistoryOne.webp";
import HistoryTwo from "../assets/image/HistoryTwo.webp";
import HistoryThree from "../assets/image/HistoryThree.webp";
import HistoryLogo from "../assets/image/HistoryLogo.webp";

const History = () => {
  const cardOne = [
    {
      sre: HistoryOne,
      heading: "Cet #6882",
      phara: "Cets on Creck",
      sre2: HistoryLogo,
      headingTwo: "250",
    },
    {
      sre: HistoryTwo,
      heading: "Bored Ape #981",
      phara: "Bored Ape Solana Club",
      sre2: HistoryLogo,
      headingTwo: "38",
    },
    {
      sre: HistoryThree,
      heading: "SolPunk #7803",
      phara: "SolPunks",
      sre2: HistoryLogo,
      headingTwo: "15",
    },
  ];
  const HistoryCard = cardOne.map((p) => {
    return (
      <div className="flex items-center justify-between pt-[11px]  px-2">
        <div className="flex gap-[11px] items-center">
          <img className="rounded-[60px]" src={p.sre} alt="hero" />
          <div>
            <h3 className="text-zinc-700 text-sm font-bold font-Inter leading-none">
              {p.heading}
            </h3>
            <p className="text-zinc-700 text-xs font-normal font-Inter leading-[13.92px] pt-[6px]">
              {p.phara}
            </p>
          </div>
        </div>{" "}
        <div className="flex items-center">
          <img src={p.sre2} alt="smallHistory" />
          <span>{p.headingTwo}</span>
        </div>
      </div>
    );
  });
  return <div>{HistoryCard}</div>;
};

export default History;
