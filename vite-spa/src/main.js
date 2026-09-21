// Client-side routing: every path renders from index.html, so the server must fall back to it.
const routes = {
  '/': 'Home — vite-spa',
  '/about': 'About — vite-spa',
};
const render = () => {
  const path = location.pathname.replace(/\/$/, '') || '/';
  document.querySelector('#app').innerHTML = `
    <h1 data-route="${path}">${routes[path] ?? 'Not found'}</h1>
    <nav><a href="/" data-link>Home</a> · <a href="/about" data-link>About</a></nav>`;
};
document.addEventListener('click', (e) => {
  const a = e.target.closest('a[data-link]');
  if (!a) return;
  e.preventDefault();
  history.pushState({}, '', a.getAttribute('href'));
  render();
});
window.addEventListener('popstate', render);
render();
