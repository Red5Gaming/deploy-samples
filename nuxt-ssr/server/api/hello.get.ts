export default defineEventHandler(() => ({ message: `Hello from ${process.env.APP_NAME ?? 'nuxt-ssr'}`, time: new Date().toISOString() }));
