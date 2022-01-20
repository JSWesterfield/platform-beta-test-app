import http from 'http';
import * as log from 'https://deno.land/std@0.122.0/log/mod.ts';


const hostname = '127.0.0.1';
const port = 3500;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Slack Platform beta');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});