"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Snowparks, Country, Companies
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from datetime import datetime
import cloudinary
import cloudinary.uploader
import json
from sqlalchemy import desc
api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/userregister', methods=['POST'])
def registro():
    email = request.json.get('email')
    password = request.json.get('password')
    name = request.json.get('name')
    lastName = request.json.get('lastName')
    phonenumber = request.json.get('phonenumber')
    birthdate = request.json.get('birthdate')
    print(request.json)
    birthdate = datetime.strptime(birthdate, '%d/%m/%Y') #la fecha hay que escribirla asi: ida/mes/año 2/5/2025


    user = User(email= email , password= password, name= name, lastName= lastName, phonenumber= phonenumber,  birthdate= birthdate, is_active= True)
    db.session.add(user)
    db.session.commit()

    data_response= {
        "email": user.email,
        "password": user.password,
        "name": user.name,
        "lastName": user.lastName,
        "phonenumber": user.phonenumber,
        "birthdate": user.birthdate
    }
    return jsonify(data_response), 200


@api.route('/snowparks', methods=['GET' , 'POST'])
def snowparks():
    id = request.json.get('id')
    name = request.json.get('name')
    resort = request.json.get('resort')
    location = request.json.get('location')
    country = request.json.get('country')
    shapers = request.json.get('shapers')
    bullydrivers = request.json.get('bulydrivers')

    snowparks= Snowparks(id = id, name = name, resort = resort , location = location , country = country , shapers = shapers , bullydrivers = bullydrivers)
    db.session.add(snowparks)
    db.session.commit()
    db.session.get(snowparks) 

    data_response= {
        "id": snowparks.id,
        "name": snowparks.name,
        "resort": snowparks.resort,
        "location": snowparks.location,
        "country": snowparks.country,
        "shapers": snowparks.shapers,
        "bullydrivers": snowparks.bullydrivers,
    }
    return jsonify(data_response), 200

