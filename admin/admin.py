import streamlit as st
import requests
import pandas as pd


r = requests.get('http://localhost:4000/inventory')

data = r.json()
i = 0



#app start

#sidebar 
with st.sidebar:
    st.selectbox('coco big',['really?', 'how big?'] )


df = pd.DataFrame.from_dict(data)


st.dataframe(df)

