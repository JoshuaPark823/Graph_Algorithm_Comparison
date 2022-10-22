import Tile from "./Tile";

class Board {

  private _board: Tile[][] = [[]];

  constructor(size: number) {
    for (let i = 0; i < size; i++) {
      this._board[i] = [];
      for (let j = 0; j < size; j++) {
        this._board[i][j] = new Tile();
      }
    }
  }

  getBoard(): Tile[][] {
    return this._board;
  }

  printBoard(): void {
    console.log(this._board)
  }
}

export default Board