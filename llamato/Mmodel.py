from transformers import AutoModelForCausalLM, AutoTokenizer
import torch

# Specify device
device = torch.device("cpu")  # Change to Intel device if configured for Iris Xe

# Provide the correct path to the model
model_path = r"C:/Users/nishi/Downloads/mistral_base_model\mistral_base_model"  # Local path or Hugging Face model ID

# Load tokenizer and model
try:
    tokenizer = AutoTokenizer.from_pretrained(model_path)
    model = AutoModelForCausalLM.from_pretrained(model_path)
    model.to(device)  # Move model to the specified device

    # Test inference
    text = "generate 3 multiple choice question on topic data abstraction"
    inputs = tokenizer(text, return_tensors="pt").to(device)
    outputs = model.generate(**inputs)
    print(tokenizer.decode(outputs[0]))
except Exception as e:
    print(f"An error occurred: {e}")

