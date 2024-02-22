import request from '@/utils/request';

export const getDict = () => {
  return request({
    url: '/api/test',
    method: 'get',
  })
};
