# MerqueoNetwork

## Description

Merqueo Network is a Frontend Test Project and its goal is to design a web platform where the user can publish new status, see all the status published and comment each post. Also, each user can react to any post only once per post. The following are some details implemented:

**Each user should be able to:**

+ Post a new status.
+ See all posts.
+ React to any post.
+ Comment to any post.

**Each post should have:**

+ The name of the user who posted it.
+ The time that has passed since it was published.
+ The options to react/comment
+ Show how many users have reacted to the post.
+ Show how many comments have the post.
+ Show the post comments.
+ An input to add a new comment.

**Each comment should have:**

+ The name of the user who commented it.
+ The time that has passed since it was commented.

## Use

The application is deployed at [https://merqueo-network.netlify.com](https://merqueo-network.netlify.com/). There you can test the result right now.

The application is mean to be only front functionality, so there's not persistence of the data.

Once the page is loaded, you will see only the field to post a new status. Once you insert anything there, and clicked in the button, you will see the post created immediately. In fact, you can see the time passed since you created the post.

Now that you created a post (or some posts), you can try to give a reaction to the post. Since this feature isn't well defined, the way it works is that once you click the reaction button, you will count up the reactions counter, and see a circle with the user initials.

The next option is to comment, so when you click the comment button, you will see now and input where you can put your comment. 

## Technical Specifications

+ Programming language: JavaScript (Using TypeScript).
+ Framework: Vue.js.
+ Vue tools: Vue Devtools.
+ Vue CLI: @vue/cli 4.1.2.
+ Preset: Babel + TypeScript + Router + Vuex + CSS Pre-processors + Linter + Unit Testing.
+ CSS Pre-processors: Sass (SCSS).
+ Linter: ESLint + Prettier.
+ Unit Testing: Jest.
+ IDE: WebStorm (JetBrains).
+ Version control: Git – GitHub.
+ Git Client: GitKraken.
+ URL Trello: https://trello.com/b/FhZOUAcI/merqueonetwork

## Features

+ Publish post
+ List of posts
+ List of comments by post
+ React to a post
+ Comment a post

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your unit tests

```
npm run test:unit
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## More about the project development

### Trello

The management of this project was done using Trello Boards. With this board, all the tasks planned to do where listed, starting in a Backlog list. There are also two more lists, and they are about the tasks that are currently being working, and the Done list, where the tasks are already completed. Most of the tasks have their own complete description, and some screens and evidences of the work.

### Gitflow

The control version of this project was based in a Gitflow base, where the following branches were created:

+ master: main branch, and the only one where the code is deployed to the hosting.
+ test: development done, ready for testing.
+ develop: main development branch.
  + feature/{feature-name}: specific branch for a feature to implement.

Also, each integration was done using Pull Request to the "parent" branch.

### Development

The implementation was done using Vue.js as a challenge to work with this framework/library. Even if this was a Test, I took advantage of this project to challenge myself and learn a lot of new stuff. 

Saying this, with the same idea, frameworks css like Bootstrap wasn't implemented in this project. The reason is, even if the project wasn't large, I wanted to try another approach using CSS Grid + Flexbox.

## License

MIT License

Copyright (c) 2020 Felipe Marciales

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
