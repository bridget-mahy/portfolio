import styles from './content.module.css'
import Image from 'next/image'
import { Github, Web } from './svg'
import Contact from './contact'

export default function Content() {
  return (
    <>
      <div
        className={`${styles.glass} scroll-smooth overflow-y-auto min-h-screen w-10/12`}
      >
        <div className="mx-20 h-full w-5/6">
          <h2
            id="Work"
            className={`font-Header font-light tracking-wide mix-blend-color-burn text-black opacity-50 py-5 pt-28 text-3xl`}
          >
            WORK
          </h2>
          <div className="flex flex-col gap-48">
            <div className="flex">
              <div className="relative w-1/2">
                <Image
                  src="/images/todos.gif"
                  width={1000}
                  height={1000}
                  alt="todos-project"
                  className="object-cover h-60 absolute"
                />
                <a
                  href="https://github.com/bridget-mahy/todo-fullstack"
                  className="absolute z-30"
                  target="_blank"
                >
                  <Github isLight={false} nav={false} />
                </a>
                <a
                  href="https://bmahy-fullstack-todo.up.railway.app/"
                  className="absolute z-30"
                  target="_blank"
                >
                  <Web isLight={false} nav={false} />
                </a>
                <Image
                  src="/images/todos.jpeg"
                  alt="todos-project"
                  width={1000}
                  height={1000}
                  className="object-cover grayscale h-60 absolute z-10 hover:opacity-0"
                />
              </div>
              <div className="w-2/3 ml-10">
                <h2
                  className={`font-Header font-thin text-black opacity-50 ${styles.textshadow} text-2xl`}
                >
                  To Do App
                </h2>
                <p
                  className={`${styles.pshadow} font-light opacity-70 text-black`}
                >
                  This full stack app allows users to manage their own to-do
                  list. I utilised React, Redux and Express with Typescript as
                  well as Knex/SQLite for this project. I used a REST api to
                  connect data from the server to the client side for Create,
                  Read, Update and Delete operations. I have deployed the app
                  using Railway with Postgres.
                </p>
              </div>
            </div>
            {/* NEW PROJECT -- Gallerina */}
            <div className="flex">
              <div className="relative w-1/2">
                <Image
                  src="/images/gallerina.gif"
                  width={1000}
                  height={1000}
                  alt="todos-project"
                  className="object-cover top-2 h-64 absolute"
                />
                <a
                  href="https://github.com/bridget-mahy/gallerina"
                  className="absolute z-30 top-2"
                  target="_blank"
                >
                  <Github isLight nav={false} />
                </a>
                <a
                  href="https://gallerinaa.up.railway.app/"
                  className="absolute z-30 top-2"
                  target="_blank"
                >
                  <Web isLight nav={false} />
                </a>
                <Image
                  src="/images/gallerina.png"
                  alt="todos-project"
                  width={1000}
                  height={1000}
                  className="object-cover grayscale h-64 top-2 absolute z-10 hover:opacity-0"
                />
              </div>
              <div className="w-2/3 ml-10">
                <h2
                  className={`font-Header font-thin text-black opacity-50 ${styles.textshadow} text-2xl`}
                >
                  Gallerina
                </h2>
                <p
                  className={`${styles.pshadow} font-light opacity-70 text-black`}
                >
                  Gallerina is a pinterest-like app which allows users to curate
                  their own art collections. This app was created using the
                  Arsty external API with Insomnia, React and Redux with
                  Typescript, SQLite with Knex and CSS with Tailwind. I helped
                  produce Gallerina within an Agile team of five in a ten day
                  timeframe. I played the role of product owner in this project
                  which involved pitching the idea to my cohort, producing the
                  user stories for the app and outlining our vision for the
                  project during a final presentation. As a web developer, I
                  worked in a pair to produce the page for viewing a single
                  collection of artworks (RD functionality) and add notes (CRD
                  functionality). On an individual level, I coded the external
                  API calls for the app, the search page and deployed the app.
                </p>
              </div>
            </div>
            {/* END OF Gallerina */}
            {/* keyboard PROJECT */}
            <div className="flex -mt-20">
              <div className="relative w-1/2">
                <Image
                  src="/images/keyboard32.gif"
                  width={1000}
                  height={1000}
                  alt="keyboard-project"
                  className="object-cover h-60 top-2 absolute"
                />
                <div className="relative">
                  <a
                    href="https://github.com/bridget-mahy/sampler-project"
                    className="absolute z-40 top-2"
                    target="_blank"
                  >
                    <Github isLight nav={false} />
                  </a>
                  <a
                    href="https://bridget-mahy.github.io/sampler-project/"
                    className="absolute z-30 top-2"
                    target="_blank"
                  >
                    <Web isLight nav={false} />
                  </a>
                </div>
                <Image
                  src="/images/keyboard-frame1.jpeg"
                  alt="keyboard-project"
                  width={1000}
                  height={1000}
                  className="object-cover grayscale h-60 top-2 absolute z-10 hover:opacity-0"
                />
              </div>
              <div className="w-2/3 ml-10">
                <h2
                  className={`${styles.textshadow} font-Header font-thin text-2xl tracking-wide text-black opacity-50 `}
                >
                  Sampler Project
                </h2>
                <p
                  className={`${styles.pshadow} font-light opacity-70 text-black`}
                >
                  This was a project I made at the beginning of my coding
                  bootcamp when we were given free reign to make a &quot;fun or
                  useless&quot; website. Here I&apos;ve used Javascript, HTML,
                  and CSS to create a sampler that plays a snippet of audio
                  corresponding to a keyboard press. I used CSS to show the user
                  how their keyboard presses might link up to an actual piano. I
                  thought it would be helpful for someone learning how to sample
                  on the computer using software like Ableton Live.
                </p>
              </div>
            </div>

            {/* NEW PROJECT -- LAST ITEM */}
            <div className="flex -mt-15">
              <div className="relative w-1/2">
                <Image
                  src="/images/nextblog.gif"
                  width={1000}
                  height={1000}
                  alt="todos-project"
                  className="object-cover h-64 absolute"
                />
                <a
                  href="https://github.com/bridget-mahy/nextjs-blog"
                  className="absolute z-30"
                  target="_blank"
                >
                  <Github isLight={false} nav={false} />
                </a>
                <a
                  href="https://nextjs-blog-two-lilac-76.vercel.app/"
                  className="absolute z-30"
                  target="_blank"
                >
                  <Web isLight={false} nav={false} />
                </a>
                <Image
                  src="/images/nextblog.jpg"
                  alt="todos-project"
                  width={1000}
                  height={1000}
                  className="object-cover grayscale h-64 absolute z-10 hover:opacity-0"
                />
              </div>

              <div className="w-2/3 ml-10">
                <h2
                  className={`font-Header font-thin text-black opacity-50 ${styles.textshadow} text-2xl`}
                >
                  Next JS Blog
                </h2>
                <p
                  className={`${styles.pshadow} font-light opacity-70 text-black`}
                >
                  This app was created using the NextJS Foundations tutorial. I
                  played around with different elements and features in Next
                  such as images, rendering markup/fetching data and dynamic
                  routing for this blog. I also incorporated two examples of
                  fetching an image from a simple external API. This tutorial
                  helped me understand the difference between static and
                  server-side generation and helped me familiarise myself with
                  NextJS and Vercel. This information allowed me to create and
                  deploy this portfolio site.
                </p>
              </div>
            </div>
            {/* END OF ITEM */}
          </div>
          <h1
            id="About"
            className={`${styles.textshadow} font-Header mix-blend-color-burn font-bold text-black opacity-50 py-5 pt-20 mt-16 text-3xl`}
          >
            ABOUT
          </h1>
          <div className="flex justify-between">
            <p className={`${styles.pinkshadow} font-light text-black`}>
              My name is Bridget. I am a web developer moving to Melbourne Aus.
            </p>
            <Image
              src="/images/profile1.png"
              width={1000}
              height={1000}
              alt="profile"
              className="object-cover w-80 h-80 mb-10"
            />
          </div>
          <Contact />
        </div>
      </div>
    </>
  )
}
