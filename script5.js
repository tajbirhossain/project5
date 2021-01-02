setInterval (()=> {
  const date = new Date();
  const htime = date.getHours();
  const mtime = date.getMinutes();
  const stime = date.getSeconds();
  hrotation = htime*30 + mtime/2;
  mrotation = mtime*6;
  srotation = stime*6;

  hour.style.transform = `rotate(${hrotation}deg)`;
  minute.style.transform = `rotate(${mrotation}deg)`;
  second.style.transform = `rotate(${srotation}deg)`;
},1000)
