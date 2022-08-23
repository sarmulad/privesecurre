<template>
  <div>
    <div class="localeContainer">
      <button
        type="button"
        aria-haspopup="listbox"
        :aria-expanded="isOptionsOpen"
        class="localeSwitcher"
        :class="isOptionsOpen ? expanded : ''"
        @Click="toggleOptions"
      >
        <span class="flag">
          <img
            :src="LanguageList[selectedOption].flag"
            :alt="LanguageList[selectedOption].text"
          />
        </span>
        {{ LanguageList[selectedOption].text }}
      </button>
      <ul
        role="listbox"
        class="options"
        :class="isOptionOpen ? show : ''"
        aria-activedescendant="{LanguageList[selectedOption]}"
        :tabIndex="-1"
        @KeyDown="handleListKeyDown"
      >
        <li
          id="{option.code}"
          :key="language.index"
          v-for="language in LanguageList"
          role="option"
          :aria-selected="selectedOption == index"
          :tabIndex="0"
          @KeyDown="handleKeyDown(index)"
          @Click="
            () => {
              setSelectedThenCloseDropdown(index);
              handleLocaleChange(language.code);
            }
          "
        >
          <span class="flag">
            <img :src="'../assets/img' + anguage.flag" :alt="language.text" />
          </span>
          {{ language.text }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "LocaleSwitcher",
  data() {
    return {
      LanguageList: [
        {
          code: "en",
          text: "ENG",
          flag: "/flags/us.svg",
        },
        {
          code: "fr",
          text: "FRA",
          flag: "/flags/fr.svg",
        },
      ],
      isOptionsOpen: false,
      SelectedOption: "",
    };
  },
  methods: {
    toggleOptions() {
      this.isOptionsOpen = !this.isOptionsOpen;
    },
    setSelectedThenCloseDropdown(index) {
      this.SelectedOption = index;
      this.isOptionsOpen = false;
    },
  },
  handleKeyDown(index, e) {
    switch (e.key) {
      case " ":
      case "SpaceBar":
      case "Enter":
        e.preventDefault();
        setSelectedThenCloseDropdown(index);
        break;
      default:
        break;
    }
  },
  handleListKeyDown(e) {
    switch (e.key) {
      case "Escape":
        e.preventDefault();
        this.isOptionsOpen = false;
        break;
      case "ArrowUp":
        e.preventDefault();
        this.SelectedOption =
          selectedOption - 1 >= 0
            ? selectedOption - 1
            : LanguageList.length - 1;

        break;
      case "ArrowDown":
        e.preventDefault();
        setSelectedOption(
          selectedOption == LanguageList.length - 1 ? 0 : selectedOption + 1
        );
        break;
      default:
        break;
    }
  },
};
</script>

<style scoped>
.localeContainer {
  width: 100%;
  position: absolute;
  top: 0rem;
  left: -1rem;
  max-height: 10rem;
}

.localeSwitcher {
  border: 0;
  border-radius: 4px;
  background: #fff;
  width: 100%;
  padding: 6px 8px;
  position: relative;
  text-align: left;
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: #fff;
}

.localeSwitcher:hover {
  cursor: pointer;
}

.localeSwitcher::after {
  position: absolute;
  right: 0.1rem;
  top: 0.3rem;
  content: "\25bc	";
}

.localeSwitcher.expanded::after {
  content: "\25b2	";
}

.options {
  background: #fff;
  border-radius: 5px;
  display: none;
  list-style: none;
  padding: 4px 0;
  margin-top: -4px;
  color: #76758b;
}

.options.show {
  display: block;
}

.options li {
  padding: 6px 10px;
  display: flex;
}

.options li:active,
.options li:focus,
.options li:hover,
.options li[aria-selected="true"] {
  background: #f4f7fe;

  cursor: pointer;
}

.flag {
  max-width: 2rem;
  padding-right: 0.5rem;
  display: grid;
  place-items: center;
}

.flag img {
  width: 100%;
}
</style>
