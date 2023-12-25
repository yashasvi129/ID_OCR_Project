
Deployed on Render App

Final Deployed Link - https://id-ocr-qoala.onrender.com

| Qoala-Assignment Details |

Create an OCR (Optical Character Recognition) App that can recognize thai id cards and get the required information. Save this information for retrival later.

Objective

Develop an application that utilizes Optical Character Recognition (OCR) to analyze thai id cards and extract relevant data. This app should integrate with Google Vision API for OCR processing and then parse the response to interpret the OCR results, returning the final data in JSON format. Along with this we would like you to choose a database of your choice and save the results in the db. We would need a CRUD api to create the ocr data, if needed we can modify some data, filter them or delete certain id cards(soft delete).

Sample Thai ID Card Data: The id cards you'll be analyzing can contain various data fields such as:

Name Last Name Identification Number Date of issue Date of expiry Dagete of birth
OCR Processing:

Integrate the application with Google Vision API to perform OCR on id card images. https://cloud.google.com/vision/docs/ocr#optical_character_recognition_ocr

Ensure that the OCR can accurately read text from different thai id cards.

Database and REST API Endpoints

Create a New OCR Record Update Existing OCR Data' Retrieve and Display OCR Data Delete OCR Records

JSON Output: The final output should be a well-structured JSON object containing all the extracted data. Ensure accuracy and readability of the JSON output.

**Developed with the software and tools below ** javascript reactjs nodejs expressjs mongoDB multer

TABLE OF CONTENT :

OVERVIEW FEATURE GETTING STARTED ACKNOWLEDGEMENT

-> OVERVIEW

This project aims to develop an application utilizing Optical Character Recognition (OCR) to extract information from Thai ID cards. The app integrates with the Google Vision API for OCR processing, extracting key data fields like name, last name, identification number, date of birth, date of issue, and date of expiry.

FEATURE:

OCR Processing: Integrates with Google Vision API for accurate text extraction from Thai ID card images. Data Extraction: Parses OCR results to extract key information. User Interface: Provides a simple UI to upload ID card images, displays JSON output, lists successful and failed OCR operations, and offers filtering options for query history. Database Integration: Uses a chosen database to store and manage OCR data. Implements CRUD API endpoints: Create a New OCR Record Update Existing OCR Data Retrieve and Display OCR Data with filtering options Delete OCR Records

GETTING STARTED

Please ensure you have the following dependencies installed on your system:

ℹ️ NodeJS > v18.16
Installation Clone the Qoala-OCR-app repository: https://github.com/yashasvi129/ID_OCR_Project.git

Change to the project directory: cd Qoala-OCR-app

- Install the modules

npm install

Running the temporary server

cd backend

node index.js

the backend will run on http://localhost:5000/

| run the Frontend |

cd Frontend

npm start

the backend will run on http://localhost:3000/

Deployed on Render App

Final Deployed Link - https://id-ocr-qoala.onrender.com
