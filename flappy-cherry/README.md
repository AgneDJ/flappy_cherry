<a name="top"></a>
<a name="name"></a>

# Flappy Cherry

<a name="logo"></a>
<img src="/flappy-cherry/public/assets/images/cherry.webp" width="100" height="100">

_The Cherry Cloud logo_

<a name="desc"></a>

## Description

Flappy Cherry is a web app built from scratch and developed in React by Agne Djacenko, Lucca Wang and Nadia Hina. Flappy Cherry a feature of its sister app [Cherry Cloud](https://github.com/LuccaWang1/cherry-cloud) (which is a full stack web app that's a platform).

As Millennials, we thought it'd be fun making a game that's a rendition of the 2013 Flappy Bird (mobile) game.

<a name="index"></a>

## Table of Contents

- [Name](#name)
- [Logo](#logo)
- [Description](#desc)
- Table of Contents
- [Features](#features)
- [Technologies and Requirements](#tech)
- [Data Model](#model)
- [How To Run](#run)
- [Authors](#authors)
- [How to Contribute (for collaborative authors)](#contribute)

<a name="features"></a>

## Features

- User authentication (accounts)
- Gameplay mechanics
- Modular and reusable user interface (UI) components
- Graphics
- Persistence and data storage - leader board and achievements in Postgres database
- Accessibility - high contrast mode

[Back to the Table of Contents](#index)

<a name="tech"></a>

## Technologies and Requirements

- React
- JSON
- JavaScript
- Weather API (weather updates and conditional rendering)
- CSS
- DALL-E
- Markdown

[Back to the Table of Contents](#index)

<a name="model"></a>

## Data Model

This will be updated

[Back to the Table of Contents](#index)

<a name="run"></a>

## How to Run

Expose environment variables:

```bash
This will be updated
```

Install the project:

```bash
$ git clone https://github.com/AgneDJ/flappy_cherry.git
$ virtualenv env
$ source env/bin/activate
```

To run the server:

```bash
open localhost:3000
```

Run the tests:

This will be updated

[Back to the Table of Contents](#index)

<a name="authors"></a>

### Authors

- [Agne Djacenko](https://www.linkedin.com/in/agne-djacenko/)
- [Lucca Wang](https://www.linkedin.com/in/luccawang/)
- [Nadia Hina](https://www.linkedin.com/in/nadia-hina-a1161a272/)

[Back to the Table of Contents](#index)

<a name="contribute"></a>

### How to Contribute

You can only contribute to this project if you are listed as a collaborator on the project remote repo in GitHub. (You must respond to the email sent to you from Github and accept the invitation to become a contributor on the project.)

#### Git

##### First getting started:

1. Clone the repo onto your local machine
   `git clone https://github.com/AgneDJ/flappy_cherry`

##### Creating a branch

1. `cd` into your project directory
2. `git branch` to check what branch you are currently on (you will see a star next to it)
3. Make sure you are on your main branch
   `git checkout main`
4. It's good practice to pull from main before creating a new branch. (This will help you avoid merge conflicts.) (Github = origin)
   `git pull origin main`
5. Create a new branch every time you work on something new (each ticket). The branch name should be short and descriptive.
   `git checkout -b trello_ticket_number_then_branch_name`

##### Working on your branch

1. `git branch` to make sure you're on your new branch. If not, `git checkout` like above to get on your new branch.
2. Work on your code, make your changes
3. Commit often after any change

   ```
   git status
   git add .
   git commit -m "descriptive message of changes - in past tense format"
   ```

##### Pushing your code to Github

1. Push the changes in your branch to Github
   `git push origin branch_name`
2. Now if you look at the repo on Github you will see 'Your recently pushed branches.'
3. Click on 'Compare & pull request'
4. See the changes you made and click the green button 'Create pull request'

##### Pull your changes

1. In the previous step, you created a pull request, which is a request to merge your branch into the main branch.
2. You will be able to see if you have merging conflicts or not.
3. If you get a green thumbs up, click the green button 'Merge pull request'.
4. Now your branch and code has merged into the main code base.

##### Update local main and delete feature branch

1. Return to the main branch
   `git checkout main`
2. Make sure to update the code on your local machine to match the most up-to-date code living in the main branch on Github.
   `git pull origin main`
3. It's good practice to delete the old branch.
   `git branch -D branch_name`
4. Create a new branch off of main to keep on coding.
   `git checkout -b new_branch_name`

[Back to the Table of Contents](#index)

[Back to Top](#top)
