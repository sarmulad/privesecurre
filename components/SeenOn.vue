<template>
  <section class="seen-on md:mb-20 mt-16">
    <div class="container mx-auto">
      <h3 class="text-xl">As seen on</h3>
      <div class="brands md:mt-16">
        <div>
          <img src="../assets/img/alphr.svg" alt="alphr" />
          <img src="../assets/img/coincheckup.svg" alt="Coin checkup" />
          <img
            src="../assets/img/businessStandard.svg"
            alt="business Standard"
            class="hidden md:block"
          />
          <img
            src="../assets/img/businessTimes.svg"
            alt="business Times"
            class="hidden md:block"
          />
        </div>
        <div>
          <img src="../assets/img/beInCrypto.svg" alt="be in Crypto" />
          <img src="../assets/img/coinMarketBag.svg" alt="Coin Market Bag" />
          <img
            src="../assets/img/techTimes.svg"
            alt="tech times"
            class="hidden md:block"
          />
          <img src="../assets/img/benziga.svg" alt="Benziga" />
        </div>
        <div>
          <img src="../assets/img/coincodex.svg" alt="coin codex" />
          <img src="../assets/img/economicTimes.svg" alt="economic times" />
          <img src="../assets/img/cryptoNews.svg" alt="crypto News" />
          <img
            src="../assets/img/insiderMonkey.svg"
            alt="insider Monkey"
            class="hidden md:block"
          />
        </div>
        <div>
          <img src="../assets/img/newsBTC.svg" alt="newsBTC" />
          <img src="../assets/img/bitCoinNews.svg" alt="bitCoinNews" />
          <img src="../assets/img/jerusalemPost.svg" alt="jerusalemPost" />
          <img
            src="../assets/img/dailyCoin.svg"
            alt="dailyCoin"
            class="hidden md:block"
          />
        </div>

        <div>
          <img src="../assets/img/coinTelegraph.svg" alt="coinTelegraph" />
          <img src="../assets/img/theGuardian.svg" alt="theGuardian" />
          <img src="../assets/img/analyticInsight.svg" alt="Analytic Insight" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SeenOn",
};
</script>

<style scoped>
.seen-on h3 {
  margin: 0 auto;
  color: #757b82;
  text-align: center;
}
.brands {
  margin-bottom: 6rem;
}

.brands {
  /*   display: grid;
  grid-gap: 1.5rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  place-content: center;
  align-items: center;
  justify-content: center; */
  display: block;
}

.brands div {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 2rem;
}

@media (max-width: 768px) {
  .brands div {
    flex-wrap: wrap;
    margin-top: 0rem;
  }
  .brands div img {
    flex: 1 0 35%;
    max-width: 7rem;
    margin-top: 1.5rem;
    margin-inline: 0.5rem;
  }

  .brands {
    margin-bottom: 0rem;
  }

  /* .brands div img:last-of-type {
    display: none;
  } */
}
</style>
