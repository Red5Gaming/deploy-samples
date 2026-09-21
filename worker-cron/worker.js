// A worker: no port, just a loop that logs a heartbeat.
setInterval(() => console.log(`worker heartbeat ${new Date().toISOString()}`), 10_000);
console.log('worker started');
