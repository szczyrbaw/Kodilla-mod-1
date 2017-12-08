var EventEmitter = require('events').EventEmitter;
var OSinfo = require('./modules/OSinfo');
var time = require('./modules/TIMEinfo');
var fs = require('fs');
var StatMode = require('stat-mode');



fs.readdir('./modules', 'utf-8', function(err, data) {
    console.log(data);
    fs.appendFile('./tekst.txt', '\nNazwy plików w folderze: ' + data , function(err) {
        if (err) throw err;
        console.log('Przeniesiono zawartość do tekst.exe'.red);
        fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
            console.log('Dane po zapisie'.magenta);
            console.log('\n' + data);
        });
    });
});



/*fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
    console.log('Dane przed zapisem'.blue);
    console.log(data);
    fs.appendFile('./tekst.txt', '\nA tak wygląda nowy tekst po zapisie!', function(err) {
        if (err) throw err; //jesli pojawi się błąd zostanie wyrzucony wyjątek
        console.log('zapisano!'.blue);
        fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
            console.log('Całe dane po zapisie'.blue);
            console.log(data);
        });
    });
});*/



/*fs.stat('./cat.jpg', function(err, stats) {
    var statMode = new StatMode(stats);
    console.log(statMode.toString());
    // read and write permission
})*/


var emitter = new EventEmitter();
emitter.on("beforeCommand", function (instruction) {
    console.log('You wrote: ' + instruction + ', trying to run command');
});
emitter.on("afterCommand", function () {
    console.log('Finished command');
});






process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        emitter.emit('beforeCommand', instruction);
        switch (instruction) {
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            case '/lang': 
                process.stdout.write('System language:\n');
                process.stdout.write(String(process.env.lang));
                break;
            case '/ver':
                process.stdout.write('Node version:\n');
                process.stdout.write(process.versions.node);
                break;
            case '/getOSinfo':
                OSinfo.print();
                break;
            default: 
                process.stdout.write('Avaible commands:\n');
                process.stdout.write('/exit /lang /ver /getOSinfo \n');
                break;
        };
        emitter.emit('afterCommand');
    }
});


