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
        return f'<User {self.email}>'

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

    def __repr__(self):
        return '<Snowparks %r>' %self.id

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
