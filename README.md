# Modern Portfolio Website

A stunning, responsive portfolio website featuring a Google-like glowing background animation similar to Gemini's interface. Built with modern web technologies and beautiful animations.

## ✨ Features

- **Animated Background**: Beautiful gradient spheres with floating animations
- **Responsive Design**: Works perfectly on all devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Elements**: Hover effects, scroll animations, and particle effects
- **Complete Sections**: Home, About, Projects, Skills, Education, Research, and Contact
- **Performance Optimized**: Smooth scrolling and efficient animations

## 🚀 Quick Start

1. **Open the website**: Simply open `index.html` in your web browser
2. **Customize content**: Edit the HTML file to add your personal information
3. **Modify styling**: Update `styles.css` to change colors and layout
4. **Add functionality**: Enhance `script.js` with additional features

## 📁 File Structure

```
portfolio/
├── index.html          # Main HTML structure
├── styles.css          # CSS styling and animations
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🎨 Customization Guide

### 1. Personal Information

Edit the following sections in `index.html`:

- **Hero Section**: Update your name and tagline
- **About Section**: Add your personal description and achievements
- **Projects**: Replace with your actual projects
- **Skills**: Modify skill levels and categories
- **Education**: Add your educational background
- **Research**: Include your publications and research work
- **Contact**: Update contact information and social links

### 2. Color Scheme

The website uses a beautiful gradient color scheme. To customize colors, edit these CSS variables in `styles.css`:

```css
/* Primary gradient colors */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Background spheres colors */
.sphere-1 { background: radial-gradient(circle, #ff6b6b, #ee5a24); }
.sphere-2 { background: radial-gradient(circle, #4ecdc4, #44a08d); }
.sphere-3 { background: radial-gradient(circle, #45b7d1, #96c93d); }
.sphere-4 { background: radial-gradient(circle, #f9ca24, #f0932b); }
.sphere-5 { background: radial-gradient(circle, #6c5ce7, #a29bfe); }
```

### 3. Background Animation

The glowing background consists of 5 animated spheres. You can:

- **Change positions**: Modify `top`, `left`, `right`, `bottom` values
- **Adjust sizes**: Change `width` and `height` properties
- **Modify animation speed**: Update `animation` duration
- **Add more spheres**: Duplicate sphere elements

### 4. Projects Section

To add your projects, duplicate the project card structure:

```html
<div class="project-card">
    <div class="project-image">
        <i class="fas fa-[icon-name]"></i>
    </div>
    <div class="project-content">
        <h3>Project Title</h3>
        <p>Project description...</p>
        <div class="project-tech">
            <span class="tech-tag">Technology</span>
        </div>
        <div class="project-links">
            <a href="#" class="project-link"><i class="fas fa-external-link-alt"></i> Live Demo</a>
            <a href="#" class="project-link"><i class="fab fa-github"></i> Code</a>
        </div>
    </div>
</div>
```

### 5. Skills Section

Update your skills by modifying the skill items:

```html
<div class="skill-item">
    <div class="skill-icon">
        <i class="fab fa-[technology-icon]"></i>
    </div>
    <span>Skill Name</span>
    <div class="skill-level">
        <div class="skill-bar" style="width: 85%"></div>
    </div>
</div>
```

### 6. Contact Form

The contact form includes basic validation. To make it functional:

1. **Add form action**: Set the form's action attribute to your backend endpoint
2. **Configure email service**: Use services like Formspree, Netlify Forms, or your own backend
3. **Add reCAPTCHA**: For spam protection

## 🎯 Key Features Explained

### Animated Background
- **Gradient Spheres**: 5 colorful spheres with different sizes and positions
- **Floating Animation**: Smooth up-and-down movement with rotation
- **Parallax Effect**: Spheres move at different speeds when scrolling
- **Blur Effect**: Creates the glowing appearance

### Interactive Elements
- **Hover Effects**: Cards lift and scale on hover
- **Scroll Animations**: Elements fade in as you scroll
- **Skill Bars**: Animated progress bars for skills
- **Particle Effects**: Interactive particles on mouse movement

### Responsive Design
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Flexible Grid**: CSS Grid and Flexbox for responsive layouts
- **Touch-Friendly**: Optimized for touch devices

## 🔧 Technical Details

### Technologies Used
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Grid, Flexbox, and animations
- **JavaScript (ES6+)**: Interactive functionality
- **Font Awesome**: Icons
- **Google Fonts**: Inter font family

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

### Performance Features
- **Throttled scroll events**: Optimized for smooth performance
- **Intersection Observer**: Efficient scroll animations
- **CSS transforms**: Hardware-accelerated animations
- **Minimal DOM manipulation**: Efficient JavaScript

## 🚀 Deployment

### Local Development
1. Clone or download the files
2. Open `index.html` in your browser
3. Start customizing!

### Web Hosting
1. Upload all files to your web hosting service
2. Ensure all files are in the same directory
3. Access via your domain

### GitHub Pages
1. Create a new repository
2. Upload all files
3. Enable GitHub Pages in repository settings
4. Your portfolio will be available at `username.github.io/repository-name`

## 📱 Mobile Optimization

The website is fully responsive and includes:
- **Mobile-first design**: Optimized for small screens
- **Touch gestures**: Smooth scrolling and touch interactions
- **Readable text**: Appropriate font sizes for mobile
- **Fast loading**: Optimized images and animations

## 🎨 Design Inspiration

This portfolio draws inspiration from:
- **Google's Material Design**: Clean, modern aesthetic
- **Gemini's interface**: Glowing background effects
- **Modern web trends**: Glassmorphism and gradient designs
- **Professional portfolios**: Industry best practices

## 🤝 Contributing

Feel free to:
- Report bugs or issues
- Suggest new features
- Submit improvements
- Share your customized version

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Font Awesome** for the beautiful icons
- **Google Fonts** for the Inter font family
- **Modern web standards** for the responsive design patterns

---

**Happy coding! 🚀**

If you find this portfolio helpful, consider giving it a star or sharing it with others! 