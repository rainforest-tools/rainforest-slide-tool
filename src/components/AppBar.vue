<template>
  <div class="flex flex-row h-10 px-3 py-2">
    <menuIcon class="h-full" />
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import menuIcon from '@/assets/icons/menu.svg'

export default defineComponent({
  name: 'app-bar',
  props: {

  },
  components: {
    menuIcon
  }
})
</script>