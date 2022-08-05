from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    name = db.Column(db.String(80), nullable=False)
    lastName = db.Column(db.String(120), nullable=False)
    phonenumber = db.Column(db.String(120), unique=False, nullable=False)
    birthdate = db.Column(db.DateTime, nullable=False)


    def __repr__(self):
        return {
            "user.id": self.id,
           
            # do not serialize the password, its a security breach
        }

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "name": self.name,
            "lastName": self.lastName,
            "phonenumber": self.phonenumber,
            "birthdate": self.birthdate,
            # do not serialize the password, its a security breach
        }

class Snowparks(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    resort = db.Column(db.String(80), nullable=False)
    location = db.Column(db.String(80), nullable=False)
    country = db.Column(db.String(80), nullable=False)
    shapers = db.Column(db.Integer, nullable=False)
    bullydrivers = db.Column(db.Integer, nullable=False)
    parkweb = db.Column(db.String(80), nullable=True)
    image_url = db.Column(db.String(300), nullable=True)
    comment = db.Column(db.String(1000), nullable=True)
    machines = db.Column(db.String(300), nullable=True)


    
    country_id = db.Column(db.Integer, db.ForeignKey('country.id'),
        nullable=False)
    country = db.relationship('Country', backref='countrySnowparks', lazy=True, cascade = "all,delete")
    companies_id = db.Column(db.Integer, db.ForeignKey('companies.id'),
        nullable=False)
    companies = db.relationship('Companies', backref='companies', lazy=True, cascade = "all,delete")


    def __repr__(self):
        return '<Snowparks >' %self.id

    def serialize(self):

        return {
            "id": self.id,
            "name": self.name,
            "resort": self.resort,
            "location": self.location,
            "country": self.country.name,
            "shapers": self.shapers,
            "bullydrivers": self.bullydrivers,
            "parkweb": self.parkweb,
            "image_url": self.image_url,
            "comment": self.comment,
            "machines": self.machines,
            "country_id": self.country.id,
            "companies_id": self.companies.id


        }

class Companies(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    location = db.Column(db.String(80), nullable=False)
    web = db.Column(db.String(180), nullable=False)
    
   
    
    
    def serialize(self):

        return {
            "id": self.id,
            "name": self.name,
            "location": self.location,
            "web": self.web,
           
        }


class Country(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    country_flag = db.Column(db.String(100), nullable=False)
 
    def serialize(self):

        return {
            "id": self.id,
            "name": self.name,
            "country_flag,": self.country_flag
        }

class Jobs(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String(300), nullable=False)
    jobtitle = db.Column(db.String(50), nullable=False)

    companies_id = db.Column(db.Integer, db.ForeignKey('companies.id'),
        nullable=False)
    companies = db.relationship('Companies', backref='companies<-job', lazy=True, cascade = "all,delete")

    def serialize(self):

        return {
            "id": self.id,
            "description": self.description,
            "jobtitle": self.jobtitle,
        }