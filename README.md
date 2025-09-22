# 🛍️ SoftDef E-Commerce Frontend

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15.5.3-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Redux](https://img.shields.io/badge/Redux-5.0.1-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

*A modern, responsive e-commerce frontend application built for the SoftDef internship project*

[🚀 Live Demo](https://frontend-internship-project-softdef.vercel.app/) • [📖 Documentation](#features) • [🐛 Report Bug](#contributing) • [✨ Request Feature](#contributing)

</div>

---

## ✨ Features

### 🎯 Core Functionality
- **Product Catalog** - Browse through a comprehensive collection of products
- **Advanced Search & Filtering** - Real-time search with Redux state management
- **Smart Sidebar** - Category-based filtering and sorting options
- **Responsive Design** - Seamless experience across all devices
- **Modern UI Components** - Clean, intuitive interface with Lucide React icons

### 🛠️ Technical Highlights
- **Next.js 15** with App Router for optimal performance
- **React 19** with modern hooks and state management
- **Redux Toolkit** for predictable state management
- **TailwindCSS** for rapid, responsive styling
- **Component Architecture** - Modular, reusable components
- **TypeScript Ready** - Configured for type safety

## 🚀 Quick Start

### Prerequisites
- Node.js 18.0 or later
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/DevSujal/frontend-internship-project-softdef.git
   cd softdef-frontend-intern-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application in action! 🎉

   Or check out the live demo at: **[https://frontend-internship-project-softdef.vercel.app/](https://frontend-internship-project-softdef.vercel.app/)** ✨

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.js          # Root layout component
│   ├── page.js            # Main home page
│   ├── globals.css        # Global styles
│   └── Wrapper.jsx        # Redux provider wrapper
├── components/            # Reusable UI components
│   ├── Badge.jsx          # Category badges
│   ├── Card.jsx           # Product cards
│   ├── Header.jsx         # Navigation header
│   ├── Input.jsx          # Form inputs
│   ├── Footer.jsx         # Site footer
│   └── sidebar/           # Sidebar components
│       ├── Sidebar.jsx    # Main sidebar
│       ├── Card.jsx       # Sidebar cards
│       └── sidebar.css    # Sidebar styles
├── data/                  # Data management
│   └── mockData.js        # Product mock data
└── store/                 # Redux store
    ├── searchReducer.js   # Main store configuration
    └── features/          # Feature-specific slices
        └── searchSlice.js # Search functionality
```

## 🎨 Design System

### Color Palette
- **Primary**: `#40BFFF` - Vibrant blue for key interactions
- **Background**: `#F6F7F8` - Clean, neutral background
- **Text**: Various shades for optimal readability

### Components
- **Responsive Cards** - Product display with hover effects
- **Interactive Sidebar** - Collapsible navigation and filters
- **Modern Icons** - Lucide React icon library
- **Flexible Grid** - Adaptive layout system

## 🛡️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint for code quality |

## 🔧 Technologies & Dependencies

### Core Dependencies
- **Next.js 15.5.3** - React framework for production
- **React 19.1.0** - Latest React with concurrent features
- **Redux Toolkit 2.9.0** - State management
- **React-Redux 9.2.0** - React bindings for Redux
- **Lucide React 0.544.0** - Beautiful icon library
- **React Icons 5.5.0** - Additional icon collection

### Development Dependencies
- **TailwindCSS 4** - Utility-first CSS framework
- **ESLint 9** - Code linting and formatting
- **PostCSS** - CSS processing

## 🌟 Key Features Breakdown

### 🔍 Search & Filter System
- Real-time search functionality
- Category-based filtering
- Color-based product filtering
- Price range selection
- Sort by multiple criteria

### 📱 Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Touch-friendly interactions
- Cross-browser compatibility

### ⚡ Performance Optimizations
- Next.js automatic optimizations
- Image optimization
- Code splitting
- SEO-friendly structure

## 🤝 Contributing

We love contributions! Here's how you can help make this project even better:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Development Guidelines
- Follow the existing code style
- Write meaningful commit messages
- Test your changes thoroughly
- Update documentation when needed

## 📄 License

This project is created for educational purposes as part of the SoftDef internship program.

## 🙏 Acknowledgments

- **SoftDef** - For the internship opportunity
- **Vercel** - For the amazing Next.js framework
- **React Team** - For the powerful React library
- **TailwindCSS** - For the utility-first CSS framework

---

<div align="center">

**Built with ❤️ for the SoftDef Frontend Internship Project**

[⬆ Back to Top](#-softdef-e-commerce-frontend)

</div>
