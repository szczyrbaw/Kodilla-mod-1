var OSinfo = require('../modules/OSinfo');
var time = require('../modules/TIMEinfo');

//OSinfo.print();

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
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
        }
    }
});


