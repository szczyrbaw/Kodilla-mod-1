var os = require('os');
function timer() {
    //Przeliczenie sekund na format m s
    var secRestFromMin =  (os.uptime() % 60).toFixed() + ' sec || ';
    var minutes = (os.uptime() / 60).toFixed() + ' min ';
    //przeliczenie sekund na format h m s
    var hours = (os.uptime() / 3600).toFixed() + ' h ';
    var minRestFromHour = ((os.uptime() % 3600) / 60).toFixed() + ' min ';
    var secRestFromHour = (((os.uptime() % 3600) % 60).toFixed()) + ' sec';

    //console.log('Uptime m, s: '.green, minutes, secRestFromMin);
    /*console.log('Uptime h, m, s: '.green, hours, minRestFromHour ,secRestFromHour);
    console.log('Nie czaję od czego ten undefined!!!!');*/
    return (minutes + secRestFromMin + hours + minRestFromHour + secRestFromHour)
    
}
exports.print = timer;