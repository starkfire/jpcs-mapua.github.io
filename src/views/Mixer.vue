<template>
	<div>
		<HeaderPage></HeaderPage>
		<Partners></Partners>
		<EventDetails></EventDetails>
		<Intro></Intro>
		<IntroTwo></IntroTwo>
		<Speakers></Speakers>
		<Team></Team>
		<Footer></Footer>
	</div>
</template>
<script>
import HeaderPage from '../components/HeaderPage.vue';
import Partners from '../components/Partners.vue';
import EventDetails from '../components/EventDetails.vue';
import Intro from '../components/Intro.vue';
import IntroTwo from '../components/IntroTwo.vue';
import Speakers from '../components/Speakers.vue';
import Team from '../components/Team.vue';
import Footer from '../components/Footer.vue';

export default {
	name: 'Mixer',
	components: {
		'HeaderPage': HeaderPage,
		'Partners': Partners,
		'EventDetails': EventDetails,
		'Intro': Intro,
		'IntroTwo': IntroTwo,
		'Speakers': Speakers,
		'Team': Team,
		'Footer': Footer
	}
};

</script>