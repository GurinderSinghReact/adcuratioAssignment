import React, {useCallback, useEffect, useRef, useState} from 'react';
import {ActivityIndicator, FlatList, RefreshControl, View} from 'react-native';
import WrapperContainer from '../../Components/WrapperContainer';
import actions from '../../redux/actions';
import QuestionsList from '../../Components/QuestionsList';
import colors from '../../styles/colors';
import HeaderComp from '../../Components/HeaderComp';
import {
  handleClick,
  moveToTopHelper,
  uniqueArray,
} from '../../utils/helperFunctions';
import styles from './styles';
import {RenderItemTypes, itemObjectType} from '../../constants/interfaces';

const NodeScreen = () => {
  const ref = useRef<FlatList>(null);
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const [nodeQuestions, setNodeQuestions] = useState<Array<itemObjectType>>([]);
  const [questionsLoading, setQuestionsLoading] = useState<boolean>(true);
  const [page_no, setPage_no] = useState<number>(1);
  const [isMoreData, setIsMoreData] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [
    onEndReachedCalledDuringMomentum,
    setOnEndReachedCalledDuringMomentum,
  ] = useState<boolean>(false);

  useEffect(() => {
    getNodeQuestions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onRefresh = () => {
    setIsRefreshing(true);
    getNodeQuestions(1);
    setPage_no(1);
  };

  const getNodeQuestions = (pageNo = 1) => {
    setLoading(true);
    const query = {
      page_no: pageNo,
      questions_type: 'node.js',
    };
    actions
      .getStackQuestions(query)
      .then((res: any) => {
        if (res?.items?.length === 0) {
          setIsMoreData(false);
        } else {
          var uniqueArr = [...nodeQuestions, ...res?.items];
          uniqueArr = uniqueArray(uniqueArr);
          setNodeQuestions(uniqueArr);
          setIsRefreshing(false);
          setIsMoreData(true);
        }
        setLoading(false);
        setQuestionsLoading(false);
      })
      .catch(err => {
        console.log(err, 'error from stack');
        setQuestionsLoading(false);
        setIsRefreshing(false);
        setLoading(false);
      });
  };

  const renderItem = useCallback(
    ({item, index}: RenderItemTypes) => (
      <QuestionsList
        onPress={() => handleClick(item?.link)}
        item={item}
        index={index}
      />
    ),
    [],
  );

  const ListFooterComponent = useCallback(() => {
    if (isMoreData && loading) {
      return (
        <View style={styles.listFooterStyle}>
          <ActivityIndicator color={colors.theme} />
        </View>
      );
    }
  }, [isMoreData, loading]);

  const onEndReached = () => {
    if (isMoreData) {
      let pageNo = page_no + 1;
      setPage_no(pageNo);
      getNodeQuestions(pageNo);
    }
  };

  return (
    <WrapperContainer
      isSafeAreaAvailable={true}
      paddingAvailable={true}
      mainViewStyle={styles.mainViewStyle}
      isLoading={questionsLoading}
      showMoveToTop={scrollPosition > 300}
      onMoveToTop={() => moveToTopHelper(ref)}>
      <HeaderComp title="Node" />
      <FlatList
        ref={ref}
        data={nodeQuestions}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={onRefresh}
            tintColor={colors.theme}
            colors={[colors.theme]}
          />
        }
        onMomentumScrollBegin={() => {
          setOnEndReachedCalledDuringMomentum(false);
        }}
        onScroll={(event: any) => {
          const yOffset = event.nativeEvent.contentOffset.y;
          setScrollPosition(yOffset);
        }}
        initialNumToRender={20}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => 'key' + index}
        onEndReached={() => {
          if (!onEndReachedCalledDuringMomentum) {
            onEndReached();
            setOnEndReachedCalledDuringMomentum(true);
          }
        }}
        onEndReachedThreshold={0.25}
        scrollEventThrottle={150}
        contentContainerStyle={styles.flatListContainer}
        ListFooterComponent={ListFooterComponent}
      />
    </WrapperContainer>
  );
};

export default NodeScreen;
