from flask import Flask, render_template
from flask_socketio import SocketIO

app = Flask(__name__)

@app.route('/')
def home():
    return render_template("index.html")

sock = SocketIO(app)

@sock.on('message')
def msgHand(msg):
    print(msg)

if __name__ == "__main__":
    sock.run(app)

