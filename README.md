
# Blue Rabbit Code Challenge

Fork this repo and create a Full Stack app using languages and frameworks of your choice that 
*literally* introduces you to us. Submit your response back to us here in the form of a pull 
request or submit it to us privately. Please don't spend more than a couple hours on it. It's ok
if you don't finish, just tackle the requirements in order and take it as far as you can in the time frame.

Include A README with instructions on how to build/run the app. Use the README to let us know
why you chose the technologies you did. Notes on design patterns, challenges, or aspects
of your stack that you find interesting are also appreciated!

### Requirements
1. Create an API with an endpoint or operation that we can call that tells us your name. The shape of the data 
and the storage mechanism are up to you. It's ok if it takes no params and returns only your name.
2. Create a minimal frontend that calls your api and displays your name when we run it.
3. Add an API endpoint or operation that takes a name and stores it.
4. Add an input to the frontend that we can use to submit a name to the endpoint or operation you just created.  
5. Add an input to the frontend that lets us upload an image avatar and submit it to your API.



## Getting Started

These instructions will get you a copy of the project running locally for development and testing purposes.

### Requirements
- PostgreSQL
- Git
- Node.js

## Installation
Clone this respository
```bash
$ git clone https://github.com/leewes5928/wesley-code-challenge.git
```
Install all dependencies using yarn
```bash
$ npm install
```
Create a .env.local file within the root directory
```bash
$ touch .env
```
Create a postgreSQL database locally
```bash
$ createdb <Database Name>
```
Create a users table under the newly created database
```
$ CREATE TABLE users (user_id serial PRIMARY KEY, name varchar NOT NULL, img varchar);
```
### Environmental Variables
Set environmental variables in the .env file for the settings of the PostgreSQL database
```
DB_USER = <PostgreSQL Username>
DB_PW = <PostgreSQL Password>
DB_NAME = <PostgreSQL Name of Database>
```
## Scripts
Within the package.json file there are scripts to help build and run the project locally

To run a local development server on localhost:3000 (by default)
```bash
$ npm run dev
```

To run a local backend server on localhost:9000 (by default or add a PORT to .env)
```bash
$ npm start
```

To create build files for deployment
```bash
$ npm run build
```

To serve static files locally
```bash
$ npm run serve
```



    




