<template lang="pug">
.reveal
  .slides
    section Single Horizontal Slide
    section
      section Vertical Slide 1
      section {{ markdown }}
    section(v-html="markdown")
</template>
<script>
// Vuex
import { mapState, mapActions } from 'vuex';
import { RootMutation } from '@/store';
// Utils
import Reveal from 'reveal.js/js';
import RevealMarkdown from 'reveal.js/plugin/markdown/markdown';
import marked from 'marked';
import md from 'raw-loader!@/assets/research/README.md';
export default {
  name: "slides viewer",
  props: {
    src: String,
  },
  computed: {
    ...mapState({
      markdown: state => marked(state.markdown)
    })
  },
  created() {
    this.fetchMarkdown(this.src);
  },
  watch: {
    markdown(val) {
      console.log(val);
      if (val)
        Reveal.initialize({
          plugins: [
            RevealMarkdown,
          ]
        }).then(() => console.log("Reveal Initialized"));
    }
  },
  methods: {
    ...mapActions(['fetchMarkdown'])
  }
};
</script>
<style lang="scss" src="reveal.js/css/reveal.scss"></style>