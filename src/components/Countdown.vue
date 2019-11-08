<template>
	<vk-grid class="uk-child-width-expand@s" id="countdown">
		<div>
			{{ days }}
			<p class="time-label">Days</p>
		</div>
		<div>
			{{ hours }}
			<p class="time-label">Hours</p>
		</div>
		<div>
			{{ minutes }}
			<p class="time-label">Minutes</p>
		</div>
		<div>
			{{ seconds }}
			<p class="time-label">Seconds</p>
		</div>
	</vk-grid>
</template>
<script>

export default {
	name: 'Countdown',
	props: ['starttime', 'endtime'],
	data(){
		return {
			start: '',
			end: '',
			interval: '',
			days: '',
			minutes: '',
			hours: '',
			seconds: ''
		}
	},
	mounted(){
		this.start = new Date(this.starttime).getTime();
		this.end = new Date(this.endtime).getTime();
		this.timerCount(this.start, this.end);
		this.interval = setInterval(() => {
			this.timerCount(this.start, this.end);
		}, 1000);
	},
	methods: {
		timerCount(start, end){
			var now = new Date().getTime();
			var distance = start - now;
			var passTime = end - now;

			if(distance < 0 && passTime < 0){
				clearInterval(this.interval);
				return;
			}else if(distance < 0 && passTime > 0){
				this.calcTime(passTime);
			}else if(distance > 0 && passTime > 0){
				this.calcTime(distance);
			}
		},
		calcTime(dist){
			this.days = Math.floor(dist / (1000 * 60 * 60 * 24));
			this.hours = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			this.minutes = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
			this.seconds = Math.floor((dist % (1000 * 60)) / 1000);
		}
	}
};


</script>