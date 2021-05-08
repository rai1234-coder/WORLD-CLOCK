setInterval(() => {

    a = new Date();
    let date = a.toLocaleDateString();
    let Time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
    document.getElementById("time").innerHTML = Time + " on " + date;


}, 1000);







