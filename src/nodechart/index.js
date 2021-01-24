/*
 * @Author: hp
 * @Date: 2021-01-24 21:23:12
 * @LastEditTime: 2021-01-24 23:57:26
 * @LastEditors: your name
 * @Description: 快照统一生成管理
 * @FilePath: /nodechart/src/nodechart/index.js
 */
// 快照生成
const snapshot = require('./snapshoot');
// 图表配置数据
const DiagramConfig = require('../components/charts/diagramConfig');
let diagramNames = Object.keys(DiagramConfig);
console.log(diagramNames);
for (let ind = 0; ind < diagramNames.length; ind++) {
	let option = DiagramConfig[diagramNames[ind]]().option;
	let filename = DiagramConfig[diagramNames[ind]]()
		.diagramName;
	snapshot(option, filename);
}
