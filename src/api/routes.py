"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required, JWTManager

api = Blueprint('api', __name__)

@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


# Create a route to auth enticate your users and return JWTs. The
# create_access_token() function is used to actually generate the JWT.
#Login - Inicio de sesión
@api.route("/login", methods=["POST"])
def login():
    email = request.json.get("email", None) #Se utiliza "none" para que no dejes el valor vacío.
    password = request.json.get("password", None)
    user = User.query.filter_by(email=email).first()

    if email != user.email or password != user.password: #Condicion para que salte error si ingresas email que no esté en la base de datos
        return jsonify({"msg": "Bad username or password"}), 401

    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)





