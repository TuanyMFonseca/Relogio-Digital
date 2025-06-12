let use24h = true;
const daysOfWeek = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

function updateDateTime() {
  const now = new Date();

  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();

  let day = now.getDate();
  let month = now.getMonth() + 1;
  let year = now.getFullYear();
  let dayName = daysOfWeek[now.getDay()];

  let ampm = '';
  if (!use24h) {
    ampm = h >= 12 ? ' PM' : ' AM';
    h = h % 12 || 12;
  }

  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;

  day = day < 10 ? '0' + day : day;
  month = month < 10 ? '0' + month : month;

  const timeString = `${h}:${m}:${s}${ampm}`;
  const dateString = `${dayName}, ${day}/${month}/${year}`;

  document.getElementById('clock').textContent = timeString;
  document.getElementById('date').textContent = dateString;
}

document.getElementById('toggleFormatBtn').addEventListener('click', () => {
  use24h = !use24h;
  document.getElementById('toggleFormatBtn').textContent = use24h ? 'Modo 12h' : 'Modo 24h';
  updateDateTime();
});

const toggleThemeBtn = document.getElementById('toggleThemeBtn');

toggleThemeBtn.addEventListener('click', () => {
  document.body.classList.toggle('light');

  if (document.body.classList.contains('light')) {
    toggleThemeBtn.textContent = 'Tema Claro';
  } else {
    toggleThemeBtn.textContent = 'Tema Escuro';
  }
});


setInterval(updateDateTime, 1000);
updateDateTime();
