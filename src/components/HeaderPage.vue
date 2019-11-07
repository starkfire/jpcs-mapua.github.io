<template>
	<div class="landing-page">
		<vk-navbar transparent>
			<vk-navbar-nav slot="center">
				<img class="navbar-jpcs-logo" src="../assets/images/jpcs.png">
			</vk-navbar-nav>
			<vk-navbar-nav slot="right">
				<!--<vk-navbar-nav-item title="Register"></vk-navbar-nav-item>-->
				<vk-button class="register-nav">Register</vk-button>
			</vk-navbar-nav>
		</vk-navbar>
		<vk-grid class="uk-child-width-expand@s uk-text-center">
			<div>
				<p class="landing-title">STARTCON 2019</p>
				<p class="landing-subtitle">Mapua University, Muralla St, Intramuros, Manila</p>
			</div>
			<div>
			</div>
		</vk-grid>
	</div>
</template>
<script>
export default {
	name: 'HeaderPage'
};
</script>