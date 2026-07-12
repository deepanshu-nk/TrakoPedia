from flask import Flask, render_template
from flask_security import Security, SQLAlchemyUserDatastore, hash_password
from backend.models import db
from backend.config import config
from backend.userdatabase import user_datastore
from flask_restful import Api




def create_app():
    app = Flask(__name__)
    app.config.from_object(config)   # Load configuration from config.py
    db.init_app(app)                # Initialize the database with the Flask app
    app.security = Security(app, user_datastore)    # Initialize Flask-Security with the app and user datastore

    api = Api(app)                   # Initialize Flask-RESTful API with the app

    with app.app_context():
        db.create_all()              # Create database tables if they don't exist

        admin_role = user_datastore.find_or_create_role(name='admin', description='Administrator')
        user_role = user_datastore.find_or_create_role(name='user', description='Regular User')
        traker_role = user_datastore.find_or_create_role(name='traker', description='Traker')

        if not user_datastore.find_user(email='admin@example.com'):
            user_datastore.create_user(email = 'admin@example.com', password = hash_password('password'), roles = [admin_role])
        
        if not user_datastore.find_user(email = 'user@example.com'):
            user_datastore.create_user(email = 'user@example.com', password = hash_password('password'), roles = [user_role])
        
        if not user_datastore.find_user(email = 'traker@example.com'):
            user_datastore.create_user(email = 'traker@example.com', password = hash_password('password'), roles = [traker_role])

        db.session.commit()  # Commit the changes to the database

    return app, api



app, api = create_app()


from backend.authentication import LoginAPI,LogoutAPI,RegisterAPI,AdminDashboardAPI

api.add_resource(LoginAPI, '/api/login')  # Add the LoginAPI resource to the API with the endpoint '/api/login'
api.add_resource(LogoutAPI, '/api/logout')  # Add the LogoutAPI resource to the API with the endpoint '/api/logout'
api.add_resource(RegisterAPI, '/api/register')  # Add the RegisterAPI resource to the API with the endpoint '/api/register'
api.add_resource(AdminDashboardAPI, '/api/admin/dashboard')  # Add the AdminDashboardAPI resource to the API with the endpoint '/api/admin/dashboard'

from backend.crud_api import TrekAPI
api.add_resource(TrekAPI, '/api/treks', '/api/treks/<int:track_id>')  # Add the TrekAPI resource to the API with the endpoints '/api/treks' and '/api/treks/<int:track_id>'

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == "__main__":
    app.run(debug=True)