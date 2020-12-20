<template lang="pug">
.home
  SlidesViewer(:src="exampleSlideUrl")
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import SlidesViewer from "@/components/reveal/SlidesViewer.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  setup() {
    const exampleSlideUrl = ref<string>(process.env.VUE_APP_EXAMPLE_MARKDOWN_URL ?? '')
    return {
      exampleSlideUrl
    }
  },
  components: {
    SlidesViewer
  }
});
</script>
<style lang="scss" scoped>
.home {
  height: 100%;
}
</style>
