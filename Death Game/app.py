import random
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

num = None  # Initially no number is generated
attempted = False  # Track if the user has already guessed


@app.route('/play', methods=['POST'])
def start_game():
    global num, attempted
    num = random.randint(1, 100)
    attempted = False
    return jsonify({"message": "Game started, number is set."})

@app.route('/guess', methods=['POST'])
def guess_number():
    global attempted

    if num is None:
        return jsonify({"error": "Game not started. Click Play first."}), 400
    
    if attempted:
        return jsonify({"error": "You have already guessed once! Restart the game to play again."}), 403


    try:
        data = request.get_json()
        guess = int(data.get("guess"))

        if guess < 1 or guess > 100:
            return jsonify({"error": "Guess must be between 1 and 100"}), 400

        attempted = True
        if guess == num:
            return jsonify({"result": "win"})
        else:
            return jsonify({"result": "lose"})
    
    except (ValueError, TypeError):
        return jsonify({"error": "Invalid input, please provide a valid integer"}), 400

if __name__ == '__main__':
    app.run(debug=False)
