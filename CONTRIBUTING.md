# Contributing to Mystic Oracle

First off, thank you for considering contributing to Mystic Oracle! 🔮✨

## Ways to Contribute

### 🐛 Bug Reports
If you find a bug, please create an issue with:
- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Browser and device information
- Screenshots if applicable

### 💡 Feature Requests
We welcome new ideas! Please describe:
- The feature you'd like to see
- Why it would be valuable
- How you envision it working
- Any examples or mockups

### 🔧 Code Contributions

#### Development Setup
1. Fork the repository
2. Clone your fork: `git clone https://github.com/your-username/mystic-oracle.git`
3. Create a branch: `git checkout -b feature/your-feature-name`
4. Make your changes
5. Test thoroughly
6. Commit with clear messages
7. Push and create a pull request

#### Code Style Guidelines
- Use meaningful variable and function names
- Add comments for complex logic
- Follow existing code formatting
- Test on multiple browsers
- Ensure mobile responsiveness

#### Areas We Need Help With
- 🌐 **Internationalization**: Adding support for multiple languages
- 🎨 **New Themes**: Creating additional cosmic color schemes
- 🔮 **Fortune Content**: Writing new fortune messages and interpretations
- 📱 **Mobile UX**: Improving touch interactions and gestures
- 🧪 **Testing**: Cross-browser compatibility testing
- 📚 **Documentation**: Improving guides and help content
- ♿ **Accessibility**: Making the app more accessible to all users

### 🎨 Design Contributions
- UI/UX improvements
- New mystical themes
- Icon design
- Animation suggestions
- Mobile interface enhancements

### 📝 Content Contributions
- Fortune messages and interpretations
- Astrological content
- Tarot card descriptions
- Bazi interpretation texts
- Educational content

## Development Guidelines

### File Structure
```
Mystic-Oracle/
├── index.html          # Main application file
├── manifest.json       # PWA manifest
├── sw.js              # Service worker for offline support
├── assets/
│   ├── css/
│   │   └── bazi-styles.css
│   ├── js/
│   │   ├── bazi-engine.js
│   │   └── bazi-chatbot.js
│   └── icons/         # PWA icons (if added)
├── docs/
│   └── BAZI_GUIDE.md
└── README.md
```

### Adding New Features

#### For Fortune-Telling Features:
1. Add the feature logic to the main `<script>` section in `index.html`
2. Create appropriate CSS styling
3. Test across different devices and browsers
4. Update documentation

#### For Bazi Features:
1. Update `assets/js/bazi-engine.js` for calculation logic
2. Update `assets/js/bazi-chatbot.js` for interpretation
3. Add styling to `assets/css/bazi-styles.css`
4. Update `docs/BAZI_GUIDE.md` if needed

### Testing Checklist
Before submitting a pull request:
- [ ] Test on Chrome, Firefox, Safari, and Edge
- [ ] Test on mobile devices (iOS and Android)
- [ ] Verify offline functionality works
- [ ] Check that all animations are smooth
- [ ] Ensure accessibility standards are met
- [ ] Validate HTML and CSS
- [ ] Test with screen readers if applicable

### Commit Message Format
Use clear, descriptive commit messages:
```
type: brief description

Detailed explanation if needed

- Bullet points for specific changes
- Reference issues with #issue-number
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

Example:
```
feat: add new lunar phase calculation

- Implement real-time moon phase tracking
- Add lunar calendar integration to readings
- Update UI to display current moon phase
- Fixes #123
```

## Code of Conduct

### Our Standards
- Be respectful and inclusive
- Welcome newcomers and help them learn
- Focus on constructive feedback
- Respect different perspectives and experiences
- Prioritize the community's well-being

### Unacceptable Behavior
- Harassment or discrimination of any kind
- Trolling, insulting, or derogatory comments
- Publishing private information without consent
- Any behavior inappropriate in a professional setting

## Recognition

Contributors will be:
- Listed in the project's contributors section
- Mentioned in release notes for significant contributions
- Invited to join the core team for sustained contributions

## Questions?

Feel free to:
- Open an issue for questions
- Start a discussion for ideas
- Reach out to maintainers directly

## Spiritual Note

Mystic Oracle is created with positive intentions to bring wonder, guidance, and reflection to users' spiritual journeys. We welcome contributions that align with these values and help create a more inclusive, accessible, and delightful mystical experience for all users.

Thank you for being part of our cosmic community! 🌟

---

*"Together we weave the tapestry of digital divination, creating bridges between ancient wisdom and modern hearts."* ✨
