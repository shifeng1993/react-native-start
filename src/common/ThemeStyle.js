import React, {Component} from 'react'

export default class Theme extends Component {
  // 亮色，默认
  static light = {
    /* 重要  */
    important_1: '#ce3d3a',             // 用于特别需要强调和突出的文字，按钮和icon
    important_2: '#333333',             // 用于重要及文字信息，内容标题信息
    important_3: '#477aac',             // 小面积使用，用于重要链接文字颜色
    /* 一般  */
    normal_1: '#666666',                // 用于普通级段落信息，用户名，icon等
    normal_2: '#888888',                // 用于辅助，次要的文字信息
    normal_3: '#999999',                // 用于辅助，次要的文字信息，排序等
    normal_4: '#b2b2b2',                // 用于辅助，次要的文字信息，icon等
    normal_5: '#cccccc',                // 用于下载列表以及失效列表的icon等
    /* 较弱  */
    weak_1: '#f2f4f5',                  // 用于内容区域底色
    weak_2: 'rgba(0,0,0,0.05)',         // 用于分割模块的标题栏底色，动态资源底色
    weak_3: 'rgba(0,0,0,0.1)'           // 用于分割线
  }
  // 夜间模式
  static dark = {
    /* 重要  */
    important_1: '#902b2b',             // 用于特别需要强调和突出的文字，按钮和icon
    important_2: '#adaeb3',             // 用于重要及文字信息，内容标题信息
    important_3: '#2b6e90',             // 小面积使用，用于重要链接文字颜色
    /* 一般  */
    normal_1: '#75777e',                // 用于普通级段落信息，用户名，icon等
    normal_2: '#6b6c74',                // 用于辅助，次要的文字信息
    normal_3: '#5b5d63',                // 用于辅助，次要的文字信息，排序等
    normal_4: '#3e3f43',                // 用于辅助，次要的文字信息，icon等
    normal_5: '#303134',                // 用于下载列表以及失效列表的icon等
    /* 较弱  */
    weak_1: '#111214',                  // 用于内容区域底色
    weak_2: 'rgba(255,255,255,0.03)',   // 用于分割模块的标题栏底色，动态资源底色
    weak_3: 'rgba(255,255,255,0.05)'    // 用于分割线
  }
}

