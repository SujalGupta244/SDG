import docx 
import csv
import pandas as pd
import json

def change_to_doc(data):
    doc = docx.Document()

    with open(data, newline='') as f:
        csv_reader = csv.reader(f) 

        csv_headers = next(csv_reader)
        csv_cols = len(csv_headers)

        table = doc.add_table(rows=2, cols=csv_cols)
        hdr_cells = table.rows[0].cells

        for i in range(csv_cols):
            hdr_cells[i].text = csv_headers[i]

        for row in csv_reader:
            row_cells = table.add_row().cells
            for i in range(csv_cols):
                row_cells[i].text = row[i]

    doc.add_page_break()
    doc.save("data.docx")


def change_to_excel(data):

    df = pd.read_csv(data)
    df.to_excel("data.xlsx", sheet_name="Testing", index=False)
    return df

def change_to_json():
    
    csvFilePath = r'csv.csv'
    jsonFilePath = r'data.json'
    data = {}
        
    with open(csvFilePath, encoding='utf-8') as csvf:
        csvReader = csv.DictReader(csvf)
            
            
        for rows in csvReader:
              
            key = rows['No']
            data[key] = rows

       
        with open(jsonFilePath, 'w', encoding='utf-8') as jsonf:
            jsonf.write(json.dumps(data, indent=4))
            

def conversion(format,data):

    if format=='docx':
        return change_to_doc(data)
    elif format=='xls':
        return change_to_excel(data)
    # elif format=='json':
    #     change_to_json()
