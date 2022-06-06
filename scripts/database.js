/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const database = {
    fish: [
        {
            image: "",
            species: "lobster",
            name: "Bart",
            location: "Maine",
            food: "crustaceans",
            length: 3
        },
        {
            image: "",
            species: "snow eel",
            name: "Ella",
            location: "Jamaica",
            food: "scavenger",
            length: 6
        },
        {
            image: "",
            species: "pufferfish",
            name: "Pauly",
            location: "hawaii",
            food: "little ocean critters",
            length: 2
        },
        {
            image: "",
            species: "angel fish",
            name: "Angela",
            location: "Dominican Republic",
            food: "little ocean critters",
            length: 2
        }
        
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}