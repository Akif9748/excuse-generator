const excuses = [
    [ "I was ", "My neighbor was ", "We were ", "My mom was ", "My sister was ", "My brother was ", "My girlfriend was ", "My boyfriend was ", "My uncle was " ],
    [ "washing my ", "eating a ", "damaging a ", "praying to a ", "riding a ", "making a ", "going through a portal with a ", "invading America for a ", "forgot everything because of a " ],
    [ "car.", "cat.", "couch.", "door.", "television.", "computer case.", "carpet", "grenade.", "soldier.", "lettuce." ]
],
generatedExcuse = [];

// A funny list, you can create a pull request to add something :]

for (choiceFirst of excuses) 
    generatedExcuse.push(choiceFirst[Math.floor(Math.random() * choiceFirst.length)]);

console.log(generatedExcuse.join(""));
