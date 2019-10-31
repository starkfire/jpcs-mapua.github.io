<template>
	<div class="landing-page">
		<vk-navbar transparent>
			<vk-navbar-nav slot="center">
				<img class="navbar-jpcs-logo" src="../assets/images/jpcs.png">
			</vk-navbar-nav>
			<vk-navbar-nav slot="right">
				<vk-navbar-nav-item title="Register"></vk-navbar-nav-item>
			</vk-navbar-nav>
		</vk-navbar>
		<p class="landing-title">Startup Mixer 3.0</p>
		<p class="landing-subtitle">Seminar Room, Mapua University, Muralla St, Intramuros, Manila</p>
	</div>
</template>
<script>
export default {
	name: 'HeaderPage'
};
</script>