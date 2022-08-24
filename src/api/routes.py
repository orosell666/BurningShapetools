"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Snowparks, Country, Companies, Jobs
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


@api.route('/snowparks', methods=['POST'])
def snowparks():
    id = request.json.get('id')
    name = request.json.get('name')
    resort = request.json.get('resort')
    location = request.json.get('location')
    country = request.json.get('country')
    shapers = request.json.get('shapers')
    bullydrivers = request.json.get('bullydrivers')
    parkweb = request.json.get('parkweb')
    image_url = request.json.get('image_url')
    comment = request.json.get('comment')
    machines = request.json.get('machines')
    country_id = request.json.get('country_id')
    companies_id = request.json.get('companies_id')
    

    snowparks= Snowparks(id = id, name = name, resort = resort , location = location , country = country , shapers = shapers , bullydrivers = bullydrivers, parkweb = parkweb, image_url = image_url, comment = comment, machines = machines, country_id = country_id, companies_id = companies_id)
    db.session.add(snowparks)
    db.session.commit()
    

    data_response= {
        "id": snowparks.id,
        "name": snowparks.name,
        "resort": snowparks.resort,
        "location": snowparks.location,
        "country": snowparks.country,
        "shapers": snowparks.shapers,
        "bullydrivers": snowparks.bullydrivers,
        "parkweb": snowparks.parkweb,
        "image_url": snowparks.image_url,
        "comment": snowparks.comment,
        "machines": snowparks.machines,
        "country_id": snowparks.country_id,
        "companies_id": snowparks.companies_id
        

    }
    return jsonify(data_response), 200

@api.route('/snowparks', methods=['GET'])
def GetSnowparks():
    snowparks = Snowparks.query.all()
    data = [snowpark.serialize() for snowpark in snowparks]

    return jsonify(data), 200

@api.route('/selectedsnowparks/<int:id>', methods=['GET'])
def GetSnowparksDetail(id):
    snowpark = Snowparks.query.filter_by(id = id)

    all_parks = list(map(lambda x: x.serialize(), snowparks()))

    return jsonify(all_parks), 200

@api.route('/snowparkbycountry/<country>', methods=['GET'])
def GetSnowparkByCountry(country):

    snowparks = Snowparks.query.filter_by(country_id = country)

    all_parks = list(map(lambda x: x.serialize(), snowparks))

    return jsonify(all_parks), 200


@api.route('/companies', methods=['POST'])
def GetCompany():
    name = request.json.get('name')
    web = request.json.get('web')
    location = request.json('location')


    companies = Companies(name= name)
    db.session.add(companies)
    db.session.commit()

    data_response= {
        "name": companies.name,
        "web": companies.web
        
    }
    return jsonify(data_response), 200

@api.route('/companies', methods=['GET'])
def getcompanie():
    
    companies = Companies.query.all()
    listCompanies = []
    for companies in companies:
        listCompanies.append(companies.serialize()) 

    return jsonify(listCompanies), 200

@api.route('/countries', methods=['POST'])
def GetCountry():
    name = request.json.get('name')

    countries = Country(name= name)
    db.session.add(country)
    db.session.commit()

    data_response= {
        "name": country.name
    }
    return jsonify(data_response), 200

@api.route('/countries', methods=['GET'])
def getCountries():
    
    countries = Country.query.all()
    listCountries = []
    for countries in countries:
        listCountries.append(countries.serialize()) 

    return jsonify(listCountries), 200

@api.route('/loadcountries/<int:id>', methods=['GET'])
def getParkByCountry(id):
    
   countries = Country.query.all() #creo que tengo que filtar el quiery. filter_by mirar-lo!!! si filtra hacer un map
   listCountries = []
   for countries in countries:
        listCountries.append(countries.serialize()) 

   return jsonify(countries.serialize()), 200
#list(map(lambda countries: countries.serialize(), countries))

@api.route('/jobs', methods=['POST'])
def GetJobs():
    description = request.json.get('description')
    id = request.json.get('id')

    jobs = Jobs(description= description)
    db.session.add(jobs)
    db.session.commit()

    data_response= {
        "description": jobs.description,
        "id": jobs.id
    }
    return jsonify(data_response), 200

@api.route('/jobs', methods=['GET'])
def getJobs():
    
    jobs = Jobs.query.all()
    listJobs = []
    for jobs in jobs:
        listJobs.append(jobs.serialize()) 

    return jsonify(listJobs), 200
