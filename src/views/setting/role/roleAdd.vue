<template>
  <div class="role">
    <a-form
      ref="formRef"
      :model="state.form"
      :label-col="{ span: 4 }"
      :rules="state.rules"
    >
      <a-form-item name="role_name" label="角色名称">
        <a-input
          v-model:value="state.form.role_name"
          placeholder="角色名称"
        /> </a-form-item
      >
     
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

     

      <div>
        <a-button type="danger">取消</a-button>
        <a-button type="primary" @click="add">确定</a-button>
      </div>
    </a-form>
  </div>
</template>

<script >
import { onMounted, reactive, ref } from "vue";
import { role } from "./role";
export default {
  name: "roleAdd",

  setup(props, context) {
    let { add, getRoutesPermission, state, formRef } = role();
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
