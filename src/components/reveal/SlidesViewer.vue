<template lang="pug">
Suspense
  template(#default)
    Slide(:src="$props.src")
  template(#fallback)
    .loading Loading...
</template>
<script>
import { defineAsyncComponent, defineComponent } from "vue";
// Vuex
import { mapState, mapActions } from "vuex";
// Utils
// TODO: define .d.ts for the following modules
import Reveal from "reveal.js/js";
import RevealMarkdown from "reveal.js/plugin/markdown/markdown";
import marked from "marked";

const Slide = defineComponent({
  props: {
    src: String
  },
  computed: {
    ...mapState({
      markdown: (state) => marked(state.markdown),
    }),
  },
  created() {
    this.fetchMarkdown(this.src);
  },
  mounted() {
    Reveal.initialize({
      plugins: [RevealMarkdown],
    }).then(() => console.log("Reveal Initialized"));
  },
  methods: {
    ...mapActions(["fetchMarkdown"]),
  },
  render() {
    return (
      <div class="reveal">
        <div class="slides">
          <section>Single Horizontal Slide</section>
          <section v-html={this.markdown} />
        </div>
      </div>
    );
  }
});

const AsyncSlide = defineAsyncComponent(() => new Promise((resolve, _) => Slide));

export default defineComponent({
  props: {
    src: String,
  },
  components: {
    Slide
  },
});
</script>
<style lang="scss" src="reveal.js/css/reveal.scss"></style>
<style lang="scss" scoped>
.viewer {
  width: 100%;
  height: 100%;
}
</style>
