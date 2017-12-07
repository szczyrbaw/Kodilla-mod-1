var os = require('os');
var colors = require('colors');
colors.enabled = true;
var time = require('../modules/TIMEinfo');

function getOSinfo() {
    var type = os.type();
    
    if (type === 'Darwin') {
        type = 'OSX';
    } else if (type === 'Windows_NT') {
        type = 'Windows';
    }
    
    var release = os.release();
    var cpu = os.cpus()[0].model;
    
    var userInfo = os.userInfo();
    
    console.log('System:'.grey, type);
    console.log('Release:'.magenta, release);
    console.log('CPU model:'.blue, cpu);
    console.log('Uptime: '.green + time.print());
    console.log('User name:'.yellow, userInfo.username);
    console.log('Home dir:'.gray, userInfo.homedir);
    
}
exports.print = getOSinfo;