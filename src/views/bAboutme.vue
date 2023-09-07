<template>
  <div>
    <div class="row top-main">
      <div class="col-3 left">
        <div class="img-height">
          <img src="../images/skeepw.png" alt="" class="main-img" />
          <h2>Explore</h2>
        </div>
      </div>
      <div class="col-9 right">
        <div class="inner-main-right">
          <h2>About me</h2>
          <div class="row inner-right-col">
            <div class="col mb-2 input">
              <input
                type="text"
                class=""
                placeholder="Name"
                :id="1"
                :value="Name"
                @input="$emit('update:Name', $event.target.value)"
              />
              <input
                type="text"
                class=""
                placeholder="Date of Birth"
                :id="2"
                @change="updateValue"
                onfocus="this.type='date'"
              />
              <input
                type="text"
                class=""
                placeholder="City of Residence"
                :id="3"
                @change="updateValue"
              />
              <input type="text" class="" placeholder="Occupation" :id="4" @change="updateValue" />
              <input type="text" class="" placeholder="Nationality" :id="5" @change="updateValue" />
              <input type="text" class="" placeholder="Hobbies" :id="5" @change="updateValue" />
              <div class="row">
                <div class="col">
                  <input
                    type="text"
                    class=""
                    placeholder="Gender"
                    :value="content"
                    @change="updateValue"
                    :id="6"
                  />
                </div>
                <div class="col">
                  <input
                    type="text"
                    class=""
                    placeholder="Height"
                    :value="content"
                    @change="updateValue"
                    :id="7"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="set-btn mt-5">
            <button class="btn done" @click="submitAboutMe()">Done</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bAboutme',
  props: {
    Name: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
@import url('../assets/Aboutme.css');
</style>
