# TinaCMS Local Setup Guide

## ✅ Current Configuration: Local Mode

Your TinaCMS is now configured for **LOCAL MODE**, which means:

- **No cloud dependencies** - everything runs locally
- **No authentication required** - no tokens or client IDs needed
- **Direct filesystem access** - edits save directly to your content files
- **Perfect for development** - immediate preview of changes

## 🚀 Quick Start

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the website**:
   ```bash
   npm run dev
   ```

3. **In a separate terminal, start TinaCMS**:
   ```bash
   npm run tina
   ```

4. **Access the CMS**:
   - Website: http://localhost:3000
   - CMS Admin: http://localhost:3000/admin

## 📝 How It Works

- Content is stored as Markdown files in the `content/` directory
- When you edit content in the CMS, it directly modifies these files
- Changes are immediately reflected in your website
- No build step required for content changes

## 🔄 Content Structure

```
content/
├── pages/          # Static pages (home, about, etc.)
├── blog/           # Blog posts
├── stories/        # Success stories
├── team/           # Team member profiles
└── programs/       # Program information
```

## 🌐 Upgrading to Tina Cloud (Later)

When you're ready to add team collaboration and cloud features:

1. Sign up at [tina.io](https://tina.io)
2. Create a new project and get your credentials
3. Update `tina/config.ts`:
   ```typescript
   export default defineConfig({
     local: false,
     branch: process.env.TINA_BRANCH || "main",
     clientId: process.env.TINA_CLIENT_ID!,
     token: process.env.TINA_READ_TOKEN!,
     // ... rest of config
   });
   ```
4. Add credentials to `.env.local`
5. Update `package.json` scripts if needed

## 🛠️ Available Scripts

- `npm run dev` - Start Next.js development server
- `npm run tina` - Start TinaCMS dev server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📚 Need Help?

- [TinaCMS Documentation](https://tina.io/docs/)
- [Local Mode Guide](https://tina.io/docs/advanced/local-mode/)
- [Content Modeling](https://tina.io/docs/schema/)

Enjoy your local development! 🎉