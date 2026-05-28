const eventEmitter = require('events');
const http = require('http');
const superagent = require('superagent');

const cronJob = new eventEmitter();
const ticktime = (1000 * 60);

const server = http.createServer((req, res) => {
res.end('listening for changes');
});
server.listen(8000, () => {
    console.log('Server is now online');
});

// async function loop(x) {
// console.log(`Pretend this is async operation: #${x}`);
// setTimeout(() => loop(x+1), ticktime);
// };
// loop(1);

cronJob.on('apiPing', async (x) => {
    const data = await superagent.get('https://dog.ceo/api/breed/poodle/images/random');
    console.log(data._body.message);
    console.log(`pinging for the ${x} time`);
    setTimeout(() => cronJob.emit('apiPing', x+1), ticktime);
});
cronJob.emit('apiPing', 1);


