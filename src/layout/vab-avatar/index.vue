<template>
  <div class="vab-avatar">
    <a-dropdown>
      <span class="ant-dropdown-link">
        <a-avatar :src="avatar" />
        {{ username }}
        <DownOutlined />
      </span>
      <template v-slot:overlay>
        <a-menu>
          <a-menu-item @click="logout">退出登录</a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </div>
</template>

<script>
import { DownOutlined } from "@ant-design/icons-vue";

import { mapGetters } from "vuex";
export default {
  name: "VabAvatar",
  components: { DownOutlined },
  computed: {
    ...mapGetters({
      avatar: "user/avatar",
      username: "user/username",
    }),
  },
  methods: {
    async logout() {
      await this.$store.dispatch("user/logout");
      this.$router.push("/login");
    },
  },
};
</script>
<style lang="less">
.vab-avatar {
  .ant-dropdown-link {
    display: block;
    min-height: 64px;
    cursor: pointer;
  }
}
</style>
