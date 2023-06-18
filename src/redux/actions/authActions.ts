import {STACK_QUESTIONS_END_POINT} from '../../config/urls';
import {apiGet} from '../../utils/utils';
import {ADCURATIO_SECRET_KEY} from '@env';

type queryTypes = {
  page_no: number;
  questions_type: string;
};

export const getStackQuestions = (
  query: queryTypes,
  data = '',
  headers = {},
) => {
  return new Promise((resolve, reject) => {
    apiGet(
      STACK_QUESTIONS_END_POINT +
        `?page=${query?.page_no}&pagesize=20&order=desc&sort=hot&tagged=${query?.questions_type}&site=stackoverflow&filter=!m()jynOFIwkYT(GSp(jmVwgXPzkYIs8(a8KME3o.KjLsm86_DQZiaxNg&key=${ADCURATIO_SECRET_KEY}`,
      data,
      headers,
    )
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  });
};
