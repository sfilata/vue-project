import Vue from 'vue';
import favlist from './components/Favlist.vue';
import login from './components/Login.vue';
import header from './components/Header.vue';

// new Vue({
// 	el: 'favlist',
// 	render: h => h(favlist)
// })


var loginTool = new Vue({
	el: '#app',
	render: h => h(login)
});

// var header = new Vue({
// 	el: '.header',
// 	render: h => h(header)
// });