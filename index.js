// logger.js
const fs=require('fs');
const path=require('path');

const DEFAULT_LOG_DIR='simpleLogs';
const ICONS={
    banner: '🎉',
    info: '🚀',
    warn: '🔔',
    error: '❌',
    success: '✅',
    custom: 'ℹ️'
};

function pad(num) {
    return (num<10? '0':'')+num;
}

function formatDate(date=new Date()) {
    return `${date.getFullYear()}-${pad(date.getMonth()+1)}-${pad(date.getDate())} `
        +`${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
}

function consoleOutput(type, message) {
    // Colori ANSI base, puoi estenderli
    const COLORS={
        banner: '\x1b[35m', // magenta
        info: '\x1b[36m', // cyan
        warn: '\x1b[33m', // yellow
        error: '\x1b[31m', // red
        success: '\x1b[32m', // green
        custom: '\x1b[37m'  // white
    };
    const color=COLORS[type]||COLORS.info;
    console.log(`${color}%s\x1b[0m`, message);
}

function ensureDir(dir) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, {recursive: true});
    }
    return dir;
}

function writeToFile(type, message, dir=DEFAULT_LOG_DIR) {
    ensureDir(dir);
    const filename=`application_${type}.log`;
    const filePath=path.join(dir, filename);
    fs.appendFileSync(filePath, message+'\n', 'utf-8');
}

const simpleLog={
    /**
     * Stampa un banner con nome app e timestamp
     */
    init(appName='App') {
        const banner=`
***********************
*   ${appName} started   *
*   ${formatDate()}   *
***********************`;
        consoleOutput('banner', banner);
    },

    /**
     * Metodo generico per loggare
     */
    _write(type, msg, inFile) {
        const formatted=`${formatDate()} | ${ICONS[type]} | [${type.toUpperCase()}] | ${msg}`;
        consoleOutput(type, formatted);
        if (inFile) {
            writeToFile(type, formatted);
        }
    },

    info(msg, inFile=false) {this._write('info', msg, inFile);},
    warn(msg, inFile=false) {this._write('warn', msg, inFile);},
    error(msg, inFile=false) {this._write('error', msg, inFile);},
    success(msg, inFile=false) {this._write('success', msg, inFile);},

    /**
     * Livello custom con colore ANSI a scelta
     */
    custom(msg, ANSIColor='\x1b[37m', inFile=false) {
        const formatted=`${formatDate()} | ${ICONS.custom} | [CUSTOM] | ${msg}`;
        console.log(`${ANSIColor}%s\x1b[0m`, formatted);
        if (inFile) {
            writeToFile('custom', formatted);
        }
    }
};

module.exports=simpleLog;
exports.default=simpleLog;
