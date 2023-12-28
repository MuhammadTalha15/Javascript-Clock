
const deg = 6;
const hr = document.getElementById('hour');
const mn = document.getElementById('minute');
const sc = document.getElementById('second');

setInterval( ()=>{
    const day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
})