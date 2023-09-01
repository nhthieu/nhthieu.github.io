---
  title: "Covid-19 Website"
  description: "A Covid-19 web application that helps healthcare providers manage patient data and related necessities."
  url: "https://github.com/namhoai1109/Covid-web"
  status: 'completed'
  draft: false
---

A COVID-19 Web App final project for the Web Development class at HCMUS. The website helps healthcare providers manage patient data and related necessities such as medicine, medical equipment, etc.

![Covid-19 Website](../../assets/covid-website-1.png)

## Note

- The backend is hosted on Heroku, which has terminated the free dyno service. However, the backend is still functional and can be used as development environment.
- MongoDB Atlas instance has been stopped due to prolonged inactivity.

Sorry :<

## Overview

The project comes with 2 backend systems:

- Covid System: the main backend system that handles all the functionalities of the website.
- Payment System: a backend system that handles payment functionalities, providing payment APIs with OAuth protocol.

Some notable functionalities of the website:

- Manage COVID-19 patients data, this included handling patient's medical records, medicine.
- Handle patient's status (F0, F1, F2, etc.) and related people who have been in contact with the patient.
- Manage medicine, necessary medical equipment.
- Manage facilities for COVID-19 treatment.
- Statistics such as number of patients in each status per unit of time, debts and payments, etc.
- Minimum payment threshold for patients with push notifications.
- Authentication/Authorization with JWT.
- SSL connection to payment system (emulated) with OAuth protocol.

For the detailed functionalities, please refer to the [requirements.pdf](/covid-requirements.pdf). The file is written in Vietnamese.
## Tech stack

- Front-end: React.js
- Back-end: Express, MongoDB, Mongooose, JWT, OAuth
- API: Postman

## Prerequisites

1. Install npm and Node.js
2. Allow invalid certificate in the browser (go to flags in the address bar and search for "Allow invalid certificates" and click "Enabled" )

## Run

The project comes with a pre-built script file to run all the necessary services.

- For Linux, locate to the project folder and run the following command (make sure to enable execution permission):

```bash
sudo chmod +x run.sh
./run.sh
```
  
- For Windows:
  1.  Locate to client_payment folder
  2.  Open package.json, find the "scripts" property and change the "start" property as follows:

```json
"scripts": {
    "start": "SET PORT=2000 && react-app-rewired start"
    // other scripts
}
```

  3.  Locate back to the project folder and run the *run.bat* file

## Database & Accounts

The website comes with 3 account tiers:

- Admin (tier 1)
- Doctor (tier 2 manager)
- Patient (tier 3 user)

The website uses MongoDB as the database to store all the data. The database is hosted on MongoDB atlas and can be access through the Internet.

The website currently uses test data to test the functionalities with the following accounts:

- For Covid System:

  - Admin (only 1 account):
    - **username:** 000000000
    - **password:** admintest
  - Doctor (currently 1 account, may be extended):
    - **username:** 123456789
    - **password:** doctor
  - Patient (currently 1 account, may be extended):
    - **username:** 111111111
    - **password:** patient

- For Payment System:
  - Admin (only 1 account):
    - **username:** 000000000
    - **password:** admintest

To use a new clean database, do as follows:

1. Locate to the *.env* file of each system (Covid System: server folder; Payment System: payment_system folder)
2. Follow the instructions in the *.env* file to change the database connection string

## API Documentations

Newly added SwaggerUIExpress and SwaggerAutoDocGen, auto generate docs for APIs following OpenAPI standard, available at /doc

## Contributions

Special thanks to the following people for their contribution:

- [Vu Hoai Nam](https://github.com/namhoai1109)
- [Truong Do Truong Thinh](https://github.com/td2thinh)
