<template>
	<div>
		<HeaderPage></HeaderPage>
		<EventDetails></EventDetails>
		<Schedule></Schedule>
		<Footer></Footer>
	</div>
</template>
<script>
import HeaderPage from '../components/HeaderPage.vue';
import EventDetails from '../components/EventDetails.vue';
import Schedule from '../components/Schedule.vue';
import Footer from '../components/Footer.vue';

export default {
	name: 'Mixer',
	components: {
		'HeaderPage': HeaderPage,
		'EventDetails': EventDetails,
		'Schedule': Schedule,
		'Footer': Footer
	}
};

</script>