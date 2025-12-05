/* ==============================
      BACKEND LOGGER (ASYNC)
      Tự tạo hệ thống log cho Backend:

    ✔ Ghi log ra file app.log & error.log
    ✔ In màu ra console (đẹp + dễ nhìn)
    ✔ Không block event-loop (dùng appendFile async)
    ✔ Middleware log tất cả HTTP request
 ============================== */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

/* -------------------------------------------------
    FIX __dirname CHO ES MODULES
    (Vì ES Modules không có sẵn __filename, __dirname)
------------------------------------------------- */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* -------------------------------------------------
    CONFIG ĐƯỜNG DẪN LOG
    - logFile: log chung
    - errorFile: log dành cho lỗi
------------------------------------------------- */
const logsDir = __dirname;
const logFile = path.join(logsDir, 'app.log');
const errorFile = path.join(logsDir, 'error.log');

/* -------------------------------------------------
    ĐẢM BẢO THƯ MỤC LOG TỒN TẠI
    Nếu chưa có thì tự tạo (recursive=true)
------------------------------------------------- */
if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir, { recursive: true });
}

/* ==============================
      HELPER FUNCTIONS
============================== */

/**
 * Lấy timestamp định dạng ISO (dễ đọc, chuẩn quốc tế)
 */
const getTimestamp = () => new Date().toISOString();

/**
 * Format nội dung log trước khi ghi vào file hoặc console.
 * @param {string} level   - Mức log (INFO, WARN, ERROR...)
 * @param {string} message - Nội dung cần log
 * @param {any} data       - Dữ liệu phụ thêm (object hoặc text)
 */
const formatMessage = (level, message, data = null) => {
    let log = `[${getTimestamp()}] [${level}] ${message}`;

    // Nếu có data → stringify đẹp (2 spaces)
    if (data) {
        log +=
            '\n' +
            (typeof data === 'object' ? JSON.stringify(data, null, 2) : data);
    }
    return log;
};

/**
 * Ghi log vào file theo kiểu bất đồng bộ (non-blocking)
 * → Không làm chậm server
 */
const writeAsync = (file, message) => {
    fs.appendFile(file, message + '\n', (err) => {
        if (err) {
            console.error('Log write failed:', err);
        }
    });
};

/* ==============================
      LOGGER FUNCTIONS
============================== */

/**
 * Log thông tin chung (hoạt động bình thường)
 */
export const info = (msg, data = null) => {
    const out = formatMessage('INFO', msg, data);
    console.log('\x1b[36m%s\x1b[0m', out); // Màu cyan
    writeAsync(logFile, out);
};

/**
 * Log cảnh báo (không phải lỗi nhưng bất thường)
 */
export const warn = (msg, data = null) => {
    const out = formatMessage('WARN', msg, data);
    console.warn('\x1b[33m%s\x1b[0m', out); // Yellow
    writeAsync(logFile, out);
};

/**
 * Log lỗi — thêm thông tin stack, code,...
 * Ghi vào cả error.log & app.log
 */
export const error = (msg, errObj = null) => {
    const data = errObj
        ? {
              message: errObj.message,
              stack: errObj.stack,
              code: errObj.code,
              ...errObj
          }
        : null;

    const out = formatMessage('ERROR', msg, data);
    console.error('\x1b[31m%s\x1b[0m', out); // Red

    writeAsync(errorFile, out);
    writeAsync(logFile, out);
};

/**
 * Log debug — chỉ chạy khi NODE_ENV = 'development'
 */
export const debug = (msg, data = null) => {
    if (process.env.NODE_ENV === 'development') {
        const out = formatMessage('DEBUG', msg, data);
        console.debug('\x1b[35m%s\x1b[0m', out); // Magenta
        writeAsync(logFile, out);
    }
};

/**
 * Log thành công (trạng thái OK, done)
 */
export const success = (msg, data = null) => {
    const out = formatMessage('SUCCESS', msg, data);
    console.log('\x1b[32m%s\x1b[0m', out); // Green
    writeAsync(logFile, out);
};

/* ==============================
      EXPRESS HTTP LOGGER
============================== */

/**
 * Middleware log request Express
 * - Log method, url, statusCode, thời gian xử lý
 * - Nếu status >= 400 → warn, còn lại → info
 */
export const middleware = () => {
    return (req, res, next) => {
        const start = Date.now(); // Thời điểm bắt đầu request

        // Log khi phản hồi đã gửi
        res.on('finish', () => {
            const duration = Date.now() - start;

            const infoData = {
                method: req.method,
                url: req.url,
                status: res.statusCode,
                duration: `${duration}ms`,
                ip: req.ip
            };

            // Nếu lỗi (4xx, 5xx) → warn
            if (res.statusCode >= 400)
                warn(`HTTP ${req.method} ${req.url}`, infoData);
            else info(`HTTP ${req.method} ${req.url}`, infoData);
        });

        next();
    };
};

/* ==============================
      DEFAULT EXPORT
============================== */
export default {
    info,
    warn,
    error,
    debug,
    success,
    middleware
};
