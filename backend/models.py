from flask_sqlalchemy import SQLAlchemy
from flask_security import UserMixin, RoleMixin, SQLAlchemyUserDatastore
from datetime import datetime

db = SQLAlchemy()

class user(db.Model, UserMixin):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(255), unique=True)
    password = db.Column(db.String(255))
    first_name = db.Column(db.String(100))
    last_name = db.Column(db.String(100))
    phone_number = db.Column(db.String(20))
    address = db.Column(db.String(255))
    roles = db.relationship('Role', secondary='roles_users', backref=db.backref('users', lazy='dynamic'))
    active = db.Column(db.Boolean(), default=True)
    fs_uniquifier = db.Column(db.String(255), unique=True, nullable=False)
    fs_token_uniquifier = db.Column(db.String(255), unique=True, nullable=False)

    roles = db.relationship('Role', secondary='roles_users', backref=db.backref('users', lazy='dynamic'))

class Role(db.Model, RoleMixin):
    __tablename__ = 'roles'
    id = db.Column(db.Integer(), primary_key=True)
    name = db.Column(db.String(80), unique=True)
    description = db.Column(db.String(255))

class RolesUsers(db.Model):
    __tablename__ = 'roles_users'
    id = db.Column(db.Integer(), primary_key=True)
    user_id = db.Column(db.Integer(), db.ForeignKey('users.id'))
    role_id = db.Column(db.Integer(), db.ForeignKey('roles.id'))


class Trek(db.Model):
    __tablename__ = "treks"
    id = db.Column(db.Integer, primary_key=True)
    trek_name = db.Column(db.String(150), nullable=False)
    location = db.Column(db.String(150), nullable=False)
    description = db.Column(db.Text)
    difficulty = db.Column(db.Enum("Easy","Moderate","Hard"),nullable=False)
    duration = db.Column(db.Integer)
    

class TrekLog(db.Model):
    __tablename__ = "trek_logs"

    id = db.Column(db.Integer, primary_key=True)

    trek_id = db.Column(
        db.Integer,
        db.ForeignKey("treks.id")
    )

    updated_by = db.Column(
        db.Integer,
        db.ForeignKey("users.id")
    )

    action = db.Column(db.String(200))

    timestamp = db.Column(
        db.DateTime,
        default=datetime.utcnow
    )
