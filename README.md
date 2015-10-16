IP Admin
===========

A tool to manage IP subnets in your company.

# Getting Started

## Dependencies
This project uses mongodb to manage its database, node.js for a server, and npm to manage dependencies. Install these on your machine to start:

 - [mongodb](http://docs.mongodb.org/manual/installation/)
 - [node](http://nodejs.org/download/) (comes with npm)
 - [starting data](https://github.com/anvk/ip-admin/test/data/users.json) (courtesy of HealthMap)

## Setup

To install all dependencies run

```
npm install
```

Next setup database and run it on a machine of your choice

```
mongod
```

Import starting data into your MongoDB instance

```
mongoimport --db ip-admin --collection users --file users.json
```