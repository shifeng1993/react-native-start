/* ******* 主入口 *******/
// 引入启动组件对象
import {AppRegistry} from 'react-native';
// 引入源文件主入口
import {Root} from './src/App'
//App名称配置
import {name as appName} from './app.json';

// 如果不是开发模式，将所有影响性能的console重写为空函数
if (!__DEV__) {
  global.console = {
    info: () => {},
    log: () => {},
    warn: () => {},
    debug: () => {},
    error: () => {}
  };
  global.alert = () => {};
}

// 注册，实例化
AppRegistry.registerComponent(appName, () => Root);
