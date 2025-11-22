// Dispatch event khi user đăng nhập/đăng xuất
export const dispatchAuthChange = () => {
  window.dispatchEvent(new Event('authStateChange'));
};

// Listen to auth changes
export const onAuthChange = (callback) => {
  window.addEventListener('authStateChange', callback);
  return () => window.removeEventListener('authStateChange', callback);
};