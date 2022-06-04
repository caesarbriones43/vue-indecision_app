<template>
  <h2>{{ customTitle }}</h2>
  <p>{{ counter }} <sup>2</sup> = {{ getSquare }}</p>

  <div>
    <button v-on:click="increase()">+1</button>
    <button v-on:click="decrease()">-1</button>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    start: {
      type: Number,
      required: true,
      default: 100,
      validator(value) {
        return value >= 0;
      },
    },
  },
  name: "Counter",
  data() {
    return {
      counter: this.start,
    };
  },
  methods: {
    getSquareValue() {
      console.log("getSquareValue");
      return this.counter * this.counter;
    },
    increase() {
      this.counter = this.counter + 1;
    },
    decrease() {
      this.counter--;
    },
  },
  computed: {
    getSquare() {
      console.log("computed");
      return this.counter * this.counter;
    },
    customTitle() {
      return this.title || "Counter";
    },
  },
};
</script>

<style>
button {
  background-color: #64bb67;
  border-radius: 5px;
  color: white;
  border: 1px solid black;
  cursor: pointer;
  margin: 0 5px;
  padding: 5px 15px;
  transition: 0.3s ease-out;
}

button:hover {
  background-color: #5aa67b;
  transition: 0.3s ease-in-out;
}
</style>
