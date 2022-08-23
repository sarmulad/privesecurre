<template>
  <section class="presale py-32">
    <img src="../assets/img/Bubble2.svg" alt="bubble" class="bubble1" />
    <img src="../assets/img/Bubble2.svg" alt="bubble" class="bubble2" />
    <div class="container mx-auto my-10">
      <h2 class="text-gradient">
        Don’t be caught off <br />
        guard with your personal information, join Privesecure Protocol now.
      </h2>
      <a
        href="/buy"
        class="btn my-10"
        >Buy Presale</a
      >
      <div class="brands mt-6 md:mt-16">
        <img
          src="../assets/img/Coingecko.svg"
          alt="Coin gecko"
          class="hidden md:block"
        />
        <img
          src="../assets/img/CoinmarketCap.svg"
          alt="Coin market cap"
          class="hidden md:block"
        />
        <img
          src="../assets/img/PancakeSwap.svg"
          alt="Pancake swap"
          class="hidden md:block"
        />
        <img
          src="../assets/img/Coingecko-m.svg"
          alt="Coin gecko"
          class="block md:hidden"
        />
        <img
          src="../assets/img/CoinmarketCap-m.svg"
          alt="Coin market cap"
          class="block md:hidden"
        />
        <img
          src="../assets/img/PancakeSwap-m.svg"
          alt="Pancake swap"
          class="block md:hidden"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "EnterPresale",
};
</script>

<style scoped>
.presale {
  background: url("../assets/img/presale-bg.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.presale .container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.presale h2 {
  width: 55%;
  font-size: calc(2.1vw + 12px);
  line-height: 1.2;
}

.presale .brands {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: auto auto auto;
  align-items: center;
  justify-content: space-around;
}

.presale .brands img {
  transform: scale(0.85);
  filter: hue-rotate(50deg);
}

.presale .brands img:hover {
  filter: hue-rotate(50deg);
}

.presale {
  position: relative;
}

.presale .bubble1 {
  position: absolute;
  top: 25%;
  left: 5%;

  animation: move 0.8s linear infinite alternate;
}

.presale .bubble2 {
  position: absolute;
  bottom: 30%;
  right: 5%;
  animation: move 0.8s linear infinite alternate;
}

@media (max-width: 992px) {
  .presale h2 {
    width: 85%;
  }
}

@media (max-width: 768px) {
  .presale h2 {
    width: 100%;
    font-size: 1.5rem;
  }

  .presale {
    background: url("../assets/img/presale-bg.svg");
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
  }

  .presale .bubble2,
  .presale .bubble1 {
    width: 2rem;
  }

  .presale .bubble2 {
    top: 85%;
  }
}
</style>
