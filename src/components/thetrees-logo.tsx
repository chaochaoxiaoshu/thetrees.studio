interface TheTreesLogoProps {
  size?: number
}

const TheTreesLogo = ({ size = 32 }: TheTreesLogoProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    fill='none'
    viewBox='0 0 1024 1024'
    aria-label='The Trees Logo'
  >
    <rect width='1024' height='1024' fill='#B2E6C8' rx='512'></rect>
    <g clipPath='url(#clip0_56_52)'>
      <path
        fill='#000'
        fillRule='evenodd'
        d='M474.6 808.885v-593.77C327.008 233.519 212.8 359.422 212.8 512s114.208 278.481 261.8 296.885m327.77-224.442c-29.462 118.48-129.542 209.051-252.97 224.442v-15.77a108.46 108.46 0 0 1 54.23-93.93zm8.255-91.138L549.4 644.124v-26.366a89.76 89.76 0 0 1 44.88-77.734l203.343-117.4c7.043 22.531 11.494 46.208 13.002 70.681m-44.298-138.984L549.4 479.564v-26.366a89.76 89.76 0 0 1 44.88-77.734l129.531-74.785a300.5 300.5 0 0 1 42.516 53.642M549.4 215.115a297.2 297.2 0 0 1 109.937 36.417L549.4 315.004zM886 512c0 206.555-167.445 374-374 374-206.554 0-374-167.445-374-374 0-206.554 167.446-374 374-374 206.555 0 374 167.446 374 374'
        clipRule='evenodd'
      ></path>
    </g>
    <defs>
      <clipPath id='clip0_56_52'>
        <path fill='#fff' d='M138 138h748v748H138z'></path>
      </clipPath>
    </defs>
  </svg>
)

export default TheTreesLogo
