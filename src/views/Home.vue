<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">

import { defineComponent, onMounted, getCurrentInstance } from 'vue'
import HelloWorld from '../components/HelloWorld.vue'

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
  },
  setup(props, context) {
			const { ctx } = getCurrentInstance()

			onMounted(()=>{
				ctx.is_action('app_111', {}, {})
				ctx.is_action('app_222', { _id: 1111 }, {})
				ctx.is_action('app_333', { _id: 1111 }, {}, 'GET')
				ctx.is_action('app_444', {}, {}, 'GET')
				ctx.is_action('app_555', {}, {})
				ctx.is_action('app_666', { _id: 1111 }, {})
			})
		}
});
</script>
