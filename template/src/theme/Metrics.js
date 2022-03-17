import {Dimensions, Platform, StatusBar} from 'react-native';

const {width, height} = Dimensions.get('window');

const screenWidth = width < height ? width : height;
const screenHeight = width < height ? height : width;

const isKitKatAbove = Platform.OS === 'android' && Platform.Version >= 19;

const scale = size => (screenWidth / guidelineBaseWidth) * +size;
const scaleVertical = size => (screenHeight / guidelineBaseHeight) * size;

const ratio = (iosSize: number, androidSize: ?number, doScale = false) =>
  Platform.select({
    ios: doScale ? scaleVertical(iosSize) : iosSize, // iosSize,
    android: doScale
      ? scaleVertical(androidSize || iosSize)
      : androidSize || iosSize, // androidSize || iosSize,
  });

const generatedFontSize = (iosFontSize: number, androidFontSize: ?number) =>
  Platform.select({
    ios: iosFontSize,
    android: androidFontSize || iosFontSize,
  });

export default {
  ratio,
  scale,
  scaleVertical,
  screenWidth,
  screenHeight,
  generatedFontSize,
  isKitKatAbove,
};
