import { useEffect } from 'react';
import './App.css';
import Board from './models/Board';

const board = new Board(30);

const App = () => {

  useEffect(() => {
    board.printBoard()
  }, [])

  return (
    <div className='App'>
      <div className='Board'>
        {
          board.getBoard().map((row, i1) => {
            return <div key={i1} className='Row'>
              {
                row.map((tile, i2) => {

                  const entityType = tile.getEntity().getType()
                  const entityClass = `Tile Tile-${entityType}`

                  return <div key={i2} className={entityClass}></div>
                })
              }
            </div>
          })
        }
      </div>
    </div>
  );
}

export default App;
