import type {
  ButtonHTMLAttributes as VueButtonHTMLAttributes,
  InputHTMLAttributes as VueInputHTMLAttributes
} from 'vue'

export type ButtonHTMLAttributes = Pick<
  VueButtonHTMLAttributes,
  | 'autofocus'
  | 'disabled'
  | 'form'
  | 'formaction'
  | 'formenctype'
  | 'formmethod'
  | 'formnovalidate'
  | 'formtarget'
  | 'name'
  | 'type'
>

// Note: 'autocomplete' is defined with simpler types to avoid TS2590 complexity issues with Nuxt 4.3+
export type InputHTMLAttributes = Pick<
  VueInputHTMLAttributes,
  | 'autofocus'
  | 'disabled'
  | 'enterKeyHint'
  | 'form'
  | 'formaction'
  | 'formenctype'
  | 'formmethod'
  | 'formnovalidate'
  | 'formtarget'
  | 'list'
  | 'max'
  | 'maxlength'
  | 'min'
  | 'minlength'
  | 'name'
  | 'pattern'
  | 'placeholder'
  | 'readonly'
  | 'required'
  | 'size'
  | 'step'
  | 'type'
> & {
  autocomplete?: 'on' | 'off' | (string & {})
}
