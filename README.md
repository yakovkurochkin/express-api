# Express-api

Dummy backend for API REST autotests

## Requirements

Nodejs 18+
Docker 20+

## How to run app

Before start app, run mongodb via docker

`docker-compose up -d`

Then just run the app

`npm start`

## Debug mode

You can turn on the mode where the application automatically restarts your node application when file changes in the directory are detected

`npm run dev`