<template>
  <div class="home">
    <SlidesViewer src="https://cors-anywhere.herokuapp.com/https://raw.githubusercontent.com/r08521610/rainforest-slides/develop/README.md?token=ANIZMAV7WC6EDTGDYQMT5ES73COII" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SlidesViewer from "@/components/reveal/SlidesViewer.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
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
