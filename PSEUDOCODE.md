** MVP **
Step 1
Run yarn install or npm install inside the root directory of this project1Run yarn start or npm start to start the server. - Done

Step 2
In a separate terminal window, run yarn create react-app friends to create your starter React application. - Done

Step 3 
CD into friends and run yarn add axios react-router-dom or npm install --save axios react-router-dom to include those dependencies in your project. - Done

Step 4
CD into friends and run yarn start or npm start to fire up your React Dev Server. - Done

Step 5
Inside your React application, create a component to display the list of friends coming from the server.
- Create a folder called components under src folder - Done
- Create a component called FriendList under components folder - Done
- Import FriendList and axios into App.js - Done
- Pass axios and FriendList logic into App.js to display the list of friends - Done
- Add some css styling to FriendContainer class in App.css - Done

Step 6
Add a form to gather information about a new friend.
- Create a new FriendForm class component


Step 7
Add a button to save the new friend by making a POST request to the same endpoint listed above.

Step 8
Each friend should have the properties listed below.

Step 9
Implement Update and Delete functionality.
- for update pass the friend id as a URL parameter, and the information you want to update about the friend inside the body. You can build a new form in the UI for this, or, if you set it up correctly, reuse the form you made for the POST request.

- for delete, add a delete button, or an x icon to each friend that will delete the friend when you click it. In the request url, pass the friend id as a URL parameter.



