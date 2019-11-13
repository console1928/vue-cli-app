<template>
  <div class="settings-container">
    <div class="tabs-container">
      <div
        v-for="tab in tabs"
        :key="tab"
        class="tab"
        :class="{ tab__selected: selectedTab === tab }"
        @click="selectTab(tab)"
      >{{ tab }}</div>
    </div>
    <WorkingHoursTab v-if="selectedTab === 'Working hours'" />
  </div>
</template>

<script>
import WorkingHoursTab from "./tabs/WorkingHoursTab.vue";

export default {
  name: "SettingsContainer",
  components: {
    WorkingHoursTab
  },
  data: () => ({
    tabs: [
      "Profile",
      "Notifications",
      "Password",
      "Working hours",
      "Call settings"
    ],
    selectedTab: "Working hours"
  }),
  methods: {
    selectTab: function(tabName) {
      this.selectedTab = tabName;
    }
  }
};
</script>

<style scoped>
.settings-container {
  min-width: 692px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-color: #fff;
  font-family: Heebo-Regular;
}

.tabs-container {
  height: 49px;
  border-bottom: 1px solid #ededed;
  white-space: nowrap;
  font-size: 15px;
}

.tab {
  display: inline-block;
  min-width: 60px;
  line-height: 48px;
  padding: 0px 30px;
  color: #97040c;
  border-bottom: 2px solid #ffffff00;
  cursor: pointer;
  text-align: center;
  transition: 0.3s;
}

.tab:not(.tab__selected):hover {
  border-bottom: 2px solid #97040b80;
}

.tab:active,
.tab__selected {
  color: #4a4a4a;
  border-bottom: 2px solid #97040c;
}
</style>
