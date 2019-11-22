<template>
	<div class="landing-page">
		<vk-navbar transparent>
			<vk-navbar-nav slot="center">
				<img class="navbar-jpcs-logo" src="../assets/images/jpcs.png">
			</vk-navbar-nav>
			<vk-navbar-nav slot="right">
				<vk-button class="register-nav" type="primary" href="https://jpcsmapua.typeform.com/to/Y5pCnJ">Register</vk-button>
			</vk-navbar-nav>
		</vk-navbar>
		<vk-grid class="uk-child-width-expand@s uk-text-center">
			<div class="landing-left">
				<p class="landing-title">STARTCON 2019</p>
				<p class="landing-subtitle">A JPCS-Mapúa Startup Mixer Conference</p>
				<!--<img src="../assets/images/developh.png" class="developh-logo">-->
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