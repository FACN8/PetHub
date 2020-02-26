# PetHub 
By: @LogicX1 , @Fatmeeh , @Ivankhuri

## Pick a GitHub user as your pet!

---


### Topics
* [Overview](#-overview)
* [Installing locally](#-Installing-locally-)
* [Testing](#-Testing)
* [Our process](#-Our-process)
* [Our struggles](#-Our-struggles)
* [Learning outcomes](#-Learning-outcomes)
* [Limitations and future goals](#Current-limitations-and-future-goals)

---

## :page_with_curl: Overview:
This is our project for React week.
It is a one page react app.
You can search for a github user, we will make an API request and get data from the github API.
We use the name as your pet name.
The pet have 2 status bars : 
Hunger bar and Health bar.
Those bars change with time or based on user actions, and update the page as they change.

You can view the website app on netlify : 
https://pethub.netlify.com/


---

## :floppy_disk::package: Installing locally : 

1. clone this rep.
2. cd into the cloned rep.
3. In the terminal run: npm i
4. In the terminal run: npm start

A browser page with the website will open.

### Setting up enviorment variables:
Requirements : GitHub API access token.
* Create a .env file in the directory.
    inside enter : 
    REACT_APP_GITHUB_TOKEN='Your API token'
---


# :tada: Testing:
Testing is done using jest, it is installed by default with the create-react-app.

Run the tests:
* In the terminal on the repo path: npm test


---




## :construction_worker: :construction:   Our process

The idea was specifed this week as a Tamagotchi app .
* We decided how the design will be and what are the components needed for a MVP.
* We created the app using [create-react-app](https://create-react-app.dev/docs/getting-started/). we created the app using their default template.
* We added a component directory and created the file components.
* We split the work , each person worked on few components.
* After we reached MVP , We hosted on Netlify.
* Final design was done by working togther.
---

## :hatching_chick: :hatched_chick:  Our struggles
 
- We started by setting up the project files and directories which was WRONG. this is done automatically using the create-react-app.
- Updating 2 states where one relied on the other with interval was tricky, inside setInterval you would need to use promises or update a state inside a state, which is what we did. otherwise because of Async behavior only one state will be updated, and the other state that relies on the first will never change because it doesn't see that the first state changed.

---

## :chicken: Learning outcomes
 
- Building a React app.
- Using create-react-app
- Using bundlers and build scripts etc..
- Testing interactively.

---

## Current limitations and future goals
### Limitations:
- Only one pet can exist using a Github user name as its name.

### Future goals

- Have multiple pets
- Have better stats from some other useful API such as pokemons
