## Ekohe Assignment

Now we have some APIs about StarWar: https://swapi.co/ , you can fetch all persons by
https://swapi.co/api/people (doesn't need to consider pagination), and you can get a person's
homeworld URL in the response. please implement such a React component:

1. it accepts a person name (like "Luke Skywalker") as props
2. if the person exists, display its basic information (name, height, gender), else display
   "Not found"
3. if the person exists, show an extra "show my homeworld" button, after clicking the
   button, it is expected to show the person's homeworld basic information (name, population)
4. make the person name as the document title
5. make the person name and homeworld name as the document title after getting the
   homeworld information
6. use modern JavaScript (ES6 or TypeScript) and (Redux + Redux-Saga or dva), use
   create-react-app or codesandbox.io to initiate the project

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### My Thought Process

My Character component receives the entire object as props intead of just the name I made this decision intentionaly based on the architecture of my app and the way I considerred that the data flow is better optimized.
