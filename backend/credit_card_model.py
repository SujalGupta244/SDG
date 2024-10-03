from faker import Faker
import pandas as pd
import re

faker = Faker()
detail_list = faker.credit_card_full().splitlines()
def generate_pci(rows):
    def generate_providers():
        provider = faker.credit_card_full().splitlines()[0]
        provider = re.sub("\d+ digit", "",provider)
        return provider


    personal_data = {
        "Card Holder Name": [faker.credit_card_full().splitlines()[1] for _ in range(rows)],
        "Security Code/CVV": [faker.credit_card_full().splitlines()[3].split()[1] for _ in range(rows)],
        "Expiration Date": [faker.credit_card_full().splitlines()[2].split()[1] for _ in range(rows)],
        "Card Provider": [generate_providers() for _ in range(rows)],
        "Credit Card Number": [faker.credit_card_full().splitlines()[2].split()[0] for _ in range(rows)],

        
    }

    personal_df = pd.DataFrame(personal_data)
    print(personal_df)
    return personal_data