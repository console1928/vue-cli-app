<template>
  <div class="content-container">
    <div class="page-name">{{ pageName }}</div>
    <SettingsContainer v-if="pageName === 'Settings'" />
  </div>
</template>

<script>
import SettingsContainer from "./pages/settings/SettingsContainer.vue";

export default {
  name: "ContentContainer",
  components: {
    SettingsContainer
  },
  props: {
    pageName: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.content-container {
  padding-left: 300px;
  padding-right: 55px;
}

.page-name {
  height: 80px;
  margin-left: 10px;
  line-height: 80px;
  font-size: 25px;
  font-family: Heebo-Light;
}
</style>
