'use client'

import { useEffect, useState } from 'react'

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [credentials, setCredentials] = useState({ username: '', password: '' })
  const [error, setError] = useState('')
  const [tinaAvailable, setTinaAvailable] = useState(true)

  // Check if user is already authenticated
  useEffect(() => {
    const authStatus = localStorage.getItem('zentrust_admin_auth')
    if (authStatus === 'true') {
      setIsAuthenticated(true)
    }
  }, [])

  useEffect(() => {
    if (!isAuthenticated) return
    const checkTina = async () => {
      const fallbackApi = process.env.NEXT_PUBLIC_TINA_API_URL || 'http://localhost:4001/graphql'
      try {
        const res = await fetch('/admin/index.html', { method: 'HEAD' })
        if (res.ok) {
          setTinaAvailable(true)
          return
        }
      } catch (e) {
        // ignore and try fallback
      }
      try {
        const apiRes = await fetch(fallbackApi, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ query: '{ __typename }' }),
        })
        setTinaAvailable(apiRes.ok)
      } catch (e) {
        setTinaAvailable(false)
      }
    }
    checkTina()
  }, [isAuthenticated])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Simple authentication - in production, use proper authentication
    if (credentials.username === 'admin' && credentials.password === 'zentrust2024') {
      localStorage.setItem('zentrust_admin_auth', 'true')
      setIsAuthenticated(true)
      setError('')
    } else {
      setError('Invalid credentials')
    }
  }

  if (isAuthenticated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl font-bold text-foreground">Content Management</h1>
              <button
                onClick={() => {
                  localStorage.removeItem('zentrust_admin_auth')
                  setIsAuthenticated(false)
                  setCredentials({ username: '', password: '' })
                }}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Sign Out
              </button>
            </div>

            {!tinaAvailable && (
              <div className="mb-6 rounded-lg border border-destructive/30 bg-destructive/10 p-4 text-sm text-destructive">
                TinaCMS dev server is not running. Run: <code>npm run tina</code>
              </div>
            )}

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Content Management Options */}
              <div className="glass-card rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Manage Pages</h3>
                <p className="text-sm text-muted-foreground mb-4">Edit homepage, program pages, and other site content</p>
                <button
                  onClick={() => window.open('/admin/index.html#/collections/pages', '_blank')}
                  className="btn-primary w-full"
                >
                  Open Page Editor
                </button>
              </div>

              <div className="glass-card rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Manage Blog Posts</h3>
                <p className="text-sm text-muted-foreground mb-4">Create, edit, and publish blog articles</p>
                <button
                  onClick={() => window.open('/admin/index.html#/collections/blog', '_blank')}
                  className="btn-primary w-full"
                >
                  Open Blog Editor
                </button>
              </div>

              <div className="glass-card rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Manage Team</h3>
                <p className="text-sm text-muted-foreground mb-4">Add and edit team member profiles</p>
                <button
                  onClick={() => window.open('/admin/index.html#/collections/team', '_blank')}
                  className="btn-primary w-full"
                >
                  Open Team Editor
                </button>
              </div>

              <div className="glass-card rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Manage Programs</h3>
                <p className="text-sm text-muted-foreground mb-4">Edit program descriptions and impact metrics</p>
                <button
                  onClick={() => window.open('/admin/index.html#/collections/programs', '_blank')}
                  className="btn-primary w-full"
                >
                  Open Program Editor
                </button>
              </div>

              <div className="glass-card rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Manage Stories</h3>
                <p className="text-sm text-muted-foreground mb-4">Add and edit success stories and testimonials</p>
                <button
                  onClick={() => window.open('/admin/index.html#/collections/stories', '_blank')}
                  className="btn-primary w-full"
                >
                  Open Story Editor
                </button>
              </div>

              <div className="glass-card rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Media Library</h3>
                <p className="text-sm text-muted-foreground mb-4">Upload and manage images and media files</p>
                <button
                  onClick={() => window.open('/admin/index.html#/collections/media', '_blank')}
                  className="btn-primary w-full"
                >
                  Open Media Library
                </button>
              </div>
            </div>

            {/* Additional Information */}
            <div className="mt-12 glass-card rounded-xl p-8">
              <h2 className="text-xl font-bold text-foreground mb-4">Getting Started with TinaCMS</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Content Types</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Pages: Home, About, Contact, etc.</li>
                    <li>• Blog Posts: Articles and news</li>
                    <li>• Team Members: Staff profiles</li>
                    <li>• Programs: Project descriptions</li>
                    <li>• Success Stories: Testimonials</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Features</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Rich text editing with Markdown</li>
                    <li>• Image upload and management</li>
                    <li>• SEO field optimization</li>
                    <li>• Draft/Published status control</li>
                    <li>• Real-time preview</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                <p className="text-sm text-foreground">
                  <strong>Note:</strong> Changes made in TinaCMS will be reflected on the website after a brief processing time. 
                  For real-time updates, consider setting up webhook integration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-emerald-500/10 flex items-center justify-center">
      <div className="max-w-md w-full mx-4">
        <div className="glass-card rounded-2xl p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-2">Admin Access</h1>
            <p className="text-muted-foreground">Enter your credentials to access the content management system</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-foreground mb-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                value={credentials.username}
                onChange={(e) => setCredentials(prev => ({ ...prev, username: e.target.value }))}
                className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Enter username"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-foreground mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={credentials.password}
                onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
                className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Enter password"
                required
              />
            </div>

            {error && (
              <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20">
                <p className="text-sm text-destructive">{error}</p>
              </div>
            )}

            <button
              type="submit"
              className="w-full btn-primary"
            >
              Sign In
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-xs text-muted-foreground">
              Default credentials: admin / zentrust2024
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
