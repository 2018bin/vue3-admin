<template>
  <div class="admin">
    <a-form
      ref="formRef"
      :model="state.form"
      :label-col="{ span: 4 }"
      :rules="state.rules"
    >
      <a-form-item name="username" label="用户名">
        <a-input v-model:value="state.form.username" placeholder="用户名" />
      </a-form-item>
      <a-form-item name="password" label="密码">
        <a-input
          v-model:value="state.form.password"
          placeholder="密码"
          type="password"
        />
      </a-form-item>
      <a-form-item name="status" label=" 状态">
        <a-radio-group v-model:value="state.form.status">
          <a-radio value="1">启用</a-radio>
          <a-radio value="0">禁用</a-radio>
        </a-radio-group>
      </a-form-item>
      <a-form-item name="roles" label="角色">
        <a-checkbox-group v-model:value="state.form.roles"
          ><a-checkbox
            v-for="(item, index) in state.roleList"
            :key="index"
            :value="item.id"
            >{{ item.role_name }}</a-checkbox
          >
        </a-checkbox-group>
      </a-form-item>

      <div>
        <a-button type="danger">取消</a-button>
        <a-button type="primary" @click="edit">确定</a-button>
      </div>
    </a-form>
  </div>
</template>

<script >
import { onMounted, reactive, ref } from "vue";
import { admin } from "./admin";
export default {
  name: "adminEdit",

  setup(props, context) {
    let { edit, getAllRolesList, state, formRef } = admin();
    state.rules.password[0].required = false;
    onMounted(() => {
      getAllRolesList();
    });
    return {
      edit,
      getAllRolesList,
      state,
      formRef,
    };
  },
  watch: {
    $route: {
      handler(route) {
        if (route.query.form) {
          this.state.form = JSON.parse(route.query.form);
          this.state.form.status = String(this.state.form.status);
           
        }
      },
      immediate: true,
    },
  },
};
</script>
