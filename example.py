from flask import Flask, jsonify, render_template

app = Flask(__name__)

@app.route("/api/hello/<name>")
def hello_api(name="World"):
    print(name)
    return jsonify({
        "message": "Hello, {0}".format(name)
    })

@app.route('/hello')
def hello():
    return render_template('hello.html')