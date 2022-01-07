# Would You Rather Project

This is the starter code for the final assessment project for Udacity's React & Redux course.

The `_DATA.js` file represents a fake database and methods that let you access the data. The only thing you need to edit in the ` _DATA.js` file is the value of `avatarURL`. Each user should have an avatar, so you’ll need to add the path to each user’s avatar.

Using the provided starter code, you'll build a React/Redux front end for the application. We recommend using the [Create React App](https://github.com/facebook/create-react-app) to bootstrap the project.

### `npm install`

Install all the depedencies for the project
To read more about (https://www.npmjs.com/package/react).

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## App Functionalities

1. Users will be able to login or logout , Sign up an account;
2. Once the user login, the home page should show which user is using the app;
3. User will be able to `Toggle` between his/her `answered` and `unanswered` polls on the home page, which is located at the root;
4. The polls in both categories are arranged from the most recently created (top) to the least recently created (bottom);
5. The `unanswered` questions should be shown by default;
6. By clicking each polling question, we can go to the route `questions/:question_id` get the detail of question:
    |
    |--- `Text “Would You Rather”;`
    |--- `Avatar of the user who posted the polling question;`
    |--- `two options`

7. By clicking the answered question in home page, the two options contain the following:
    |
    |--- `Text of the option;`
    |--- `Number of people who voted for that option;`
    |--- `Percentage of people who voted for that option`
    |--- `The option selected by the logged-in user should be clearly marked`

8. A navigation bar to navigate in the app:
    |--- `Home page`
    |--- `New Survey`
    |--- `leaderboard`

9. What happened after user votes in a poll:
    |
    |--- `all of the information about this poll should display includes users just vote`
    |--- `One user only can vote once per poll`
    |--- `When user navigate back to home, the voted poll should in answer part`

10. How to post a new question: 
    |
    |--- `post through ```/add``` route `
    |--- `The application should show the text “Would You Rather” and have a form for creating two options`

11. After post a new question:
    |
    |--- `a new poll should be created and user should be taken to home page`

12. What to include in the `leaderboard` page/ `/leaderboard` route:
    |
    |--- `User's Name`
    |--- `User's Picture`
    |--- `Number of questions user asked`
    |--- `Number of questions user answered`
    |--- `Users should be descending order based on the sum of questions asked and answered`


## Data

There are two types of objects stored in our database:

* Users
* Questions

### Users

Users include:

| Attribute    | Type             | Description           |
|-----------------|------------------|-------------------         |
| id                 | String           | The user’s unique identifier |
| name          | String           | The user’s first name  and last name     |
| avatarURL  | String           | The path to the image file |
| questions | Array | A list of ids of the polling questions this user created|
| answers      | Object         |  The object's keys are the ids of each question this user answered. The value of each key is the answer the user selected. It can be either `'optionOne'` or `'optionTwo'` since each question has two options.

### Questions

Questions include:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| id                  | String | The question’s unique identifier |
| author        | String | The author’s unique identifier |
| timestamp | String | The time when the question was created|
| optionOne | Object | The first voting option|
| optionTwo | Object | The second voting option|

### Voting Options

Voting options are attached to questions. They include:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| votes             | Array | A list that contains the id of each user who voted for that option|
| text                | String | The text of the option |

Your code will talk to the database via 4 methods:

* `_getUsers()`
* `_getQuestions()`
* `_saveQuestion(question)`
* `_saveQuestionAnswer(object)`

1) `_getUsers()` Method

*Description*: Get all of the existing users from the database.  
*Return Value*: Object where the key is the user’s id and the value is the user object.

2) `_getQuestions()` Method

*Description*: Get all of the existing questions from the database.  
*Return Value*: Object where the key is the question’s id and the value is the question object.

3) `_saveQuestion(question)` Method

*Description*: Save the polling question in the database.  
*Parameters*:  Object that includes the following properties: `author`, `optionOneText`, and `optionTwoText`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| author | String | The id of the user who posted the question|
| optionOneText| String | The text of the first option |
| optionTwoText | String | The text of the second option |

*Return Value*:  An object that has the following properties: `id`, `author`, `optionOne`, `optionTwo`, `timestamp`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| id | String | The id of the question that was posted|
| author | String | The id of the user who posted the question|
| optionOne | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option|
| optionTwo | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option|
|timestamp|String | The time when the question was created|

4) `_saveQuestionAnswer(object)` Method

*Description*: Save the answer to a particular polling question in the database.
*Parameters*: Object that contains the following properties: `authedUser`, `qid`, and `answer`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| authedUser | String | The id of the user who answered the question|
| qid | String | The id of the question that was answered|
| answer | String | The option the user selected. The value should be either `"optionOne"` or `"optionTwo"`|

## Contributing

<<<<<<< HEAD
This repository is the starter code for *all* Udacity students. Therefore, we most likely will not accept pull requests. For details, check out [CONTRIBUTING.md](https://github.com/udacity/reactnd-project-would-you-rather-starter/blob/master/CONTRIBUTING.md).
=======
This repository is the starter code for *all* Udacity students. Therefore, we most likely will not accept pull requests. For details, check out [CONTRIBUTING.md](https://github.com/udacity/reactnd-project-would-you-rather-starter/blob/master/CONTRIBUTING.md).
>>>>>>> c4ac6a49ec389e71b2a3fe02d0b5ead5a6bf0c73
