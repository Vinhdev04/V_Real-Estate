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
        const post = await prisma.post.findMany();
        logger.success('Lấy danh sách bài đăng thành công', post);
        res.status(200).json(post);
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
        const post = await prisma.post.findUnique({
            where: {
                id: postId
            }
        });

        if (!post) {
            return res.status(404).json({
                message: 'Bài đăng không tồn tại'
            });
        }

        res.status(200).json({
            message: 'Lấy chi tiết bài đăng thành công',
            post
        });
        logger.debug('Đang xử lý lấy chi tiết bài đăng', { post });
    } catch (error) {
        logger.error('Lỗi khi lấy chi tiết bài đăng', error);
        res.status(500).json({
            message: 'Thất bại, Không thể lấy dữ liệu bài đăng!'
        });
    }
};

// ADD POST
const addPost = async (req, res) => {
    const body = req.body;
    const tokenUserId = req.userId;
    logger.info('Yêu cầu tạo bài đăng mới', { userId: req.userId });
    try {
        const newPost = await prisma.post.create({
            data: {
                ...body,
                userId: tokenUserId
            }
        });
        logger.debug('Đang xử lý tạo bài đăng mới', newPost);
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
    const tokenUserId = req.userId;
    logger.info('Yêu cầu xóa bài đăng', { postId, userId: req.userId });
    try {
        const post = await prisma.post.findUnique({
            where: {
                id: postId
            }
        });

        if (!post) {
            return res.status(404).json({
                message: 'Bài đăng không tồn tại!'
            });
        }

        if (post.userId !== tokenUserId) {
            return res.status(403).json({
                message: 'Bạn không thể xóa bài đăng của người khác!'
            });
        }

        await prisma.post.delete({
            where: {
                id: postId
            }
        });
        res.status(200).json({
            message: 'Xóa bài đăng thành công'
        });

        logger.debug('Đang xử lý xóa bài đăng', { post });
    } catch (error) {
        logger.error('Lỗi khi xóa bài đăng', error);
        res.status(500).json({
            message: 'Thất bại, Không thể lấy dữ liệu người dùng!'
        });
    }
};

export { getAllPosts, getPost, updatePost, addPost, deletePost };
