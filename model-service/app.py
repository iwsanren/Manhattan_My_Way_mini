from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/score', methods=['POST'])
def score():
    data = request.get_json()
    start = data.get('start')
    end = data.get('end')
    score = 7.5  # predend to calculate score based on start and end
    return jsonify({'score': score})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
