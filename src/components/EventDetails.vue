<template>
	<div class="eventdetails-page">
		<vk-grid class="uk-child-width-expand@s uk-text-center">
			<div class="eventdetails-content">
				<p class="eventdetails-venue">Mapúa University, Manila</p>
				<p class="eventdetails-time">Nov. 22, 2019 | 10:00 PHT </p>
				<vk-grid class="uk-child-width-expand@s uk-text-center">
					<div></div>
					<div><Countdown starttime="Nov 8, 2019 16:40:00" endtime="Nov 22, 2019 12:00:00"></Countdown></div>
					<div></div>
				</vk-grid>
			</div>
		</vk-grid>
	</div>
</template>
<script>
import Countdown from './Countdown.vue';

export default {
	name: 'EventDetails',
	components: {
		Countdown
	}
};

</script>