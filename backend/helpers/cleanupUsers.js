import prisma from '../library/prisma.lib.js';

async function cleanupDuplicateGoogleId() {
  try {
    // Tìm tất cả user có googleId = null
    const users = await prisma.user.findMany({
      where: { googleId: null }
    });
    
    console.log(`Found ${users.length} users with null googleId`);
    
    if (users.length === 0) {
      console.log('No users to cleanup');
      return;
    }
    
    // Hiển thị danh sách users
    console.log('\nUsers with null googleId:');
    users.forEach((user, index) => {
      console.log(`${index + 1}. ${user.email} - ${user.username} (ID: ${user.id})`);
    });
    
    // Giữ lại 1 user, xóa các user còn lại
    if (users.length > 1) {
      const toDelete = users.slice(1); // Giữ user đầu tiên
      
      console.log(`\nDeleting ${toDelete.length} duplicate users...`);
      
      for (const user of toDelete) {
        await prisma.user.delete({
          where: { id: user.id }
        });
        console.log(`✓ Deleted user: ${user.email}`);
      }
      
      console.log('\n✅ Cleanup completed!');
    } else {
      console.log('\nOnly 1 user found, no cleanup needed');
    }
    
  } catch (error) {
    console.error('❌ Error during cleanup:', error);
  } finally {
    await prisma.$disconnect();
  }
}

cleanupDuplicateGoogleId();