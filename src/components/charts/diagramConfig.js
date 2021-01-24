/*
 * @Author: hp
 * @Date: 2021-01-24 23:08:51
 * @LastEditTime: 2021-01-25 00:45:53
 * @LastEditors: your name
 * @Description: 图表配置
 * @FilePath: /nodechart/src/components/charts/diagramConfig.js
 */

// 极坐标图
const polarDiagram = () => {
	let data = [];
	let diagramName = 'polarDiagram';
	for (let i = 0; i <= 100; i++) {
		let theta = (i / 100) * 360;
		let r = 5 * (1 + Math.sin((theta / 180) * Math.PI));
		data.push([r, theta]);
	}
	let option = {
		title: {
			text: '极坐标双数值轴',
		},
		legend: {
			data: ['line'],
		},
		polar: {},
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'cross',
			},
		},
		angleAxis: {
			type: 'value',
			startAngle: 0,
		},
		radiusAxis: {},
		series: [
			{
				coordinateSystem: 'polar',
				name: 'line',
				type: 'line',
				data: data,
			},
		],
	};
	return { option, diagramName };
};
// 反向柱状图
const reverseBarDiagram = () => {
	let diagramName = 'reverseBarDiagram';
	let option = {
		title: {
			text: '世界人口总量',
			subtext: '数据来自网络',
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'shadow',
			},
		},
		legend: {
			data: ['2011年', '2012年'],
		},
		grid: {
			left: '3%',
			right: '4%',
			bottom: '3%',
			containLabel: true,
		},
		xAxis: {
			type: 'value',
			boundaryGap: [0, 0.01],
		},
		yAxis: {
			type: 'category',
			data: [
				'巴西',
				'印尼',
				'美国',
				'印度',
				'中国',
				'世界人口(万)',
			],
		},
		series: [
			{
				name: '2011年',
				type: 'bar',
				data: [18203, 23489, 29034, 104970, 131744, 630230],
			},
			{
				name: '2012年',
				type: 'bar',
				data: [19325, 23438, 31000, 121594, 134141, 681807],
			},
		],
	};
	return { option, diagramName };
};
module.exports = { polarDiagram, reverseBarDiagram };
