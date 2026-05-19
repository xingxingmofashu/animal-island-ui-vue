import type { ButtonHTMLAttributes as VueButtonHTMLAttributes } from "vue"

export type ButtonHTMLAttributes = Pick<
  VueButtonHTMLAttributes,
  | "autofocus"
  | "disabled"
  | "form"
  | "formaction"
  | "formenctype"
  | "formmethod"
  | "formnovalidate"
  | "formtarget"
  | "name"
  | "type"
>
