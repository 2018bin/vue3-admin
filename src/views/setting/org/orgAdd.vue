<template>
  <div class="org">
    <a-form
      ref="formRef"
      :model="state.form"
      :label-col="{ span: 4 }"
      :rules="state.rules"
    >
      <a-form-item name="org_name" label="机构名称">
        <a-input
          v-model:value="state.form.org_name"
          placeholder="机构名称"
        /> </a-form-item
      >
      <a-form-item name="status" label="状态">
        <a-radio-group v-model:value="state.form.status">
          <a-radio value="1">启用</a-radio>
          <a-radio value="2">禁用</a-radio>
        </a-radio-group>
      </a-form-item>
      <a-form-item name="permission" label="路由权限">
        <a-tree
        style="width:300px;"
          ref="tree"
          :blockNode="true"
          :tree-data="state.tree_data"
          :replaceFields="state.defaultProps"
          checkable
          node-key="id"
          v-model:expandedKeys="state.expandedKeys"
          v-model:selectedKeys="state.selectedKeys"
          v-model:checkedKeys="state.checkedKeys"
        ></a-tree>
      </a-form-item>

      <a-form-item name="username" label="总管理员账号">
        <a-input
          v-model:value="state.form.username"
          placeholder="总管理员账号"
        /> </a-form-item
      >.
      <a-form-item name="password" label="密码">
        <a-input
          v-model:value="state.form.password"
          placeholder="密码"
          type="password"
        />
      </a-form-item>
      <a-form-item name="status" label="总管理员账号状态">
        <a-radio-group v-model:value="state.form.adminStatus">
          <a-radio value="1">启用</a-radio>
          <a-radio value="2">禁用</a-radio>
        </a-radio-group>
      </a-form-item>

      <div>
        <a-button type="danger">取消</a-button>
        <a-button type="primary" @click="add">确定</a-button>
      </div>
    </a-form>
  </div>
</template>

<script >
import { onMounted, reactive, ref } from "vue";

import { org } from "./org";
export default {
  name: "orgAdd",

  setup(props, context) {
    let { add, getRoutesPermission, state, formRef } = org();
    onMounted(async () => {
      getRoutesPermission();
      
    });
    return {
      add,
      getRoutesPermission,
      state,
      formRef,
    };
  },
};
</script>
