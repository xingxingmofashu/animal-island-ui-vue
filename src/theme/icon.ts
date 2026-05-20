export default {
  slots: {
    base: 'inline-block bg-no-repeat bg-center bg-contain'
  },
  variants: {
    bounce: {
      true: {
        base: 'hover:animate-[icon-bounce_0.3s_ease-in-out_forwards]'
      }
    },
    variant: {
      miles: `icon-miles`,
      camera: 'icon-camera',
      chat: 'icon-chat',
      critterpedia: 'icon-critterpedia',
      design: 'icon-design',
      diy: 'icon-diy',
      helicopter: 'icon-helicopter',
      map: 'icon-map',
      shopping: 'icon-shopping',
      variant: 'icon-variant'
    }
  }
}
