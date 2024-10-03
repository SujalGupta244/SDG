from flask import Flask, request, jsonify
from flask_cors import CORS

from e_i_model import generate
from credit_card_model import generate_pci
# from conversions import conversion
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
    if data["dataset"] == "Employee Dataset":
        print(int(data["rows"]))
        person = generate(int(data["rows"]))
        return person, 200
    elif data["dataset"] == "PCI Dataset":
        pci = generate_pci(int(data["rows"]))
        return pci, 200
    # person = conversion(data["format"],person)
    return {}, 200


if __name__ == "__main__":
    app.run(debug=True)