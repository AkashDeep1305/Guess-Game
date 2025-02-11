🔢 Death (Guessing Game) 🎮
A simple Flask + React-based game where you guess a number between 1 and 100. You only get one attempt—win and survive, lose and... well, you know. 😈

🚀 Features
✅ Generates a random number at the start of each game.
✅ Allows only one guess per game.
✅ Displays error messages for invalid inputs.
✅ Shows a win or lose message based on your guess.

🛠️ Setup Instructions
1️⃣ Backend (Flask) Setup
Install Python (if not already installed).
Install dependencies:
bash
Copy
pip install flask flask-cors
Run the Flask server:
bash
Copy
python app.py
The backend will start on http://127.0.0.1:5000/.
2️⃣ Frontend (React) Setup
⚠️ NOTE: node_modules is NOT included in this repository. Run npm install to install the required dependencies.

Navigate to the React folder:
bash
Copy
cd app  # Change to your React project directory
Install dependencies:
bash
Copy
npm install
Start the React app:
bash
Copy
npm start
The frontend will be available at http://localhost:3000/.
🎯 How to Play?
Click the "Play Game" button to start.
Enter a number between 1 and 100 and submit.
If you guess correctly, you win! 🎉
If you guess wrong... you die. ☠️
🖥️ Tech Stack
Backend: Flask + Python
Frontend: React
Communication: Fetch API (REST)
📜 License
This project is open-source and free to use.

💡 Contributing
Want to improve this project? Feel free to fork it, submit PRs, or raise issues.

