<template>
  <div class="home">
    <a-form
      ref="formRef"
      :model="state.form"
      :label-col="{ span: 4 }"
      :rules="state.rules"
    >
      <a-form-item required label="菜单名称" name="title">
        <a-input v-model:value="state.form.title" placeholder="菜单名称" />
      </a-form-item>
      <a-form-item label="路由名称" name="name">
        <a-input v-model:value="state.form.name" placeholder="路由名称" />
      </a-form-item>

      <a-form-item label="路由地址" name="path">
        <a-input v-model:value="state.form.path" placeholder="路由地址" />
      </a-form-item>
      <a-form-item label="映射组件名称" name="component">
        <a-input
          v-model:value="state.form.component"
          placeholder="映射组件名称"
        />
      </a-form-item>
      <a-form-item label="路由重定向地址">
        <a-input
          v-model:value="state.form.redirect"
          placeholder="路由重定向地址(没有则不填)"
        />
      </a-form-item>
      <a-form-item label="图标">
        <a-input
          v-model:value="state.form.icon"
          placeholder="图标(没有则不填)"
        />
      </a-form-item>
      <a-form-item label="上级路由" name="parent_id" >
        <a-select v-model:value="state.form.parent_id" placeholder="parent_id" style="width:300px;">
          <a-select-option
            v-for="item in state.option"
            :key="item.id"
            :value="item.id"
            >{{ item.title }}
          </a-select-option>
        </a-select>
      </a-form-item>

      <a-form-item label="是否显示">
        <a-select v-model:value="state.form.hidden" placeholder="hidden">
          <a-select-option value="1">隐藏</a-select-option>
          <a-select-option value="0">显示</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="显示顺序">
        <a-input
          v-model:value="state.form.display_order"
          placeholder="(默认0，排最后面)"
        />
      </a-form-item>

      <div>
        <a-button type="danger">取消</a-button>
        <a-button type="primary" @click="edit">确定</a-button>
      </div>
    </a-form>
  </div>
</template>

<script >
import { onMounted, reactive  } from "vue";

import { permission } from "./permission";
export default {
  name: "permissionEdit",

  setup(props, context) {
    let { edit, getParentIds, state, formRef } = permission();

    onMounted(async () => {
      getParentIds();
    });
    return {
      edit,
      getParentIds,
      state,
      formRef,
    };
  },
  watch: {
    $route: {
      handler(route) {
        if (route.query.form) {
          this.state.form = JSON.parse(route.query.form);
        }
      },
      immediate: true,
    },
  },
};
</script>
