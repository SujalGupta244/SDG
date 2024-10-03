from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
# def get_user(user_id):
def home():
    
    # print(data)
    return {"message":"This is SDG backend"}, 200



@app.route("/api/signup",methods=["POST"])
def create_user():
    # if request.method == "POST":
    data = request.get_json()
    print(data)
    return jsonify(data), 201


@app.route("/api/login",methods=["POST"])
def get_user():
    # if request.method == "POST":
    data = request.get_json()
    print(data)
    return jsonify(data), 200


@app.route("/api/refresh")
def refresh_user():
    # if request.method == "POST":
    data = request.get_json()
    print(data)
    return jsonify(data), 200



@app.route("/api/data",methods=["POST"])
def get_data():
    # if request.method == "POST":
    data = request.get_json()
    print(data)
    return jsonify(data), 200


if __name__ == "__main__":
    app.run(debug=True)