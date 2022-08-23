<template>
  <main>
    <section class="tokenomics px-10 md:px-16">
      <div class="container mx-auto py-16">
        <h2 class="text-gradient md:text-4xl text-xl">Tokenomics</h2>
        <p class="md:max-w-xs-2 md:my-6 mb-6 mt-3">
          The total supply of the Privesecure Tokens is 40M as it is distributed
          as follows:
        </p>

        <div class="charts my-10">
          <div>
            <img src="../assets/img/saleChart.svg" alt="" />
          </div>
          <div>
            <img src="../assets/img/ProceedChart.svg" alt="" />
          </div>
        </div>
      </div>
    </section>

    <div class="tables pb-16">
      <section class="md:block hidden">
        <div class="container mx-auto my-10">
          <h3 class="text-center">Token Details</h3>
          <div class="table-border">
            <table class="rwd-table">
              <tr>
                <th>Total Supply</th>
                <th>Ticker</th>
                <th>Presale</th>
                <th>Launch Date</th>
                <th>Start Price</th>
              </tr>
              <tr>
                <td data-th="Total Supply">40 Million</td>
                <td data-th="Ticker">PRSC</td>
                <td data-th="Presale">4th August - 8th December 2022</td>
                <td data-th="Launch Date">8th December 2022</td>
                <td data-th="Start Price">$0.000034</td>
              </tr>
            </table>
          </div>
        </div>
      </section>

      <img
        src="../assets/img/Bubble2.svg"
        alt="bubble"
        class="bubble1 hidden md:block"
      />
      <img
        src="../assets/img/Bubble2.svg"
        alt="bubble"
        class="bubble2 hidden md:block"
      />

      <section class="mt-32 md:block hidden">
        <div class="container mx-auto my-10">
          <h3 class="text-center">Presale Stage</h3>
          <div class="table-border">
            <table class="rwd-table">
              <tr>
                <th>Stages</th>
                <th>Date</th>
                <th>Number of Tokens</th>
                <th>Allocations</th>
              </tr>
              <tr>
                <td data-th="Stages">Stage 1</td>
                <td data-th="Date">{{ stages[0].date }}</td>
                <td data-th="Number of Tokens">
                  {{ stages[0].numberOfTokens }}
                </td>
                <td data-th="Allocations">{{ stages[0].allocations }}</td>
              </tr>
              <tr>
                <td data-th="Stages">Stage 2</td>
                <td data-th="Date">{{ stages[1].date }}</td>
                <td data-th="Number of Tokens">
                  {{ stages[1].numberOfTokens }}
                </td>
                <td data-th="Allocations">{{ stages[1].allocations }}</td>
              </tr>
              <tr>
                <td data-th="Stages">Stage 3</td>
                <td data-th="Date">{{ stages[2].date }}</td>
                <td data-th="Number of Tokens">
                  {{ stages[2].numberOfTokens }}
                </td>
                <td data-th="Allocations">{{ stages[2].allocations }}</td>
              </tr>
            </table>
          </div>
        </div>
      </section>

      <section class="md:hidden block">
        <div class="container mx-auto mb-32">
          <h3 class="text-center mb-3">Token Details</h3>
          <div class="table-border">
            <div class="table-m">
              <div class="row">
                <div>Total Supply</div>
                <div>70M Tokens</div>
              </div>

              <div class="row">
                <div>Ticker</div>
                <div>PRSC</div>
              </div>

              <div class="row">
                <div>Presale</div>
                <div>4th August - 8th December 2022</div>
              </div>

              <div class="row">
                <div>Launch Date</div>
                <div>8th December 2022</div>
              </div>

              <div class="row">
                <div>Start Price</div>
                <div>$0.000034</div>
              </div>
            </div>
          </div>
        </div>

        <div class="container mx-auto">
          <h3 class="text-center mb-3">Presale Stage</h3>
          <div class="table-border">
            <div class="table-m">
              <div class="head">Stage 1</div>
              <div class="row">
                <div>Date</div>
                <div>{{ stages[0].date }}</div>
              </div>

              <div class="row">
                <div>Number of Tokens</div>
                <div>{{ stages[0].numberOfTokens }}</div>
              </div>

              <div class="row">
                <div>Allocations</div>
                <div>7.5%</div>
              </div>

              <div class="row">
                <div>Bonus</div>
                <div>3%</div>
              </div>
            </div>
          </div>
        </div>
        <div class="container mx-auto">
          <div class="table-border">
            <div class="table-m">
              <div class="head">Stage 2</div>
              <div class="row">
                <div>Date</div>
                <div>{{ stages[1].date }}</div>
              </div>

              <div class="row">
                <div>Number of Tokens</div>
                <div>{{ stages[1].numberOfTokens }}</div>
              </div>

              <div class="row">
                <div>Allocations</div>
                <div>{{ stages[1].allocations }}</div>
              </div>

              <div class="row">
                <div>Bonus</div>
                <div>3%</div>
              </div>
            </div>
          </div>
        </div>
        <div class="container mx-auto">
          <div class="table-border">
            <div class="table-m">
              <div class="head">Stage 3</div>
              <div class="row">
                <div>Date</div>
                <div>{{ stages[2].date }}</div>
              </div>

              <div class="row">
                <div>Number of Tokens</div>
                <div>{{ stages[2].numberOfTokens }}</div>
              </div>

              <div class="row">
                <div>Allocations</div>
                <div>{{ stages[2].allocations }}</div>
              </div>

              <div class="row">
                <div>Bonus</div>
                <div>3%</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <section class="bonus-section">
      <div class="container mx-auto">
        <div class="bonus px-32 py-8">
          <p class="lg:text-2xl text-base">
            Register and purchase within 15 minutes and receive a 50% bonus!
          </p>
          <div class="gift-box">
            <img src="../assets/img/giftBox.svg" alt="Gift box" />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "tokenomics",
  data() {
    return {
      stages: [
        {
          stageNo: 1,
          numberOfTokens: "7.2 Million Tokens",
          date: "4th August to 22nd September",
          allocations: "18%",
        },
        {
          stageNo: 2,
          numberOfTokens: "3.0 Million Tokens",
          date: "22nd September to 27th October",
          allocations: "7.5%",
        },
        {
          stageNo: 1,
          numberOfTokens: "1.8 Million Tokens",
          date: "27th October to 8th December",
          allocations: "4.5%",
        },
      ],
    };
  },
  head() {
    return {
      title: "Tokenomics | PriveSecure",
    };
  },
};
</script>

<style>
.tokenomics h2,
.tokenomics p {
  text-align: center;
  margin-inline: auto;
}

.tokenomics .container {
  width: 100%;
}

.charts {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
}

.charts:last-of-type > div {
  display: flex;
  justify-content: flex-end;
}

.charts > div:last-of-type img {
  transform: scale(0.85);
}

.rwd-table {
  min-width: 300px;
  width: 100%;
  position: relative;
  border: none;
}

.tables {
  background: url("../assets/img/tokenomics-ball.svg"),
    url("../assets/img/Phone.svg");
  background-repeat: no-repeat, no-repeat;
  background-size: auto, 20%;
  background-position-x: 100%, 0%;
  background-position-y: 100%, 100%;
  position: relative;
}

.tables .bubble1 {
  position: absolute;
  top: 35%;
  left: 7%;

  animation: move 0.8s linear infinite alternate;
}

.tables .bubble2 {
  position: absolute;
  bottom: 53%;
  right: 4%;
  animation: move 0.8s linear infinite alternate;
}

.rwd-table tr {
  border-top: 1px solid #1e1c25;
  border-bottom: 1px solid #1e1c25;
}
.rwd-table th {
  display: none;
  border-top: none;
}
.rwd-table td {
  display: block;
}
.rwd-table td:first-child {
  padding-top: 0.8em;
}
.rwd-table td:last-child {
  padding-bottom: 0.8em;
  border-bottom: none;
}
.rwd-table td:before {
  content: attr(data-th);
  font-weight: bold;
  width: 6.5em;
  display: inline-block;
}

.table-m {
  background: #3c3b42;
  font-weight: 700;
  border-radius: inherit;
  line-height: 1.5;
}

.table-m .row {
  display: grid;
  grid-template-columns: 40% 60%;

  text-align: center;
}

.table-m .head {
  padding: 2rem 0.5rem;
  text-align: center;
  margin-inline: auto;
}

.table-m .row div {
  border-top: 1px solid #1e1c25;
  border-bottom: 1px solid #1e1c25;
  padding: 2rem 1rem;
  line-height: 1.5;
}

.table-m .row div:first-of-type {
  background: #302e36;
  color: #c0bfc2;
  border-right: 1px solid #1e1c25;
  font-size: 0.85rem;
  font-weight: 400;
}
.table-m .row div:last-of-type {
  padding-right: 2.5rem;
  padding-left: 2.5rem;
}

@media (min-width: 760px) {
  .rwd-table td:before {
    display: none;
  }
}

.rwd-table th {
  text-align: center;
  background: #302e36;
}

.rwd-table td {
  text-align: center;
}

@media (min-width: 760px) {
  .rwd-table th,
  .rwd-table td {
    display: table-cell;
    padding: 1rem 0.5rem;
    font-weight: 700;
  }

  .rwd-table th {
    border-right: 2px solid #1e1c25;
  }
  .rwd-table th:first-child,
  .rwd-table td:first-child {
    padding-left: 0;
  }
  .rwd-table th:last-child,
  .rwd-table td:last-child {
    padding-right: 0;
  }
}

.rwd-table {
  background: #3c3b42;
  color: #fff;
  border-radius: inherit;
  overflow: hidden;
  position: relative;
  border: none;
}

.table-border {
  padding: 1.5px;
  border-radius: 0.8rem;
  margin-top: 2rem;
  background: linear-gradient(146.87deg, #5f36ff 3.58%, #08ff42 88.73%);
}

.rwd-table th {
  background: #302e36;
}
.rwd-table th,
.rwd-table td {
  margin: 1em 1.5em;
}

.bonus {
  background: linear-gradient(146.87deg, #5f36ff 3.58%, #08ff42 88.73%);
  border-radius: 0 5rem 5rem 0;
  font-weight: 700;
  text-transform: uppercase;
  width: 70%;
  margin: 0 auto;
  line-height: 1.5;
  position: relative;
}

.bonus .gift-box {
  position: absolute;
  left: -6rem;
  top: -4rem;
  width: 12rem;
}

/* @media (min-width: 480px) {
  .rwd-table th,
  .rwd-table td {
    padding: 1em !important;
  }
} */

@media (max-width: 768px) {
  .charts {
    grid-template-columns: auto;
    grid-gap: 0.5rem;
  }

  .rwd-table {
    background: #302e36;
  }

  .rwd-table::before {
    background: none;
  }

  .rwd-table th,
  .rwd-table td {
    text-align: left;
  }

  .rwd-table th,
  .rwd-table td {
    padding: 2em 1.5em;
    margin: 0;
  }

  .rwd-table td:first-child {
    padding-top: 2em;
  }

  .rwd-table td:last-child {
    padding-bottom: 2em;
    border-bottom: none;
  }

  .rwd-table tr {
    border: 1px solid #08ff42;
    border-radius: 0.8rem;
    background-image: linear-gradient(to right, transparent 8em, #3c3b42 0%);
  }

  .rwd-table td:before {
    margin-right: 1rem;
  }

  .bonus-section {
    overflow: visible;
  }

  .bonus-section .container {
    width: 100%;
    margin-top: 3rem;
  }

  .bonus {
    width: 100%;
    border-radius: 0;
    padding: 1.5rem 3rem;
    text-transform: capitalize;
    text-align: center;
    background: linear-gradient(146.87deg, #5f36ff 3.58%, #08ff42 88.73%);
  }

  .bonus .gift-box {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
  }
}
</style>
