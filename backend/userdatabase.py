from flask_security import Security, SQLAlchemyUserDatastore
from backend.models import db, user, Role

user_datastore = SQLAlchemyUserDatastore(db, user, Role)