<template>
	<Mixer></Mixer>
</template>
<script>
import Vue from 'vue';
import Vuikit from 'vuikit';
import VuikitIcons from '@vuikit/icons';
import '@vuikit/theme';
import Mixer from './views/Mixer.vue';

Vue.use(Vuikit);
Vue.use(VuikitIcons);

export default {
	name: 'app',
	components: {
		'Mixer': Mixer
	}
};
</script>