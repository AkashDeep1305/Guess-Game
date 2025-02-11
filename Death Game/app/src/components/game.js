import React, { useState } from "react";

const Game = () => {
    const [gameStarted, setGameStarted] = useState(false);
    const [showInput, setShowInput] = useState(false);
    const [guess, setGuess] = useState("");
    const [result, setResult] = useState("");
    const [showGif, setShowGif] = useState(false);
    const [error, setError] = useState(null);
    const [disableInput, setDisableInput] = useState(false);


    const startGame = async () => {
        try {
            const response = await fetch("http://127.0.0.1:5000/play", {
                method: "POST"
            });

            if (response.ok) {
                setGameStarted(true);
                setResult("");
                setError(null);
                setDisableInput(false);
                setTimeout(() => {
                    setShowInput(true);
                }, 5000);
            }
        } catch (error) {
            setError("Error Connecting to server. Please try again later !");
        }

    };

    const handleGuess = async () => {
        try {
            const response = await fetch("http://127.0.0.1:5000/guess", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ guess: parseInt(guess) })
            });
            const data = await response.json();

            if (data.error) {
                setError(data.error);
                return;
            }

            setResult(data.result);
            setDisableInput(true);
            setError(null);

            if (data.result === "lose") {
                setShowGif(false);
                setTimeout(() => {
                    setShowGif(true);
                }, 200);
            }
        } catch (error) {
            setError("Error Fetching Data. Please try again later.");
        }

    };

    return (
        <div className="flex flex-col items-center mt-16 min-h-screen">
            {!gameStarted ? (
                <button onClick={startGame} className="px-6 py-3 bg-green-500 text-white rounded text-2xl cursor">
                    Play Game
                </button>
            ) : (
                <>
                    {!showInput ? (
                        <h1 className="text-3xl font-bold text-cyan-500">I'm thinking of a number between 1 and 100...</h1>
                    ) : (
                        <>
                            <h1 className="text-2xl font-bold mb-4 text-cyan-500">Guess a number between 1 and 100</h1>
                            <input
                                type="number"
                                value={guess}
                                onChange={(e) => setGuess(e.target.value)}
                                className="p-2 border rounded mb-4"
                                min="1"
                                max="100"
                                disabled={disableInput}
                            />
                            <button onClick={handleGuess} className="px-4 py-2 bg-blue-500 custom-button cursor text-white rounded">
                                Submit Guess
                            </button>

                            {error && <h3 className="text-red-500 font-bold mt-2">{error}</h3>}


                            {result === "lose" && (
                                <div className="mt-4">
                                    <p className="text-red-500 font-bold lose">Sorry, you're Dead! 😈</p>
                                    {showGif && <img src="./shot.gif" alt="Game Over" className="mt-2 w-64 h-auto rounded" />}
                                </div>
                            )}

                            {result === "win" && (
                                <p className="text-green-500 font-bold mt-4">Congratulations, you won Death Game!</p>
                            )}
                        </>
                    )}
                </>
            )}
        </div>
    );
};

export default Game;
