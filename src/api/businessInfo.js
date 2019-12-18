import request from '@/utils/request'
const  BASE_SERVICE = 'api/businessInfo';

export function add(data) {
  return request({
    url: BASE_SERVICE,
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: BASE_SERVICE + '/' + id,
    method: 'delete'
  })
}

export function edit(data) {
  return request({
    url: BASE_SERVICE,
    method: 'put',
    data
  })
}

export function downloadBusinessInfo(data) {
  return request({
    url: BASE_SERVICE+'/download',
    method: 'post',
    data:data,
    responseType: 'blob'
  })
}
