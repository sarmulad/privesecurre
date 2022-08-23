<template>
  <section class="faq mt-20 md:mb-24">
    <div class="container mx-auto">
      <h2 class="text-gradient-2 md:text-3xl mb-10 md:mb-20">
        Frequently Asked Questions
      </h2>
      <div class="faq-container" v-for="faq in faqs" :key="faq.id">
        <FaqBox :faq="faq" />
      </div>
    </div>
  </section>
</template>

<script>
import FaqBox from "../components/FaqBox.vue";
export default {
  components: { FaqBox },
  head() {
    return {
      title: "FAQ | PriveSecure",
    };
  },
  data() {
    return {
      faqs: [
        {
          id: 1,
          question: "What is Privesecure?",
          answer:
            "Privesecure is an open-source cloud storage platform for cryptocurrency users. ",
        },
        {
          id: 2,
          question:
            "What's the difference between open-source software and other types of software?",
          answer:
            'Certain software contains source code that can only be modified by the individual, team, or organization who generated it — and retains exclusive control over it. This type of software is referred to as "proprietary" or "closed source." Open-source software is distinct from proprietary software. Its creators make the source code open to anybody who wishes to examine, copy, learn from, modify, or distribute it.',
        },
        {
          id: 3,
          question: "Is Privesecure just valuable to programmers?",
          answer:
            "No, both programmers and non-programmers gain from open source technology and thinking. ",
        },
        {
          id: 4,
          question: "Who is Privesecure for?",
          answer:
            "It was designed for cryptocurrency users to securely store and access data on the internet.  ",
        },
      ],
    };
  },
};
</script>

<style scoped>
.faq h2 {
  text-align: center;
  margin: 0 auto;
  align-self: center;
  margin-bottom: 3rem;
}

@media (max-width: 768px) {
  .faq h2 {
    font-size: 1.6rem;
    line-height: 1.5;
  }
}
</style>
