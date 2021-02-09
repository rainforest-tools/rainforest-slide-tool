import { IThemeConfigure } from '@/types/config/theme'
import { ref, computed, readonly, onMounted } from 'vue'
import defaultTheme from '@/assets/theme.json'

export const symbol = Symbol()

interface IUseTheme {
  isDark: boolean
  setIsDark: (value: boolean) => {},
  themes: Readonly<IThemeConfigure[]>,
  textStyle: () => string
}

export type UseThemeType = Readonly<IUseTheme>

export const useTheme: () => UseThemeType = () => {
  const isDark = ref<boolean>(false)
  const current = ref<number>(0)
  const themes = ref<IThemeConfigure[]>([defaultTheme as IThemeConfigure])
  const setIsDark = (value: boolean) => isDark.value = value

  const fetchThemesFromAssets = async () => {}
  onMounted(fetchThemesFromAssets)

  const textStyle = () => {
    if (isDark.value) {
      return themes.value[current.value].dark?.colorTheme?.textColor?.text || 'text-white'
    } else {
      console.log(themes.value[current.value].light?.colorTheme?.textColor?.text)
      return themes.value[current.value].light?.colorTheme?.textColor?.text || 'text-black'
    }
  }

  return readonly({
    isDark,
    setIsDark,
    themes,
    textStyle
  })
}

