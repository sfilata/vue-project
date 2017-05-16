<template>
	<div id="index">
		<h1>{{ msg }}</h1>
	    <div v-for="n in 5">{{ n }}</div>
	</div>
</template>

<script>
    export default {
        data () {
            return {
                msg: 'Hello World!'
            }
        }
    }
</script>

<style>
    html {
        background: green;
    }
</style>	