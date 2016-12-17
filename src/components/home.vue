<template>
	<div id="home">
		<h2>This is the home panel</h2>
		<transition enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutRight">
			<router-view></router-view>
		</transition>
	</div>
</template>