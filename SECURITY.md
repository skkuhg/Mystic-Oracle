# Security Policy for Mystic Oracle

## Supported Versions

This section tells you which versions of Mystic Oracle are currently being supported with security updates.

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

The security of Mystic Oracle is important to us. If you discover a security vulnerability, we appreciate your help in disclosing it to us in a responsible manner.

### How to Report

**Please do not report security vulnerabilities through public GitHub issues.**

Instead, please report security vulnerabilities by:

1. **Email**: Send details to [security@mystic-oracle.dev] (or your preferred contact method)
2. **GitHub Security Advisory**: Use GitHub's private vulnerability reporting feature
3. **Direct Message**: Contact maintainers directly through GitHub

### Information to Include

When reporting a vulnerability, please include:

- Type of issue (e.g., buffer overflow, SQL injection, cross-site scripting, etc.)
- Full paths of source file(s) related to the manifestation of the issue
- The location of the affected source code (tag/branch/commit or direct URL)
- Any special configuration required to reproduce the issue
- Step-by-step instructions to reproduce the issue
- Proof-of-concept or exploit code (if possible)
- Impact of the issue, including how an attacker might exploit the issue

### Response Timeline

- **Initial Response**: We will acknowledge receipt of your vulnerability report within 48 hours
- **Investigation**: We will investigate and validate the vulnerability within 7 days
- **Resolution**: We will work to resolve critical vulnerabilities within 30 days
- **Disclosure**: We will coordinate with you on appropriate disclosure timing

## Security Considerations

### Client-Side Application

Mystic Oracle is a client-side web application with the following security characteristics:

#### Data Privacy
- All user data is stored locally in the browser's localStorage
- No personal information is transmitted to external servers (except API calls with user consent)
- API keys are stored locally and transmitted only to respective API providers

#### API Security
- API keys are user-provided and stored locally
- All API calls are made over HTTPS
- No server-side storage of sensitive information

#### Content Security
- No user-generated content is stored or displayed from external sources
- All fortune content is pre-written and included in the application
- No dynamic code execution from external sources

### Known Security Considerations

#### Client-Side Storage
- API keys stored in localStorage are accessible to any script running on the domain
- Users should only enter API keys they trust and understand the implications
- Consider clearing localStorage on shared devices

#### Cross-Site Scripting (XSS)
- Application does not accept or display user-generated HTML
- All user inputs are text-only and properly handled
- No dynamic script injection points

#### API Key Exposure
- API keys are visible in browser developer tools
- Users are responsible for managing their own API keys
- Consider using server-side proxy for production deployments with shared API keys

### Recommended Security Practices

#### For Users
- Use your own API keys and don't share them
- Clear browser data when using shared computers
- Keep your browser updated to the latest version
- Be cautious when using the application on public networks

#### For Developers/Deployers
- Serve the application over HTTPS
- Implement proper Content Security Policy headers
- Keep dependencies updated (if any are added)
- Consider implementing a server-side API proxy for production deployments
- Regularly audit code for security vulnerabilities

### Security Features

#### Content Security Policy
The application includes basic CSP headers to prevent XSS attacks:
```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' fonts.googleapis.com; font-src fonts.gstatic.com; connect-src 'self' api.openai.com api.tavily.com;">
```

#### Local Storage Protection
- Data is scoped to the domain only
- No sensitive personal information is stored beyond user preferences
- Automatic cleanup options available in settings

#### HTTPS Enforcement
- Application should be served over HTTPS in production
- API calls require HTTPS connections
- Service worker requires HTTPS for full functionality

## Responsible Disclosure

We are committed to working with security researchers and the community to verify and address security vulnerabilities. We appreciate your efforts to responsibly disclose vulnerabilities and will make every effort to acknowledge your contribution.

### Recognition

Security researchers who responsibly disclose vulnerabilities will be:
- Credited in our security advisories (if desired)
- Listed in our hall of fame/acknowledgments section
- Provided with updates on the fix progress

## Security Updates

When security vulnerabilities are discovered and fixed:

1. **Patch Release**: We will release a patch as quickly as possible
2. **Security Advisory**: We will publish a security advisory detailing the issue
3. **Notification**: Users will be notified through appropriate channels
4. **Documentation**: Security fixes will be documented in the changelog

## Contact Information

For security-related inquiries:
- **Security Team**: [Specify contact method]
- **General Issues**: GitHub Issues (for non-security related problems)
- **Documentation**: This security policy

## Legal

This security policy is subject to change without notice. By using Mystic Oracle, you agree to the terms outlined in this policy.

---

*"Security is like the foundation of a mystical sanctuary - invisible but essential for the magic within to flourish safely."* 🔒✨
