import Vue from 'vue';
import favlist from './components/Favlist.vue';
import simpleCounter from './components/Simple-counter.vue';

// new Vue({
// 	el: '#app',
// 	render: h => h(favlist)
// })

var app = new Vue({
	el: '#app',
	data: {
		message: 'hello world'
	}
});

var data = { counter: 0 }
new Vue({
  el: 'simple-counter',
  render: h => h(simpleCounter)
})