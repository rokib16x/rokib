import React, { useState, useEffect, useCallback } from 'react';

type TetrominoShape = (string | number)[][];

interface Tetromino {
  shape: TetrominoShape;
  color: string;
}

type TetrominosType = {
  [key: string]: Tetromino;
};

const TETROMINOS: TetrominosType = {
  0: { shape: [[0]], color: 'bg-gray-800' },
  I: {
    shape: [
      [0, 'I', 0, 0],
      [0, 'I', 0, 0],
      [0, 'I', 0, 0],
      [0, 'I', 0, 0]
    ],
    color: 'bg-blue-500',
  },
  J: {
    shape: [
      [0, 'J', 0],
      [0, 'J', 0],
      ['J', 'J', 0]
    ],
    color: 'bg-orange-500',
  },
  L: {
    shape: [
      [0, 'L', 0],
      [0, 'L', 0],
      [0, 'L', 'L']
    ],
    color: 'bg-yellow-500',
  },
  O: {
    shape: [
      ['O', 'O'],
      ['O', 'O'],
    ],
    color: 'bg-green-500',
  },
  S: {
    shape: [
      [0, 'S', 'S'],
      ['S', 'S', 0],
      [0, 0, 0]
    ],
    color: 'bg-red-500',
  },
  T: {
    shape: [
      [0, 0, 0],
      ['T', 'T', 'T'],
      [0, 'T', 0]
    ],
    color: 'bg-purple-500',
  },
  Z: {
    shape: [
      ['Z', 'Z', 0],
      [0, 'Z', 'Z'],
      [0, 0, 0]
    ],
    color: 'bg-pink-500',
  }
};

const randomTetromino = (): Tetromino => {
  const tetrominos = 'IJLOSTZ';
  const randTetromino = tetrominos[Math.floor(Math.random() * tetrominos.length)] as keyof typeof TETROMINOS;
  return TETROMINOS[randTetromino];
};

type Cell = [string | number, string];

const createBoard = (width: number, height: number): Cell[][] =>
  Array.from(Array(height), () => Array(width).fill([0, 'clear'] as Cell));

const BOARD_WIDTH = 10;
const BOARD_HEIGHT = 20;

interface Position {
  x: number;
  y: number;
}

const TetrisMine: React.FC = () => {
  const [board, setBoard] = useState<Cell[][]>(createBoard(BOARD_WIDTH, BOARD_HEIGHT));
  const [currentPiece, setCurrentPiece] = useState(randomTetromino());
  const [currentPosition, setCurrentPosition] = useState<Position>({ x: 3, y: 0 });
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  const rotate = useCallback((matrix: TetrominoShape): TetrominoShape => {
    return matrix.map((_, index) => matrix.map(col => col[index]).reverse());
  }, []);

  const checkCollision = useCallback((piece: TetrominoShape, position: Position, movement: Position): boolean => {
    for (let y = 0; y < piece.length; y++) {
      for (let x = 0; x < piece[y].length; x++) {
        if (piece[y][x] !== 0) {
          if (
            !board[y + position.y + movement.y] ||
            !board[y + position.y + movement.y][x + position.x + movement.x] ||
            board[y + position.y + movement.y][x + position.x + movement.x][1] !== 'clear'
          ) {
            return true;
          }
        }
      }
    }
    return false;
  }, [board]);

  const updateBoard = useCallback(() => {
    const newBoard = board.map(row =>
      row.map(cell => (cell[1] === 'clear' ? [0, 'clear'] as Cell : cell))
    );

    currentPiece.shape.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value !== 0) {
          newBoard[y + currentPosition.y][x + currentPosition.x] = [
            value,
            `${currentPiece.color} border border-gray-700`,
          ];
        }
      });
    });

    const fullRows = newBoard.reduce<number[]>((acc, row, index) => {
      if (row.every(cell => cell[1] !== 'clear')) {
        acc.push(index);
      }
      return acc;
    }, []);

    if (fullRows.length > 0) {
      const newScore = score + fullRows.length * 10;
      setScore(newScore);
      const newBoardAfterClear = newBoard.filter((_, index) => !fullRows.includes(index));
      const newRows = Array.from({ length: fullRows.length }, () => 
        Array(BOARD_WIDTH).fill([0, 'clear'] as Cell)
      );
      setBoard([...newRows, ...newBoardAfterClear]);
    } else {
      setBoard(newBoard);
    }
  }, [board, currentPiece, currentPosition, score]);

  const movePlayer = useCallback((dir: number) => {
    if (!checkCollision(currentPiece.shape, currentPosition, { x: dir, y: 0 })) {
      setCurrentPosition(prev => ({ ...prev, x: prev.x + dir }));
    }
  }, [checkCollision, currentPiece.shape, currentPosition]);

  const drop = useCallback(() => {
    if (!checkCollision(currentPiece.shape, currentPosition, { x: 0, y: 1 })) {
      setCurrentPosition(prev => ({ ...prev, y: prev.y + 1 }));
    } else {
      if (currentPosition.y < 1) {
        setGameOver(true);
        return;
      }
      updateBoard();
      setCurrentPiece(randomTetromino());
      setCurrentPosition({ x: 3, y: 0 });
    }
  }, [checkCollision, currentPiece.shape, currentPosition, updateBoard]);

  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    if (gameOver) return;

    if (event.key === 'ArrowLeft') movePlayer(-1);
    if (event.key === 'ArrowRight') movePlayer(1);
    if (event.key === 'ArrowDown') drop();
    if (event.key === 'ArrowUp') {
      const rotated = rotate(currentPiece.shape);
      if (!checkCollision(rotated, currentPosition, { x: 0, y: 0 })) {
        setCurrentPiece(prev => ({ ...prev, shape: rotated }));
      }
    }
  }, [gameOver, movePlayer, drop, rotate, currentPiece.shape, checkCollision, currentPosition]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  useEffect(() => {
    const gameLoop = setInterval(() => {
      drop();
    }, 1000);

    return () => {
      clearInterval(gameLoop);
    };
  }, [drop]);

  return (
    <div className="flex flex-col items-center justify-center h-full bg-gray-900 p-4">
      <div className="text-2xl font-bold text-white mb-4">Score: {score}</div>
      <div className="border-4 border-gray-700 bg-gray-800">
        {board.map((row, y) => (
          <div key={y} className="flex">
            {row.map((cell, x) => (
              <div
                key={x}
                className={`w-6 h-6 ${
                  (cell[1] as string) !== 'clear'
                    ? cell[1] as string
                    : currentPiece.shape[y - currentPosition.y]?.[x - currentPosition.x]
                    ? `${currentPiece.color} border border-gray-700`
                    : 'bg-gray-900'
                }`}
              />
            ))}
          </div>
        ))}
      </div>
      {gameOver && (
        <div className="text-2xl font-bold text-red-500 mt-4">Game Over!</div>
      )}
    </div>
  );
};

export default TetrisMine;