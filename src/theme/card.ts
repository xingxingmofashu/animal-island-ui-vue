const colors = {
  primary: 'bg-[#f7f3df] text-[#725d42]',
  pink: 'bg-[#f8a6b2] text-white',
  purple: 'bg-[#b77dee] text-white',
  blue: 'bg-[#889df0] text-white',
  yellow: 'bg-[#f7cd67] text-[#725d42]',
  orange: 'bg-[#e59266] text-white',
  teal: 'bg-[#82d5bb] text-white',
  green: 'bg-[#8ac68a] text-white',
  red: 'bg-[#fc736d] text-white',
  "lime-green": 'bg-[#d1da49] text-[#3d5a1a]',
  "yellow-green": 'bg-[#ecdf52] text-[#725d42]',
  brown: 'bg-[#9a835a] text-white',
  "warm-peach-pink": 'bg-[#e18c6f] text-white',
}
const variant = ["default", "dashed"] as const

type Color = keyof typeof colors
type Variant = typeof variant[number]

const compoundVariants = variant.map(variant => Object.entries(colors).map(([color, className]) => ({
  color: color as Color,
  variant,
  class: {
    root: className
  }
}))).flat()

export default {
  slots: {
    root: 'rounded-[20px] py-4 px-6 font-medium transition-[all_0.3s_ease] cursor-pointer hover:-translate-y-0.5',
    header: '',
    body: '',
    footer: ''
  },
  variants: {
    color: {
      ...Object.fromEntries(Object.keys(colors).map((key) => ([key, '']))) as Record<Color, string>
    },
    variant: {
      default: {
        root: ''
      },
      title: {
        root: 'rounded-[40px_35px_45px_38px/38px_45px_35px_40px] py-3 px-6 font-semibold'
      },
      dashed: {
        root: 'bg-[#faf8f2] border-2 border-dashed border-[#e8dcc8] shadow-none hover:transform-none hover:border-[#d4c4a8]',
      }
    }
  },
  compoundVariants,
  defaultVariants: {
    color: 'primary' as Color,
    variant: 'default' as Variant
  }
}