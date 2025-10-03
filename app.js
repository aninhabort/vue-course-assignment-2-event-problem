const app = Vue.createApp({
  data() {
    return {
      output: '',
      confirmed: ''
    }
  },
  methods: {
    setConfirmed() {
      this.confirmed = this.output;
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