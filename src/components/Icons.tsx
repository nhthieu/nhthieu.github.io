export const MoonIcon = ({ className = "", ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 384 512"
    width='1em'
    height='1em'
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path d="M223.5 32C100 32 0 132.3 0 256s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" />
  </svg>
)

export const SunIcon = ({ className = "", ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="#2a2a2a"
    viewBox="0 0 24 24"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <g>
      <path
        stroke="#2a2a2a"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 4V2m0 18v2M6.414 6.414L5 5m12.728 12.728l1.414 1.414M4 12H2m18 0h2m-4.271-5.586L19.143 5M6.415 17.728L5 19.142M12 17a5 5 0 110-10 5 5 0 010 10z"
      ></path>
    </g>
  </svg>
)

export const GithubIcon = ({ className = "", ...rest }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 496 512'
    width='1em'
    height='1em'
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z' />
  </svg>
)

export const LinkedInIcon = ({ className = "", ...rest }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 448 512'
    width='1em'
    height='1em'
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path d='M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z' />
  </svg>
)

export const MailIcon = ({ className = "", ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    // fill="none"
    viewBox="0 0 24 24"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path
      // fill="#0F0F0F"
      fillRule="evenodd"
      d="M20 4a3 3 0 013 3v10a3 3 0 01-3 3H4a3 3 0 01-3-3V7a3 3 0 013-3h16zm-.747 2H4.747l6.633 5.237a1 1 0 001.24 0L19.253 6zM3 7.169V17a1 1 0 001 1h16a1 1 0 001-1V7.169l-7.141 5.638a3 3 0 01-3.718 0L3 7.168z"
      clipRule="evenodd"
    ></path>
  </svg>
)

export const TwitterIcon = ({ className = "", ...rest }) => (
  <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      // preserveAspectRatio="xMidYMid"
      viewBox="0 0 31.812 26"
      className={`w-full h-auto ${className}`}
      {...rest}
    >
      <path d="M20.877 2c1.642 0 3.505.652 4.549 1.738a11.639 11.639 0 003.624-1.352 5.615 5.615 0 01-2.51 3.083 11.668 11.668 0 003.28-.879 11.493 11.493 0 01-2.849 2.887c.01.238.016.478.016.718C26.987 15.562 21.445 24 10.939 24c-3.224 0-6.432-.867-8.957-2.449.446.054.901.08 1.361.08 2.676 0 5.139-.891 7.096-2.389-2.502-.043-4.612-1.656-5.336-3.869.347.064.707.1 1.075.1.518 0 1.025-.067 1.503-.196C5.068 14.768 3.1 12.514 3.1 9.813V9.74c.771.418 1.65.67 2.587.7-1.533-1.003-2.54-2.706-2.54-4.641 0-1.022.281-1.981.772-2.801 2.816 3.369 7.026 5.59 11.774 5.824a5.407 5.407 0 01-.15-1.269c0-3.08 2.178-5.553 5.334-5.553m8.943 2.59h.005M20.877 0c-3.844 0-6.817 2.753-7.263 6.552-3.189-.647-6.09-2.348-8.174-4.841a1.982 1.982 0 00-3.224.255A7.472 7.472 0 001.625 8.4a2.006 2.006 0 00-.512 1.34v.073c0 1.959.769 3.776 2.047 5.139-.073.342-.057.703.055 1.046a7.54 7.54 0 002.284 3.398 9.884 9.884 0 01-3.277.169 1.988 1.988 0 00-2.114 1.321c-.31.884.032 1.867.824 2.363C3.764 25.023 7.318 26 10.939 26c6.839 0 11.086-3.157 13.444-5.805 2.86-3.211 4.524-7.477 4.589-11.74a13.45 13.45 0 002.438-2.663c.251-.334.4-.751.4-1.202 0-.681-.337-1.282-.852-1.644a2.01 2.01 0 00-.655-2.113 1.982 1.982 0 00-2.247-.179 9.529 9.529 0 01-2.125.908C24.555.592 22.688 0 20.877 0z"></path>
    </svg>
)
