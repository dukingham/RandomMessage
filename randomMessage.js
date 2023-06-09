let nameFirst = 'Kenneth'
let nameLast = 'Falls'

const randMess = () => {
    const messages = ['Hello World, My name is Kenneth Falls.', 'Hello, shall we play a game? ', 'I am alive! Mwahahahahaha! ', "Hey, how's it going? "];
    return messages [Math.floor(Math.random() * 4)];
}

console.log(randMess())
