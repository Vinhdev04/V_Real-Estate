/* ==============================
      NODE LOGGER (for scripts)
      - Dùng trong FE folder nhưng chạy bằng Node
      - Ghi log vào file app.log và error.log
      - In màu ra console
 ============================== */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Fix __dirname (ESM)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Folder logs ngay trong FE/src/logs
const logsDir = __dirname;
const appLogFile = path.join(logsDir, 'app.log');
const errorLogFile = path.join(logsDir, 'error.log');

// Tạo folder nếu chưa có
if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir, { recursive: true });
}

// Timestamp
const timestamp = () => new Date().toISOString();

// Format message
const format = (level, message, data = null) => {
    let txt = `[${timestamp()}] [${level}] ${message}`;
    if (data) {
        txt +=
            '\n' +
            (typeof data === 'object' ? JSON.stringify(data, null, 2) : data);
    }
    return txt;
};

// Ghi file async
const write = (file, msg) => {
    fs.appendFile(file, msg + '\n', (err) => {
        if (err) console.error('Lỗi ghi log:', err);
    });
};

// ========== Logger API ==========

// INFO
export const info = (msg, data = null) => {
    const out = format('INFO', msg, data);
    console.log('\x1b[36m%s\x1b[0m', out); // Cyan
    write(appLogFile, out);
};

// WARN
export const warn = (msg, data = null) => {
    const out = format('WARN', msg, data);
    console.warn('\x1b[33m%s\x1b[0m', out); // Yellow
    write(appLogFile, out);
};

// ERROR
export const error = (msg, errorObj = null) => {
    const data = errorObj
        ? {
              message: errorObj.message,
              stack: errorObj.stack,
              code: errorObj.code,
              ...errorObj
          }
        : null;

    const out = format('ERROR', msg, data);
    console.error('\x1b[31m%s\x1b[0m', out); // Red

    write(errorLogFile, out);
    write(appLogFile, out);
};

// DEBUG (chỉ chạy khi NODE_ENV=development)
export const debug = (msg, data = null) => {
    if (process.env.NODE_ENV === 'development') {
        const out = format('DEBUG', msg, data);
        console.debug('\x1b[35m%s\x1b[0m', out); // Magenta
        write(appLogFile, out);
    }
};

// SUCCESS
export const success = (msg, data = null) => {
    const out = format('SUCCESS', msg, data);
    console.log('\x1b[32m%s\x1b[0m', out); // Green
    write(appLogFile, out);
};

export default {
    info,
    warn,
    error,
    debug,
    success
};
