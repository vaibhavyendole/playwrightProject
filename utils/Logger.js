import winston from 'winston';
import path from 'path';
import fs from 'fs';

// Remove ANSI color codes so the log file stays readable.
/**
 * @param {string|any} message
 * @returns {string}
 */
const stripAnsi = (message) => String(message).replace(/\u001b\[[0-9;]*[A-Za-z]/g, '');

// Folder where all execution and error logs will be stored.
const logsDir = path.resolve(__dirname, '../logs');

// Ensure the logs directory exists before writing any files.
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true });
}

// Format each log line as: [timestamp] [LEVEL] message
const logFormat = winston.format.printf(({ timestamp, level, message }) => {
  return `[${timestamp}] [${level.toUpperCase()}] ${message}`;
});

// Create the logger with a global INFO level threshold.
const runLogFile = path.join(logsDir, 'run.log');
const failureSummaryFile = path.join(logsDir, 'failed-tests.log');
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format((info) => {
      info.message = stripAnsi(info.message);
      return info;
    })(),
    logFormat
  ),
  transports: [
    // Print logs to the terminal for quick debugging.
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        logFormat
      ),
    }),
    // Always write a common run log for the test execution.
    new winston.transports.File({
      filename: runLogFile,
      level: 'info',
    }),
  ],
});

const Logger = {
  /** @type {string[]} */
  messages: [],
  /**
   * @param {string} message
   */
  info: (message) => {
    const formatted = `INFO: ${message}`;
    Logger.messages.push(formatted);
    logger.info(message);
  },
  /**
   * @param {string} message
   */
  error: (message) => {
    const formatted = `ERROR: ${message}`;
    Logger.messages.push(formatted);
    logger.error(message);
  },
  /**
   * @param {string} message
   */
  testStart: (message) => {
    const formatted = `TEST START: ${message}`;
    Logger.messages.push(formatted);
    logger.info(formatted);
  },
  /**
   * @param {string} message
   */
  step: (message) => {
    const formatted = `STEP: ${message}`;
    Logger.messages.push(formatted);
    logger.info(formatted);
  },
  clear: () => {
    Logger.messages = [];
  },
  /**
   * @param {{ status: string, title: string }} testInfo
   */
  flushFailureLog: (testInfo) => {
    if (!Logger.messages.length || testInfo.status === 'passed') {
      Logger.clear();
      return;
    }

    const safeTitle = testInfo.title.replace(/[^a-z0-9-_]/gi, '_').slice(0, 120);
    const failureLogFile = path.join(logsDir, `${safeTitle}.failed.log`);
    const header = `\n===== FAILED TEST: ${testInfo.title} =====\n`;
    const body = Logger.messages.join('\n') + '\n';
    fs.appendFileSync(failureLogFile, header + body, 'utf8');

    const summaryEntry = `${new Date().toISOString()} | ${testInfo.title} | ${failureLogFile}\n`;
    fs.appendFileSync(failureSummaryFile, summaryEntry, 'utf8');

    Logger.clear();
  },
};

export default Logger;
