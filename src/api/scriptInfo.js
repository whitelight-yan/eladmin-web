import request from '@/utils/request'
const  BASE_SERVICE = 'api/scriptInfo';

export function add(data) {
  return request({
    url: BASE_SERVICE,
    method: 'post',
    data
  })
}

export function quryScriptHaveFunc(data) {
  return request({
    url: BASE_SERVICE+'/havefunc',
    method: 'post',
    data:data
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

export function downloadScriptInfo(data) {
  return request({
    url: BASE_SERVICE+'/download',
    method: 'post',
    data:data,
    responseType: 'blob'
  })
}
