<script lang="ts">
	let cookiesEaten = 0
	let level = 5

	function cookie(action: String) {
		if (action === 'eat') {
			cookiesEaten++
			checkLevel()
		} else if (action === 'remove') {
			cookiesEaten--
			checkLevel()
		} else {
			cookiesEaten = 0
			checkLevel()
		}
	}

	function checkLevel() {
		if (cookiesEaten <= 0) {
			level = 5
		} else if (cookiesEaten > 6) {
			level = 4
		} else if (cookiesEaten > 12) {
			level = 3
		} else if (cookiesEaten > 20) {
			level = 2
		}
	}
</script>

<main>
	<div class="controls">
		<button on:click={() => cookie('eat')}>Eat 1 cookie</button>
		<button on:click={() => cookie('remove')}>Remove 1 cookie (don't ask where it goes)</button>
		<button on:click={() => cookie('reset')}>Reset count</button>
		<p>{cookiesEaten} cookies eaten</p>
	</div>

	<div class="santa-container">
		<div class="santa">
			<div class="beard"></div>
			<div class="head">
				<div class="eye1"></div>
				<div class="eye2"></div>
				<div class="nose"></div>
				<div class="mouth"></div>
			</div>
			<div class="mustache-left"></div>
			<div class="mustache-right"></div>
			<div class="hat-top"></div>
			<div class="hat-bottom"></div>
			<div class="hat-ball"></div>
		</div>
	</div>
</main>

<style>
	main {
		height: 100vh;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #0f885f;
		flex-direction: column;
		gap: 2rem;
	}

	.controls {
		display: flex;
		flex-direction: column;
		padding: 2rem;
	}

	.santa-container {
		margin-bottom: 20rem;
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
		transform: rotate(25deg);
	}

	.mustache-left {
		left: 49%;
		border-radius: 20% 100% 0 100%;
		transform-origin: top left;
		transform: rotate(-25deg);
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
		border-top: 0.5rem solid black;
		border-radius: 5rem 5rem 0 0;
		top: 40%;
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
</style>
