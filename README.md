[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Repos Setup
I have created 2 repos on GitHub - one ```fobtales-client``` other ```fobtales-api```.
Then I have downloaded the folder structure for my fobtales-client locally from [https://github.com/skylarkJ/browser-template](https://github.com/skylarkJ/browser-template).
(It's important to unzip it and rename it because by removing the content and moving somewhere else I don't copy hidden files with it.) And follow other instructions there.

In the config.js needs to be link to herokuapp(after I have created it on api repo).
```
'use strict';

const config = {
  apiOrigins: {
    production: 'https://git.heroku.com/sleepy-hollows-32453.herokuapp.com',
  },
};

module.exports = config;
```

Then I did the same with fobtales-api repo locally - following steps from 1-10:
[https://github.com/ga-wdi-boston/rails-api-template](https://github.com/ga-wdi-boston/rails-api-template)

I have linked both repos to their repos on GitHub. Also for fobtales-client while on the master branch I have run ```$ grunt deploy``` to create gh-page branch on GitHub.

After that I have finally created a heroku account and followed instructions here:
[https://github.com/skylarkJ/rails-heroku-setup-guide](https://github.com/skylarkJ/rails-heroku-setup-guide).
Then I ran in the terminal of api repo ```$ brew install heroku```
I left one terminal tab just for heroku to log in while in the root of api repo.
As another starting point I created a new heroku app by running in terminal:
```$ heroku create```
```$ git remote -v```

After that I ran:
```heroku config:set SECRET_KEY_BASE=$(rake secret)```
```heroku config:set SECRET_TOKEN=$(rake secret)```
```heroku config:set CLIENT_ORIGIN=https://skylarkj.github.io```

Then I started a client server inside terminal by   ``` grunt serve``` and for back-end
server ```bin/rails server```

Also on client ```$ npm install``` and on back-end ```$ bundle install```
The basic setup was finished.

## Structure

CLIENT REPO
I have stored JavaScript files in [`assets/scripts`](assets/scripts).
The "manifest" or entry-point is in
[`assets/scripts/index.js`](assets/scripts/index.js).

Others are:
[`assets/scripts/ui.js`](assets/scripts/ui.js)
[`assets/scripts/api.js`](assets/scripts/api.js)
[`assets/scripts/events.js`](assets/scripts/events.js)
[`assets/scripts/fobtales.js`](assets/scripts/fobtales.js)


I have stored styles in [`assets/styles`](assets/styles) and loaded them
from [`assets/styles/index.scss`](assets/styles/index.scss).

I have used [getFormFields](forms.md) to retrieve form data to send to
an API.

API REPO
It gets own setup by rails. More details in the section ## Technical Overview.

## Testing
On Client Side
-   ```grunt nag``` or just ```grunt```: runs code quality analysis tools on your code
    and complains
-   ```grunt reformat```: reformats all your code in a standard style
-   ```grunt <server|serve|s>```: generates bundles, watches, and livereloads
-   ```grunt test```: runs any automated tests, depends on ```grunt build```
-   ```grunt build```: place bundled styles and scripts where ```index.html``` can find
    them

On Back-End Side

- ```bin/rake routes``` lists the endpoints available in your API.
- ```bin/rake test``` runs automated tests.
- ```bin/rails console``` opens a REPL that pre-loads the API.
- ```bin/rails db``` opens your database client and loads the correct database.
- ```bin/rails server``` starts the API.
- ```scripts/*.sh``` run various curl commands to test the API. See below.

To deploy a browser-template based SPA, I have run ```grunt deploy```.

On Heroku Production Side
- ```heroku create```
- ```git push heroku master```
- ```heroku run rake db:migrate```
- ```heroku run rake db:seed```
- ```heroku config:set SECRET_KEY_BASE=$(rake secret)```
- ```heroku config:set SECRET_TOKEN=$(rake secret)```
- ```heroku config:set CLIENT_ORIGIN=https://yourgithubname.github.io```
- ```heroku apps:rename newname``` (optional)
- ```heroku restart```
- ```heroku open```

## Links
APis Repo
[https://github.com/skylarkJ/fobtales-api/tree/master](https://github.com/skylarkJ/fobtales-api/tree/master)
Live Application
[https://skylarkj.github.io/fobtales-client/](https://skylarkj.github.io/fobtales-client/)

Heroku
[https://sleepy-hollows-32453.herokuapp.com/](https://sleepy-hollows-32453.herokuapp.com/)

WIREFRAMES
[https://photos.google.com/share/AF1QipNjVZMZaX1kQiiVaoFFHVYANYK5qGlTZ0jmohTpt4KPH0Vfk1HYCP4vf0XCgYwVDA?key=eThKQlEtZ3NzeFF6QnNvcVRVYmtONHEyaTlvVkR3](https://photos.google.com/share/AF1QipNjVZMZaX1kQiiVaoFFHVYANYK5qGlTZ0jmohTpt4KPH0Vfk1HYCP4vf0XCgYwVDA?key=eThKQlEtZ3NzeFF6QnNvcVRVYmtONHEyaTlvVkR3)

USER STORIES
[https://www.evernote.com/l/AUBJP2X_DJFOD5mAbwlpzMxRnXZQdN2wsEE](https://www.evernote.com/l/AUBJP2X_DJFOD5mAbwlpzMxRnXZQdN2wsEE)

## A Project Description
I have built a single page full stack web application called FOB Tales - Fresh Of The Boat Tales - a blog. FOBs are called the users who sign up to create a short funny story of fresh off the boaters or, as your dad would say, recent immigrants.

A newcomer can only read stories of others displayed on the page or create own account by signing up. When signed in a create story button will appear. Than the FOB can start to create own content which is gonna be listed under the older stories. Now the user can still see others stories but also can see his/her own. The signed in user can update or delete own stories and see own email as a sign of being still logged in and owning the functionality.

I have plenty of ideas how to expand the blog in the future - Comments on each story, Leaderboard - sorted funniest stories according to all time, this month, week, today with ratings. Upload pictures as a part of the story and a user profile picture.

# Languages Used
```html5```, ```css3```, ```sass```, ```Bootstrap```, ```AJAX```, own ```APIs``` built by ```Ruby on Rails```

# Additional Tools
```Sketch``` to create a simple logo and a background picture with color opacity
```Trello``` to track bugs, resources
```Evernote``` for user stories and notes about the development process

# Technical Overview
APIs REPO
I have created a single table for Story and made a relationship with User. A story ```belongs_to user``` and a user ```has_many :stories```. Also story has to recognize user, title, content to be created.  Then under scripts/ I created another folder called stories and inserted there create.sh(POST), index.sh(GET), show.sh(GET), update.sh(PATCH), destroy.sh(DELETE). All files work with ```${ID}``` except create.sh - time when we are asking for  creating one in a sql database.

I have created one migration called ```create_stories.rb```
```class CreateStories < ActiveRecord::Migration[5.0]
  def change
    create_table :stories do |t|
      t.string :title, null: false
      t.string :content, null: false
      t.references :user, index: true, foreign_key: true, null: false
      t.timestamps null: false
    end
  end
end```

While ```create_users.rb```

```
class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :email, null: false, index: { unique: true }
      t.string :token, null: false, index: { unique: true }
      t.string :password_digest, null: false

      t.timestamps null: false
    end
  end
end
```

The biggest challenge was to setup properly controllers for ```open_read``` and ```protectived```.
Open_read I have used for a reader who hasn't made an account or isn't signed in. He/she can only read stories but not update or delete them. StoriesController is then inheriting from OpenReadController and UsersController is inheriting from ProtectedController.

Then I got serilizers -
```story_serializer.rb``` - attributes :id, :title, :content, :user_id
```user_serializer.rb``` - attributes :id, :email
```user_login_serializer.rb``` - attributes :id, :email, :token


CLIENT REPO
ui.js - for the story I have created functions updateStory, deleteStory and used bootstrap modals for that. Another function was clickOnStory where I created to variables id and story to pull data from back-end and used it for if statement to detect which story is of what user. Then used jQuery append method to show buttons to update or delete story if the condition is true. Then I finally on click called the funtions updateStory or deleteStory. Finally I created a function called stories to loop dynamically over each story and create a list displayed as a main content on the page. Any time the loop goes through back-end stories it will append a new class with a story to the .stories in html.

api.js - I created RESTful routes for stories, story, createStory, updateStory, deleteStory. I made on them .ajax() with pointing url to the back-end folder called stories. Create, update, delete story can only a logged in user so the requests need also an authorization - token of a particular user.

events.js - events require get-form-fields.js, api.js and ui.js and store.js to work properly. I created several functions - getStories, createStory, updateStory, deleteStory. Then I called createStory, updateStory, deleteStory functions under the submit event inside function called addHandlers. And the function getStories I have called inside those three functions.

index.js - require set-api-origin.js, config.js, event.js, api.js. Also calles setAPIOrigin and inside of it are called two functions - addHandlers and getStories.
index.scss - I have used sass to create sass variables for media query - desktop, tablet, phone. Another variables I set for colors which repeats on the site often. Also if I want to change some feel of the site later It will be much easier this way.

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
