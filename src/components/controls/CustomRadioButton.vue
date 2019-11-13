<template>
  <div class="custom-radio-button">
    <input
      type="radio"
      :id="id"
      class="radio-button-input"
      :name="name"
      :value="value"
      v-model="checked"
    />
    <label :for="id"></label>
  </div>
</template>

<script>
export default {
  name: "CustomRadioButton",
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    value: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data: () => ({
    checked: true
  })
};
</script>

<style scoped>
.custom-radio-button {
  display: inline-block;
}

.radio-button-input {
  display: none;
}

.radio-button-input + label {
  position: relative;
  display: inline-block;
  margin-left: 20px;
  padding: 7px;
  border: 1px solid #cacece;
  border-radius: 50%;
  background-color: #fff;
  cursor: pointer;
  vertical-align: middle;
  transition: 0.3s background-color;
}

.radio-button-input:not(:checked) + label:hover {
  background-color: #4a90e280;
}

.radio-button-input:checked + label:after {
  position: absolute;
  left: 2px;
  top: 2px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #4a90e2;
  content: "";
}
</style>
