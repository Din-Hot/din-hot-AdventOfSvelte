<script>
	import SnowflakeBg from '$lib/components/SnowflakeBG.svelte'
</script>

<main>
	<SnowflakeBg>
		<div class="title">
			<h1>Advent of Svelte challenge <span>by Din Hot</span></h1>
			<p>
				My solutions to <a href="https://advent.sveltesociety.dev/">advent.sveltesociety.dev</a>
			</p>
		</div>
	</SnowflakeBg>
</main>

<style>
	main {
		height: 100vh;
	}
	.title {
		position: relative;
		display: flex;
		flex-direction: column;
	}

	h1 {
		font-weight: 400;
		font-style: normal;
		color: rgba(255, 62, 0, 75%);
		font-size: 5rem;
		letter-spacing: 4px;
		text-align: center;
	}
	span {
		color: white;
		margin-top: 1rem;
		display: block;
		font-size: 2rem;
		font-style: italic;
	}

	p {
		margin-top: 1rem;
		color: white;
		font-size: 2rem;
		letter-spacing: 4px;
		text-align: center;
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
		span {
			font-size: 1rem;
		}
	}
	@media (max-width: 460px) {
		h1 {
			font-size: 3rem;
			letter-spacing: 2px;
			margin: 0px 1rem;
		}
		p {
			letter-spacing: 2px;
			margin: 2rem 1rem;
		}
	}
</style>
