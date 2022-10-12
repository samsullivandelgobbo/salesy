import requests

postdata = {'stockNum': 'stocknumss', 'make': 'make', 'model': 'model', 'year': '2', 'price': '2'}

files = [
        ('file', ('test.png', open('test.png', 'rb'), 'image/x-png'))
]

r = requests.post(url='http://localhost:4000/inventory/vehicleimages', json=postdata, files=files)
print(r.json())
print(r.status_code)
