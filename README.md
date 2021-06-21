# Redux-Feedback-loop
![Screen Shot 2021-06-21 at 11 14 12 AM](https://user-images.githubusercontent.com/54006827/122794556-01a36900-d282-11eb-87b5-6fe4d6300451.png)
![Screen Shot 2021-06-21 at 11 14 36 AM](https://user-images.githubusercontent.com/54006827/122794576-06681d00-d282-11eb-9f2f-8eb5de2430a9.png)


### SETUP

you can visit the website here:
https://nameless-everglades-44153.herokuapp.com/#/

or

Create your database and tables using the provided `data.sql` file. Start the server.

```
npm install
npm run server
```

Now that the server is running, open a new terminal tab with `cmd + t` and start the react client app.

```
npm run client
```

you can also navigate to `/admin` URL to view the database and delete specific items from the database

## Description

Project is modeled after the feedback form that we use each day for tracking our feelings, content comprehension, how supported we feel and allows for comments as well as an admin page that displays the data that is collected.

This project was the first solo project where I got to implement redux and store variables in reducers. They pass them down to different routes on the APP.jsx. Also used Matieral UI to render the buttons and the table on the admin page. The rest of styling was done in the theme provided by matieral ui by css.

The thing i am most proud of is that redux after only a week of study makes sense and caused no headaches. in fact passing props for the delete function in the admin table was probably the most time intensive peice of the puzzle.

Another thing that took up some time was getting the radio buttons to provide default values so it would be user friendly in regards to requiring a value for the understanding, support and feeling components.
