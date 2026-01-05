"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { ThemeToggle } from "./ThemeToggle"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Leaf } from "lucide-react"
import { cn } from "@/lib/utils"

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
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all",
      isScrolled ? "bg-background/80 backdrop-blur-md border-b" : "bg-background/70"
    )}>
      <nav className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">ZenTrust</span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            <form onSubmit={submitSearch}>
              <input
                type="search"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search questions"
                className="w-44 rounded-md border px-3 py-1.5 text-sm"
              />
            </form>
            <ThemeToggle />
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t"
            >
              <div className="px-3 py-3 space-y-3">

                {/* Mobile Search */}
                <form onSubmit={submitSearch}>
                  <input
                    type="search"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    placeholder="Search questions"
                    className="w-full rounded-md border px-3 py-2 text-sm"
                  />
                </form>

                {/* Links */}
                <Link href="/questions">Questions</Link>
                <Link href="/about">About</Link>
                <Link href="/programs">Programs</Link>
                <Link href="/impact">Impact</Link>
                <Link href="/stewardship">Stewardship</Link>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
