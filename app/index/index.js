import Vue from 'vue'
import favlist from './components/Favlist.vue'

new Vue({
	el: '#app',
	render: h => h(favlist),
	components: { favlist }
})

// var app = new Vue({
// 	el: '#app',
// 	data: {
// 		message: 'hello world'
// 	}
// });