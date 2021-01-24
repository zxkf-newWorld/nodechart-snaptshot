/*
 * @Author: hp
 * @Date: 2021-01-24 23:50:44
 * @LastEditTime: 2021-01-25 00:07:22
 * @LastEditors: your name
 * @Description:
 * @FilePath: /nodechart/src/nodechart/snapshoot.js
 */
/*
 * @Author: hp
 * @Date: 2021-01-24 22:52:54
 * @LastEditTime: 2021-01-24 23:50:09
 * @LastEditors: your name
 * @Description: 图表快照
 * @FilePath: /nodechart/src/nodechart/snapshoot.js
 */
const fs = require('fs');
const path = require('path');
const NodeCharts = require('node-charts');
let nc = new NodeCharts();
// listen error
// nc.on('error', (err) => {
// 	console.log(err);
// });
// render
/**
 * @description: 生成指定文件名称的快照到指定目录assets/images目录下存放
 * @param {Object} option：图标配置
 * @param {String} filename：生成图片名称
 * @return {*}
 */
function snapshot(option, filename) {
	// listen error
	nc.on('error', (err) => {
		console.log(err);
	});
	nc.render(
		option,
		(err, data) => {
			fs.writeFileSync(
				__dirname +
					path.normalize(
						`../../assets/images/${filename}.png`
					),
				data,
				(err) => {
					console.log(err);
				}
			);
		},
		{
			//修改图表渲染所用的模板，模板中约定必须包含 div#container
			renderTo: `<div id="container" style="width: 600px;height:450px;"></div>`,
		}
	);
}
module.exports = snapshot;
