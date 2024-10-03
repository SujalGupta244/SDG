import pandas as pd
import string
import random
from mimesis import *
from mimesis.providers.address import Address
# Person instance with Locale.EN for English

person = Person(locale=Locale.EN)
address_provider = Address()
datetime = Datetime()

def return_user_id():
    N = 10
    res = ''.join(random.choices(string.ascii_uppercase + string.digits, k=N))
    return str(res)


def blood_group():    
    WORDS = ("A+", "A-", "B+", "AB+", "AB-", "O+", "O-")
    word = random.choice(WORDS)
    return str(word)

def generate_license_number():
    state = random.choice([1, 2])  
    
    if state == 1:
        letter = random.choice(string.ascii_uppercase)
        digits = ''.join(random.choices(string.digits, k=7))
        return letter + digits

    elif state == 2:
        
        return ''.join(random.choices(string.digits, k=8))
def ssn():
    return ''.join(random.choices(string.digits, k=9))
    
    
personal_data = {
    
    "Name": [person.full_name() for _ in range(10000)],  # random full names
    "User Id": [return_user_id() for _ in range(10000)],
    "Email": [person.email() for _ in range(10000)],
    "SSN": [ssn() for _ in range(10000)],
    'Blood Group':[blood_group() for _ in range(10000)],
    "Gender": [person.gender() for _ in range(10000)], 
    "Address": [address_provider.address() for _ in range(10000)],
    "Date of Birth": [datetime.date() for _ in range(10000)],
    "U.S Driver License Number":[generate_license_number() for _ in range(10000)], 
}

personal_df = pd.DataFrame(personal_data)
print(personal_df)