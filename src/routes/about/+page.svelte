<script lang="ts">
	import SnowflakeBg from '$lib/components/SnowflakeBG.svelte'
</script>

<SnowflakeBg>
	<div class="container">
		<h1>About page</h1>
		<p>Description of the challenge will go here...</p>
	</div>
</SnowflakeBg>

<style>
	.container {
		display: flex;
		height: 100vh;
		width: 100vw;
		flex-direction: column;
	}

	h1 {
		font-size: 3rem;
		color: #fff;
		margin: 5rem auto;
	}
	p {
		font-size: 1rem;
		color: #fff;
		margin: 6rem auto;
		font-weight: 200;
	}
</style>
