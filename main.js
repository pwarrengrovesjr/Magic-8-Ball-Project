const userName = 'Warren';
if (userName) {console.log(`Hello, ${userName}!`)} else {console.log('Hello!')}

const userQuestion = 'Will my hair grow back?';
const randomNumber = Math.floor(Math.random() * 8);
var eightBall = '';

if (userName && userQuestion) {
    console.log(`${userName}'s question: ${userQuestion}.`)
} else if (userQuestion) {
    console.log(`Your question is: ${userQuestion}.`)
} else {console.log(`No Questions? See ya later!`)}


if (randomNumber === 0) {
    eightBall = 'It is certain'
} else if (randomNumber === 1) {
    eightBall = 'It is decidely so'
} else if (randomNumber === 2) {
    eightBall = 'Reply hazy. Try again'
} else if (randomNumber === 3) {
    eightBall = 'Cannot predict now'
} else if (randomNumber === 4) {
    eightBall = 'Do not count on it'
} else if (randomNumber === 5) {
    eightBall = 'My sources say no'
} else if (randomNumber === 6) {
    eightBall = 'Outlook not so good'
} else {eightBall = 'Signs point to yes'}

console.log(`The all-wise, all-knowing Magic Eightball: ${eightBall}.`)
