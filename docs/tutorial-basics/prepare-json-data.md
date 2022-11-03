---
sidebar_position: 3
---

# Prepare JSON data

To generate the Excel file, you need to prepare a structured object that will be converted in JSON format. This JSON
string will be sent to the API and processed to merge into the Excel template.

## JSON data structure

The JSON keys are of two types:

* The ones beginning with **underscore _** are reserved names used by the API
* The others are used to define data to replace in Excel template (key **example** will replace **<example\>** in Excel
  template

Here is an example of JSON object with the description of each key :

```js
let jsonObject = {
    "_output_name": `Export-contacts.xlsx`,
    // this is unused yet
    "_template_file": "contacts_template.xlsx",
    // name of the XLS template file to use, either : 
    // - the URL of the file hosted in a public URL : https://bucket.s3.amazonaws.com/file.xlsx
    // - the name of the file that you uploaded in the API dashboard : file.xlsx

    // define an array of worksheets to work on
    "_sheets": [
        {
            // for each worksheet, define its name and what data to replace inside
            "_worksheet": "contacts",
            // name of the worksheet
            "_start": "A3",
            // Starting cell for _datas placement

            "_direction": "row",
            // [ row | column ] 
            // row = items are placed one bellow the other (from top to bottom)
            // column = items are placed side to side (from left to right)

            // You can then define static data of the worksheet 
            "title": "List of Contacts",
            "date": "2022, October 1st",
            // Defining sub items which are going to copy templates into main sheet
            "_datas": [
                {
                    "_template": "contact_line", // named range of the mini template

                    // static data for this cell range
                    "firstName": "John",
                    "lastName": "Doe",
                    "company": "Unemployed",
                    "country": "United-States",
                    "email": "john@email.com"
                },
                {
                    "_template": "contact_line",
                    // each sub item entry uses its own mini-template so you can have different styling per line if needed

                    // static data for this cell range
                    "firstName": "Jean",
                    "lastName": "Dupont",
                    "company": "Freelance",
                    "country": "France",
                    "email": "jean@email.com"
                }
            ]
        }
    ]
}

```
