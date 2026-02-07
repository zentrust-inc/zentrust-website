"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { ThemeToggle } from "./ThemeToggle"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Leaf, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

// Updated navigation to follow compliance guidelines
const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { 
    name: "Research", 
    href: "/research-areas", 
    children: [
      { name: "Research Areas", href: "/research-areas" },
      { name: "Research Status", href: "/research-status" },
    ] 
  },
  { name: "Questions", href: "/questions" },
  { name: "Stewardship", href: "/stewardship" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [query, setQuery] = useState("")
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  function submitSearch(e: React.FormEvent) {
    e.preventDefault()
    const q = query.trim()
    if (!q) return
    router.push(`/find?q=${encodeURIComponent(q)}`)
    setQuery("")
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-background/70 backdrop-blur-md"
      )}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Leaf className="h-8 w-8 text-primary group-hover:text-emerald-500 transition-colors" />
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg" />
            </div>
            <span className="text-xl font-bold gradient-text">ZenTrust</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-4">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  {item.children ? (
                    // Dropdown for Research
                    <div className="flex items-center space-x-1 cursor-default px-3 py-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
                      <span>{item.name}</span>
                      <ChevronDown className="h-4 w-4" />
                      <div className="absolute top-full left-0 hidden group-hover:block pt-2">
                        <div className="bg-background border border-border rounded-lg shadow-xl py-2 w-48">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="block px-4 py-2 text-sm hover:bg-accent transition-colors"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Standard Links
                    <Link
                      href={item.href}
                      className={cn(
                        "relative px-3 py-2 text-sm font-medium transition-colors",
                        pathname === item.href
                          ? "text-primary"
                          : "text-foreground/70 hover:text-foreground"
                      )}
                    >
                      {item.name}
                      {pathname === item.href && (
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                          layoutId="navbar-indicator"
                        />
                      )}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Search */}
            <form onSubmit={submitSearch} className="relative">
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search research..."
                className="w-44 rounded-full border border-border/50 px-4 py-1.5 text-sm bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </form>

            <ThemeToggle />
          </div>

          {/* Mobile controls */}
          <div className="flex items-center space-x-4 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden overflow-hidden bg-background border-t border-border"
            >
              <div className="px-4 pt-4 pb-6 space-y-2">
                <form onSubmit={submitSearch} className="mb-4">
                  <input
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search research..."
                    className="w-full rounded-md border px-3 py-2 text-sm"
                  />
                </form>

                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.children ? (
                      <div className="space-y-1">
                        <div className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          {item.name}
                        </div>
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-3 py-2 rounded-md text-base font-medium text-foreground/80 hover:bg-accent"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className={cn(
                          "block px-3 py-2 rounded-md text-base font-medium transition-colors",
                          pathname === item.href
                            ? "text-primary bg-primary/10"
                            : "text-foreground/80 hover:bg-accent"
                        )}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
