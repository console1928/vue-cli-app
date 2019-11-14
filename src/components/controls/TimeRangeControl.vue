<template>
  <div class="range-control">
    <div class="text-input-container">
      <VueTimepicker :format="timePickerFormat" v-model="startTimePickerValue" hide-clear-button />
      <span>-</span>
      <VueTimepicker :format="timePickerFormat" v-model="endTimePickerValue" hide-clear-button />
    </div>
    <VueSlider v-model="sliderValue" :order="false" :tooltip="'none'" :max="1439" />
  </div>
</template>

<script>
import VueSlider from "vue-slider-component";
import VueTimepicker from "vue2-timepicker";

export default {
  name: "TimeRangeControl",
  components: {
    VueSlider,
    VueTimepicker
  },
  data: () => ({
    timePickerFormat: "HH:mm",
    startTimePickerValue: {
      HH: "08",
      mm: "00"
    },
    endTimePickerValue: {
      HH: "17",
      mm: "00"
    }
  }),
  watch: {
    startTimePickerValue: function(newValue) {
      if (
        this.calculateSliderValue(newValue) >
        this.calculateSliderValue(this.endTimePickerValue)
      ) {
        this.endTimePickerValue = {
          HH: newValue.HH,
          mm: newValue.mm
        };
      }
    },
    endTimePickerValue: function(newValue) {
      if (
        this.calculateSliderValue(newValue) <
        this.calculateSliderValue(this.startTimePickerValue)
      ) {
        this.startTimePickerValue = {
          HH: newValue.HH,
          mm: newValue.mm
        };
      }
    }
  },
  computed: {
    sliderValue: {
      get: function() {
        return [
          this.calculateSliderValue(this.startTimePickerValue),
          this.calculateSliderValue(this.endTimePickerValue)
        ];
      },
      set: function(newValue) {
        const lesserValue = Math.min(newValue[0], newValue[1]);
        const biggerValue = Math.max(newValue[0], newValue[1]);
        this.startTimePickerValue = this.calculateTimePickerValue(lesserValue);
        this.endTimePickerValue = this.calculateTimePickerValue(biggerValue);
      }
    }
  },
  methods: {
    calculateTimePickerValue: function(sliderValue) {
      const hours = Math.floor(sliderValue / 60).toString();
      const minutes = (sliderValue % 60).toString();
      return {
        HH: hours.length === 1 ? "0" + hours : hours,
        mm: minutes.length === 1 ? "0" + minutes : minutes
      };
    },
    calculateSliderValue: function(timePickerValue) {
      return Number(timePickerValue.HH) * 60 + Number(timePickerValue.mm);
    }
  }
};
</script>

<style scoped>
.text-input-container {
  text-align: center;
  margin-bottom: 5px;
}
</style>
