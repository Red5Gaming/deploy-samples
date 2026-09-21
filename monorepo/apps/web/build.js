import { mkdirSync, writeFileSync } from 'node:fs';

mkdirSync('dist', { recursive: true });
writeFileSync('dist/index.html', `<!doctype html><title>monorepo/web</title><h1>Hello from monorepo/web</h1><p>built ${new Date().toISOString()}</p>\n`);
writeFileSync('dist/healthz', 'ok\n');
console.log('built dist/');
