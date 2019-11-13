<template>
  <div class="custom-checkbox">
    <input
      type="checkbox"
      :id="id"
      class="checkbox-input"
      :checked="checked"
      @change="toggleCheckbox"
    />
    <label :for="id"></label>
  </div>
</template>

<script>
export default {
  name: "CustomCheckbox",
  props: {
    id: {
      type: String,
      required: true
    },
    checked: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  methods: {
    toggleCheckbox: function(event) {
      this.$emit("toggle-checkbox", event.target.checked);
    }
  }
};
</script>

<style scoped>
.custom-checkbox {
  display: inline-block;
}

.checkbox-input {
  display: none;
}

.checkbox-input + label {
  display: block;
  position: relative;
  width: 16px;
  height: 16px;
  border: 1px solid #ccc;
  border-radius: 3px;
  background-color: #fff;
  cursor: pointer;
  transition: 0.3s background-color;
}

.checkbox-input + label:hover {
  background-color: #4ece3d80;
}

.checkbox-input:checked + label {
  width: 18px;
  height: 18px;
  border: none;
  background-color: #4ece3d;
}

.checkbox-input:checked + label:hover {
  background-color: #4ece3d80;
}

.checkbox-input:checked + label:after {
  position: absolute;
  left: 4px;
  top: 9px;
  width: 2px;
  height: 2px;
  box-shadow: 2px 0 0 #fff, 4px 0 0 #fff, 4px -2px 0 #fff, 4px -4px 0 #fff,
    4px -6px 0 #fff, 4px -8px 0 #fff;
  transform: rotate(45deg);
  background: #fff;
  content: "";
}
</style>
