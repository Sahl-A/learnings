import requests

response = requests.get('http://localhost:3333/drinks')

print(response.json())