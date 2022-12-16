import { Socket } from "socket.io-client";
// import { IPlayMatrix, IStartGame } from "../../components/game";

class GameService {
  public async joinGameRoom(socket: Socket, roomId: string): Promise<boolean> {
    return new Promise((rs, rj) => {
      socket.emit("join_game", { roomId });
      socket.on("room_joined", () => rs(true));
      socket.on("room_join_error", ({ error }) => rj(error));
    });
  }

  public async updateGame(socket: Socket, playerOne: number[], playerTwo: number[]) {
    socket.emit("update_game", { playerOne: playerOne, playerTwo: playerTwo });
  }

  public async onGameUpdate(
    socket: Socket,
    listiner: (matrix1: number[], matrix2: number[]) => void
  ) {
    socket.on("on_game_update", ({ matrix1, matrix2 }) => listiner(matrix1, matrix2));
  }

  public async onStartGame(
    socket: Socket,
    listiner: (options: number[]) => void
  ) {
    socket.on("start_game", listiner);
  }

  public async gameWin(socket: Socket, message: string) {
    socket.emit("game_win", { message });
  }

  public async onGameWin(socket: Socket, listiner: (message: string) => void) {
    socket.on("on_game_win", ({ message }) => listiner(message));
  }
}

export default new GameService();