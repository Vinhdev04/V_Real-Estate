/* ==============================
     CONTROLLER: POST
 ============================== */
import prisma from '../library/prisma.lib.js';
import logger from '../logs/logger.js';
// GET ALL POSTS
const getAllPosts = async (req, res) => {
    logger.info('Yêu cầu lấy danh sách bài đăng');
    try {
        logger.debug('Đang xử lý lấy danh sách bài đăng');
    } catch (error) {
        logger.error('Lỗi khi lấy danh sách bài đăng', error);
        res.status(500).json({
            message: 'Thất bại, Không thể lấy dữ liệu người dùng!'
        });
    }
};

// GET POST
const getPost = async (req, res) => {
    const postId = req.params.id;
    logger.info('Yêu cầu lấy chi tiết bài đăng', { postId });
    try {
        logger.debug('Đang xử lý lấy chi tiết bài đăng', { postId });
    } catch (error) {
        logger.error('Lỗi khi lấy chi tiết bài đăng', error);
        res.status(500).json({
            message: 'Thất bại, Không thể lấy dữ liệu người dùng!'
        });
    }
};

// ADD POST
const addPost = async (req, res) => {
    logger.info('Yêu cầu tạo bài đăng mới', { userId: req.userId });
    try {
        logger.debug('Đang xử lý tạo bài đăng mới');
    } catch (error) {
        logger.error('Lỗi khi tạo bài đăng mới', error);
        res.status(500).json({
            message: 'Thất bại, Không thể lấy dữ liệu người dùng!'
        });
    }
};

// UPDATE POST
const updatePost = async (req, res) => {
    const postId = req.params.id;
    logger.info('Yêu cầu cập nhật bài đăng', { postId, userId: req.userId });
    try {
        logger.debug('Đang xử lý cập nhật bài đăng', { postId });
    } catch (error) {
        logger.error('Lỗi khi cập nhật bài đăng', error);
        res.status(500).json({
            message: 'Thất bại, Không thể lấy dữ liệu người dùng!'
        });
    }
};

// DELETE POST
const deletePost = async (req, res) => {
    const postId = req.params.id;
    logger.info('Yêu cầu xóa bài đăng', { postId, userId: req.userId });
    try {
        logger.debug('Đang xử lý xóa bài đăng', { postId });
    } catch (error) {
        logger.error('Lỗi khi xóa bài đăng', error);
        res.status(500).json({
            message: 'Thất bại, Không thể lấy dữ liệu người dùng!'
        });
    }
};

export { getAllPosts, getPost, updatePost, addPost, deletePost };
