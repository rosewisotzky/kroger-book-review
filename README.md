# Kroger Book Review

We can all agree that reading is a wonderful and enriching activity. But in a world with so many exciting new technologies, it’s very easy to go months without picking up a book. Have you ever said to yourself “Jeez, reading a book sounds like the perfect thing to do right now,” only to pick up a high quality novel and stare blankly at the pages? Let Kroger Book Review ease you back into the world of literature by guiding you through some of the finest and most trashy grocery store paperbacks.  The Kroger Book Review is an app designed to help the user select and review books at their local Kroger. They will be able to post the title of the book, the location of the Kroger it is stocked at and write their own review and have that information viewed by other users. If the user re-reads a book and decides they feel differently, they will be able to edit their posts so their friends can be up to date on their review.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.


### Installing

Here's what you need to do to get started.

First, let's clone down the repository. In your terminal, enter the following

```
git clone git@github.com:rosewisotzky/kroger-book-review.git
```

Next, we'll need to go into the directory

```
cd kroger-book-review/
```

Since we're using dummy data, there's already some information set up for you in database.json. We'll need to go into our api folder and run the json server.

```
cd api/
json-server -p 8088 -w database.json
```
In a different terminal window, make sure you are in the kroger-book-review directory. Let's run Kroger Book Review! Type the following commands into your terminal.

```
npm install
npm start
```

Your browser will automatically bring you to the application.

##### You are now ready to use the Kroger Book Review!

## First Time User instructions
* The first thing you have to do is register as new user otherwise you will not be able to use Kroger Book Review!
* Once registered, you are now able to use the application

## Built With

* [react.js](https://reactjs.org/) - The framework used
* [CSS](https://css-tricks.com/) - Main styling


## Authors

* **Rose Ku'uleialoha Wisotzky** 
