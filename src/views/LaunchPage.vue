<template>
  <div>
    <div class="lunchpage-lunchpage" id="body">
      <div>
        <img
          src="../images/skeep2.png"
          alt="IMAGE184Converted123"
          class="lunchpage-i-m-a-g-e184converted1"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Launchpage',
  props: {},
  data() {
    return {
      interval: null
    }
  },
  methods: {
    autoRedirect: function () {
      this.$router.push({ name: 'Signup' })
    }
  },
  mounted() {
    let element = document.querySelector('.lunchpage-lunchpage')
    function fadeOut(el) {
      var opacity = 1 // Initial opacity
      var interval = setInterval(function () {
        if (opacity > 0) {
          opacity -= 0.1
          el.style.opacity = opacity
        } else {
          clearInterval(interval) // Stop the interval when opacity reaches 0
          el.style.display = 'none' // Hide the element
        }
      }, 150)
    }
    this.interval = setInterval(() => {
      this.autoRedirect()
    }, 1100)
    fadeOut(element)
  },
  unmounted() {
    // destroyed  in Vue 2
    clearInterval(this.interval)
  }
}
</script>

<style scoped>
@import url('../assets/LaunchPage.css');
@import url('https://fonts.cdnfonts.com/css/mabook');
</style>
