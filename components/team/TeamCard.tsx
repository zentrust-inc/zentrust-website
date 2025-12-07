"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Linkedin, Twitter, Mail, ExternalLink } from 'lucide-react'
import { cn } from '@/lib/utils'

interface TeamCardProps {
  name: string
  role: string
  bio: string
  photo?: string
  linkedin?: string
  twitter?: string
  email?: string
  featured?: boolean
}

const socialIcons = {
  linkedin: Linkedin,
  twitter: Twitter,
  email: Mail,
}

export function TeamCard({
  name,
  role,
  bio,
  photo = '/images/team/default-avatar.jpg',
  linkedin,
  twitter,
  email,
  featured = false,
}: TeamCardProps) {
  const socialLinks = [
    linkedin && { type: 'linkedin', href: linkedin, icon: Linkedin },
    twitter && { type: 'twitter', href: twitter, icon: Twitter },
    email && { type: 'email', href: `mailto:${email}`, icon: Mail },
  ].filter(Boolean) as Array<{
    type: string
    href: string
    icon: React.ComponentType<{ className?: string }>
  }>

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="group h-full"
    >
      <div className={cn(
        'glass-card rounded-2xl overflow-hidden h-full transition-all duration-300 hover:scale-105 hover:shadow-xl',
        featured && 'border-primary/20 bg-gradient-to-br from-primary/5 to-emerald-500/5'
      )}>
        {/* Photo */}
        <div className="relative h-64 overflow-hidden">
          <Image
            src={photo}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Featured Badge */}
          {featured && (
            <div className="absolute top-4 left-4">
              <div className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                Leadership
              </div>
            </div>
          )}

          {/* Social Links Overlay */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="flex space-x-3">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <motion.a
                    key={link.type}
                    href={link.href}
                    className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                      e.preventDefault()
                      if (link.type === 'email') {
                        window.location.href = link.href
                      } else {
                        window.open(link.href, '_blank', 'noopener,noreferrer')
                      }
                    }}
                  >
                    <Icon className="h-4 w-4" />
                  </motion.a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Name and Role */}
          <div className="mb-4">
            <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
              {name}
            </h3>
            <p className="text-primary font-medium">
              {role}
            </p>
          </div>

          {/* Bio */}
          <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-4">
            {bio}
          </p>

          {/* Social Links (Desktop) */}
          <div className="hidden group-hover:flex items-center justify-center space-x-4 pt-4 border-t border-border">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <motion.a
                  key={link.type}
                  href={link.href}
                  className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ scale: 1.05 }}
                  onClick={(e) => {
                    e.preventDefault()
                    if (link.type === 'email') {
                      window.location.href = link.href
                    } else {
                      window.open(link.href, '_blank', 'noopener,noreferrer')
                    }
                  }}
                >
                  <Icon className="h-4 w-4" />
                  <span className="capitalize">{link.type}</span>
                </motion.a>
              )
            })}
          </div>

          {/* Fallback Social Links (Mobile) */}
          <div className="flex group-hover:hidden items-center justify-center space-x-2 pt-4 border-t border-border">
            {socialLinks.slice(0, 3).map((link) => {
              const Icon = link.icon
              return (
                <motion.a
                  key={link.type}
                  href={link.href}
                  className="w-8 h-8 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.preventDefault()
                    if (link.type === 'email') {
                      window.location.href = link.href
                    } else {
                      window.open(link.href, '_blank', 'noopener,noreferrer')
                    }
                  }}
                >
                  <Icon className="h-3 w-3" />
                </motion.a>
              )
            })}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// Team grid layout component
interface TeamGridProps {
  members: TeamCardProps[]
  featured?: boolean
  columns?: 2 | 3 | 4
}

export function TeamGrid({
  members,
  featured = false,
  columns = 3,
}: TeamGridProps) {
  const gridClasses = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
  }

  return (
    <div className={cn('grid gap-8', gridClasses[columns])}>
      {members.map((member, index) => (
        <motion.div
          key={member.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <TeamCard {...member} featured={featured} />
        </motion.div>
      ))}
    </div>
  )
}

// Leadership highlight component
interface LeadershipHighlightProps {
  member: TeamCardProps
}

export function LeadershipHighlight({ member }: LeadershipHighlightProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <div className="glass-card rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-emerald-500/20 border-primary/20">
        <div className="grid md:grid-cols-2 gap-8 p-8">
          {/* Photo */}
          <div className="relative h-80 md:h-auto rounded-2xl overflow-hidden">
            <Image
              src={member.photo || '/images/team/default-avatar.jpg'}
              alt={member.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center">
            <div className="mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                Leadership
              </span>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-2">
              {member.name}
            </h2>
            <p className="text-xl text-primary font-medium mb-6">
              {member.role}
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {member.bio}
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {member.linkedin && (
                <motion.a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="h-5 w-5" />
                </motion.a>
              )}
              {member.twitter && (
                <motion.a
                  href={member.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Twitter className="h-5 w-5" />
                </motion.a>
              )}
              {member.email && (
                <motion.a
                  href={`mailto:${member.email}`}
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="h-5 w-5" />
                </motion.a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}