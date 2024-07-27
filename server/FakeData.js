const UserList = [
    {
        id:1,
        name: "Suranjan",
        username: "Suranjan",
        age: 27,
        nationality: "INDIA",
        friends: [
            {
                id:3,
                name: "Heshan",
                username: "tutu",
                age: 24,
                nationality: "AUSTRALIA"
            },
            {
                id:2,
                name: "Nadun",
                username: "Kosal",
                age: 25,
                nationality: "SRILANKA"
            }
        ]
    },
    {
        id:2,
        name: "Nadun",
        username: "Kosal",
        age: 25,
        nationality: "SRILANKA",
        friends: [
            {
                id:1,
                name: "Suranjan",
                username: "Suranjan",
                age: 27,
                nationality: "INDIA"
            }
        ]
    },
    {
        id:3,
        name: "Heshan",
        username: "tutu",
        age: 24,
        nationality: "AUSTRALIA",
    },
];

const MovieList = [
    {
        id: 1,
        name: "Avengers Endgame",
        yearOfPublication: 2009,
        isInTheaters: true,
    },
    {
        id: 2,
        name: "Instersteller",
        yearOfPublication: 2017,
        isInTheaters: false,
    },
    {
        id: 3,
        name: "SuperBad",
        yearOfPublication: 2022,
        isInTheaters: true,
    },
    {
        id: 4,
        name: "Big Hero 6",
        yearOfPublication: 2014,
        isInTheaters: false,
    },
    {
        id: 5,
        name: "Spider Man",
        yearOfPublication: 2001,
        isInTheaters: false,
    },
    {
        id: 6,
        name: "Tom & Jerry",
        yearOfPublication: 2002,
        isInTheaters: true,
    },

]

module.exports = {UserList, MovieList}
