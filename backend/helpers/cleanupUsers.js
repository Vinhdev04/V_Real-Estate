/* ===========================================
      CLEANUP DUPLICATE USERS SCRIPT
      - Tìm user có googleId = null
      - Giữ lại user đầu tiên
      - Xoá các user còn lại
      - Ghi log vào src/logs/app.log & error.log
 =========================================== */

import prisma from '../library/prisma.lib.js';
import { info, warn, error, success } from '../logs/logger.js';

async function cleanupDuplicateGoogleId() {
    info('Bắt đầu dọn dẹp user có googleId = null...');

    try {
        // Lấy tất cả user có googleId = null
        const users = await prisma.user.findMany({
            where: { googleId: null }
        });

        info(`Có tổng cộng ${users.length} user có googleId = null.`);

        if (users.length === 0) {
            info('Không có user nào cần dọn dẹp.');
            return;
        }

        // Ghi log danh sách user
        info('Danh sách user:');
        users.forEach((u, i) => {
            info(`${i + 1}. ${u.email} - ${u.username} (ID: ${u.id})`);
        });

        // Nếu nhiều hơn 1 user → xoá từ user thứ 2
        if (users.length > 1) {
            const toDelete = users.slice(1);

            warn(`Có ${toDelete.length} user trùng → chuẩn bị xoá...`);

            for (const u of toDelete) {
                await prisma.user.delete({
                    where: { id: u.id }
                });
                info(`Đã xoá user: ${u.email}`);
            }

            success('Dọn dẹp user thành công!');
        } else {
            info('Chỉ có 1 user hợp lệ → Không cần xoá.');
        }
    } catch (err) {
        error('Lỗi trong quá trình dọn dẹp user.', err);
    } finally {
        await prisma.$disconnect();
        info('Đã đóng kết nối Prisma.');
    }
}

// Chạy script
cleanupDuplicateGoogleId();
