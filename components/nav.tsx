import { Github, Linkedin } from './svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'
import FullscreenNav from './mobilenav'
import styles from './content.module.css'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Nav() {
  const [expand, setExpand] = useState(false)
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="z-10 fixed w-screen h-3 backdrop-filter backdrop-brightness-200 p-9 shadow-lg shadow-blue-100 flex justify-between items-center pb-100">
        <div className="flex items-end">
          <a
            href=""
            className={`${styles.hover} z-20 text-slate-700 opacity-60 text-2xl md:text-3xl font-Roboto font-light tracking-wide`}
          >
            Bridget Mahy
          </a>
          <button
            className={`opacity-60 text-3xl font-Roboto font-light hidden md:block tracking-wide ${
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
        <div className="md:flex items-center hidden">
          <a
            href="/BridgetMahy-Resume.pdf"
            download="bmahy.pdf"
            className={`${styles.hover} text-slate-700 opacity-60 font-Header font-black my-2`}
          >
            CV
          </a>
          <a href="https://github.com/bridget-mahy" target="_blank">
            <Github isLight={false} nav={true} />
          </a>
          <Linkedin />
        </div>
        {/* <div> hamburger button goes here? </div> */}
        <div className="md:hidden block slate-700 font-thin">
          <button onClick={() => setOpen(!open)}>
            {' '}
            <FontAwesomeIcon
              className="text-2xl opacity-60"
              icon={open ? faX : faBars}
            />
          </button>
          {open && <FullscreenNav onClose={() => setOpen(false)} />}
        </div>
      </div>
    </>
  )
}
