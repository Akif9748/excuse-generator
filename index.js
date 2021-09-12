excuses = [
    [ "I was ", "My neighbor was ", "We were ", "My mom was ", "My sister was ", "My brother was ", "My girlfriend was ", "My boyfriend was ", "My uncle was " ],
    [ "washing my ", "eating a ", "damaging a ", "praying to a ", "riding a ", "making a ", "going through a portal with a ", "invading America for a ", "forgot everything because of a " ],
    [ "car.", "cat.", "couch.", "door.", "television.", "computer case.", "carpet", "grenade.", "soldier.", "lettuce." ]
]
// A funny list, you can create a pull request to add something :]
const generated_excuse = excuses[0][Math.floor(Math.random() * excuses[0].length)] + excuses[1][Math.floor(Math.random() * excuses[1].length)] + excuses[2][Math.floor(Math.random() * excuses[2].length)]; 
console.log(generated_excuse);
