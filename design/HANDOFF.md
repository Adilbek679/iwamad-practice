# Week 5 — Handoff notes (SIS 2 starter design)

Routes (from the prototype):  / (Home, posts list: posts-desktop / posts-phone), /posts/:id (single post: post-desktop, reached via "Read more", back returns to the list), * (404: 404-desktop). Header links: Home, Contact, Posts.

Components → React files:
  PostCard → src/components/ui/Card.tsx (children: image, title, date, Tags, Button)
  Button → src/components/ui/Button.tsx
  Tag → src/components/ui/Tag.tsx

Button variants → prop:       variant = Primary | Secondary  (variant?: 'primary' | 'secondary')

PostCard layout:              direction vertical (column)  gap 8 (space/2)  padding 16 (space/4)  radius 8 (radius/md)  border 1px color/border

Breakpoint change:            phone 1 column(s), desktop 2 columns; header stacked (logo + title above nav) on phone, one row on desktop (from 640px)

Tokens (all ten):             color/primary = #1D4ED8
                              color/on-primary = #FFFFFF
                              color/text = #1F2937
                              color/text-muted = #9CA3AF  (fails contrast, fixed in tokens.css → see PR "Design fix")
                              color/surface = #FFFFFF
                              color/border = #D1D5DB
                              space/2 = 8
                              space/4 = 16
                              space/6 = 24
                              radius/md = 8
