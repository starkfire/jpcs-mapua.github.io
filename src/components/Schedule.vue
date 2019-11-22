<template>
	<div class="schedule-page">
		<h1 class="schedule-intro">Schedule of Activities</h1>
		<div class="timeline-container">
			<ul class="timeline">
				<li class="event" data-date="13:30 - 14:00">
					<vk-card hover="true">
						<vk-card-title>Registration</vk-card-title>
					</vk-card>
				</li>
				<li class="event" data-date="14:00 - 14:40">
					<vk-card hover="true">
						<div slot="header">
							<vk-grid gutter="small" class="uk-flex-middle">
								<div class="uk-width-auto">
									<img class="uk-border-circle" width="70" height="70" src="../assets/images/SPK_8.jpg">
								</div>
								<div class="uk-width-expand">
									<vk-card-title class="uk-margin-remove-bottom">Ramon Lapitan</vk-card-title>
									<p class="uk-text-meta uk-margin-remove-top">Customer Experience Manager, Kalibrr</p>
								</div>
							</vk-grid>
						</div>
					</vk-card>
				</li>
				<li class="event" data-date="14:40 - 15:20">
					<vk-card hover="true">
						<div slot="header">
							<vk-grid gutter="small" class="uk-flex-middle">
								<div class="uk-width-auto">
									<img class="uk-border-circle" width="70" height="70" src="../assets/images/SPK_5.jpg">
								</div>
								<div class="uk-width-expand">
									<vk-card-title class="uk-margin-remove-bottom">Cristopher David</vk-card-title>
									<p class="uk-text-meta uk-margin-remove-top">Co-Founder & CTO, Veer Immersive Technologies</p>
								</div>
							</vk-grid>
						</div>
					</vk-card>
				</li>
				<li class="event" data-date="15:20 - 15:35">
					<vk-card hover="true">
						<vk-card-title>Coffee Break</vk-card-title>
					</vk-card>
				</li>
				<li class="event" data-date="15:35 - 16:15">
					<vk-card hover="true">
						<div slot="header">
							<vk-grid gutter="small" class="uk-flex-middle">
								<div class="uk-width-auto">
									<img class="uk-border-circle" width="70" height="70" src="../assets/images/SPK_2.jpg">
								</div>
								<div class="uk-width-expand">
									<vk-card-title class="uk-margin-remove-bottom">Dexter Baño Jr.</vk-card-title>
									<p class="uk-text-meta uk-margin-remove-top">Founder & CEO, OrbitX</p>
								</div>
							</vk-grid>
						</div>
					</vk-card>
				</li>
				<li class="event" data-date="16:15 - 16:55">
					<vk-card hover="true">
						<div slot="header">
							<vk-grid gutter="small" class="uk-flex-middle">
								<div class="uk-width-auto">
									<img class="uk-border-circle" width="70" height="70" src="../assets/images/SPK_7.jpg">
								</div>
								<div class="uk-width-expand">
									<vk-card-title class="uk-margin-remove-bottom">Ryan Uy</vk-card-title>
									<p class="uk-text-meta uk-margin-remove-top">Product & Marketing Head, Starpay</p>
								</div>
							</vk-grid>
						</div>
					</vk-card>
				</li>
				<li class="event" data-date="16:55 - 17:35">
					<vk-card hover="true">
						<div slot="header">
							<vk-grid gutter="small" class="uk-flex-middle">
								<div class="uk-width-auto">
									<img class="uk-border-circle" width="70" height="70" src="../assets/images/SPK_9.jpg">
								</div>
								<div class="uk-width-expand">
									<vk-card-title class="uk-margin-remove-bottom">Jojo Sy</vk-card-title>
									<p class="uk-text-meta uk-margin-remove-top">Business Development Manager, Complus</p>
								</div>
							</vk-grid>
						</div>
					</vk-card>
				</li>
				<li class="event" data-date="17:35 - 18:00">
					<vk-card hover="true">
						<vk-card-title>Closing Remarks</vk-card-title>
					</vk-card>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	
export default {
	name: 'Schedule'
};

</script>