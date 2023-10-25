# GraphQl MERN Stack

This is a MERN stack using graphql as the 
## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

To get started we are going to need a couple of things. First this guide assumes you are familiar with basic mongoDB, Node.js and React v18 (in our case we are going to be using react-vite).

### Prerequisites

List any software or tools that need to be installed before using the project:

- Node.js
- MongoDB account
- ApolloGraphql
- ApolloClient
- Nodemon
- Express
- React-vite
- Axios


### Installation

1. Start by creating a project directory. You can name it as you prefer. In this example, we'll use "Africanbooks":

    ```bash
    mkdir Africanbooks
    ```

2. Inside the "Africanbooks" directory, create two additional folders for the client and server sides:

    ```bash
    mkdir ClientSide && mkdir ServerSide
    ```

3. Change your working directory to the "ServerSide" folder and create a file named "server.js."

4. Initialize the folder and create a `package.json` file with default settings using:

    ```bash
    npm init --y
    ```

5. In the `package.json` file, enable ES modules by adding the `"type": "module"` property. In the "scripts" section, make sure your code is configured as follows:

    ```json
    "scripts": {
        "dev": "node server.js",
        "start": "nodemon server.js"
    }
    ```

6. Next, install the necessary dependencies for your project:

    ```bash
    npm install @apollo/server @apollo/subgraph cors express graph graphql-tag mongoose nodemon
    ```

Now your project is set up, and you have the required dependencies installed for both the client and server sides.


## Usage

To use this project, follow these steps:

1. Inside the `ServerSide` folder, create a subdirectory named `server`. Then, create two additional folders, `graphql` and `bookmodules`. I named mine `modules`.

2. In the `graphql` folder, you'll define the GraphQL backend operations, while the `modules` folder will house MongoDB operations using Mongoose.

3. In the `modules` folder, create two files: `book.js` and `db.js`. In `book.js`, define the MongoDB schema to specify the structure for storing data in the database. In `db.js`, you can store the MongoDB URL for your database schema (note: you can use an environment variable for security, but this approach works for simplicity). Also, specify the PORT where your server will run (choose a port not in use by your system).

4. In the `server.js` file, import the necessary dependencies. Then, connect to your MongoDB using Mongoose and ensure that your server listens on the specified PORT from step 3.

5. In the `graphql` folder, create a `graphqlModel` to house your schema model and name the file `schema.graphql`. Additionally, create two files called `resolvers.js` and `schemas.js`.

6. In the `schemas.js` file, instead of directly writing the schema model, reference the `schema.graphql` file using the `gql` function.

7. The `schema.graphql` file is where you define the model for your data, including queries and mutations.

8. In the `resolvers.js` file, data is sent to and retrieved from MongoDB through GraphQL. You can use the queries and mutations defined in `schema.graphql` to perform CRUD operations.

9. Once everything is set up, you can start the server by running `npm start`.

10. Open a web browser and navigate to `http://localhost:(your_PORT_number)`. Here, you can begin adding and querying data.

### Running on the Client Side

To run the client side of the project, follow these steps:

1. Navigate to the `ClientSide` folder and run `npm create vite`. Follow the configuration prompts, and inside the `src` directory, create a folder called `pages`.

2. In the `main.jsx` file, import the following Apollo Client-related modules:

    ```javascript
    import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
    ```

3. Create an Apollo Client and set the URI section to the same URL `http://localhost:(your_PORT_number)` you used in the backend.

4. Create a file named `Getbooks.jsx` and define the frontend structure to display and interact with the data.

That's it! You've set up both the server and client sides of the project, and you can now interact with your application.


on the web browser navigate to `http://localhost:(your_PORT_number)` and start adding and querying data.

##### Running on Client side
First navigate to the *ClientSide* folder and run `npm create vite` proceed with the configurations and inside the src create a folder called pages.

Go to the *main.jsx* file and import `import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
`
create an apolloClient and in the uri section insert the same url: `http://localhost:(your_PORT_number)` you used in the backend.

Create a file called **Getbooks.jsx** and map out the frontend of how you want the data to be parsed to the react component.


## Contributing

Encourage others to contribute to your project. Explain how they can do so, and what the contribution process looks like. For example:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/new-feature`
3. Make your changes and commit them: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE.md) - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

If your project uses third-party libraries, APIs, or other resources, acknowledge them here.

## Contact

Provide contact information or links to your social media profiles so that others can reach out to you with questions or feedback.

## Support

If you want to offer support for your project, mention it here and provide instructions on how users can seek help or report issues.

---

**Note:** You can customize this README template to fit the specific needs of your project. Make sure to keep it up to date and informative to help others understand and use your project effectively.
