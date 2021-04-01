<template>
  <div class="home">
    <hello-world></hello-world>
  </div>
</template>

<script >
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import router from '@/router'
export default {
  name: "home",
  setup(props, context) {
    // 可以拿到所有和路由相关的参数
    // 和useRouter()就差一个字母r，😅


    onMounted(async () => {
    
    });

    return {

    };
  },
};
</script>
