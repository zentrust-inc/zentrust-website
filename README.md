# ZenTrust Nonprofit Website

A modern, future-resilient nonprofit website built with Next.js 14 App Router, Tailwind CSS v4, and TinaCMS for content management.

## Features

### 🎨 Modern Design
- Responsive, mobile-first layout (320px → 4k)
- Dark/light theme switching with system preference detection
- Glassmorphism cards and smooth animations
- Professional nonprofit aesthetic

### 🚀 Performance
- Next.js 14 App Router with React Server Components
- Edge optimization and dynamic imports
- Optimized images with Next.js Image component
- Fast loading times and SEO optimization

### 📝 Content Management
- TinaCMS integration for easy content editing
- Support for pages, blog posts, team members, programs, and stories
- Rich text editing with Markdown support
- Media library management

### 💝 Nonprofit Features
- Interactive donation calculator with impact visualization
- Animated impact counters
- Success stories showcase
- Team member profiles
- Program showcases
- Newsletter signup
- Social media integration

### 🔧 Technical Features
- TypeScript for type safety
- Tailwind CSS v4 for styling
- Framer Motion for animations
- Lucide React for icons
- Responsive design system

## Project Structure

```
zentrust-website/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx               # Root layout with metadata
│   ├── page.tsx                 # Homepage
│   ├── donate/page.tsx          # Donation page
│   ├── programs/page.tsx        # Programs page
│   ├── impact/page.tsx          # Impact page
│   ├── blog/
│   │   ├── page.tsx             # Blog listing page
│   │   └── [slug]/page.tsx      # Individual blog post
│   ├── admin/page.tsx           # TinaCMS admin interface
│   └── globals.css              # Global styles
├── components/                   # Reusable UI components
│   ├── layout/
│   │   ├── Navbar.tsx           # Navigation bar
│   │   ├── Footer.tsx           # Site footer
│   │   └── ThemeToggle.tsx      # Theme switcher
│   ├── hero/
│   │   └── Hero.tsx             # Homepage hero section
│   ├── impact/
│   │   ├── ImpactCounters.tsx   # Animated counters
│   │   └── DonationCalculator.tsx # Donation calculator
│   ├── testimonials/
│   │   └── StoryCard.tsx        # Success story cards
│   ├── programs/
│   │   └── ProgramCard.tsx      # Program showcase
│   ├── team/
│   │   └── TeamCard.tsx         # Team member cards
│   └── ui/                      # Base UI components
│       ├── button.tsx           # Button component
│       └── dropdown-menu.tsx    # Dropdown component
├── lib/                         # Utility functions
│   ├── utils.ts                 # General utilities
│   ├── calculator.ts            # Donation impact calculator
│   └── api.ts                   # API integration utilities
├── content/                     # TinaCMS content files
│   ├── pages/                   # Static pages
│   └── blog/                    # Blog posts
├── tina/                        # TinaCMS configuration
│   └── config.ts                # TinaCMS schema
├── public/                      # Static assets
│   └── images/                  # Image storage
└── Configuration files
```

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd zentrust-website
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables (optional for local mode):
```bash
# For local mode (recommended), no environment variables needed
# The CMS will run directly from your filesystem

# Optional: Create .env.local file
cp .env.example .env.local
# Edit .env.local only if switching to Tina Cloud mode later
```

4. Run the development server:
```bash
npm run dev
```

5. Run TinaCMS (in a separate terminal):
```bash
npm run tina
```

6. Open your browser:
- Website: [http://localhost:3000](http://localhost:3000)
- CMS Admin: [http://localhost:3000/admin](http://localhost:3000/admin)

### TinaCMS Setup (Local Mode)

**✅ Current Setup: Local Mode**
- No signup required
- No credentials needed
- Direct filesystem access
- Perfect for development

**🔄 Switch to Tina Cloud Later**
When ready for team collaboration:
1. Sign up for [TinaCMS](https://tina.io/)
2. Create a new project
3. Get your Client ID and Read Token
4. Update `tina/config.ts` to disable local mode
4. Update the environment variables
5. Run TinaCMS development server:
```bash
npm run tina
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run tina` - Start TinaCMS development server
- `npm run tina:build` - Build TinaCMS admin interface

## Deployment

The website can be deployed to any platform that supports Next.js:

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms
- Netlify
- AWS Amplify
- GitHub Pages (static export)

## Customization

### Colors & Theming
The website uses CSS custom properties for theming. Modify the color scheme in `app/globals.css`:

```css
:root {
  --primary: 142.1 70.6% 45.3%;  /* Primary brand color */
  --background: 0 0% 100%;        /* Background color */
  --foreground: 222.2 84% 4.9%;   /* Text color */
}
```

### Content Updates
1. Use the TinaCMS admin interface at `/admin`
2. Or manually edit markdown files in the `content/` directory
3. Update images in the `public/images/` directory

### Adding New Features
1. Create components in the `components/` directory
2. Add pages in the `app/` directory
3. Update TinaCMS configuration in `tina/config.ts`
4. Update navigation in `components/layout/Navbar.tsx`

## Troubleshooting

### Common Issues

**Module Type Warning**
- **Issue**: `(node:xxxxx) [MODULE_TYPELESS_PACKAGE_JSON] Warning`
- **Fix**: ✅ Already resolved - `"type": "module"` added to `package.json`

**Invalid Next.js Config Warning**
- **Issue**: `Unrecognized key(s) in object: 'appDir' at "experimental"`
- **Fix**: ✅ Already resolved - removed `experimental.appDir` from `next.config.js`

**TinaCMS Dependencies Error**
- **Issue**: `No matching version found for @tinacms/toolkit`
- **Fix**: ✅ Already resolved - removed problematic dependency from `package.json`

**Build Issues**
- **Issue**: TypeScript errors or build failures
- **Fix**: Run `npm install` to ensure all dependencies are properly installed

**Port Already in Use**
- **Issue**: `Error: listen EADDRINUSE: address already in use :::3000`
- **Fix**: 
  ```bash
  # Kill process using port 3000
  npx kill-port 3000
  # Or use a different port
  npm run dev -- -p 3001
  ```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Support

For questions or support:
- Check the documentation
- Open an issue on GitHub
- Contact the development team

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Content managed by [TinaCMS](https://tina.io/)
- Icons by [Lucide](https://lucide.dev/)
- Animations by [Framer Motion](https://www.framer.com/motion/)