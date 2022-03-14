Array manipulation.split/sentence method
const words = ['I', 'love', 'pizza']   
const sentence = 'this is a short sentence'; // split converts string into an array via .split, includes index to be split by ie. space.
const arrSentence = sentence.split(' '); 
console.log(arrSentence); //['this', 'is', 'a', 'short', 'sentence'] method expression

console.log ('for..of');
for (const word of words) {
    console.log(words);
}
//another way to iterate through the array ie. will print out each word. 