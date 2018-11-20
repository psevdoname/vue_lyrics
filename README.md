


# Lyrics Generator

## Overview

This project is meant for those who want to generate low-quality lyrics from mashing up two or more existing songs using markov chains. 

If you are completely unable to write the lyrics or you are looking for new weird ideas this song Generator Might be exactly what you are looking for. 

This web app will serve both as a storage for lyrics and a generator. Users can add the lyrics they would like to mash up using search and generating a new song with them. The output could then be rated, and added to the public or private database. 

Logged in users can look up the songs they have generated in the past and use them for a new mash-up.

Original lyrics will be accessed using npm package node-lyrics.

## Data Model

The application will store the whole Database, Users, Songs and lyrics generated by a certain user. 

An Example User:

```javascript
{
    username: String,
    email: String,
    hash: String, // a password hash,
    cart: [String] //an array of song IDs the user chose to make a mix of
    lyrics: [String] // an array of Song object id's
}

```


An Example Lyrics Database:

    
```javascript
    {
    id: Number, // unique song number
    title: String,
    src_artists: [String],//array of artist names - authors of the source songs
    src_songs: [String],// array of source song ids
    lyrics: [String], // within the string the custom xml tags like <chorus>, <verse> will be used for song markdown
    generated: Boolean, // true if geenrated, false if the song is original
    public: Boolean, // user can choose whether the song will be added to the public database or not
    generated_by: String // user's reference
}

```



## [Link to Commented First Draft Schema](/src/db.js) 


## Wireframes

/ - page for viewing the public generated songs

![list create](documentation/index.png)

/login - page for logging in
![list create](documentation/login.png)

/signup - page for signing up
![list create](documentation/signup.png)

/home - page for logged in users, allows to search for songs to add into the shopping cart
![list create](documentation/home.png)

/lyrics - page for viewing original lyrics and generated lyrics for non logged-in users.
![list create](documentation/lyrics.png)

/cart - page for displaying the songs that the users has added to the shopping cart.
![list create](documentation/cart.jpg)

/lyricsG - page for viewing, editing and adding the generated lyrics into the database for logged in users.
![list create](documentation/lyricsGen.jpg)

/mysongs - page for viewing the personally generates lyrics
![list create](documentation/mysongs.jpg)

/error - page for displaying errors
![list create](documentation/error.png)

## Site map

![complex example from wikipedia](documentation/schema.jpg)

## User Stories or Use Cases

1. as non-registered user, I can register a new account with the site
2. as a user, I can log in to the site
3. as a user, I can create a new generated song and store it for access later
4. as a user, I can view all of the generated songs I've created in a single table
5. as a user, I can add the generated song to be publicly accessible
6. as a user, I can save the songs I would like to use as a source in the shopping cart
7. as a non-registered user I can see the public database of the generated songs

## Research Topics


* (5 points) Integrate user authentication
    * I'm going to be using passport for user authentication
    
* (4 points) Perform client side form validation using a JavaScript library
    * if the song you are trying to add to public has empty title and/or artist an error message will show in DOM.
* (5 points) (possibly) vue.js
    * used vue.js as the frontend framework
* Bootstrap CSS
    * Use Bootstrap CSS for frontend styling 
10 points total out of 8 required points 






P.S. are we supposed to assign the points ourselves?

## [Link to Initial Main Project File](/src/app.js) 

## Annotations / References Used

1. [passport.js authentication docs](http://passportjs.org/docs) - (add link to source code that was based on this)
2. [tutorial on vue.js](https://vuejs.org/v2/guide/) 
3. [Accessing the original lyrics via node-lyrics](https://www.npmjs.com/package/node-lyrics)
