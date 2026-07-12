from flask_restful import Resource
from flask import request, jsonify, make_response
from backend.userdatabase import user_datastore
from flask_security import utils, auth_token_required, roles_required, hash_password
from backend.models import Trek, db 


class LoginAPI(Resource):
    def post(self):
        data = request.get_json()

        if not data:
            result = {
                "message": "login credentials are required",
            }
            return make_response(jsonify(result), 400)
        
        email = data.get('email', None)
        password = data.get('password', None)

        if not email or not password:
            result = {
                "message": "email and password are required",
            }
            return make_response(jsonify(result), 400)
        
        user = user_datastore.find_user(email=email)

        if not user:
            result = {
                "message": "Invalid email or password",
            }
            return make_response(jsonify(result), 401)
        
        if not utils.verify_password(password, user.password):
            result = {
                "message": "Invalid email or password",
            }
            return make_response(jsonify(result), 401)
        
        
        auth_token = user.get_auth_token()

        utils.login_user(user)  # Login user details are handled by Flask-Security

        response = {
            "message": "Login successful",
            "user_details": {
                "email": user.email,
                "role": [role.name for role in user.roles],
                "auth_token": auth_token 
            },
        }

        return make_response(jsonify(response), 200)



class LogoutAPI(Resource):
    @auth_token_required
    # @roles_required(['admin','user'])  # Only users with 'admin' or 'user' roles can access this endpoint
    def post(self):
        utils.logout_user()  # Logout user details are handled by Flask-Security
        response = {
            "message": "Logout successful",
        }
        return make_response(jsonify(response), 200)
    

class RegisterAPI(Resource):
    def post(self):
        data = request.get_json()

        if not data:
            result = {
                "message": "registration details are required",
            }
            return make_response(jsonify(result), 400)
        
        email = data.get('email', None)
        password = data.get('password', None)

        if not email or not password:
            result = {
                "message": "email and password are required",
            }
            return make_response(jsonify(result), 400)
        
        if user_datastore.find_user(email=email):
            result = {
                "message": "Email already exists"
            }
            return make_response(jsonify(result), 400)
        
        user_role = user_datastore.find_role('admin')
        
        user_datastore.create_user(
            email=email,
            password=hash_password(password),
            first_name=data.get('first_name', ''),
            last_name=data.get('last_name', ''),
            phone_number=data.get('phone_number', ''),
            address=data.get('address', ''),
            roles=[user_role]  # Assign the 'admin' role to the newly registered user
        )
        db.session.commit()  # Commit the changes to the database

        response = {
            "message": "Registration successful"
        }
        return make_response(jsonify(response), 201)
    

class AdminDashboardAPI(Resource):
    @auth_token_required
    @roles_required('admin')
    def get(self):
        total_treks = Trek.query.count()
        total_users = user_datastore.user_model.query.count()

        return make_response(jsonify({
            "total_treks": total_treks,
            "total_users": total_users
        }), 200)
