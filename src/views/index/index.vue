<template>
  <div class="index">
123
  </div>
</template>

<script >
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import router from '@/router'
export default {
  name: "index",
  setup(props, context) {
    // 可以拿到所有和路由相关的参数
    // 和useRouter()就差一个字母r，😅
    // const $route = useRoute();
    // console.log(router)

    onMounted(async () => {
    
    });

    return {
      // $route,
    };
  },
};
</script>
<style lang="scss" scoped>
.index{
  width: 100%;
  height: 100%;
}
</style>
