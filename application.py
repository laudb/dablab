from flask import Flask, render_template, request, redirect

dabapp = Flask(__name__)


@dabapp.route('/home', methods=['GET'])
def home():
    return render_template('index.html')

# @dabapp.route('/data', methods=['GET'])
# def data():
#     return "<p>this page has the data representation</p>"


if __name__ == '__main__':
    dabapp.run(debug=True)