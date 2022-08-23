<template>
  <main>
    <section class="about">
      <div class="container mx-auto">
        <div class="about-box">
          <div class="box-inner">
            <h2 class="md:mb-6 mb-8">About Privesecure</h2>
            <p>
              Privesecure is an open-source cloud storage platform for
              cryptocurrency users. Privesecure aspires to foster a robust
              security culture that enables everyone to store and access data on
              the internet securely. Economic incentives built into the system
              will guarantee that files are saved and retrieved successfully and
              continuously for the duration specified by the user.
            </p>
            <a class="btn mt-6" href="/buy"
              >Buy Presale</a
            >
          </div>
        </div>
      </div>
    </section>

    <SeenOn />
  </main>
</template>

<script>
import SeenOn from "../components/SeenOn.vue";
export default {
  components: { SeenOn },
  head() {
    return {
      title: "About | PriveSecure",
    };
  },
};
</script>

<style>
.about {
  background: url("../assets/img/about.png"), url("../assets/img/Bubble.svg");
  background-repeat: no-repeat, no-repeat;
  background-position: center, 5% 53%;
  background-size: cover, auto;
  margin-bottom: 6rem;
}
.about-box {
  width: 70%;
  background: linear-gradient(146.87deg, #5f36ff 3.58%, #08ff42 88.73%);
  border-radius: 0.6rem;
  padding: 4rem 4.5rem;
  margin: 3rem auto;
}

.box-inner {
  background: #1e1c25;
  border-radius: inherit;
  padding: 5rem 4.5rem;
  text-align: center;
  
}

@media (max-width: 992px) {
  .about-box {
    width: 100%;
  }

  .box-inner {
    padding: 4rem 2rem;
  }
}

@media (max-width: 768px) {
  .about {
    background: url("../assets/img/about-blur.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
  }
  .about-box {
    padding: 2rem 1rem;
  }

  .about-box h2 {
    font-size: 1rem;
  }

  .box-inner {
    padding: 4rem 1rem;
  }
}
</style>
