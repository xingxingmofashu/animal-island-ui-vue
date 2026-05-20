const size = ['sm', 'md', 'lg'] as const
const variant = ['default'] as const
const color = ['primary', 'error', 'warning'] as const

type Size = (typeof size)[number]
type Variant = (typeof variant)[number]
type Color = (typeof color)[number]

export default {
  slots: {
    root: 'relative inline-flex items-center',
    base: 'w-full bg-[#f7f3df] border-[2.5px] border-solid border-[#c4b89e] rounded-[50px] transition-[all_var(--animal-motion-duration-base)_var(--animal-motion-ease)]  hover:not-disabled:border-[#a89878]  placeholder:text-[#c4b89e] placeholder:font-normal flex-1 outline-none text-[#725d42] text-[length:inherit] font-(family-name:--animal-font-family) font-medium leading-(--animal-line-height-base) tracking-[0.01em]',
    leading: 'absolute inset-y-0 inset-s-0 flex items-center',
    leadingIcon: 'shrink-0',
    trailing: 'absolute inset-y-0 inset-e-0 flex items-center',
    trailingIcon: 'shrink-0'
  },
  variants: {
    variant: {
      default: '',
      shadow: 'shadow-[0_3px_0_0_#d4c9b4] hover:not-disabled:shadow-[0_3px_0_0_#c4b89e]'
    },
    size: {
      sm: {
        base: 'py-1.5 px-2.5 gap-1.5 text-xs rounded-[40px]',
        leading: 'ps-2',
        trailing: 'pe-2'
      },
      md: {
        base: 'py-1.5 px-2.5 text-sm',
        leading: 'ps-2.5',
        trailing: 'pe-2.5'
      },
      lg: {
        base: 'py-2 px-5.5 text-base border-3 rounded-[50px]',
        leading: 'ps-3',
        trailing: 'pe-3'
      }
    },
    color: {
      primary: '',
      error: '',
      warning: ''
    },
    disabled: {
      true: {
        base: 'disabled:bg-[#ece8dc] disabled:border-[#d4c9b4]  disabled:opacity-60 disabled:cursor-not-allowed disabled:text-[#c4b89e] disabled:shadow-none'
      }
    },
    leading: {
      true: ''
    },
    trailing: {
      true: ''
    }
  },
  compoundVariants: [
    {
      leading: true,
      size: 'sm' as (typeof size)[number],
      class: {
        base: 'ps-8'
      }
    },
    {
      leading: true,
      size: 'md' as (typeof size)[number],
      class: {
        base: 'ps-9'
      }
    },
    {
      leading: true,
      size: 'lg' as (typeof size)[number],
      class: {
        base: 'ps-10'
      }
    },
    {
      trailing: true,
      size: 'sm' as (typeof size)[number],
      class: {
        base: 'pe-8'
      }
    },
    {
      trailing: true,
      size: 'md' as (typeof size)[number],
      class: {
        base: 'pe-9'
      }
    },
    {
      trailing: true,
      size: 'lg' as (typeof size)[number],
      class: {
        base: 'pe-10'
      }
    }
  ],
  defaultVariants: {
    variant: 'default' as Variant,
    size: 'md' as Size,
    color: 'primary' as Color
  }
}
