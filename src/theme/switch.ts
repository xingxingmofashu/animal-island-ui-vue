const size = ['sm', 'md', 'lg'] as const

type Size = (typeof size)[number]

export default {
  slots: {
    root: 'relative flex items-start',
    container: 'flex items-center',
    base: 'inline-flex items-center shrink-0 rounded-full bg-[#d4c9b4] border-2 border-solid border-[#c4b89e]  cursor-pointer transition-[all_var(--animal-motion-duration-base)_var(--animal-motion-ease)] outline-none shadow-[inset_0_2px_4px_#725d4226] hover:not-disabled:border-[#a89878] focus-visible:outline-2 focus-visible:outline-solid focus-visible:outline-[#ffcc00] focus-visible:outline-offset-2',
    thumb:
      'group pointer-events-none rounded-full bg-[#f7f3df] transition-[all_var(--animal-motion-duration-base)_var(--animal-motion-ease)]  flex items-center justify-center data-[state=unchecked]:translate-x-0 data-[state=unchecked]:rtl:translate-x-0 ',
    icon: 'absolute shrink-0 size-8/12 rounded-full  border-solid border-r border-t border-l border-[#6fba2c] '
  },
  variants: {
    size: {
      sm: {
        base: 'w-8',
        container: 'h-4',
        thumb: 'size-3.5 data-[state=checked]:translate-x-3.5 data-[state=checked]:rtl:-translate-x-3.5'
      },
      md: {
        base: 'w-9',
        container: 'h-5',
        thumb: 'size-4 data-[state=checked]:translate-x-4 data-[state=checked]:rtl:-translate-x-4'
      },
      lg: {
        base: 'w-10',
        container: 'h-5',
        thumb: 'size-4.5 data-[state=checked]:translate-x-4.5 data-[state=checked]:rtl:-translate-x-4.5'
      }
    },
    checked: {
      true: {
        base: 'data-[state=checked]:bg-[#86d67a] data-[state=checked]:border-[#6fba2c] data-[state=checked]:shadow-[inset_0_2px_4px_#5a9e1e33] data-[state=checked]:hover:not-disabled:border-[#5a9e1e] data-[state=checked]:hover:not-disabled:bg-[#7ccc70]'
      }
    },
    unchecked: {
      true: {
        base: ''
      }
    },
    loading: {
      true: {
        icon: 'pointer-events-none opacity-70 animate-[spin_0.6s_linear_infinite]'
      }
    },
    disabled: {
      true: {
        root: 'opacity-50',
        base: 'cursor-not-allowed'
      }
    }
  },
  defaultVariants: {
    size: 'md' as Size
  }
}
