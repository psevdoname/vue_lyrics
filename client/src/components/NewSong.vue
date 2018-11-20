<template>
  <div class="Songs">
    <h1>Add Song Lyrics</h1>
      <div class="form">
        <div>
          <input type="text" name="title" placeholder="TITLE" v-model="title">
        </div>
        <div>
          <input type="text" name="src_artists" placeholder="ARTISTS" v-model="artists">
        </div>
        <div>
          <textarea rows="15" cols="15" placeholder="LYRICS" v-model="lyrics"></textarea>
        </div>
        <div>
          <button class="app_post_btn" @click="addPost">Add</button>
        </div>
      </div>
  </div>
</template>

<script>
import ArticleService from '@/services/ArticleService'
export default {
  name: 'NewSong',
  data () {
    return {
      title: '',
      artists: '',
      lyrics: ''
    }
  },
  methods: {
    async addPost () {
      await ArticleService.addPost({
        title: this.title,
        artists: [this.artists],
        lyrics: this.lyrics
      })
      this.$router.push({ name: 'Songs' })
    }
  }
}
</script>
<style type="text/css">
.form input, .form textarea {
  width: 500px;
  padding: 10px;
  border: 1px solid #e0dede;
  outline: none;
  font-size: 12px;
}
.form div {
  margin: 20px;
}
.app_post_btn {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  width: 520px;
  border: none;
  cursor: pointer;
}
</style>