<template>
  <div class="home">
    <!-- <bin-loading type="spinner" /> -->
    <a-affix :offset-top="top">
      <a-button type="primary" @click="functionEnd">Affix top</a-button>
    </a-affix>
    <bin-button :style="{ 'z-index': 999 }" @click="functionStart">{{
      state.show
    }}</bin-button>
   <!-- <bin-cell title="单元格" value="内容" size="large" label="描述信息" />
  
    <bin-popup
      v-model="state.show"
      closeable
      position="bottom"
      :style="{ height: '30%' }"
    /> -->
  </div>
</template>

<script >
import { onMounted, reactive } from "vue";
import { useRoute } from "vue-router";
import router from "@/router";
 
export default {
  name: "home",
  components: {
    // "bin-loading": Loading,
  },
  setup(props, context) {
    // 可以拿到所有和路由相关的参数
    // 和useRouter()就差一个字母r，😅

    const state = reactive({ show: false });
    const functionStart = () => {
 
    };
    const functionEnd = () => {
 
    };

    return { state, functionStart, functionEnd };
  },
};
</script>
