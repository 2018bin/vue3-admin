<template>
  <div class="org">
    <a-button type="primary" @click="addView">新增</a-button>
    <a-table :columns="state.columns" :data-source="state.data" :pagination="state.params">
      <template #operation="{ record }">
        <a-button type="primary" @click="editView(record)">编辑</a-button>
        <a-button type="danger" @click="del(record)">删除</a-button>
      </template>
    </a-table>
  </div>
</template>

<script >
 
import { useRoute } from "vue-router";
import { reactive, defineComponent, onMounted } from "vue";
import { org } from "./org";
export default defineComponent({
  name: "org",
  components: {},
  setup(props, context) {
    // 可以拿到所有和路由相关的参数
    // 和useRouter()就差一个字母r，😅
    let { getList, addView, editView, del, state } = org();
    onMounted(() => {
      getList();
    });

    return {
      getList,
      addView,
      editView,
      del,
      state,
    };
  },
});
</script>
