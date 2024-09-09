import React, { useState, useEffect, useRef } from 'react';

interface Point {
    x: number;
    y: number;
}

const SnakeGame: React.FC = () => {
    const [snake, setSnake] = useState<Point[]>([{ x: 10, y: 10 }]);
    const [direction, setDirection] = useState<Point>({ x: 0, y: -1 });
    const [food, setFood] = useState<Point>({ x: 5, y: 5 });
    const [gameOver, setGameOver] = useState(false);
    const [score, setScore] = useState(0);

    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const gridSize = 20;
    const canvasSize = 300;
    const touchStartRef = useRef<Point | null>(null);

    const generateFoodPosition = () => {
        return {
            x: Math.floor(Math.random() * (canvasSize / gridSize)),
            y: Math.floor(Math.random() * (canvasSize / gridSize)),
        };
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        switch (e.key) {
            case 'ArrowUp':
                if (direction.y === 0) setDirection({ x: 0, y: -1 });
                break;
            case 'ArrowDown':
                if (direction.y === 0) setDirection({ x: 0, y: 1 });
                break;
            case 'ArrowLeft':
                if (direction.x === 0) setDirection({ x: -1, y: 0 });
                break;
            case 'ArrowRight':
                if (direction.x === 0) setDirection({ x: 1, y: 0 });
                break;
        }
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        const touch = e.touches[0];
        touchStartRef.current = { x: touch.clientX, y: touch.clientY };
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!touchStartRef.current) return;

        const touch = e.touches[0];
        const deltaX = touch.clientX - touchStartRef.current.x;
        const deltaY = touch.clientY - touchStartRef.current.y;

        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            if (deltaX > 0 && direction.x === 0) setDirection({ x: 1, y: 0 });
            else if (deltaX < 0 && direction.x === 0) setDirection({ x: -1, y: 0 });
        } else {
            if (deltaY > 0 && direction.y === 0) setDirection({ x: 0, y: 1 });
            else if (deltaY < 0 && direction.y === 0) setDirection({ x: 0, y: -1 });
        }

        touchStartRef.current = null; // Reset after move
    };

    useEffect(() => {
        if (gameOver) return;

        const interval = setInterval(() => {
            setSnake(prev => {
                const newSnake = [...prev];
                const head = { ...newSnake[0] };

                head.x += direction.x;
                head.y += direction.y;

                if (
                    head.x < 0 || head.x >= canvasSize / gridSize ||
                    head.y < 0 || head.y >= canvasSize / gridSize ||
                    newSnake.slice(1).some(segment => segment.x === head.x && segment.y === head.y)
                ) {
                    setGameOver(true);
                    clearInterval(interval);
                    return prev;
                }

                newSnake.unshift(head);

                if (head.x === food.x && head.y === food.y) {
                    setFood(generateFoodPosition());
                    setScore(prevScore => {
                        const newScore = prevScore + 1;
                        if (newScore === 10) alert('Not only are all the treasures of wisdom and knowledge hidden in Christ. But Christ in you is also your greatest hope of glory! Do everything you can to present everyone perfect in Christ!');
                        return newScore;
                    });
                } else {
                    newSnake.pop();
                }

                return newSnake;
            });
        }, 100);

        return () => clearInterval(interval);
    }, [direction, food, gameOver]);

    useEffect(() => {
        if (canvasRef.current) {
            const ctx = canvasRef.current.getContext('2d');
            if (ctx) {
                ctx.clearRect(0, 0, canvasSize, canvasSize);
                ctx.fillStyle = 'green';
                snake.forEach(segment => ctx.fillRect(segment.x * gridSize, segment.y * gridSize, gridSize, gridSize));

                ctx.fillStyle = 'red';
                ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize, gridSize);
            }
        }
    }, [snake, food]);

    const resetGame = () => {
        setSnake([{ x: 10, y: 10 }]);
        setDirection({ x: 0, y: -1 });
        setFood(generateFoodPosition());
        setGameOver(false);
    };

    return (
        <div
            tabIndex={0}
            onKeyDown={handleKeyDown}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            style={{ outline: 'none' }}
        >
            <canvas
                ref={canvasRef}
                width={canvasSize}
                height={canvasSize}
                style={{ border: '1px solid black'}}
            />
            {gameOver && (
                <div>
                    <h2>Continue fighting!</h2>
                    <button onClick={resetGame}>let's go again!</button>
                </div>
            )}
        </div>
    );
};

export default SnakeGame;
