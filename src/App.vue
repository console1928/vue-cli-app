<template>
  <div id="app">
    <LeftNavigation @select-page="selectPage" />
    <ContentContainer :pageName="selectedPage" />
  </div>
</template>

<script>
import LeftNavigation from "./components/LeftNavigation.vue";
import ContentContainer from "./components/ContentContainer.vue";

export default {
  name: "app",
  components: {
    LeftNavigation,
    ContentContainer
  },
  data: () => ({
    selectedPage: "Settings"
  }),
  methods: {
    selectPage: function(pageName) {
      this.selectedPage = pageName;
    }
  }
};
</script>
