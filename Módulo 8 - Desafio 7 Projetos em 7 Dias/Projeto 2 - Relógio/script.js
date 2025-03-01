// Elementos
let digitalElement = document.querySelector('.digital');
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');

// FUNÇÔES
function updateClock() {
  // pegando a hora atual
  let now = new Date();
  // pegando hora, minuto e segundo
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();

  // Relógio digital
  digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;

  // Graus do ponteiro em segundos
  let sDeg = ((360 / 60) * second) - 90;
  let mDeg = ((360 / 60) * minute) - 90;
  let hDeg = ((360 / 12) * hour) - 90;


  // Relógio analógico
  sElement.style.transform = `rotate(${sDeg}deg)`;
  mElement.style.transform = `rotate(${mDeg}deg)`;
  hElement.style.transform = `rotate(${hDeg}deg)`;
}

function fixZero(time) {
  return time < 10 ? `0${time}` : time;
}

setInterval(updateClock, 1000);
updateClock();