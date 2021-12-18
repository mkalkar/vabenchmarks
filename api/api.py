import time
from flask import request
from flask import Flask, render_template, json, url_for
import json
import csv
import sys

#https://www.analyticsvidhya.com/blog/2021/08/python-tutorial-working-with-csv-file-for-data-science/

app = Flask(__name__)
@app.route('/time')
def get_current_time():
	return {'time': time.time()}

@app.route('/data')
def get_data():
	file = open('../data/datasets.json');
	data = json.load(file)

	# print(data)
	# for i in data:
	# 	print(i)
	#with open('../data/datasets.json') as json_file:
	# data_dict = json.loads(file)
    # data = json.load(json_file)
	# type(file);
	# file.read()
	return {'data': data}

@app.route('/benchmarks')
def get_benchmarks():
	file1 = open('../data/benchmarks.json');
	data1 = json.load(file1, strict=False)

	# print(data)
	# for i in data:
	# 	print(i)
	#with open('../data/datasets.json') as json_file:
	# data_dict = json.loads(file)
    # data = json.load(json_file)
	# type(file);
	# file.read()
	return {'data': data1}

# @app.route('/data')
# def showjson():
#     SITE_ROOT = os.path.realpath(os.path.dirname(__file__))
#     json_url = os.path.join(SITE_ROOT, "../data", "datasets.json")
#     data = json.load(open(json_url))
#     return render_template('showjson.jade', data=data)

# @app.route('/data')
# def get_data():
# 	with open('../data/datasets.json') as f:
# 	    data = json.load(f)
# 	    print(data)
# 		return data


# @app.route('/data')
# def get_data():
# 	file = open('../data/datasets.csv');
# 	type(file);
#
# 	csvreader = csv.reader(file)
# 	#print(csvreader);
# 	header = next(csvreader)
# 	rows = []
# 	for row in csvreader:
# 	    rows.append(row)
# 	print(rows)
# 	file.close()
# 	#rows
# 	# print('This is error output', file=sys.stderr)
# 	# print('This is standard output', file=sys.stdout)
# 	return {'data': rows}

# read file
# with open('../data/datasets.json', 'r') as myfile:
#     data=myfile.read()
#
# # parse file
# obj = json.loads(data)
#
# # show values
# # print(data)
#
# print("gbp: " + str(obj['gbp']))

# @app.route('/data', methods = ['POST'])
# with open('../data/datasets.json') as f:
# 	data = json.load(f)
# 	print(data)

# @app.route('/data', methods = ['POST'])
# def postJsonHandler():
#     print (request.is_json)
#     content = request.get_json(force=True)
#     print (content)
#     return 'JSON posted'


# @app.route('/data', methods = ['POST'])
# def postJsonHandler():
#     print (request.is_json)
#     content = request.get_json(force=True)
#     print (content)
#     return 'JSON posted'





# def readData():
# 	file = open('data/datasets/csv');
# 	type(file);
#
