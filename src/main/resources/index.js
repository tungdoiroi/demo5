const clockElem = document.getElementById("clock");
setInterval(() => {
  const time = new Date();
  clockElem.innerText = time;
}, 1000);
