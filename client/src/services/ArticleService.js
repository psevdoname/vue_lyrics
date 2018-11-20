import Api from '@/services/Api'

export default {
  fetchPosts () {
    return Api().get('songs')
  },
  addPost (params) {
    return Api().post('songs', params)
  }
}
