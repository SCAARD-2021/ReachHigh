import pandas as pd
import numpy as np
import re
import nltk
from sklearn.datasets import load_files
nltk.download('stopwords')
import pickle
from nltk.corpus import stopwords

# read data
reviews = pd.read_csv("reviews.csv")
reviews

reviews.columns
reviews.drop([ 'Unnamed: 3', 'Unnamed: 4','Unnamed: 5','Unnamed: 6'],axis = 1)
