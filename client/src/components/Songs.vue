
<template>
  <div class="songs">
    <h1>Songs</h1>
    <div v-if="songs.length > 0" class="table-wrap">
      <div>
        <router-link v-bind:to="{ name: 'NewSong' }" class="">Add a Song</router-link>
      </div>
      <table>
        <tr>
          <td>Title</td>
          <td width="550">Lyrics</td>
          <td width="100" align="center">Artists</td>
        </tr>
        <tr v-for="song in songs">
          <td>{{ song.title }}</td>
          <td>{{ song.artists }}</td>
          <td>{{ song.lyrics }}</td>
          <td align="center">
            <router-link v-bind:to="{ name: 'EditPost', params: { id: song._id } }">Edit</router-link> |
            <a href="#">Delete</a>
          </td>
        </tr>
      </table>
    </div>
    <div v-else>
      There are no posts.. Lets add one now <br /><br />
      <router-link v-bind:to="{ name: 'NewSong' }" class="add_post_link">Add Lyrics</router-link>
    </div>
  </div>
</template>

<script>
import ArticleService from '@/services/ArticleService'
export default {
  name: 'songs',
  data () {
    return {
      songs: []
    }
  },
  mounted () {
    this.getPosts()
  },
  methods: {
    async getPosts () {
      const response = await ArticleService.fetchPosts()
      this.songs = response.data.songs
    }
  }
}
</script>
<style type="text/css">
.table-wrap {
  width: 60%;
  margin: 0 auto;
  text-align: center;
}
table th, table tr {
  text-align: left;
}
table thead {
  background: #f2f2f2;
}
table tr td {
  padding: 10px;
}
table tr:nth-child(odd) {
  background: #f2f2f2;
}
table tr:nth-child(1) {
  background: #4d7ef7;
  color: #fff;
}
a {
  color: #4d7ef7;
  text-decoration: none;
}
a.add_post_link {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
}
</style>
