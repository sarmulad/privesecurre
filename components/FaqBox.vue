<template>
  <div class="question-wrapper py-8 md:py-6 px-5 my-4" :class="{active : showAnswer}">
    <div class="question">
      <h2 class="text-lg">
        {{ faq.question }}
        <button
          @click="showAnswer = !showAnswer"
          :class="{ rotate: showAnswer }"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.29289 5.29289C8.68342 4.90237 9.31658 4.90237 9.70711 5.29289L15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L9.70711 18.7071C9.31658 19.0976 8.68342 19.0976 8.29289 18.7071C7.90237 18.3166 7.90237 17.6834 8.29289 17.2929L13.5858 12L8.29289 6.70711C7.90237 6.31658 7.90237 5.68342 8.29289 5.29289Z"
              fill="white"
            />
          </svg>
        </button>
      </h2>
    </div>
    <div
      class="answer pt-3"
      :class="{ active: showAnswer }"
      v-show="showAnswer"
    >
      <p>{{ faq.answer }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "FaqBox",
  props: ["faq"],
  data() {
    return {
      showAnswer: false,
    };
  },
};
</script>

<style scoped>
.question-wrapper {
  background: #1e1c25;

  border-radius: 0.4rem;
  position: relative;
}

.question-wrapper:hover{
  background: #302E36;
}

.question-wrapper::before {
  content: "";
  position: absolute;
  padding: 2px;
  border-radius: inherit;
  z-index: -1;
  top: -1px;
  bottom: -1px;
  right: -1px;
  left: -1px;
  background:#1e1c25; ;
  background: linear-gradient(146.87deg, #1e1c25 3.58%, #1e1c25 88.73%);
  transition: 0.5s ease-in;
 
}

.question-wrapper.active::before{
 background: linear-gradient(146.87deg, #5f36ff 3.58%, #08ff42 88.73%);
}

.question h2 {
  display: flex;
  justify-content: space-between;
}

.answer {
  color: #c0bfc2;
  animation: show 0.5s ease;
}

/* .answer.active {
  opacity: 1;
} */

button {
  background: none;
  border: none;
  outline: none;
  transition: transform 0.3s ease-in;
}

button.rotate {
  transform: rotate(90deg);
}

button:active,
button:focus {
  border: none;
  outline: none;
}

@media (max-width: 768px) {
  h2 {
    line-height: 1.5;
  }
}

@keyframes show {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
