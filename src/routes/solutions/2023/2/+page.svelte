<script lang="ts">
	let cookiesEaten = 0
	let level = 0
	let message = '  '
	let properties = [
		'height: 10%;background-color: black;',
		'height: 12%;background-color: black; border-radius: 50%;',
		'border-top: 0.5rem solid black;border-radius: 5rem 5rem 0 0;',
		'height: 30%;background-color: black;border-radius: 50%;'
	]

	$: if (cookiesEaten < 0) {
		cookiesEaten = 0
		message = "Can't remove what wasn't eaten, duh 🙄"
		setTimeout(() => {
			message = '  '
		}, 3000)
	}
	$: if (cookiesEaten > 25) {
		cookiesEaten = 25
		message = "Santa can't eat no more ✋"
		setTimeout(() => {
			message = '  '
		}, 3000)
	}

	function cookie(action: String) {
		if (action === 'eat') {
			cookiesEaten++
		} else if (action === 'remove') {
			cookiesEaten--
		} else {
			cookiesEaten = 0
		}
		checkLevel()
	}

	function checkLevel() {
		if (cookiesEaten === 0 || cookiesEaten < 0) {
			level = 0
		} else if (cookiesEaten < 6 && cookiesEaten !== 0) {
			level = 1
		} else if (cookiesEaten >= 6 && cookiesEaten < 12) {
			level = 2
		} else if (cookiesEaten >= 12 && cookiesEaten < 20) {
			level = 3
		} else if (cookiesEaten >= 20) {
			level = 4
		}
		console.log(level)
	}
</script>

<main>
	<p class="cookies-count">{cookiesEaten} cookies eaten</p>

	<div class="controls">
		{#if cookiesEaten === 25}
			<a href="#message"><button on:click={() => cookie('eat')}>Eat 1 cookie</button></a>
		{:else}
			<button on:click={() => cookie('eat')}>Eat 1 cookie</button>
		{/if}

		{#if cookiesEaten === 0}
			<a href="#message"
				><button on:click={() => cookie('remove')}>Remove 1 cookie (don't ask where it goes)</button
				></a
			>
		{:else}
			<button on:click={() => cookie('remove')}>Remove 1 cookie (don't ask where it goes)</button>
		{/if}

		<a href=""><button on:click={() => cookie('reset')}>Reset count</button></a>
	</div>

	<div class="santa-container">
		<div class="santa">
			<div class="beard"></div>
			<div class="head">
				<div class="eye1" style={properties[level]}>
					{#if level === 4}
						<i class="fa-solid fa-cookie" style={properties[4]}></i>
					{/if}
				</div>
				<div class="eye2" style={properties[level]}>
					{#if level === 4}
						<i class=" fa-solid fa-cookie"></i>
					{/if}
				</div>
				<div class="nose"></div>
				<div class="mouth"></div>
			</div>
			<div class="mustache-left" style="transform: rotate(-{cookiesEaten + 10}deg);"></div>
			<div class="mustache-right" style="transform: rotate({cookiesEaten + 10}deg);"></div>
			<div class="hat-top"></div>
			<div class="hat-bottom"></div>
			<div class="hat-ball"></div>
		</div>
	</div>
	<div class="message" id="message">{message}</div>
</main>

<style>
	main {
		height: 100vh;
		display: flex;
		justify-content: space-around;
		align-items: center;
		background-color: #0f885f;
		flex-direction: column;
		gap: 1rem;
	}

	a {
		text-decoration: none;
		color: white;
	}

	.message {
		font-size: 1.5rem;
		margin-bottom: 3rem;
	}

	.cookies-count {
		margin-top: 1rem;
		font-size: 2rem;
	}
	.controls {
		display: flex;
		flex-direction: row;
		gap: 0.5rem;
		text-align: center;
		align-items: center;
	}

	.controls button {
		width: fit-content;
		border: 0;
		padding: 1rem;
		background-color: blue;
		color: white;
		border-radius: 20px;
		cursor: pointer;
		touch-action: manipulation;
	}

	.santa-container {
		margin: 0.5rem;
	}
	.santa {
		display: flex;
		position: relative;
		height: 30rem;
		width: 30rem;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
	}

	.beard {
		background-color: rgb(240, 240, 240);
		position: absolute;
		height: 50%;
		width: 50%;
		top: 40%;
		left: 25%;
		border-radius: 0 50% 50% 50%;
		transform: rotate(-135deg);
	}

	.mustache-left,
	.mustache-right {
		position: absolute;
		width: 10%;
		height: 10%;
		background-color: white;
		border-radius: 100% 20% 100% 0;
		top: 72%;
		left: 41%;
		transform-origin: top right;
		z-index: 3;
	}

	.mustache-left {
		left: 49%;
		border-radius: 20% 100% 0 100%;
		transform-origin: top left;
	}
	.head {
		background-color: bisque;
		position: absolute;
		height: 16%;
		width: 40%;
		top: 50%;
		left: 30%;
		border-radius: 2rem;
	}

	.hat-top {
		position: absolute;
		background-color: red;
		height: 40%;
		width: 36%;
		top: 2%;
		left: 32%;
		border-radius: 0 20rem 0 0;
	}
	.hat-ball {
		position: absolute;
		background-color: white;
		width: 7%;
		height: 7%;
		left: 25%;
		border-radius: 50%;
	}

	.hat-bottom {
		position: absolute;
		height: 12%;
		width: 50%;
		background-color: white;
		top: 40%;
		left: 25%;
		border-radius: 4rem;
	}

	.eye1,
	.eye2 {
		position: inherit;
		height: 30%;
		width: 16%;
		top: 40%;
		font-size: 2rem;
	}
	.eye1 {
		left: 21%;
	}
	.eye2 {
		left: 63%;
	}
	.nose {
		position: inherit;
		background-color: bisque;
		height: 54%;
		width: 30%;
		border-radius: 50%;
		top: 80%;
		left: 35%;
		z-index: 4;
	}
	.mouth {
		position: inherit;
		background-color: black;
		height: 30%;
		width: 40%;
		border-radius: 0 0 5rem 5rem;
		top: 155%;
		left: 30%;
	}

	@media (max-width: 768px) {
		.santa {
			height: 25rem;
			width: 25rem;
		}
		.eye1,
		.eye2 {
			font-size: 170%;
		}
		.controls {
			padding: 0;
			flex-direction: column;
		}
		.message {
			font-size: 1rem;
		}
	}
	@media (max-width: 460px) {
		.santa {
			height: 18rem;
			width: 18rem;
		}
		.eye1,
		.eye2 {
			font-size: 120%;
		}
	}
</style>
