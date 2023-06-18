import React, {FC} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';
import {moderateScale, textScale} from '../styles/responsiveSize';
import {itemObjectType} from '../constants/interfaces';

interface QuestionsListProps {
  onPress: () => void;
  item: itemObjectType;
  index: number;
}

const QuestionsList: FC<QuestionsListProps> = ({item, index, onPress}) => {
  return (
    <TouchableOpacity
      key={index}
      style={styles.container}
      activeOpacity={0.9}
      onPress={onPress}>
      <Text style={styles.statsStyle}>
        {item?.score} votes · {item?.answer_count} answers · {item?.view_count}{' '}
        views
      </Text>
      <Text style={styles.titleStyle}>{item?.title}</Text>
      <Text numberOfLines={2} style={styles.bodyStyle}>
        {item?.body_markdown}
      </Text>
      <View style={styles.askedByViewStyle}>
        <Image
          source={{uri: item?.owner?.profile_image}}
          style={styles.ownerProfileImageStyle}
        />
        <Text style={styles.askedPersonTextStyle}>
          {item?.owner?.display_name}{' '}
        </Text>
        <Text style={styles.askedTextStyle}>
          asked {new Date(item?.creation_date * 1000).toDateString()}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingVertical: moderateScale(16),
    borderBottomWidth: 0.5,
    borderColor: colors.blackOpacity25,
  },
  statsStyle: {
    ...commonStyles.font_12_regular,
  },
  titleStyle: {
    ...commonStyles.font_14_medium,
    color: colors.blue,
    paddingVertical: moderateScale(6),
  },
  bodyStyle: {
    ...commonStyles.font_12_medium,
    fontSize: textScale(11),
    color: colors.blackOpacity80,
  },
  askedTextStyle: {
    ...commonStyles.font_12_regular,
  },
  askedPersonTextStyle: {
    ...commonStyles.font_12_medium,
    color: colors.blue,
  },
  askedByViewStyle: {
    flexDirection: 'row',
    marginLeft: 'auto',
    marginTop: moderateScale(8),
    alignItems: 'center',
  },
  ownerProfileImageStyle: {
    height: moderateScale(12),
    width: moderateScale(12),
    marginRight: moderateScale(6),
    borderRadius: moderateScale(2),
  },
});

export default React.memo(QuestionsList);
