import fs from 'fs';

const levels = Object.freeze(['FATAL', 'WARN', 'DEBUG', 'INFO', 'SILLY']);

const generateTimeStamp = () => new Date().toLocaleTimeString();

class Logger {
  constructor(level, timestamp, useSTDOUT = false) {
    this.level = level;
    this.writeToFile = false;
    this.post = false;
    this._writeError = useSTDOUT ? this._writeOut : (...words) => process.stderr.write(...words);
  }

  _writeOut(...words) {
    process.stdout.write(...words);
  }

  write(filename) {
    // create the file

    return this;
  }

  post(url) {
    // set up the object some more

    return this;
  }

  log(level, ...words) {
    // make sure the user is sensible
    if (!(level in levels)) return;
    if (this.levels.indexOf(this.level) > this.levels.indexOf(level)) return;

    // generate a string
    // 10:49:31 [WARN] | something is a little broken
    const time = generateTimeStamp();
    const msgString = `${generateTimeStamp()} [${level}] | ${words.join(' ')}`;

    // decide whether to post to STDOUT or STDERR
    if (level in ['FATAL', 'WARN']) this._writeError(msgString);
    else this._writeOut(msgString);

    // continue writing to a file
    

    // post to an endpoint


  }

  fatal(...words) {
    this.log('FATAL', ...words);
  }

  warn(...words) {
    this.log('WARN', ...words);
  }

  debug(...words) {
    this.log('DEBUG', ...words);
  }

  info(...words) {
    this.log('INFO', ...words);
  }

  silly(...words) {
    this.log('SILLY', ...words);
  }

}