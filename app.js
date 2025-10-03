const app = Vue.createApp({
  data() {
    return {
      output: '',
      output2: ''
    }
  },
  methods: {
    setOutput2(event) {
      this.output2 = event.target.value;
    },
    setOutput(event) {
      this.output = event.target.value;
    },
    showAlert() {
      alert('You clicked the button!');
    }
  }
});

app.mount('#assignment');