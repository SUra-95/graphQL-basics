const {gql} = require("apollo-server");

const typeDefs = gql`
    type User {
        id: ID!
        name: String!
        username: String!
        age: Int!
        nationality: Nationality!   
        friends: [User]
        favouriteMovies: [Movie]
    }

    type Movie {
        id: ID!,
        name: String!,
        yearOfPublication: Int!,
        isInTheaters: Boolean!
    }
    
    type Query {
        users: [User!]!
        user(id: ID!): User!
        movies: [Movie!]!
        movie(name: String!): Movie!
    }

    input CreateUserInput {
        name: String!
        username: String!
        age: Int!
        nationality: Nationality = SRILANKA
    }
     
    input UpdateUserNameInput {
        id: ID!
        newUsername: String!
    }

    type Mutation {
        createUser(input: CreateUserInput!): User
        updateUsername(input: UpdateUserNameInput!): User
        deleteUser(id: ID!): User
    }

    enum Nationality {
        SRILANKA
        AUSTRALIA
        INDIA
    }
`;


module.exports = {typeDefs};