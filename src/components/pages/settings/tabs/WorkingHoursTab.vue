<template>
  <div class="working-hours-tab">
    <div class="schedule-radio-group">
      <div class="schedule-title">Schedule</div>
      <CustomRadioButton id="radio1" name="schedule" :value="true" />
      <span class="schedule-radio-button-label">Fixed</span>
      <CustomRadioButton id="radio2" name="schedule" />
      <span class="schedule-radio-button-label">Flexible</span>
    </div>
    <div v-for="range in ranges" :key="range.name" class="range-container">
      <div class="range-title">
        <CustomCheckbox
          :id="'checkbox_' + range.name"
          v-if="range.name !== 'Working hours'"
          @toggle-checkbox="toggleRange(range.name, ...arguments)"
          :checked="range.active"
          class="range-checkbox"
        />
        <div class="range-name">{{ range.name }}</div>
      </div>
      <TimeRangeControl v-show="range.active" />
    </div>
    <div class="schedule-footer">
      <div class="save-button">SAVE CHANGES</div>
      <div class="cancel-button">Cancel</div>to reset changes
    </div>
  </div>
</template>

<script>
import TimeRangeControl from "../../../controls/TimeRangeControl.vue";
import CustomRadioButton from "../../../controls/CustomRadioButton.vue";
import CustomCheckbox from "../../../controls/CustomCheckbox.vue";

export default {
  name: "WorkingHoursTab",
  components: {
    TimeRangeControl,
    CustomRadioButton,
    CustomCheckbox
  },
  data: () => ({
    ranges: [
      { name: "Working hours", active: true },
      { name: "Monday", active: true },
      { name: "Tuesday", active: true },
      { name: "Wednesday", active: true },
      { name: "Thursday", active: true },
      { name: "Friday", active: true },
      { name: "Saturday", active: true },
      { name: "Sunday", active: true }
    ]
  }),
  methods: {
    toggleRange: function(name, isActive) {
      for (const range of this.ranges) {
        if (range.name === name) {
          range.active = isActive;
        }
      }
    }
  }
};
</script>

<style scoped>
.working-hours-tab {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

.schedule-radio-group {
  height: 45px;
  margin: 0px 20px;
  padding: 12px 6px 2px 6px;
  line-height: 45px;
  border-bottom: 1px solid #ededed;
  font-family: Heebo-Regular;
  font-size: 15px;
  color: #9b9b9b;
}

.schedule-title {
  display: inline-block;
  margin-right: 110px;
}

.schedule-radio-button-label {
  margin-left: 7px;
  color: #4a4a4a;
}

.schedule-footer {
  margin-top: 40px;
  padding: 12px 14px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: #ececec;
  box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.06);
}

.save-button {
  display: inline-block;
  width: 150px;
  height: 36px;
  margin-right: 14px;
  line-height: 36px;
  border-radius: 5px;
  color: #fff;
  background-color: #21d366;
  text-align: center;
  cursor: pointer;
  transition: 0.3s;
  font-size: 16px;
  font-family: Heebo-Bold;
}

.save-button:hover {
  background-color: #1cbd5a;
}

.save-button:active {
  background-color: #189e4c;
}

.cancel-button {
  display: inline-block;
  margin-right: 10px;
  color: #990000;
  cursor: pointer;
  font-family: Heebo-Medium;
}

.range-container {
  height: 50px;
  margin: 0px 20px;
  padding-top: 15px;
  padding-left: 200px;
}

.range-title {
  position: absolute;
  margin-left: -194px;
  height: 18px;
  padding-top: 28px;
  color: #9b9b9b;
}

.range-checkbox {
  margin-right: 10px;
}

.range-name {
  display: inline-block;
  vertical-align: top;
}
</style>
