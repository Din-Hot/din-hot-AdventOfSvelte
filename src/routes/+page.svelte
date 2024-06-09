<script>
	import Snowflakes from '$lib/components/Snowflakes.svelte'
</script>

<Snowflakes>
	<div class="title">
		<h1>Advent of Svelte challenge by Din Hot</h1>
		<p>My solutions to <a href="https://advent.sveltesociety.dev/">advent.sveltesociety.dev</a></p>
	</div>
</Snowflakes>

<style>
	.title {
		position: relative;
		display: flex;
		flex-direction: column;
	}

	h1 {
		font-family: 'Poppins', sans-serif;
		font-weight: 400;
		font-style: normal;
		color: white;
		font-size: 5rem;
		letter-spacing: 4px;
		text-align: center;
	}

	p {
		margin-top: 2rem;
		color: white;
		font-size: 1rem;
		letter-spacing: 4px;
		text-align: center;
		font-family: 'Poppins', sans-serif;
		font-weight: 100;
		font-style: normal;
	}

	a {
		color: white;
		text-decoration: none;
	}
	a:hover {
		text-decoration: underline;
	}
	@media (max-width: 768px) {
		h1 {
			font-size: 4rem;
			margin: 0 1rem;
		}
		p {
			font-size: 0.75rem;
			margin: 2rem 1rem;
		}
	}
	@media (max-width: 460px) {
		h1 {
			font-size: 3rem;
			letter-spacing: 2px;
			margin: 0px 1rem;
		}
		p {
			font-size: 0.5rem;
			letter-spacing: 2px;
			margin: 2rem 1rem;
		}
	}
</style>
