<!--
 * @Author: hp
 * @Date: 2021-01-24 21:18:58
 * @LastEditTime: 2021-01-25 00:51:04
 * @LastEditors: your name
 * @Description: 
 * @FilePath: /nodechart/src/components/HelloWorld.vue
-->
<template>
	<div class='showarea'>
		<ul>
			<li
				v-for="(ele,ind) in imgs"
				:key="ind"
			>
				<img :src=ele>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: "showarea",
	data() {
		return {
			imgs: [],
		};
	},
	created() {
		this.imgSrc();
	},
	methods: {
		imgSrc() {
			const that = this;
			let arr = [];
			let filenames = require
				.context("../assets/images", false, /.png$/)
				.keys();
			filenames.forEach((ele) => {
				let img = ele.slice(1);
				arr.push(require(`@/assets/images${img}`));
			});
			that.imgs = arr;
		},
	},
};
</script>

<style  scoped>
.showarea {
}
</style>
