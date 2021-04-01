<template>
  <div class="tableContent">
    {{ state.isFormShow }}
    <!-- <bin-button @click="state.isFormShow = !state.isFormShow">{{ state.isFormShow }}</bin-button>
  <bin-icon name="chat-o" badge="9" /> -->
    <!-- <bin-overlay :show="state.isFormShow" @click="state.isFormShow = false"/> -->
   
    <!-- <van-overlay :show="state.isFormShow" @click="state.isFormShow = false" /> -->
  <!-- <el-button>默认按钮</el-button> -->
    <!-- <bin-icon icon="#iconClose"></bin-icon> -->
    <!-- <a-button class="editable-add-btn" @click="handleAdd"> 新增 </a-button> -->
 
    <!-- <bin-dialog
      title="Basic Drawer"
      v-model="state.isFormShow"
      @close="
        () => {
          state.isFormShow = false;
        }
      "
    >
      <span>aaa</span>

      <template v-slot:footer>
        <b-button @click="state.isFormShow = false">{{ state.isFormShow }}</b-button>
      </template>
    </bin-dialog> -->
    <!-- <bin-table
      size="small"
      :showHeader="true"
      :option="state.option"
      :data="state.data"
      :rowKey="(record) => record.id"
      @change="handleTableChange"
    >
      <template #name="{ form }">
        <h1>{{ form.text }}</h1>
      </template>
      <template #operation="{ scope }">
        <div>
          <a-button @click="edit(scope.record, scope.index)">编辑</a-button>
        </div>
      </template>
    </bin-table> -->
  </div>
</template>

<script >
import { onMounted, reactive } from "vue";
import { useRoute } from "vue-router";
import router from "@/router";
import { tableFunction } from "@/compositionApi/vab/table";
import { SearchOutlined } from "@ant-design/icons-vue";




export default {
  name: "table",
  components: {
    SearchOutlined,
 
  

  },
  setup() {
    let {
      getList,
      getColumns,
      add,
      edit,
      deleteList,
      handleTableChange,
      state,
    } = tableFunction();
    return {
      getList,
      getColumns,
      add,
      edit,
      deleteList,
      handleTableChange,
      state,
    };
  },
};
</script>
<style lang="scss" scoped>
.tableContent {
  width: 100%;
  height: 100%;
  text-align: left;
}
</style>
