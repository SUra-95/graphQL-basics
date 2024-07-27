const {UserList, MovieList} = require("../FakeData");
const _ = require("lodash");

const resolvers = {
    // To create reslovers we can use either normal functions or arrow functions
    Query: {
        // USER RESOLVERS
        // Normal function
        users(parent, args, context) {
            console.log(context);
            return UserList;
        },
        // Arrow function
        user:(parent, args) => {
            const id = args.id
            const user = _.find(UserList, {id: Number(id)});
            return user;
        },
        // MOVIE RESOLVERS
        movies: () => {
            return MovieList
        },

        movie: (parent, args) => {
            const name = args.name  
            const movie = _.find(MovieList, {name}) // here {name} = {name: name}
            return movie
        }
    },

    //User resolvers
    User: {
        favouriteMovies: (parent) => {
            console.log(parent);
            return _.filter(
                MovieList,
                (movie) => 
                movie.yearOfPublication >= 2000 && movie.yearOfPublication <= 2010
            );
        }
    },

    // Mutations
    Mutation: {
        createUser: (parent, args) => {
            const user = args.input;
            // console.log(user);
            const lastId = UserList[UserList.length - 1].id;
            user.id = lastId + 1;
            UserList.push(user);
            return user;
        },
        updateUsername: (parent, args) => {
           const { id, newUsername } = args.input; // used array destructure
           let userUpdated;
            UserList.forEach((user) => {
                if (user.id === Number(id)) {
                    user.username = newUsername;
                    userUpdated = user;
                }
            });
            return userUpdated;
        },
        deleteUser: (parent, args) => {
            const id = args.id;
            remove(UserList, (user) => user.id === Number(id));
            return null;
        }
    },
};

module.exports = {resolvers};