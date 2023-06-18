import {Linking} from 'react-native';

export const uniqueArray = (a: any) =>
  [...new Set(a.map((o: object) => JSON.stringify(o)))].map((s: any) =>
    JSON.parse(s),
  );

export const handleClick = (url: string) => {
  Linking.canOpenURL(url).then(supported => {
    if (supported) {
      Linking.openURL(url);
    }
  });
};

export const moveToTopHelper = (scrollRef: any) => {
  scrollRef?.current?.scrollToIndex({index: 0, animated: true});
};
