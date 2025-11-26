# ✅ Profile Feature Setup Checklist

## 📦 Các File Cần Tạo

### 1. Components (10 files)
```
src/features/Profile/components/
```
- [ ] `ProfileHeader.jsx` - Header với avatar và thông tin
- [ ] `ProfileNavTabs.jsx` - Navigation tabs (5 tabs)
- [ ] `StatsCards.jsx` - 4 cards thống kê
- [ ] `PropertyCard.jsx` - Card hiển thị bất động sản
- [ ] `HistoryCard.jsx` - Card lịch sử xem
- [ ] `OverviewTab.jsx` - Tab tổng quan
- [ ] `FavoritesTab.jsx` - Tab yêu thích (với filters)
- [ ] `HistoryTab.jsx` - Tab lịch sử (với filters)
- [ ] `EditProfileTab.jsx` - Form chỉnh sửa hồ sơ
- [ ] `SettingsPage.jsx` - Trang cài đặt (đã có sẵn)

### 2. Styles (8 files)
```
src/features/Profile/styles/
```
- [ ] `profileBase.css` - Base styles, buttons, animations
- [x] `profileHeader.css` - Styles cho header và avatar
- [ ] `profileNav.css` - Styles cho navigation tabs
- [ ] `statsCards.css` - Styles cho stats cards
- [ ] `propertyCard.css` - Styles cho property cards
- [ ] `profileTabs.css` - Styles cho tab content, filters
- [ ] `editProfile.css` - Styles cho edit form
- [ ] `settings.css` - Styles cho settings (đã có sẵn)

### 3. Services (1 file)
```
src/features/Profile/services/
```
- [ ] `mockData.js` - Mock data (userData, stats, properties, history)

### 4. Pages (2 files)
```
src/pages/
```
- [ ] `Profile.jsx` - Main page với routing
- [ ] `ProfileQuickTest.jsx` - (Optional) Test page không cần routing

### 5. Routes (1 file)
```
src/routes/
```
- [ ] `route.config.js` - Cập nhật routes configuration

---

## 🔗 Routes Configuration

Cập nhật `route.config.js` với các routes sau:

```javascript
// Profile Routes
{ path: '/profile', element: <Profile />, name: 'Trang cá nhân' }
{ path: '/profile/overview', element: <Profile />, name: 'Tổng quan' }
{ path: '/profile/favorites', element: <Profile />, name: 'Yêu thích' }
{ path: '/profile/history', element: <Profile />, name: 'Lịch sử' }
{ path: '/profile/edit', element: <Profile />, name: 'Chỉnh sửa' }
{ path: '/profile/settings', element: <Profile />, name: 'Cài đặt' }
```

**Important:** Route `*` (NotFound) phải để cuối cùng!

---

## 📚 Dependencies Check

Kiểm tra các package đã được cài đặt:

- [ ] `react` (đã có)
- [ ] `react-dom` (đã có)
- [ ] `react-router-dom` - Cần cho routing
- [ ] `lucide-react` - Cần cho icons

### Cài đặt nếu thiếu:
```bash
npm install react-router-dom lucide-react
```

---

## 🧪 Testing Checklist

### Test Navigation
- [ ] Truy cập `/profile` → Hiển thị Overview tab
- [ ] Click tab "Yêu thích" → URL đổi thành `/profile/favorites`
- [ ] Click tab "Lịch sử xem" → URL đổi thành `/profile/history`
- [ ] Click button "Chỉnh sửa" → Navigate to `/profile/edit`
- [ ] Click button "Cài đặt" → Navigate to `/profile/settings`
- [ ] Browser back button → Navigate về tab trước
- [ ] Direct access `/profile/favorites` → Show Favorites tab ngay

### Test Overview Tab
- [ ] Hiển thị 4 stats cards với số liệu
- [ ] Hiển thị 2 BĐS gần nhất
- [ ] Cards có hover effect
- [ ] Responsive trên mobile

### Test Favorites Tab
- [ ] Hiển thị 5 BĐS yêu thích
- [ ] Filter "Tất cả loại hình" → Hiển thị tất cả
- [ ] Filter "Căn hộ" → Chỉ hiển thị căn hộ
- [ ] Sort "Mới nhất" → Sắp xếp theo thời gian
- [ ] Click nút delete → Confirm dialog → Xóa item
- [ ] Xóa hết items → Hiển thị empty state
- [ ] Empty state có icon và message

### Test History Tab
- [ ] Hiển thị 6 lịch sử xem
- [ ] Hiển thị số lần xem và thời gian
- [ ] Filter "Tất cả thời gian" → Hiển thị tất cả
- [ ] Filter "7 ngày qua" → Filter theo thời gian
- [ ] Click delete item → Confirm → Xóa
- [ ] Click "Xóa tất cả" → Confirm → Xóa hết
- [ ] Xóa hết → Hiển thị empty state

### Test Edit Profile Tab
- [ ] Form hiển thị đầy đủ fields
- [ ] Avatar hiển thị đúng
- [ ] Input họ tên có giá trị ban đầu
- [ ] Input email có validation
- [ ] Textarea bio có character counter
- [ ] Character counter cập nhật khi gõ
- [ ] Max 500 characters cho bio
- [ ] Click "Lưu" → Alert success → Navigate to overview
- [ ] Click "Hủy" → Reset data → Navigate to overview

### Test Settings Tab
- [ ] Hiển thị Settings page
- [ ] Toggle switches hoạt động
- [ ] Dropdowns hoạt động
- [ ] Save button hoạt động

### Test Responsive
- [ ] Desktop (>1024px) → Full layout
- [ ] Tablet (768-1024px) → 2 columns
- [ ] Mobile (<768px) → Stacked layout
- [ ] Navigation tabs scroll horizontal trên mobile
- [ ] Property cards stack vertically trên mobile
- [ ] Buttons full width trên mobile

### Test Performance
- [ ] Trang load nhanh (<1s)
- [ ] Smooth transitions giữa các tabs
- [ ] No console errors
- [ ] No console warnings
- [ ] Images load properly

---

## 🎨 Visual Check

### Colors
- [ ] Primary color: #4f46e5 (Indigo)
- [ ] Stats card red: #fee2e2 / #dc2626
- [ ] Stats card blue: #dbeafe / #2563eb
- [ ] Stats card green: #d1fae5 / #059669
- [ ] Stats card purple: #e9d5ff / #9333ea

### Typography
- [ ] Page title: 2rem, 700
- [ ] Section title: 1.5rem, 700
- [ ] Property title: 1.25rem, 600
- [ ] Body text: 0.875rem, 400

### Spacing
- [ ] Container max-width: 1200px
- [ ] Container padding: 2rem 1rem
- [ ] Cards padding: 1.5rem - 2rem
- [ ] Gap between items: 1.5rem
- [ ] Border radius: 12px cho cards, 8px cho buttons

### Icons
- [ ] All icons from lucide-react
- [ ] Icon size: 18px for buttons, 24px for stats
- [ ] Icons có proper gap với text

---

## 🔧 Troubleshooting

### Problem: Components không render
**Check:**
- [ ] Import paths đúng?
- [ ] Files đã tạo đúng thư mục?
- [ ] Export/Import syntax đúng?

### Problem: Styles không apply
**Check:**
- [ ] CSS files đã import trong Profile.jsx?
- [ ] Import order đúng?
- [ ] Class names match?
- [ ] No typos in class names?

### Problem: Routing không hoạt động
**Check:**
- [ ] react-router-dom đã cài?
- [ ] BrowserRouter wraps App?
- [ ] Routes config đúng?
- [ ] useNavigate() và useLocation() imported?

### Problem: Icons không hiển thị
**Check:**
- [ ] lucide-react đã cài?
- [ ] Import icons đúng syntax?
- [ ] Component names viết hoa đầu?

### Problem: Data không hiển thị
**Check:**
- [ ] mockData.js đã tạo?
- [ ] Import mockData đúng?
- [ ] State được truyền đúng vào components?

---

## 📊 Data Structure Reference

### userData
```javascript
{
  name, email, phone, location, joinDate, avatar, birthDate, bio
}
```

### stats
```javascript
{
  favorites, viewed, saved, messages
}
```

### property
```javascript
{
  id, title, type, location, price, area, 
  bedrooms, bathrooms, image, savedDate
}
```

### viewHistory
```javascript
{
  id, title, type, location, price, area,
  viewDate, viewCount, image
}
```

---

## 🎯 Final Checks

### Code Quality
- [ ] No unused imports
- [ ] No console.logs (except intentional)
- [ ] Proper indentation
- [ ] Consistent naming conventions
- [ ] Comments where needed

### Functionality
- [ ] All buttons work
- [ ] All links work
- [ ] All forms work
- [ ] All filters work
- [ ] All confirmations work

### UX
- [ ] Smooth transitions
- [ ] Proper loading states
- [ ] Helpful error messages
- [ ] Clear empty states
- [ ] Intuitive navigation

### Accessibility
- [ ] Buttons have proper labels
- [ ] Images have alt text
- [ ] Forms have labels
- [ ] Color contrast OK
- [ ] Keyboard navigation works

---

## 🚀 Ready to Deploy?

Final checks:
- [ ] All tests pass
- [ ] No errors in console
- [ ] Works on Chrome
- [ ] Works on Firefox
- [ ] Works on Safari
- [ ] Works on mobile
- [ ] Lighthouse score > 90

---

## 📝 Notes

Ghi chú các issue hoặc customization:
- 
- 
- 

---

## ✨ Completed!

Date: _______________
By: _______________
Notes: _______________

---

**Need Help?**
- Check Setup Guide: `SETUP_GUIDE.md`
- Check Folder Structure: `FOLDER_STRUCTURE.md`
- Check component files for inline documentation