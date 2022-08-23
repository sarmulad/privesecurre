<template>
  <main class="roadmap-wrapper">
    <section class="roadmap">
       <img src="../assets/img/Bubble2.svg" alt="bubble" class="bubble1">
          <img src="../assets/img/Bubble2.svg" alt="bubble" class="bubble2">

      <div class="container mx-auto">
        <h2 class="text-gradient mb-3 md:text-4xl text-xl">Roadmap</h2>
        <p class="md:max-w-xs-2">
          Scaling up our services is a priority for us. This has led to a plan
          to keep us on our toes.
        </p>
        <div>
          <Stages />
        </div>
      </div>
    </section>

    <section class="form-wrapper md:mt-32 pt-24 md:mb-16">
      <div class="container mx-auto">

      </div>
    </section>
  </main>
</template>

<script>
import Stages from "~/components/Stages.vue";

export default {
  name: "roadmap",
  components: { Stages },
  head() {
    return {
      title: "RoadMap | PriveSecure",
    };
  },
};
</script>

<style scoped>
.roadmap-wrapper {
  background: url("../assets/img/roadmap.bg.svg");
  background-repeat: no-repeat;
  background-position-y: 60%;
  background-size: 60%;
}
.roadmap .container {
  width: 92%;
  margin-left: 8%;
  margin-top: 3rem;
}

.roadmap{
  position: relative;
} 

.roadmap .bubble1{
  position: absolute;
  top: 15%;
  left:5%;
  
  animation: move 0.8s linear infinite alternate;
}

.roadmap .bubble2{
  position: absolute;
  top: 40%;
  right:10%;
  z-index: 8;
  animation: move 0.8s linear infinite alternate;
}

.roadmap h2,
.roadmap .container > p {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  color: #b1b0b3;
}

.form-wrapper {
  background-image: url("../assets/img/form-bg.svg");
  background-position-x: 95%;
  background-repeat: no-repeat;
}

.form {
  background: #302e36;
  border-radius: 0.8rem;
  padding: 4rem 2rem;
  margin: 2rem auto;
  position: relative;
}

.form::before {
  content: "";
  position: absolute;
  padding: 2px;
  border-radius: inherit;
  z-index: -1;
  top: -1px;
  bottom: -1px;
  right: -1px;
  left: -1px;
  background: linear-gradient(146.87deg, #5f36ff 3.58%, #08ff42 88.73%);
}

.form h3,
.form p {
  text-align: center;
  margin-inline: auto;
}

@media (max-width: 768px) {
  .roadmap .container {
    width: 85%;
    margin: 0 auto;
    margin-top: 3rem;
  }

  .roadmap-wrapper .input-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
