<template>
  <div class="stages-wrapper">
    <carousel :responsive="responsive" class="mt-10 stages-carousel">
      <div v-for="stage in stages" :key="stage.index" class="stage">
        <h3 v-html="stage.title" class="mb-5"></h3>
        <p>{{ stage.description }}</p>
      </div>
    </carousel>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";

export default {
  name: "Stages",
  components: { carousel },
  data() {
    return {
      responsive: {
        0: {
          items: 1,
          nav: false,
          dots: false,
          touchDrag: false,
          mouseDrag: false,
        },
        600: {
          items: 2,
          nav: false,
          center: false,
          loop: true,
          dots: false,
          touchDrag: true,
          mouseDrag: true,
        },
        1000: {
          items: 3,
          nav: false,
          center: false,
          loop: true,
          dots: false,
          touchDrag: true,
          mouseDrag: true,
        },
        mobile: null,
        windowWidth: null,
      },
      stages: [
        {
          index: "I",
          title: "Stage I: <br/> Creation of Website",
          description:
            "The first stage will focus on designing and establishing the official website for Privesecure.",
        },
        {
          index: "II",
          title: "Stage II: <br/> Whitepaper release.",
          description:
            "Stage 2’s primary goal will be to release and publish project documentation. On this page, you'll find a complete breakdown of the project.",
        },
        {
          index: "III",
          title: "Stage III: <br/> Private Sale",
          description:
            "Only a small number of investors and other interested parties are allowed to participate in the initiative at this stage.",
        },
        {
          index: "IV",
          title: "Stage IV: <br/> Public Sale",
          description: "Access to the purchase of the Privesecure token.",
        },
        {
          index: "V",
          title: "Stage V: <br/> Exchange Listing",
          description:
            "The native tokens will be listed on major centralized and decentralized exchanges. ",
        },
        {
          index: "9",
          title: "Stage 9: <br/> Public Relations and Marketing",
          description:
            "The procedure will be advertised extensively in order to promote awareness. We plan to use a range of marketing methods, including the help of renowned cryptocurrency influencers.",
        },
        {
          index: "10",
          title: "Stage 10: <br/> Launch of the Privesecure",
          description: "",
        },
      ],
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  methods: {
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth >= 768) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      return;
    },
  },
};
</script>

<style>
.stages-carousel {
  position: relative;
  padding-top: 2rem;
  margin-top: 6rem;
}

.stages-carousel::before {
  content: "";
  position: absolute;
  top: -2rem;
  border-radius: 0.8rem;
  left: 4vw;
  background: #1e1c25;
  min-height: 300px;
  width: 80vw;
}

.owl-item > div {
  cursor: grab;
  cursor: -moz-grab;
  cursor: -webkit-grab;
  margin-right: 4%;
  margin-bottom: 3rem;
  transition: margin 0.4s ease;
}

.owl-item > div:active {
  cursor: grabbing;
  cursor: -moz-grabbing;
  cursor: -webkit-grabbing;
}
.owl-item.center > div {
  cursor: auto;
  margin-right: 4%;
  margin-bottom: 0;
  /*  margin: 0; */
}
.owl-item:not(.center) > div:hover {
  opacity: 0.9;
}

.stage h3 {
  line-height: 1.5;
}

.stage {
  padding: 4rem 2rem;
  border-radius: 0.4rem;
  background: linear-gradient(146.87deg, #5f36ff 3.58%, #08ff42 88.73%);
  border: 1px solid #08ff42;
  box-shadow: 40px 25px 100px rgba(0, 99, 23, 0.5);
  cursor: grab;
  cursor: -moz-grab;
  cursor: -webkit-grab;
}

.stage:active {
  cursor: grabbing;
  cursor: -moz-grabbing;
  cursor: -webkit-grabbing;
}

.owl-carousel .owl-item {
  float: left;
}

@media (max-width: 600px) {
  .owl-carousel .owl-item {
    float: none;
  }

  .owl-item > div {
    margin-right: 4%;
    margin-bottom: 1rem;
  }

  .stages-carousel {
    position: static;
    margin-top: 1rem;
  }

  .stages-carousel::before {
    background: none;
  }
}
</style>
