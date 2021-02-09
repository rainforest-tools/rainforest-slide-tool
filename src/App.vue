<template>
  <div class="h-full mx-auto" :class="theme.isDark ? 'dark' : ''">
    <div class="h-full bg-white dark:bg-black" :class="theme.textStyle()">
      <Appbar>
        <input type="checkbox" :checked='theme.isDark' @change='toggleDarkTheme'>
      </Appbar>
      <router-view />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, provide } from 'vue'
import { useTheme, symbol, UseThemeType } from '@/hooks/useTheme'
import Appbar from '@/components/AppBar.vue'
export default defineComponent({
  setup() {
    const theme = useTheme()
    provide<UseThemeType>(symbol, theme)
    return { theme }
  },
  methods: {
    toggleDarkTheme(event: any) {
      this.theme.setIsDark(event.target.checked)
    }
  },
  components: {
    Appbar
  }
})
</script>
