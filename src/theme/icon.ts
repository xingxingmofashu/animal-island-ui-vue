export default {
  slots: {
    base: 'inline-block'
  },
  variants: {
    bounce: {
      true: {
        base: 'hover:animate-[icon-bounce_0.3s_ease-in-out_forwards]'
      }
    },
    variant: {
      miles: `bg-[url(../assets/miles.svg)]`,
      camera: 'bg-[url(../assets/camera.svg)]',
      chat: 'bg-[url(../assets/chat.svg)]',
      critterpedia: 'bg-[url(../assets/critterpedia.svg)]',
      design: 'bg-[url(../assets/design.svg)]',
      diy: 'bg-[url(../assets/diy.svg)]',
      helicopter: 'bg-[url(../assets/helicopter.svg)]',
      map: 'bg-[url(../assets/map.svg)]',
      shopping: 'bg-[url(../assets/shopping.svg)]',
      variant: 'bg-[url(../assets/variant.svg)]'
    }
  }
}