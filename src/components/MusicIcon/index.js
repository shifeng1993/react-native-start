/**
 * Created by guangqiang on 2017/9/14.
 */
import {createIconSet} from 'react-native-vector-icons'
import { Platform } from 'react-native';

const glyphMap = {
  'liebiao1': 58964,
  'wangyiyunyinlezizhi-copy': 58881,
  'yinyue':59008,
  'sousuo2':58880,
  'pengyou1': 58906
}

const MusicIcon = (Platform.OS === 'ios') ? createIconSet(glyphMap, 'iconfont') : createIconSet(glyphMap, 'iconfont', 'musicIconFont.ttf');

// export default MusicIcon;