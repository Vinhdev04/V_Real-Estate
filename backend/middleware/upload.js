/* ==============================
     MIDDLEWARE: UPLOAD FILE (MULTER)
 ============================== */
import multer from 'multer';
import path from 'path';
import fs from 'fs';

// Tạo thư mục uploads nếu chưa có
const uploadDir = 'uploads/avatars';
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// Cấu hình storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir); // Lưu vào uploads/avatars
    },
    filename: function (req, file, cb) {
        // Tạo tên file unique: timestamp-originalname
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const ext = path.extname(file.originalname);
        const nameWithoutExt = path.basename(file.originalname, ext);
        cb(null, nameWithoutExt + '-' + uniqueSuffix + ext);
    }
});

// Filter file types
const fileFilter = (req, file, cb) => {
    // Chỉ chấp nhận image files
    const allowedTypes = /jpeg|jpg|png|gif|webp/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb(new Error('Chỉ chấp nhận file ảnh (JPEG, PNG, GIF, WEBP)!'));
    }
};

// Khởi tạo multer
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 5 * 1024 * 1024 // Giới hạn 5MB
    },
    fileFilter: fileFilter
});

// Export middleware để sử dụng trong routes
export const uploadSingle = upload.single('avatar');

// Middleware xử lý lỗi multer
export const handleMulterError = (err, req, res, next) => {
    if (err instanceof multer.MulterError) {
        if (err.code === 'LIMIT_FILE_SIZE') {
            return res.status(400).json({ 
                message: 'File quá lớn! Kích thước tối đa là 5MB.' 
            });
        }
        return res.status(400).json({ 
            message: `Lỗi upload: ${err.message}` 
        });
    } else if (err) {
        return res.status(400).json({ 
            message: err.message 
        });
    }
    next();
};