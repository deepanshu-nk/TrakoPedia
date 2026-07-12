from flask_restful import Resource
from flask import request, jsonify, make_response
from flask_security import utils, auth_token_required, roles_required
from backend.models import * 


class TrekAPI(Resource):  
    def get(self,track_id = None):
        if track_id:
            track = Trek.query.get(track_id)
            if not track:
                return make_response(jsonify({"message": "Trek not found"}), 404)
            
            else:
                track_data = Trek.query.all()
                result = []
                for trek in track_data:
                    result.append({
                        "id": trek.id,
                        "trek_name": trek.trek_name,
                        "location": trek.location,
                        "description": trek.description,
                        "difficulty": trek.difficulty,
                        "duration": trek.duration
                    })
                return make_response(jsonify(result), 200)
    # @auth_token_required
    # @roles_required(['admin','user','traker'])  # Only users with 'admin
    def post(self):
        data = request.get_json()
        if not data:
            return make_response(jsonify({"message": "Trek data is required"}), 400)
        
        trek_name = data.get('trek_name')
        location = data.get('location')
        description = data.get('description')
        difficulty = data.get('difficulty')
        duration = data.get('duration')

        new_trek = Trek(
            trek_name=trek_name,
            location=location,
            description=description,
            difficulty=difficulty,
            duration=duration
        )
        db.session.add(new_trek)
        db.session.commit()

        return make_response(jsonify({"message": "Trek created successfully", "id": new_trek.id}), 201)
    
    # @auth_token_required
    # @roles_required(['admin','user','traker'])
    def put(self,track_id):
        trek = Trek.query.get(track_id)
        if not trek:
            return make_response(jsonify({"message": "Trek not found"}), 404)
        
        data = request.get_json()
        if not data:
            return make_response(jsonify({"message": "Trek data is required"}), 400)
        
        trek.trek_name = data.get('trek_name', trek.trek_name)
        trek.location = data.get('location', trek.location)
        trek.description = data.get('description', trek.description)
        trek.difficulty = data.get('difficulty', trek.difficulty)
        trek.duration = data.get('duration', trek.duration)

        db.session.commit()

        return make_response(jsonify({"message": "Trek updated successfully"}), 200)
    
    # @auth_token_required
    # @roles_required(['admin','user','traker'])
    def delete(self,track_id):
        trek = Trek.query.get(track_id)
        if not trek:
            return make_response(jsonify({"message": "Trek not found"}), 404)
        
        db.session.delete(trek)
        db.session.commit()

        return make_response(jsonify({"message": "Trek deleted successfully"}), 200)
        










