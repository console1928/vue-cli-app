<template>
  <div class="left-navigation">
    <div
      v-for="item in items"
      :key="item.name"
      class="item"
      :class="{ item__settings: item.name === 'Settings', item__selected: selectedItem === item.name }"
      @click="selectPage(item.name)"
    >
      <div
        class="item-image-container"
        :style="{ background: 'url(' + item.image + ') no-repeat center' }"
      ></div>
      {{ item.name }}
    </div>
  </div>
</template>

<script>
import dashboard from "../assets/icons/dashboard.svg";
import customers from "../assets/icons/customers.svg";
import calendar from "../assets/icons/calendar.svg";
import chats from "../assets/icons/chats.svg";
import tasks from "../assets/icons/tasks.svg";
import inbox from "../assets/icons/inbox.svg";
import calls from "../assets/icons/calls.svg";
import leads from "../assets/icons/leads.svg";
import team from "../assets/icons/team.svg";
import user from "../assets/icons/user.svg";

export default {
  name: "LeftNavigation",
  data: () => ({
    items: [
      { name: "Dashboard", image: dashboard },
      { name: "Customers", image: customers },
      { name: "Calendar", image: calendar },
      { name: "Chats", image: chats },
      { name: "Tasks", image: tasks },
      { name: "Inbox", image: inbox },
      { name: "Calls", image: calls },
      { name: "Leads", image: leads },
      { name: "Team", image: team },
      { name: "Settings", image: user }
    ],
    selectedItem: "Settings"
  }),
  methods: {
    selectPage: function(pageName) {
      this.selectedItem = pageName;
      this.$emit("select-page", pageName);
    }
  }
};
</script>

<style scoped>
.left-navigation {
  position: fixed;
  top: 0px;
  left: 0px;
  bottom: 0px;
  width: 200px;
  padding-top: 60px;
  color: #fff;
  background: linear-gradient(0deg, #dc3f43, #e8191f);
  font-family: Heebo-Medium;
}

.item {
  display: flex;
  align-items: center;
  height: 50px;
  font-size: 16px;
  line-height: 50px;
  cursor: pointer;
  transition: 0.3s;
}

.item:not(.item__selected):hover {
  background-color: #b9333780;
}

.item:active,
.item__selected {
  background-color: #b93337;
}

.item__settings {
  position: absolute;
  width: 100%;
  bottom: 0px;
}

.item-image-container {
  width: 55px;
  height: 50px;
}
</style>
