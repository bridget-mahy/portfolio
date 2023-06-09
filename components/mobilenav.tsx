import { Github, Linkedin } from './svg'
import styles from './content.module.css'
import { useState } from 'react'
import { motion } from 'framer-motion'

export interface NavProps {
  onClose: () => void
}

export default function FullscreenNav({ onClose }: NavProps) {
  return (
    <div className="fixed top-[4.5rem] left-0 w-screen h-screen bg-white text-white overflow-hidden">
      <div className="flex font-Roboto flex-col items-center pt-10 h-full">
        <a
          href="#Work"
          onClick={onClose}
          className="text-6xl text-slate-700 opacity-70 font-thin tracking-wide mb-4"
        >
          WORK
        </a>
        <a
          href="#About"
          onClick={onClose}
          className="text-6xl text-slate-700 opacity-70 font-thin tracking-wide mb-4"
        >
          ABOUT
        </a>
        <a
          href="#Contact"
          onClick={onClose}
          className="text-6xl text-slate-700 opacity-70 font-thin tracking-wide mb-4"
        >
          CONTACT
        </a>
        <a
          href="/BridgetMahy-Resume.pdf"
          download="bmahy.pdf"
          className="text-6xl text-slate-700 opacity-70 font-thin tracking-wide mb-4"
          aria-label="Download CV (PDF)"
        >
          CV
        </a>
        <a
          href="https://github.com/bridget-mahy"
          target="_blank"
          className="text-6xl text-slate-700 opacity-70 font-thin tracking-wide mb-4"
        >
          GITHUB
        </a>
        <a
          href="https://www.linkedin.com/in/bridget-mahy/"
          target="_blank"
          className="text-6xl text-slate-700 opacity-70 font-thin tracking-wide mb-4"
        >
          LINKEDIN
        </a>
      </div>
    </div>
  )
}
