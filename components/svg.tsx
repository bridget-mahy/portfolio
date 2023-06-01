import styles from './content.module.css'

interface Props {
  isLight: boolean
  nav: boolean
}

export function Github({ isLight, nav }: Props) {
  return (
    <div className="group md:relative">
      {nav && (
        <div className="hidden group-hover:block bg-pink-200 left-1 margin opacity-60 p-3 blur absolute inset-0"></div>
      )}
      <svg
        className={`w-8 h-8 m-2 fill-current ${
          isLight
            ? 'md:text-blue-100 z-30 md:hover:text-sky-50 text-slate-700'
            : `opacity-60 text-slate-700 ${!nav && 'hover:text-slate-900'}`
        }`}
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24.0005 1C18.303 1.00296 12.7923 3.02092 8.45374 6.69305C4.11521 10.3652 1.23181 15.452 0.319089 21.044C-0.593628 26.636 0.523853 32.3684 3.47174 37.2164C6.41963 42.0643 11.0057 45.7115 16.4099 47.5059C17.6021 47.7272 18.0512 46.9883 18.0512 46.36C18.0512 45.7317 18.0273 43.91 18.0194 41.9184C11.3428 43.3608 9.93197 39.101 9.93197 39.101C8.84305 36.3349 7.26927 35.6078 7.26927 35.6078C5.09143 34.1299 7.43223 34.1576 7.43223 34.1576C9.84455 34.3275 11.1123 36.6194 11.1123 36.6194C13.2504 40.2667 16.7278 39.2116 18.0949 38.5952C18.3095 37.0501 18.9335 35.999 19.621 35.4023C14.2877 34.8017 8.68408 32.7548 8.68408 23.6108C8.65102 21.2394 9.53605 18.9461 11.156 17.2054C10.9096 16.6047 10.087 14.1785 11.3905 10.8829C11.3905 10.8829 13.4054 10.2427 17.9916 13.3289C21.9253 12.2592 26.0757 12.2592 30.0095 13.3289C34.5917 10.2427 36.6026 10.8829 36.6026 10.8829C37.9101 14.1706 37.0875 16.5968 36.8411 17.2054C38.4662 18.9464 39.353 21.2437 39.317 23.6187C39.317 32.7824 33.7015 34.8017 28.3602 35.3905C29.2186 36.1334 29.9856 37.5836 29.9856 39.8122C29.9856 43.0051 29.9578 45.5736 29.9578 46.36C29.9578 46.9962 30.391 47.7391 31.6071 47.5059C37.0119 45.7113 41.5984 42.0634 44.5462 37.2147C47.4941 32.3659 48.611 26.6326 47.6972 21.0401C46.7835 15.4476 43.8986 10.3607 39.5587 6.68921C35.2187 3.01771 29.7067 1.00108 24.0085 1H24.0005Z"
        />
      </svg>
    </div>
  )
}

export function Web({ isLight, nav }: Props) {
  return (
    <div className="group md:relative">
      <svg
        className={`stroke-current absolute mx-2 my-1 left-10 h-10 w-10 ${
          isLight
            ? 'md:text-blue-100 z-30 md:hover:text-sky-50 md:opacity-100 text-slate-700 opacity-60'
            : 'opacity-60 text-slate-700 hover:text-slate-900'
        }`}
        fill="none"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="8" strokeWidth="2" />
        <ellipse cx="12" cy="12" rx="3" ry="8" strokeWidth="2" />
        <path d="M4 12H20" strokeWidth="2" strokeLinecap="round" />
      </svg>
      {nav && (
        <div
          className={`hidden group-hover:block ${
            isLight ? 'bg-pink-400' : 'bg-pink-200'
          } margin opacity-60 p-3 blur absolute inset-0 -z-10`}
        ></div>
      )}
    </div>
  )
}

export function Linkedin() {
  return (
    <div className="group relative">
      <a
        href="https://www.linkedin.com/in/bridget-mahy-959530135/"
        target="_blank"
      >
        <div className="hidden group-hover:block bg-pink-200 opacity-60 blur absolute z-0 inset-1"></div>
        <svg
          className={`w-8 h-8 m-2 relative fill-current text-slate-700 z-20`}
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_17_68)">
            <path
              d="M44.4469 0H3.54375C1.58437 0 0 1.54688 0 3.45938V44.5312C0 46.4437 1.58437 48 3.54375 48H44.4469C46.4062 48 48 46.4438 48 44.5406V3.45938C48 1.54688 46.4062 0 44.4469 0ZM14.2406 40.9031H7.11563V17.9906H14.2406V40.9031ZM10.6781 14.8688C8.39062 14.8688 6.54375 13.0219 6.54375 10.7437C6.54375 8.46562 8.39062 6.61875 10.6781 6.61875C12.9563 6.61875 14.8031 8.46562 14.8031 10.7437C14.8031 13.0125 12.9563 14.8688 10.6781 14.8688ZM40.9031 40.9031H33.7875V29.7656C33.7875 27.1125 33.7406 23.6906 30.0844 23.6906C26.3812 23.6906 25.8187 26.5875 25.8187 29.5781V40.9031H18.7125V17.9906H25.5375V21.1219H25.6312C26.5781 19.3219 28.9031 17.4188 32.3625 17.4188C39.5719 17.4188 40.9031 22.1625 40.9031 28.3313V40.9031Z"
              opacity="0.6"
            />
          </g>
        </svg>
      </a>
    </div>
  )
}
