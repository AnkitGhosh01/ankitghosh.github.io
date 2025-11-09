// Dark mode toggle & year
const btn = document.getElementById('themeToggle');
const setTheme = (light) => {
  document.documentElement.classList.toggle('light', light);
  btn.textContent = light ? '☀' : '☾';
  localStorage.setItem('theme', light ? 'light' : 'dark');
};
setTheme(localStorage.getItem('theme') === 'light');
btn.addEventListener('click', () => setTheme(!document.documentElement.classList.contains('light')));
document.getElementById('year').textContent = new Date().getFullYear();
