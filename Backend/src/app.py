from datetime import datetime, timedelta
from json import JSONEncoder, dumps
import re
from flask import Flask, g, request, jsonify, json
from flask_pymongo import PyMongo, ObjectId
from flask_cors import CORS
import pymongo
from bson import json_util,ObjectId

app = Flask(__name__)
app.config['MONGO_URI']='mongodb+srv://sakshi:Ch1s0VZoCYj6N9CV@cluster0.iwwi16h.mongodb.net/mydb?retryWrites=true&w=majority'
mongo = PyMongo(app)

CORS(app)

db = mongo.db.logs

db.create_index([("level", pymongo.ASCENDING)])
db.create_index([("timestamp", pymongo.ASCENDING)])
db.create_index([("resourceId", pymongo.ASCENDING)])

@app.route('/ingest-logs', methods=['POST'])
def ingestLogs():
    try:
        log_data = {
            'level': request.json['level'],
            'message': request.json['message'],
            'resourceId': request.json['resourceId'],
            'timestamp': request.json['timestamp'],
            'traceId': request.json['traceId'],
            'spanId': request.json['spanId'],
            'commit': request.json['commit'],
            'metadata': {
                'parentResourceId': request.json['metadata']['parentResourceId']
            }
        }
        result = db.insert_one(log_data) 
        return jsonify({'log_id': str(result.inserted_id), 'msg': "Log data ingested successfully"})
    except Exception as e:
        return jsonify({'error': f'Log ingestion failed. Reason: {str(e)}'})

@app.route('/filter-logs', methods=['GET'])
def getLogs():
    try:
        filters = {}
        for param in ['level', 'message', 'resourceId', 'timestamp', 'traceId', 'spanId', 'commit', 'metadata.parentResourceId']:
            value = request.args.get(param)
            if value:
                if '.' in param:
                    nested_params = param.split('.')
                    if nested_params[0] not in filters:
                        filters[nested_params[0]] = {}
                    filters[nested_params[0]][nested_params[1]] = value
                else:
                    filters[param] = value

        logs = db.find(filters) if filters else db.find()
        logs_list = list(logs)
        logs_list_json = json.loads(json_util.dumps(logs_list))

        return jsonify({'logs': logs_list_json}) if filters else jsonify({'logs': None})
    
    except Exception as e:
        return jsonify({'error': f'Filter log failed. Reason: {str(e)}'})

@app.route('/filter-logs-by-date', methods=['GET'])
def get_logs_by_date():
    try:
        start_date_str = request.args.get('start_date').strip()
        end_date_str = request.args.get('end_date').strip()
        if not (start_date_str and end_date_str):
            return jsonify({'error': 'Both start_date and end_date are required for date range filtering'})

        start_date = datetime.strptime(start_date_str, "%Y-%m-%dT%H:%M")
        end_date = datetime.strptime(end_date_str, "%Y-%m-%dT%H:%M")

        end_date += timedelta(days=1) - timedelta(seconds=1)

        filters = {'timestamp': {
            '$gte': start_date.strftime('%Y-%m-%dT%H:%M:%SZ'),
            '$lte': end_date.strftime('%Y-%m-%dT%H:%M:%SZ')
        }}

        logs = db.find(filters)
        logs_list = list(logs)
        logs_list_json = json.loads(json_util.dumps(logs_list))
        return jsonify({'logs': logs_list_json})    
    except Exception as e:
        return jsonify({'error': str(e)})

@app.route('/regex-search', methods=['GET'])
def regexSearchLogs():
    try:
        pattern = request.args.get('pattern')
        if not pattern:
            return jsonify({'error': 'Please provide a regex pattern for search.'})

        regex = re.compile(pattern)
        filtered_logs = [log for log in db.find() if regex.search(str(log))]
        logs_list_json = json.loads(json_util.dumps(filtered_logs))
        return jsonify({'logs': logs_list_json})
    
    except Exception as e:
        return jsonify({'error': str(e)})   

if __name__ == '__main__':
    app.run(debug=True,port=3000)