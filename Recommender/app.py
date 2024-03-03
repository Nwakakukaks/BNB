import streamlit as st
import pandas as pd
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity
from openai import OpenAI, RateLimitError
from dotenv import load_dotenv
import os

# Load environment variables from .env file
load_dotenv()

# Get the directory of the script
script_directory = os.path.dirname(os.path.abspath(__file__))

# Load the dataset
repo_data_path = os.path.join(script_directory, 'research_dataset.csv')
repo_data = pd.read_csv(repo_data_path)

# # Handle missing values
# repo_data.fillna(repo_data['language'].mode()[0], inplace=True)

# Sidebar with user input
st.sidebar.header('User Input Features')

features = [ 'authors', 'year', 'raised_funding', 'contributors']

user_features = {}
for feature in features:
    user_features[feature] = st.sidebar.slider(f'Select {feature}', float(repo_data[feature].min()), float(repo_data[feature].max()))

user_features = pd.DataFrame(data=user_features, index=[0])

# Calculate cosine similarity
repo_features = repo_data[features].values
user_repo_similarity = cosine_similarity(user_features, repo_features)

# Get the indices of the top 5 repositories
top_repo_indices = np.argsort(user_repo_similarity[0])[::-1][:5]

# Display the top 5 recommended repositories
st.header("Top Recommended Researches:")
top_repositories = repo_data.loc[top_repo_indices, 'research_title'].values
for i, repo in enumerate(top_repositories, start=1):
    st.write(f"{i}. {repo}")

# OpenAI code for chatbot
st.header("Have questions about this researches?")

# Load OpenAI model
openai_key = os.getenv('OPENAI_API_KEY')
openai = OpenAI(api_key=openai_key)

# User-provided prompt
if prompt := st.text_area("Ask for more details about this research"):
    st.header("Research Republic:")
    with st.spinner("Thinking..."):
        try:
            completion = openai.completions.create(model='curie', prompt=prompt)
            st.write(completion.choices[0].text)
            st.write(completion.model_dump_json(indent=2))
        except RateLimitError:
            st.error("Oops! It seems we are experiencing high demand. Please try again later. In the meantime, you can explore this [practical guide to getting started with Open Source](https://www.freecodecamp.org/news/a-practical-guide-to-start-opensource-contributions/)")
