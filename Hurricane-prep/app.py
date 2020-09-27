from flask import Flask,render_template,jsonify
from maps import results
import requests

app = Flask(__name__)
@app.route("/", methods=['GET'])
def retrieve():
    print(results())
    return render_template('index.html')
