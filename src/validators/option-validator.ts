// bg-red-950 border-red-950
// bg-orange-900 border-orange-900
// bg-yellow-900 border-yellow-900
// bg-lime-900 border-lime-900
// bg-green-900 border-green-900
// bg-cyan-900 border-cyan-900
// bg-sky-900 border-sky-900
// bg-blue-900 border-blue-900
// bg-indigo-900 border-indigo-900
// bg-violet-900 border-violet-900
// bg-purple-900 border-purple-900
// bg-fuchsia-900 border-fuchsia-900
// bg-pink-900 border-pink-900
// bg-zinc-900 border-zinc-900
// bg-rose-900 border-rose-900

import { PRODUCT_PRICES } from '@/config/products'

export const COLORS = [
    { label: 'Black', value: 'black', tw: 'zinc-900' },
    { label: 'Dark Red', value: 'dark_red', tw: 'red-950' },
    // { label: 'Dark Orange', value: 'dark_orange', tw: 'orange-900' },
    // { label: 'Dark Yellow', value: 'dark_yellow', tw: 'yellow-900' },
    // { label: 'Dark lime', value: 'dark_lime', tw: 'lime-900' },
    { label: 'Dark Green', value: 'dark_green', tw: 'green-900' },
    // { label: 'Dark Cyan', value: 'dark_cyan', tw: 'cyan-900' },
    // { label: 'Dark Sky', value: 'dark_sky', tw: 'sky-900' },
    { label: 'Dark Blue', value: 'dark_blue', tw: 'blue-900' },
    // { label: 'Dark Indigo', value: 'dark_indigo', tw: 'indigo-900' },
    // { label: 'Dark Violet', value: 'dark_violet', tw: 'violet-900' },
    { label: 'Dark Purple', value: 'dark_purple', tw: 'purple-900' },
    // { label: 'Dark Fuchsia', value: 'dark_fuchsia', tw: 'fuchsia-900' },
    { label: 'Dark Pink', value: 'dark_pink', tw: 'pink-900' },
    // { label: 'Dark Rose', value: 'rose', tw: 'rose-900' },
] as const

export const MODELS = {
    name: 'models',
    options: [
        {
            label: 'iPhone X',
            value: 'iphonex',
            src: "/phone-template.png"
        },
        {
            label: 'iPhone 11',
            value: 'iphone11',
            src: "/phone11-template.png"
        },
        {
            label: 'iPhone 12',
            value: 'iphone12',
            src: "/phone-template.png"
        },
        {
            label: 'iPhone 13',
            value: 'iphone13',
            src: "/phone-template.png"
        },
        {
            label: 'iPhone 14',
            value: 'iphone14',
            src: "/phone-template.png"
        },
        {
            label: 'iPhone 15',
            value: 'iphone15',
            src: "/phone-template.png"
        },
    ],
} as const

export const MATERIALS = {
  name: 'material',
  options: [
    {
      label: 'Silicone',
      value: 'silicone',
      description: undefined,
      price: PRODUCT_PRICES.material.silicone,
    },
    {
      label: 'Soft Polycarbonate',
      value: 'polycarbonate',
      description: 'Scratch-resistant coating',
      price: PRODUCT_PRICES.material.polycarbonate,
    },
  ],
} as const

export const FINISHES = {
  name: 'finish',
  options: [
    {
      label: 'Smooth Finish',
      value: 'smooth',
      description: undefined,
      price: PRODUCT_PRICES.finish.smooth,
    },
    {
      label: 'Textured Finish',
      value: 'textured',
      description: 'Soft grippy texture',
      price: PRODUCT_PRICES.finish.textured,
    },
  ],
} as const
