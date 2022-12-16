import React from "react";

export interface IGameContextProps {
  isInRoom: boolean;
  setInRoom: (inRoom: boolean) => void;
  playerSymbol: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
  setPlayerSymbol: (symbol: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9") => void;
  isPlayerTurn: boolean;
  setPlayerTurn: (turn: boolean) => void;
  isGameStarted: boolean;
  setGameStarted: (started: boolean) => void;
}

const defaultState: IGameContextProps = {
  isInRoom: false,
  setInRoom: () => {},
  playerSymbol: "1",
  setPlayerSymbol: () => {},
  isPlayerTurn: false,
  setPlayerTurn: () => {},
  isGameStarted: false,
  setGameStarted: () => {},
};

export default React.createContext(defaultState);