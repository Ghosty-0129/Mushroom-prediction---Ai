# Mushroom-prediction---Ai
To Predict Mushrooms are edible or not using ai module 
**Mushroom Prediction App**
This project is a web application designed to predict whether a mushroom is edible or not based on user inputs, utilizing machine learning for classification. The app is built using Flask for the backend and React for the frontend, with the AI model trained in Google Colab and the dataset sourced from Kaggle.

**Features:**
Machine Learning Model: The AI model is trained to classify mushrooms as either edible or poisonous based on various features such as cap shape, color, odor, and other attributes. The model uses a dataset obtained from Kaggle, and training is performed in Google Colab using Python and machine learning libraries like Pandas, Scikit-learn, and TensorFlow.

User-friendly Interface: The frontend, built with React, allows users to input different mushroom characteristics into an interactive form. The inputs are sent to the Flask backend, where they are processed by the trained AI model.

Backend (Flask): The Flask backend handles requests from the React frontend, performs prediction using the trained model, and returns results to the user. The backend also manages the communication between the frontend and the AI model.

**Workflow:**
Dataset: The dataset used for training the model is sourced from Kaggle, containing various mushroom samples labeled as either edible or poisonous.
Model Training: The model is trained using the dataset in Google Colab, which is used to learn the relationships between mushroom features and their edibility.
Frontend: Users interact with the app by entering the features of the mushroom they want to classify.
Prediction: The Flask backend receives the input data, runs the prediction through the AI model, and returns whether the mushroom is edible or poisonous.
Technologies Used:
Frontend: React.js, JavaScript, HTML, CSS
Backend: Flask (Python)
Machine Learning: Google Colab, Scikit-learn, TensorFlow
Dataset: Kaggle Mushroom Dataset
This project demonstrates how machine learning can be integrated into web applications to create interactive and useful tools for real-world problems, such as identifying dangerous or safe mushrooms based on their characteristics.
