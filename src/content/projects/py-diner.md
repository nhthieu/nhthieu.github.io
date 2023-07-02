---
  title: "py-diner"
  description: "A Python booking application implementing data transfering with sockets and the TCP protocol."
  url: "https://github.com/nhthieu/py-diner"
  status: 'completed'
  sortOrder: 5
  draft: true
---

A Python booking application that allows users to book a table for a restaurant, implementing sockets and the TCP protocol. The project was done as the final project for the module CSC10008 - Networking at HCMUS. 

## Features

The application has the following features:

-   The server can accept multiple connections.
-   Implemented built-in SQLite database to store the menu and the bookings.
-   Raw SQL queries are used to interact with the database.
-   Users can view the menu (with images) and make bookings.
-   Implemented a payment system to allow users to pay (cash/card) for their bookings.

## Quick start

1. Locate to server folder and run the db.py to populate the database:

```console
python3 db.py
```

3. Run the server:

```console
python3 server.py
```

4. Locate to the client folder and run the App.py file on a different terminal:

```console
python3 App.py
```
    
5. Type in the ip address and the port number of the server:

```console
Enter the server IP: *IP goes here*
Enter the server port: *PORT goes here*
```

## Contributions:

Many thanks to the following people for their contributions:

-   [Vu Hoai Nam](https://github.com/namhoai1109)
-   [Truong Do Truong Thinh](https://github.com/td2thinh)
