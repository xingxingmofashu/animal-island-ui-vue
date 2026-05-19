
const color = [
  "danger",
  "ghost",
  "primary"
] as const

const variant = [
  "primary",
  "default",
  "dashed",
  "text",
  "link"
] as const

const size = [
  "sm",
  "md",
  "lg"
] as const

export default {
  slots: {
    base: `relative inline-flex items-center justify-center gap-(--animal-spacing-sm)  whitespace-nowrap cursor-pointer border-(length:--animal-border-width) border-solid border-transparent rounded-[50px] transition-all duration-(--animal-motion-duration-base) ease-(--animal-motion-ease) select-none outline-none leading-none tracking-[0.02em] shadow-(--animal-shadow-sm) 
      focus-visible:outline-2 focus-visible:outline-solid focus-visible:outline-(--animal-primary-color) focus-visible:outline-offset-2 `,
    label: 'font-(family-name:--animal-font-family) font-semibold'
  },
  variants: {
    size: {
      sm: {
        base: 'h-(--animal-height-sm) px-(--animal-spacing-lg) py-0 text-(length:--animal-font-size-sm) rounded-(--animal-border-radius-sm)'
      },
      md: {
        base: 'h-(--animal-height-base) px-(--animal-spacing-lg) py-0 text-(length:--animal-font-size-base)'
      },
      lg: {
        base: 'h-(--animal-height-lg) px-8 py-0 text-(length:--animal-font-size-lg) rounded-(--animal-border-radius-lg)'
      },
    },
    color: {
      ghost: 'bg-transparent shadow-none',
      danger: '',
      primary: ''
    },
    variant: {
      primary: 'text-(--animal-text-color) bg-(--animal-bg-color) border-(--animal-bg-color) shadow-[0_5px_0_0_#bdaea0]  hover:not-disabled:shadow-[0_6px_0_0_#bdaea0] hover:not-disabled:-translate-y-px  hover:not-disabled:bg-(--animal-bg-color) hover:not-disabled:border-(--animal-bg-color) active:not-disabled:bg-(--animal-bg-color) active:not-disabled:border-(--animal-bg-color)  active:not-disabled:shadow-[0_1px_0_0_#bdaea0] active:not-disabled:translate-y-0.5',
      default: 'text-(--animal-text-color) bg-(--animal-bg-color) border-(--animal-border-color) hover:not-disabled:text-(--animal-primary-color) hover:not-disabled:border-(--animal-primary-color) hover:not-disabled:shadow-(--animal-shadow-base) hover:not-disabled:-translate-y-px active:not-disabled:text-(--animal-primary-color-active) active:not-disabled:border-(--animal-primary-color-active)  active:not-disabled:shadow-(--animal-shadow-active) active:not-disabled:translate-y-0',
      dashed: 'text-(--animal-text-color) bg-(--animal-bg-color) border-(--animal-border-color)  border-dashed hover:not-disabled:text-(--animal-primary-color) hover:not-disabled:border-(--animal-primary-color) hover:not-disabled:-translate-y-px active:not-disabled:text-(--animal-primary-color-active) active:not-disabled:border-(--animal-primary-color-active) active:not-disabled:translate-y-0',
      text: 'shadow-none text-(--animal-text-color) bg-transparent border-transparent hover:not-disabled:bg-(--animal-bg-color-secondary) active:not-disabled:bg-[darken(#f0e8d8,5%)]',
      link: 'shadow-none text-(--animal-primary-color) bg-transparent border-transparent hover:not-disabled:text-(--animal-primary-color-hover)  hover:not-disabled:opacity-85 active:not-disabled:text-(--animal-primary-color-active)',
    },
    disabled: {
      true: {
        base: 'disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none'
      }
    },
    block: {
      true: {
        base: 'flex w-full'
      },
    },
    loading: {
      true: {
        base: 'cursor-default pointer-events-none shadow-none bg-[#0ec4b6] border-4 border-solid border-[#4de2da] text-white bg-[repeating-linear-gradient(-45deg,#0ec4b6,#0ec4b6_10px,#01b0a7_10px,#01b0a7_20px)] bg-size-[28.28px_28.28px] animate-[btn-loading_1s_linear_infinite] '
      }
    }
  },
  compoundVariants: [
    {
      color: 'danger' as typeof color[number],
      variant: 'primary' as typeof variant[number],
      class: {
        base: 'text-white bg-(--animal-error-color) border-(--animal-error-color) shadow-[0_5px_0_0_var(--animal-error-color-active)] hover:not-disabled:bg-(--animal-error-color-hover) hover:not-disabled:border-(--animal-error-color-hover) hover:not-disabled:shadow-[0_6px_0_0_var(--animal-error-color-active)] active:not-disabled:bg-(--animal-error-color-active) active:not-disabled:border-(--animal-error-color-active) active:not-disabled:shadow-[0_1px_0_0_var(--animal-error-color-active)]'
      }
    }, {
      color: 'danger' as typeof color[number],
      variant: 'default' as typeof variant[number],
      class: {
        base: 'text-(--animal-error-color) border-(--animal-error-color) hover:not-disabled:text-(--animal-error-color) hover:not-disabled:border-(--animal-error-color-hover) active:not-disabled:text-(--animal-error-color) active:not-disabled:border-(--animal-error-color-active)'
      }
    }, {
      color: 'danger' as typeof color[number],
      variant: 'dashed' as typeof variant[number],
      class: {
        base: 'text-(--animal-error-color) border-(--animal-error-color) hover:not-disabled:text-(--animal-error-color) hover:not-disabled:border-(--animal-error-color-hover) active:not-disabled:text-(--animal-error-color) active:not-disabled:border-(--animal-error-color-active)'
      }
    }, {
      color: 'danger' as typeof color[number],
      variant: 'text' as typeof variant[number],
      class: {
        base: 'text-white hover:not-disabled:text-white active:not-disabled:text-white'
      }
    }, {
      color: 'ghost' as typeof color[number],
      variant: 'primary' as typeof variant[number],
      class: {
        base: 'text-(--animal-primary-color) bg-transparent shadow-none hover:not-disabled:text-(--animal-primary-color-hover) hover:not-disabled:border-(--animal-primary-color-hover) hover:not-disabled:bg-[#19c8b914]'
      }
    }
  ],
  defaultVariants: {
    variant: 'primary' as typeof variant[number],
    size: 'md' as typeof size[number],
    color: 'primary' as typeof color[number]
  },
}
