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
	<div class="santa">
		<div class="cartoon drawing">
			<div class="leg one"></div>
			<div class="leg two"></div>
			<div class="hands r"></div>
			<div class="arm"></div>
			<div class="body">
				<div class="belt"></div>
				<div class="suitbuttons r"></div>
			</div>
			<div class="longbeard"></div>
			<div class="face r"></div>
			<div class="mustacheleft" style="transform: rotate(-{cookiesEaten}deg);"></div>
			<div
				class="mustacheright"
				style="transform: translate(-100%, 0) rotate({cookiesEaten}deg);"
			></div>
			<div class="cheeks r"></div>
			<div
				class="eyes r"
				style="border-radius: 0; width: {level}%; {cookiesEaten > 20 && 'border-radius: 100%;'}"
			></div>
			<div class="hat one drawing"></div>
		</div>
	</div>
</main>

<style>
	main {
		height: fit-content;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #0f885f;
		flex-direction: column;
	}

	.controls {
		display: flex;
		flex-direction: column;
		padding: 2rem;
	}

	.santa {
		height: 50rem;
		width: 30rem;
	}

	.cartoon {
		--skin: #ffccaa;
		--beard: #efefef;
		--eyes: #630;
		--cheeks: #f002;
		--belt: #121;
		--belt-buckle: yellow;
		--suit: #a00;
	}

	.cartoon {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -20%);
		width: 80vmin;
		height: 80vmin;
	}

	.cartoon div {
		position: absolute;
		box-sizing: border-box;
	}

	.r {
		border-radius: 100%;
	}
	.drawing::before,
	.one::after {
		content: '';
		display: block;
		position: absolute;
		box-sizing: border-box;
	}

	.two::after {
		content: '';
		display: block;
		position: absolute;
		box-sizing: border-box;
	}

	.face {
		width: 25%;
		height: 25%;
		background: var(--skin);
		top: 10%;
		left: 50%;
		transform: translate(-50%, 0);
	}

	.longbeard {
		width: 30%;
		height: 40%;
		background: var(--beard);
		top: 10%;
		left: 50%;
		transform: translate(-50%, 0);
		border-radius: 100% / 120% 120% 80% 80%;
	}

	.mustacheleft,
	.mustacheright {
		width: 10%;
		height: 10%;
		background: #fff;
		border-radius: 100% 20% 100% 0;
		top: 31%;
		left: 51%;
		transform-origin: top right;
	}

	.mustacheleft {
		left: 49%;
		border-radius: 20% 100% 0 100%;
		transform-origin: top left;
	}

	.eyes {
		width: 2%;
		height: 2%;
		background: var(--eyes);
		top: 23%;
		left: 45%;
	}
	.eyes {
		width: 2%;
		height: 2%;
		background: var(--eyes);
		top: 23%;
		left: 45%;
		box-shadow: 6.66vmin 0 var(--eyes);
	}

	.cheeks {
		width: 5%;
		height: 3%;
		background: var(--cheeks);
		top: 25.5%;
		left: 43%;
		box-shadow: 7.25vmin 0 var(--cheeks);
	}

	.body {
		width: 45%;
		height: 50%;
		background: var(--suit);
		border-radius: 100% / 150% 150% 25% 25%;
		top: 35%;
		left: 50%;
		transform: translate(-50%, 0);
		background-image: radial-gradient(
				circle at 50% -50%,
				transparent 75%,
				var(--belt) 0 83%,
				transparent 0
			),
			linear-gradient(to right, transparent 42%, white 43% 57%, transparent 58%);
	}

	.arm {
		width: 60%;
		height: 40%;
		background: #a00;
		border-radius: 100% / 170% 170% 25% 25%;
		top: 37%;
		left: 50%;
		transform: translate(-50%, 0);
		box-shadow: inset 0 0 0 10vmin #0002;
		background-image: linear-gradient(transparent 20%, #0003);
	}

	.belt {
		width: 20%;
		height: 15%;
		border: 1vmin solid var(--belt-buckle);
		border-radius: 1vmin;
		top: 75%;
		left: 50%;
		transform: translate(-50%, -50%);
		background: var(--belt-buckle);
		box-shadow: inset 1vmin 0 0 1.75vmin var(--belt);
	}

	.suitbuttons {
		width: 5%;
		height: 5%;
		background: var(--belt);
		color: var(--belt);
		top: 33%;
		left: 50%;
		transform: translate(-50%, 0);
		box-shadow:
			0 5vmin,
			0 10vmin 0 0.1vmin,
			0 22vmin;
		opacity: 0.75;
	}

	.hat {
		width: 23%;
		height: 20%;
		background: var(--suit);
		border-radius: 100% 20% 0 0;
		top: -2%;
		left: 50%;
		transform: translate(-50%, 0) rotate(1deg);
	}

	.hat::before {
		width: 110%;
		height: 40%;
		border-radius: 100% / 50%;
		bottom: -17%;
		left: -5%;
		box-shadow: inset 0 4vmin white;
		transform: rotate(-2deg);
	}

	.hat::after {
		width: 8vmin;
		height: 8vmin;
		border-radius: 50%;
		background: var(--beard);
		right: -5vmin;
		top: -15%;
	}

	.hands {
		width: 13%;
		height: 13%;
		background: var(--belt);
		top: 70%;
		left: 18%;
		box-shadow: 41vmin 0 var(--belt);
	}

	.leg {
		width: 19%;
		height: 25%;
		background: var(--suit);
		transform: skew(2deg);
		top: 75%;
		left: 29%;
		background-image: linear-gradient(#0002, transparent 70%, var(--belt) 0);
	}

	.leg + .leg {
		left: 52%;
	}

	.leg::after {
		width: 110%;
		height: 20%;
		background: black;
		bottom: 0;
		left: -6%;
		border-radius: 10vmin 10vmin 0 0;
	}
</style>
