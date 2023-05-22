import { Github, Linkedin } from './svg'
import styles from './content.module.css'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Nav() {
  const [expand, setExpand] = useState(false)

  return (
    <>
      <div className="z-10 fixed w-screen h-3 backdrop-filter backdrop-brightness-200 p-9 shadow-lg shadow-blue-100 flex justify-between items-center pb-100">
        <div className="flex items-end">
          <a
            href=""
            className={`${styles.hover} z-20 text-slate-700 opacity-60 text-3xl font-Roboto font-light tracking-wide`}
          >
            Bridget Mahy
          </a>
          <button
            className={`opacity-60 text-3xl font-Roboto font-light tracking-wide ${
              expand ? 'text-black' : 'text-slate-700'
            }`}
            onClick={() => setExpand(!expand)}
          >
            .
          </button>
          {expand && (
            <motion.div
              animate={{ x: 200 }}
              transition={{ duration: 0.5 }}
              className="absolute flex gap-x-4 text-slate-700 opacity-60 text-xl font-Roboto font-light tracking-wide"
            >
              <a
                href="#Work"
                className="text-slate-700 opacity-60 text-xl font-Roboto font-light tracking-wide"
              >
                Work
              </a>
              <a
                href="#About"
                className="text-slate-700 opacity-60 text-xl font-Roboto font-light tracking-wide"
              >
                About
              </a>
              <a
                href="#Contact"
                className="text-slate-700 opacity-60 text-xl font-Roboto font-light tracking-wide"
              >
                Contact
              </a>
            </motion.div>
          )}
        </div>
        <div className="flex items-center">
          <a
            href="/BridgetMahy-Resume.pdf"
            download="bmahy.pdf"
            className={`${styles.hover}  text-slate-700 opacity-60 font-Playfair font-black m-2`}
          >
            CV
          </a>
          <a href="https://github.com/bridget-mahy" target="_blank">
            <Github isLight={false} nav={true} />
          </a>
          <Linkedin />
        </div>
      </div>
    </>
  )
}
