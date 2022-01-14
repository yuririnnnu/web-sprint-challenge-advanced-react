# Sprint Challenge: Advanced React - React Plants 🌿

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past sprint and apply them in a concrete project. This sprint explored some advanced React topics ⚛️. During this sprint, you studied **class components**, **the component lifecycle** and **class component lifecycle methods,** **custom hooks**, and **React Testing Library 🐙.** 

In your challenge this week, you will demonstrate your mastery of these skills by creating an app that will fetch data from an internal server using a `class component`, displaying that data, using a `custom hook`, and `writing tests for your app.`

This is an individual assessment. All work must be your own. All projects will be submitted to codegrade for automated review. You will also be given feedback by code reviewers the Monday after challenge submissions. For more information on the review process [click here.](https://www.notion.so/lambdaschool/How-to-View-Feedback-in-CodeGrade-c5147cee220c4044a25de28bcb6bb54a)

You are not allowed to collaborate during the sprint challenge. However, you are encouraged to follow the twenty-minute rule and seek support by dropping a :wave: in your help channel when needed.

_Sprint challenges open at Midnight PST on Thursday and close at 5pm PST on Friday. You will receive feedback on what you have finished and submitted by 5pm when the submissions will be closed. No retakes will be accepted._

## Introduction

In this challenge, you will add class components to your a basic ecommerce site that allow you to request product data from a server and render that data. You will also implement the ablitity to add products to a shopping cart.

In meeting the minimum viable product (MVP) specifications listed below, your project should look like the solution examples below:

[Plant List Page](https://tk-assets.lambdaschool.com/88008802-846c-46bb-8cf8-11ace219e2bf_ScreenShot2020-04-30at12.39.22PM.png)

[Successful Form Submission](https://tk-assets.lambdaschool.com/90ebefd4-ee0f-4b1c-884c-1336ce87441d_ScreenShot2020-04-30at12.40.56PM.png)

You will also need to build the two tests in the `CheckoutForm.test.js` file and make sure they are testing what the test title says they are.

## Project Setup
* [ ] Run npm install to install your dependencies.
* [ ] Run npm start to run your frontend and backend code automatically.
* [ ] Note your backend code will run automatically when your run npm start. There is no need to seperately run a server.js file and no means to test the server through postman or the browser. Feel free to ignore any messages related to MSW or mock service workers.

## Project Instructions

In this project, you will build the retrieve data from a public api, add in a familiar custom hook and add in some tests.

## API Documentation

* **[GET]** * to `http://localhost:3333/plants`: returns an array of objects of the following form
```js
{
    name: "Peperomia Rosso",
    id: 143,
    scientificName: "Peperomia caperata rosso",
    difficulty: "easy",
    light: "direct",
    img:
      "https://cdn.shopify.com/s/files/1/2781/9558/products/PEPEROMIA_ROSSO-1_800x.png?v=1587156590",
    sizes: ["small"],
    watering: 2,
    description:
      "Rosalia is a stunner with glossy green leaves accompanied by bright red undersides. Her oval shaped leaves are deeply grooved, adding depth to her figure. Flower spikes will appear with bright light, adding even more character to this absolute beaut.",
    price: 21,
  }
```

## Example Finished Project
![Example Finished Project](./project_example.gif)

## Instructions

### Project Requirements

 Your finished project must include all of the following requirements.

#### Plant list

  Display a list of the plants from the server. This should be done in the class component `PlantList`. **Unlike other projects, the local server used here can not be accessed through the browser. It is started automatically and without the need for starting a server.js file. Feel free to ignore any messages related to MSW or mock service workers. For this and the rest of your sprint challenges, test the functioning of the server directly through your axios calls.**

* [ ] In the `PlantList` class component, fetch data from the server you now have running - the data can be fetched from `http://localhost:3333/plants.`
* [ ] Set the data to a state property called `this.state.plants.`
* [ ] The render function is already built and styled. Once the data is on the state, you will see the list of plants, and you will have the functionality to add a plant to the cart.

### Shopping Cart

  Nothing needs to be done here. You _will_ have to navigate to the cart page in your app so you can go to the checkout form for the next step.

### Checkout Form

  The form is working, but it is currently controlled by local stateful logic. We want to control this form with a custom hook.

* [ ] Build a custom hook called `useForm`, and use it in your CheckoutForm component to control the form's stateful logic. **You do not need to use useLocalStorage to complete this task! localStorage is not necessary for this project. Simply reproduce all functionality for the useForm custom hook to complete.**

* [ ] Try and build it out first before you peek at the guided project. And *do not* copy/paste directly from the guided project!_

### Testing the Checkout Form
* [ ] Run the test runner and ensure that `src/components/CheckoutForm.test.js` is correctly called.
* [ ] Fill out code necessary to test that that Checkout form renders without errors.
* [ ] Fill out code necessary to test that when all form inputs are filled with valid data, a success message appears.
* [ ] Make sure the tests are passing, and make sure you can cause the tests to fail purposefully, so that you know the tests are truly working.

## Important Notes:
* Again, unlike other projects, the local server used here can not be accessed through the browser. For this and the rest of your sprint challenges, test the functioning of the server directly through your axios calls.
* You are welcome to create additional files but **do not move or rename existing files** or folders.
* Do not alter your `package.json` file except to install extra libraries.
* In your solution, it is essential that you follow best practices and produce clean and professional results.
* Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work.
* It is better to submit a challenge that meets MVP than one that attempts too much and does not.

```js
const plants = {{}, {}, {}} // with each object being a mock plant
test("displays plants in cart", () => {
  const { getByText } = render(<ShoppingCart cart={plants} />)

  ...

})
```

## Submission format
* [ ] Submit via Codegrade by committing and pushing any new changes to **your main branch.**
* [ ] Check Codegrade before the deadline to compare its results against your local tests.
* [ ] Check Codegrade on the days following the Sprint Challenge for reviewer feedback. For more information on how to access and read your feedback, check [here](https://www.notion.so/lambdaschool/How-to-View-Feedback-in-CodeGrade-c5147cee220c4044a25de28bcb6bb54a)
* [ ] New commits will be evaluated by Codegrade if pushed before the sprint challenge deadline.

## Interview Questions

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. Add your answers below.

1. What are the main differences between a class-based and a functional component?
=> A functional component is just a plain JavaScript function that accepts props as an argument and returns a React element. A class component requires you to extend from React. Component and create a render function which returns a React element.React lifecycle methods can be used inside class components but not with functional components.

2. When does a componentWillMount function be called? What about a componentDidUpdate?
=> componentWillMount is called just before a component mounts on the DOM or the render method is called. componentDidUpdate is called after any rendered HTML has finished loading.

3. Define stateful logic.
=> Stateful logic is any code that uses state.
4. What are the three step of creating a successful test? What is done in each phase? 
=> Arrange, act and assert