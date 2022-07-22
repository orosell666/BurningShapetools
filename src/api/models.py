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


    
    country_id = db.Column(db.Integer, db.ForeignKey('country.id'),
        nullable=False)
    country = db.relationship('Country', backref='country', lazy=True, cascade = "all,delete")
    #companies_id = db.Column(db.Integer, db.ForeignKey('companies.id'),
       # nullable=False)
    #companies = db.relationship('Companies', backref='companies', lazy=True, cascade = "all,delete")

    def __repr__(self):
        return '<Snowparks >' %self.id

    def serialize(self):

        return {
            "id": self.id,
            "name": self.name,
            "resort": self.resort,
            "location": self.location,
            "country": self.country,
            "shapers": self.shapers,
            "bullydrivers": self.bullydrivers,


        }

class Companies(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    location = db.Column(db.String(80), nullable=False)
    


    snowparks_id = db.Column(db.Integer, db.ForeignKey('snowparks.id'),
        nullable=False)
    snowparks = db.relationship('Snowparks', backref='snowparks', lazy=True, cascade = "all,delete")
    
    #country_id = db.Column(db.Integer, db.ForeignKey('country.id'),
     #   nullable=False)
    #country = db.relationship('Country', backref='country', lazy=True, cascade = "all,delete")
    
    
    def serialize(self):

        return {
            "id": self.id,
            "name": self.name,
            "location": self.location,
            "country": self.country,
        }


class Country(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)

    
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'),
        nullable=False)
    user = db.relationship('User', backref='user', lazy=True, cascade = "all,delete")
    #snowparks_id = db.Column(db.Integer, db.ForeignKey('snowparks.id'),
    #    nullable=False)
    #snowparks = db.relationship('Snowparks', backref='snowparks', lazy=True, cascade = "all,delete")
    companies_id = db.Column(db.Integer, db.ForeignKey('companies.id'),
        nullable=False)
    companies = db.relationship('Companies', backref='companies', lazy=True, cascade = "all,delete")
    def serialize(self):

        return {
            "id": self.id,
            "name": self.name,
        }