<script lang="ts">
	import Accordion from '$lib/components/Accordion.svelte'
	import Snowflakes from '$lib/components/Snowflakes.svelte'
</script>

<Snowflakes>
	<div class="container">
		<h1>2023 Challenges</h1>
		<div class="accordion">
			<Accordion />
		</div>
	</div>
</Snowflakes>

<style>
	.container {
		display: flex;
		align-items: center;
		height: 100vh;
		width: 100vw;
		flex-direction: column;
	}

	h1 {
		font-size: 3rem;
		height: 3rem;
		margin: 0 auto;
		color: #fff;
		font-weight: 400;
		margin-top: 5rem;
	}

	.accordion {
		width: 40rem;
		overflow: hidden;
		margin: 5rem;
	}
	@media (max-width: 768px) {
		.accordion {
			width: 25rem;
		}
	}
	@media (max-width: 460px) {
		.accordion {
			width: 20rem;
		}
	}
</style>
