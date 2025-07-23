import Arrow from '@/assets/Icons/IconArrowDown.vue'
import Brand from '@/assets/Icons/IconBrand.vue'
import Cart from '@/assets/Icons/IconBrand.vue'
import FaceBook from '@/assets/Icons/IconFaceBook.vue'
import Gift from '@/assets/Icons/IconGift.vue'
import Help from '@/assets/Icons/IconHelp.vue'
import Insta from '@/assets/Icons/IconInsta.vue'
import Pay from '@/assets/Icons/IconPay.vue'
import Sell from '@/assets/Icons/IconSell.vue'
import Twitter from '@/assets/Icons/IconTwitter.vue'
import Youtube from '@/assets/Icons/IconYoutube.vue'

const iconMap = {
  arrow: Arrow,
  brand: Brand,
  cart: Cart,
  facebook: FaceBook,
  gift: Gift,
  help: Help,
  insta: Insta,
  pay: Pay,
  sell: Sell,
  twitter: Twitter,
  youtube: Youtube,
}

export type IconName = keyof typeof iconMap

export default iconMap
