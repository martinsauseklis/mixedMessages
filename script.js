/*
 1. To make an array with stupid jokes as strings.
 2. Get random number
 3. Display the joke to console
*/


const stupidJokes = ['Imagine if you walked into a bar and there was a long line of people waiting to take a swing at you. That\'s the punch line.', 'How does a man on the moon cut his hair? Eclipse it.', 'Not to brag, but I defeated our local chess champion in less than five moves. Finally, my high school karate lessons paid off.', 'Did you hear about the restaurant on the moon? Great food, no atmosphere!', 'How many apples grow on a tree? All of them!', 'Did you hear the rumor about butter? Well, I\'m not going to spread it!', 'A cheese factory exploded in France. Da brie is everywhere!', 'I was really angry at my friend Mark for stealing my dictionary. I told him, "Mark, my words!"']

const randomTextGenerator = array =>{
    let randNum = Math.floor(Math.random()*array.length)

    return array[randNum]
}

console.log(randomTextGenerator(stupidJokes))