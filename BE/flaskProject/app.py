from flask import Flask, request, jsonify
import pickle
import os
from flask_cors import CORS

app = Flask(__name__)

cors = CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

# Load the model
model_path = os.path.join('model', 'mushroom_pred.pkl')
with open(model_path, 'rb') as file:
    model = pickle.load(file)

# Define mappings for categorical features
mappings = {
    'cap-shape': {'x': 0, 'y': 1, 'z': 2},
    'cap-surface': {'y': 0, 's': 1},
    'cap-color': {'n': 0, 'b': 1},
    'does-bruise-or-bleed': {'f': 0, 't': 1},
    'gill-attachment': {'e': 0, 'f': 1},
    'gill-spacing': {'c': 0, 'w': 1},
    'gill-color': {'w': 0, 'n': 1},
    'stem-root': {'b': 0, 'e': 1},
    'stem-surface': {'y': 0, 's': 1},
    'stem-color': {'n': 0, 'w': 1},
    'veil-type': {'p': 0, 'u': 1},
    'veil-color': {'w': 0, 'n': 1},
    'has-ring': {'f': 0, 't': 1},
    'ring-type': {'f': 0, 'l': 1},
    'spore-print-color': {'k': 0, 'n': 1},
    'habitat': {'d': 0, 'g': 1},
    'season': {'a': 0, 'w': 1}
}


def preprocess_features(features):
    processed_features = []
    for feature in [
        'cap-diameter', 'cap-shape', 'cap-surface', 'cap-color', 'does-bruise-or-bleed', 'gill-attachment', 'gill-spacing',
        'gill-color', 'stem-height', 'stem-width', 'stem-root', 'stem-surface', 'stem-color', 'veil-type', 'veil-color',
        'has-ring', 'ring-type', 'spore-print-color', 'habitat', 'season'
    ]:
        if feature in ['cap-diameter', 'stem-height', 'stem-width']:
            processed_features.append(float(features.get(feature, 0)))
        elif feature in mappings:
            processed_features.append(mappings[feature].get(features.get(feature, ''), -1))  # Default to -1 if unknown
        else:
            processed_features.append(features.get(feature, ''))
    return processed_features


def predict_mushroom(features):
    input_data = [preprocess_features(features)]
    prediction = model.predict(input_data)
    return int(prediction[0])  # Convert int64 to a regular int



@app.route('/predict', methods=['POST'])
def predict():
    features = request.json  # Get the JSON data from the POST request
    prediction = predict_mushroom(features)  # Make prediction
    return jsonify({'prediction': prediction})  # Return the prediction as a JSON response


# Run the Flask app
if __name__ == '__main__':
    app.run(debug=True)
