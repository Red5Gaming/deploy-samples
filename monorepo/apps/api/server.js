import { createServer } from 'node:http';

const port = process.env.PORT ?? 3000;
createServer((req, res) => {
  if (req.url === '/healthz') return res.end('ok');
  res.setHeader('content-type', 'application/json');
  res.end(JSON.stringify({ message: `Hello from ${process.env.APP_NAME ?? 'monorepo/api'}`, time: new Date().toISOString() }));
}).listen(port, () => console.log(`api listening on ${port}`));
