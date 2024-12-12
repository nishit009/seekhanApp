from langchain_ollama import OllamaLLM
from flask import Flask, request, jsonify
import requests
from flask_cors import CORS
import logging
import torch
from transformers import pipeline, AutoTokenizer, AutoModelForSequenceClassification
import os
os.environ["TF_ENABLE_ONEDNN_OPTS"] = "0" 
os.environ["TF_CPP_MIN_LOG_LEVEL"] = "2"  
import warnings
warnings.filterwarnings("ignore", category=UserWarning)

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}}) 
logging.basicConfig(level=logging.INFO)
try:
    model = OllamaLLM(model="seekhan")
except Exception as e:
    logging.error(f"Failed to initialize model: {e}")
    model = None

@app.route('/submit', methods=['POST'])
def submit():
    try:
        data = request.get_json()
        logging.info(f"Received input: {data}")
        topic = data.get("Topic")
        num_questions = data.get("noQ")
        question_type = data.get("Type")

        if not topic or not question_type:
            return jsonify({"error": "Missing required fields"}), 400
        if not isinstance(num_questions, int) or num_questions <= 0:
            return jsonify({"error": "Number of questions must be a positive integer"}), 400
        if model is None:
            return jsonify({"error": "Model is not initialized"}), 500
        prompt = f"first generate {num_questions} {question_type} questions on {topic} and generate answers seperately after all the questions."
        labels = [
            "data structures and algorithms",
            "programming concepts",
            "software engineering",
            "databases and data management",
            "machine learning and data science"
        ]
        model_path=r"C:\Users\nishi\OneDrive\Desktop\distilbart_model"
        model1=AutoModelForSequenceClassification.from_pretrained(model_path)
        tokenizerr=AutoTokenizer.from_pretrained(model_path)
        classifier = pipeline(
            "zero-shot-classification",
            model=model1,tokenizer=tokenizerr,
            framework="pt",
            device=-1
        )
        classification = classifier(topic, labels)
        if classification["labels"][0] in labels and classification["scores"][0] > 0.4:
            result = model.invoke(input=prompt)
            torch.cuda.empty_cache()
            logging.info(f"Questions generated successfully for topic: {topic} result: {result}")
            return jsonify({"Result": result})
        else:
            torch.cuda.empty_cache()
            return jsonify({"Result":f"Sorry, the topic '{topic}' is out of the domain of computer science. Try again with a relevant topic."})
        # result = model.invoke(input=prompt)
        # logging.info(f"Questions generated successfully for topic: {topic} result: {result}")
        # return jsonify({"Result": result})
    except Exception as e:
        logging.error(f"Error generating questions: {e}")
        return jsonify({"error": f"Internal server error: {str(e)}"}), 500
# def file():
#     try:
#         express_url="http://localhost:6969/files"
#         result = model.invoke(input=prompt)
#         file_name=f"${topic}.txt"
#         with open(file_name,'w') as file:
#             file.write(result)
#         with open(file_name,'rb') as f:
#             response_file=requests.post(express_url,files={'file':f})
#         if(response_file.status_code==200):
#             print("file sent succesfully")
#             return jsonify({"file sent to backend"}), 200
#     except Exception as e:
#         logging.error(f"Error in sending file: {e}")
#         return jsonify({"error": f"Internal server error: {str(e)}"}), 500    
    
if __name__ == '__main__':
    app.run(debug=True, port=5000)
