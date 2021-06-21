# SecurEd Technical Assessment

First, we want to thank you for taking time out of your schedule to complete this technical assessment.  Being a student keeps you busy and is hard work so thank you for taking this assessment as it helps us guage where you are currently as a developer.

Good luck!

## Table of Contents

- [SecurEd Technical Assessment](#secured-technical-assessment)
  - [Table of Contents](#table-of-contents)
  - [Assessment Criteria](#assessment-criteria)
  - [Installation Requirements](#installation-requirements)
  - [Application Summary](#application-summary)
    - [Folder Structure](#folder-structure)
    - [Database Schemas](#database-schemas)
      - [Hero](#hero)
      - [Quest](#quest)

## Assessment Criteria

In order to complete this assessment, we ask that you attempt at least **4 of 8** total tasks we have created in the [backend](backend/README.md) or [frontend](frontend/README.md) folders.

This means you can do any of the following for your assessment to be considered "complete":

- 4 frontend tasks
- 4 backend tasks
- 2 backend tasks, 2 frontend tasks
- 3 backend tasks, 1 frontend task
- 3 frontend tasks, 1 backend task

However, you are welcome to attempt more then 4 tasks if you would like.

## Installation Requirements

Below is what you'll need to install on your computer to get started with this application:

- [(Frontend and Backend) Visual Studio Code - Or some other text editor](https://code.visualstudio.com/)
- [(Frontend and Backend) NodeJS](https://nodejs.org/)
- [(Frontend) Angular 2+ CLI - Requires NodeJS](https://angular.io/)
- [(Backend) Postman](https://www.postman.com/)

## Application Summary

For the technical assessment, we would like you to write part of a small, full stack web application that uses [Angular 2+](https://angular.io/), [NodeJS](https://nodejs.org/), and [Express](https://expressjs.com/).

The application allows you to see a list of heroes.  Additionally, it allows you to create, update, or delete any [hero](#hero).  However, heroes are nothing without completing some quests, so the app will also allow you to create, update, and delete [quests](#quest) for heroes.

### Folder Structure

This repository is broken up into two separate folders: the frontend and backend folders.

The [Frontend]() folder contains all the frontend Angular 2+ code to visually see the data from the backend folder.

The [Backend](backend/README.md) folder contains all the backend express API code that allows the frontend to get and display data about heroes and quests.

### Database Schemas

Below is how each schema is defined in the database.

#### Hero

| Property Name | Property Type |
| --- | --- |
| ID | String |
| Name | String |
| Class | String |
| Level | Number |

#### Quest

| Property Name | Property Type |
| --- | --- |
| ID | String |
| Name | String |
| Description | String |
| Hero ID | String |