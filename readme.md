# File Tree: V_Real-Estate

**Generated:** 11/11/2025, 8:04:17 PM
**Root Path:** `c:\V_Real-Estate`

```
├── 📁 .qodo
│   ├── 📁 agents
│   └── 📁 workflows
├── 📁 backend
│   ├── 📁 controllers
│   │   └── 📄 auth.controller.js
│   ├── 📁 library
│   │   └── 📄 prisma.lib.js
│   ├── 📁 middleware
│   ├── 📁 prisma
│   │   └── 📄 schema.prisma
│   ├── 📁 routes
│   │   └── 📄 auth.route.js
│   ├── ⚙️ .gitignore
│   ├── 📄 app.js
│   ├── ⚙️ package-lock.json
│   └── ⚙️ package.json
├── 📁 frontend
│   ├── 📁 public
│   │   ├── 📄 _redirects
│   │   ├── 📄 favicon.ico
│   │   ├── 🖼️ favicon.png
│   │   ├── 🌐 index.html
│   │   ├── 🖼️ logo192.png
│   │   ├── 🖼️ logo512.png
│   │   ├── ⚙️ manifest.json
│   │   └── 📄 robots.txt
│   ├── 📁 src
│   │   ├── 📁 assets
│   │   │   ├── 📁 css
│   │   │   │   ├── 🎨 GlobalAnimations.css
│   │   │   │   ├── 🎨 layout.css
│   │   │   │   └── 🎨 responsive.css
│   │   │   └── 📁 images
│   │   │       ├── 📄 banner-hompage
│   │   │       ├── 🖼️ contact-employee.jpg
│   │   │       ├── 🖼️ head-offiece-01.jpg
│   │   │       ├── 🖼️ head-offiece-02.jpg
│   │   │       ├── 📄 home-page-employee-01
│   │   │       ├── 📄 home-page-employee-02
│   │   │       ├── 📄 home-page-employee-03
│   │   │       ├── 📄 home-page-room-01
│   │   │       ├── 📄 home-page-room-02
│   │   │       ├── 📄 home-page-room-03
│   │   │       ├── 📄 home-page-room-04
│   │   │       ├── 📄 home-page-room-05
│   │   │       ├── 📄 home-page-room-06
│   │   │       ├── 📄 home-page-room-07
│   │   │       ├── 📄 home-page-room-08
│   │   │       ├── 📄 home-page-room-09
│   │   │       ├── 🖼️ logo.png
│   │   │       └── 🖼️ logoW.png
│   │   ├── 📁 features
│   │   │   ├── 📁 About
│   │   │   │   ├── 📁 components
│   │   │   │   │   ├── 📄 CTASection.jsx
│   │   │   │   │   ├── 📄 HeroSection.jsx
│   │   │   │   │   ├── 📄 ServiceCard.jsx
│   │   │   │   │   ├── 📄 ServicesSection.jsx
│   │   │   │   │   ├── 📄 StatsSection.jsx
│   │   │   │   │   ├── 📄 StorySection.jsx
│   │   │   │   │   ├── 📄 TimelineSection.jsx
│   │   │   │   │   ├── 📄 ValueCard.jsx
│   │   │   │   │   └── 📄 ValuesSection.jsx
│   │   │   │   ├── 📁 services
│   │   │   │   │   └── 📄 aboutData.js
│   │   │   │   └── 📁 styles
│   │   │   │       └── 🎨 about.css
│   │   │   ├── 📁 Auth
│   │   │   │   ├── 📁 components
│   │   │   │   │   ├── 📁 AuthLayout
│   │   │   │   │   │   └── 📄 AuthLayout.jsx
│   │   │   │   │   ├── 📁 Login
│   │   │   │   │   │   └── 📄 LoginForm.jsx
│   │   │   │   │   └── 📁 Register
│   │   │   │   │       └── 📄 RegisterForm.jsx
│   │   │   │   ├── 📁 services
│   │   │   │   │   └── 📄 handleLogin.js
│   │   │   │   └── 📁 styles
│   │   │   │       └── 🎨 Login.css
│   │   │   ├── 📁 Contact
│   │   │   │   ├── 📁 components
│   │   │   │   │   ├── 📄 BranchCard.jsx
│   │   │   │   │   ├── 📄 BranchList.jsx
│   │   │   │   │   ├── 📄 ContactForm.jsx
│   │   │   │   │   ├── 📄 ContactHero.jsx
│   │   │   │   │   ├── 📄 ContactInfoCard.jsx
│   │   │   │   │   ├── 📄 ContactInfoSection.jsx
│   │   │   │   │   ├── 📄 HeaderInfo.jsx
│   │   │   │   │   └── 📄 MapSection.jsx
│   │   │   │   ├── 📁 services
│   │   │   │   │   ├── 📄 constants.js
│   │   │   │   │   └── 📄 handleForm.js
│   │   │   │   └── 📁 styles
│   │   │   │       ├── 🎨 BranchCard.css
│   │   │   │       ├── 🎨 BranchList.css
│   │   │   │       ├── 🎨 ContactForm.css
│   │   │   │       ├── 🎨 ContactHero.css
│   │   │   │       ├── 🎨 ContactInfoCard.css
│   │   │   │       ├── 🎨 ContactInfoSection.css
│   │   │   │       └── 🎨 MapSection.css
│   │   │   └── 📁 HomePage
│   │   │       ├── 📁 components
│   │   │       │   ├── 📄 AchievementsSection.jsx
│   │   │       │   ├── 📄 CTASection.jsx
│   │   │       │   ├── 📄 FeaturedProperties.jsx
│   │   │       │   ├── 📄 HeroSection.jsx
│   │   │       │   ├── 📄 ServicesSection.jsx
│   │   │       │   └── 📄 TestimonialsSection.jsx
│   │   │       ├── 📁 services
│   │   │       │   ├── 📄 data.js
│   │   │       │   └── 📄 driverjs.config.js
│   │   │       └── 📁 styles
│   │   │           ├── 🎨 AchievementsSection.css
│   │   │           ├── 🎨 CTASection.css
│   │   │           ├── 🎨 DriverCustom.css
│   │   │           ├── 🎨 FeaturedProperties.css
│   │   │           ├── 🎨 HeroSection.css
│   │   │           ├── 🎨 ServicesSection.css
│   │   │           └── 🎨 TestimonialsSection.css
│   │   ├── 📁 hooks
│   │   │   ├── 📄 useFetch.js
│   │   │   ├── 📄 useForm.js
│   │   │   └── 📄 useRegisterForm.js
│   │   ├── 📁 pages
│   │   │   ├── 📁 About
│   │   │   │   └── 📄 index.jsx
│   │   │   ├── 📁 Contact
│   │   │   │   └── 📄 index.jsx
│   │   │   ├── 📁 Home
│   │   │   │   └── 📄 index.jsx
│   │   │   ├── 📁 Login
│   │   │   │   └── 📄 index.jsx
│   │   │   ├── 📁 NotFound
│   │   │   │   └── 📄 index.jsx
│   │   │   └── 📁 PropertiesPage
│   │   │       ├── 📁 features
│   │   │       │   ├── 📄 PropertyCard.jsx
│   │   │       │   ├── 📄 PropertyFilter.jsx
│   │   │       │   └── 📄 PropertyGrid.jsx
│   │   │       ├── 📁 sections
│   │   │       │   └── 📄 SearchSection.jsx
│   │   │       ├── 🎨 PropertiesPage.module.css
│   │   │       ├── 📄 constants.js
│   │   │       └── 📄 index.jsx
│   │   ├── 📁 routes
│   │   │   └── 📄 route.config.js
│   │   ├── 📁 shared
│   │   │   ├── 📁 components
│   │   │   │   ├── 📁 BackToTop
│   │   │   │   │   ├── 🎨 BackToTop.css
│   │   │   │   │   └── 📄 BackToTop.jsx
│   │   │   │   ├── 📁 Footer
│   │   │   │   │   ├── 🎨 Footer.css
│   │   │   │   │   └── 📄 Footer.jsx
│   │   │   │   └── 📁 Navbar
│   │   │   │       ├── 🎨 Navbar.css
│   │   │   │       └── 📄 Navbar.jsx
│   │   │   ├── 📁 constants
│   │   │   │   └── 📄 routes.js
│   │   │   └── 📁 styles
│   │   │       ├── 🎨 global.css
│   │   │       └── 🎨 variables.css
│   │   ├── 📁 utils
│   │   │   ├── 📄 api.js
│   │   │   └── 📄 helpers.js
│   │   ├── 🎨 App.css
│   │   ├── 📄 App.js
│   │   ├── 📄 App.test.js
│   │   ├── 🎨 index.css
│   │   ├── 📄 index.js
│   │   ├── 🖼️ logo.svg
│   │   ├── 📄 reportWebVitals.js
│   │   └── 📄 setupTests.js
│   ├── ⚙️ .gitignore
│   ├── 📝 README.md
│   ├── 📄 _tmp_7600_fc4a15458f3c87dc29763f4cf0ea321b
│   ├── ⚙️ package-lock.json
│   └── ⚙️ package.json
├── ⚙️ .gitattributes
├── ⚙️ .gitignore
├── 📄 Local Disk (C) - Shortcut.lnk
├── ⚙️ package-lock.json
└── ⚙️ package.json
```

### Map Sources
- https://app.eraser.io/workspace/G0gE2cHzszqgumTdxQUp