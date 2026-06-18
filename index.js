const eventEmitter = require('events');
const http = require('http');
const superagent = require('superagent');
const conversion = require('./helperFunctions/conversion.js');

const cronJob = new eventEmitter();
const ticktime = (1000 * 60);

const server = http.createServer((req, res) => {
res.end('listening for changes');
});
server.listen(8000, () => {
    console.log('Server is now online');
});

conversion(`${__dirname}/export.csv`);

// async function loop(x) {
// console.log(`Pretend this is async operation: #${x}`);
// setTimeout(() => loop(x+1), ticktime);
// };
// loop(1);

// cronJob.on('apiPing', async (x) => {
//     const data = await superagent.get('https://dog.ceo/api/breed/poodle/images/random');
//     console.log(data._body.message);
//     console.log(`pinging for the ${x} time`);
//     setTimeout(() => cronJob.emit('apiPing', x+1), ticktime);
// });
// cronJob.emit('apiPing', 1);

// const promisify = path => {
//     return new Promise((resolve, reject) => {
// resolve(superagent.get(path));
// reject();
// });
// }

// console.log(promisify('https://dog.ceo/api/breed/poodlei/images/random').then(data => {
//     console.log('Fulfilled:', data);
// }).catch(err => {
//     console.log('Rejected');
// }));


