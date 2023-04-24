from flask import Flask, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_migrate import Migrate
from flask_restful import Api, Resource
from dotenv import load_dotenv
from os import environ

load_dotenv()

# Create App instance
app = Flask(__name__)

# Add DB URI from .env
app.config['SQLALCHEMY_DATABASE_URI'] = environ.get('SQLALCHEMY_DATABASE_URI')

# Registering App w/ Services
db = SQLAlchemy(app)
ma = Marshmallow(app)
api = Api(app)
CORS(app)
Migrate(app, db)

# Models
class Song(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    title = db.Column(db.String(255), nullable = False)
    artist = db.Column(db.String(255), nullable = False)
    album = db.Column(db.String(255), nullable = False)
    release_date = db.Column(db.String(255), nullable = False)
    genre = db.Column(db.String(255))

    def __repr__(self):
        return f'{self.genre} {self.release_date} {self.album} {self.artist} {self.title}'

# Schemas
class SongSchema(ma.Schema):
    class Meta:
        fields = ('id', 'title', 'artist', 'album', 'release_date', 'genre')

song_schema = SongSchema()
songs_schema = SongSchema(many=True)




# Resources



# Routes
