<script lang="ts">
	import { fade, slide, fly } from 'svelte/transition'
	import type { PageData } from './$types'
	export let data: PageData

	let namesList = data.list
	namesList = [{ name: 'Din', tally: '100' }, ...namesList]
	let name: String
	let tally: String

	function addName() {
		if (name && (tally || tally === 0)) {
			if (name.toUpperCase() === 'AMELA' && Number(tally) > 0) {
				namesList = [{ name: name, tally: `Nemoj lagati Amela, cuj ${tally}` }, ...namesList]
				name = ''
				tally = ''
				return
			}
			namesList = [{ name: name, tally: tally }, ...namesList]
			name = ''
			tally = ''
		}
	}
</script>

<main>
	<h1>KeepTally 2.0</h1>
	<svg
		height="5rem"
		width="5rem"
		version="1.1"
		id="Layer_1"
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
		viewBox="0 0 511.989 511.989"
		xml:space="preserve"
		class="elf"
	>
		<g>
			<path
				style="fill:#DDAB9F;"
				d="M415.62,271.041c-3.531-4.391-8.781-4.391-11.016-4.391c-8.749,0-27.78,3.156-45.843,8.969
		c-25.155,8.124-42.155,19.03-50.545,32.437c-7.406,11.874-7.812,25.343-1.172,38.952c4.625,9.5,12.562,14.719,22.358,14.719l0,0
		c14.312,0,31.921-11.281,53.858-34.469c15.281-16.171,29.468-35.233,33.14-42.89C419.464,277.963,417.667,273.588,415.62,271.041z"
			/>
			<path
				style="fill:#DDAB9F;"
				d="M72.002,275.619c-18.062-5.812-37.109-8.969-45.851-8.969c-2.234,0-7.477,0-11.008,4.391
		c-2.055,2.547-3.852,6.922-0.789,13.327c3.664,7.656,17.859,26.719,33.132,42.874c21.937,23.203,39.562,34.484,53.874,34.484
		c9.789,0,17.726-5.219,22.359-14.719c6.641-13.609,6.227-27.078-1.188-38.952C114.15,294.649,97.15,283.743,72.002,275.619z"
			/>
		</g>
		<path
			style="fill:#EAC6BB;"
			d="M354.043,322.555c0,104.623-89.764,189.434-138.669,189.434
	c-48.897,0-138.661-84.811-138.661-189.434c0-104.606,62.085-189.417,138.661-189.417
	C291.967,133.138,354.043,217.948,354.043,322.555z"
		/>
		<path
			style="fill:#A0D468;"
			d="M477.932,123.356c-23.469-41.718-52.281-73.514-85.654-94.498C361.825,9.703,328.498,0,293.233,0
	c-31.609,0-64.117,8.141-94.014,23.546c-28.695,14.781-54.483,35.921-74.577,61.14c-18,22.593-30.733,47.296-37.843,73.389
	c-7.609,27.953-8.289,55.968-2.031,83.295l1.898,8.281h252.893l-0.719-11.343c-2.797-43.546,13.938-71.155,28.469-86.639
	c13.344-14.234,36.015-28.609,56.545-28.609c5.922,0,10.609,1.406,12.578,3.75c1.266,1.547,1.609,3.984,1.016,7.281
	c-0.578,3.188,0.266,6.438,2.328,8.906c2.094,2.5,5.219,3.938,8.594,3.938c0,0,0.016,0,0.031,0c1.844,0,5.328-0.047,24.562-8.593
	l10.719-4.766L477.932,123.356z"
		/>
		<path
			style="fill:#E6E9ED;"
			d="M499.274,126.966c0,23.187-18.78,41.983-41.968,41.983s-41.968-18.796-41.968-41.983
	s18.78-41.968,41.968-41.968S499.274,103.779,499.274,126.966z"
		/>
		<g>
			<path
				style="fill:#434A54;"
				d="M172.711,341.32c-5.891,0-10.664,4.781-10.664,10.672s4.773,10.656,10.664,10.656
		s10.664-4.766,10.664-10.656S178.601,341.32,172.711,341.32z"
			/>
			<path
				style="fill:#434A54;"
				d="M258.045,341.32c-5.891,0-10.671,4.781-10.671,10.672s4.781,10.656,10.671,10.656
		s10.664-4.766,10.664-10.656S263.935,341.32,258.045,341.32z"
			/>
			<path
				style="fill:#434A54;"
				d="M236.709,405.147c-4.367,0-8.109,2.624-9.766,6.39c-0.258,0.484-2.156,3.531-8.664,4.281h-6.094
		c-6.18-0.719-7.984-3.516-8.281-4.062c-1.602-3.875-5.414-6.608-9.859-6.608c-5.891,0-10.672,4.78-10.672,10.671
		c0,1.266,0.234,2.484,0.641,3.609h-0.008c2.383,6.641,11.648,17.891,31.226,17.891c19.054,0,28.523-10.672,31.265-17.266
		c0.031-0.078,0.055-0.141,0.078-0.203c0.031-0.062,0.062-0.125,0.086-0.188h-0.008c0.461-1.203,0.719-2.484,0.719-3.844
		C247.373,409.928,242.6,405.147,236.709,405.147z M226.881,411.678c-0.047,0.094-0.078,0.203-0.117,0.312l-0.008-0.016
		C226.756,411.974,226.787,411.865,226.881,411.678z M204.078,412.209h-0.008c-0.047-0.141-0.094-0.281-0.148-0.406
		C203.953,411.881,204.007,412.006,204.078,412.209z"
			/>
		</g>
		<path
			style="fill:#E6E9ED;"
			d="M364.715,277.322c0,11.78-9.562,21.327-21.344,21.327H87.377c-11.781,0-21.328-9.547-21.328-21.327
	v-21.328c0-11.781,9.546-21.343,21.328-21.343h255.994c11.781,0,21.344,9.562,21.344,21.343V277.322z"
		/>
	</svg>
	<form on:submit|preventDefault={addName} class="controls">
		<label for="name">Name:</label>
		<input type="text" id="name" placeholder="name" bind:value={name} />

		<label for="tally">Tally:</label>
		<input type="number" id="tally" placeholder="tally" bind:value={tally} />

		<button tabindex="0">Add new</button>
	</form>

	<div class="names-list-container">
		<div class="list-header">
			<li class="name">Name</li>
			<li class="tally">Tally</li>
		</div>
		<ul class="names-list">
			{#if namesList}
				<div class="child-name">
					{#each namesList as item}
						<li in:fade={{ duration: 3 }}>{item.name}</li>
					{/each}
				</div>
				<div class="tally-count">
					{#each namesList as item}
						{#if item.tally <= 0 && item.name.toUpperCase() !== 'AMELA'}
							<li class="naughty" in:fade={{ duration: 3 }}>{item.tally}</li>
						{:else if item.tally > 0 && item.name.toUpperCase() !== 'AMELA'}
							<li class="nice" in:fade={{ duration: 3 }}>{item.tally}</li>
						{:else if item.tally <= 0 && item.name.toUpperCase() === 'AMELA'}
							<li class="naughty" in:fade={{ duration: 3 }}>{item.tally}</li>
						{:else}
							<li in:fade={{ duration: 3 }}>{item.tally}</li>
						{/if}
					{/each}
				</div>
			{:else}
				<li>Error loading list</li>
			{/if}
		</ul>
	</div>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		background-color: #278d38;
		height: fit-content;
		gap: 3rem;
		padding: 3rem;
	}
	h1 {
		font-size: 3rem;
	}

	.controls {
		display: flex;
		justify-content: space-around;
		background-color: rgba(48, 255, 255, 0.75);
		padding: 2rem;
		border-radius: 20px;
		width: 40rem;
	}
	.controls button {
		background: rgba(0, 0, 255, 0.25);
		border: black solid 1px;
		outline: none;
		box-shadow: none;
		cursor: pointer;
		color: white;
	}
	.controls button:hover {
		background: rgba(0, 0, 255, 0.5);
	}

	.controls button:active {
		background: rgba(0, 0, 255, 0.75);
	}

	.controls button:focus {
		outline: auto;
	}

	.names-list-container {
		background-color: rgba(255, 255, 255, 75%);
		padding: 2rem;
		border-radius: 20px;
		width: 45rem;
		list-style: none;
		overflow: hidden;
	}

	.list-header {
		display: grid;
		grid-template-rows: 2rem;
		grid-template-columns: 22rem 22rem;
		font-size: 2rem;
		text-align: center;
		border-bottom: black 2px solid;
		padding-bottom: 1rem;
		width: 44rem;
	}

	.name {
		grid-row: 1 / 1;
		grid-column: 1 / 1;
	}
	.tally {
		grid-row: 1 / 1;
		grid-column: 2 / 2;
	}
	.names-list {
		display: grid;
		grid-template-rows: 3rem;
		grid-template-columns: 22rem 22rem;
		overflow: scroll;
		height: 30rem;
		text-align: center;
		padding-top: 1rem;
	}
	.names-list li {
		margin: 1rem 0;
	}

	.child-name {
		grid-row: 1 / 1;
		grid-column: 1 / 1;
	}
	.tally-count {
		grid-row: 1 / 1;
		grid-column: 2 / 2;
	}
	.naughty {
		color: red;
	}
	.nice {
		color: green;
	}

	@media (max-width: 768px) {
		.controls {
			flex-direction: column;
			align-items: center;
			margin-top: 3rem;
			border-radius: 20px;
			width: 20rem;
		}
		.controls label {
			display: none;
		}
		.controls input {
			margin: 0.5rem;
			font-size: 1.1rem;
			text-align: center;
		}
		.controls input::placeholder {
			text-align: center;
			color: rgba(70, 70, 255, 0.584);
		}
		.controls input:focus::placeholder {
			color: transparent;
		}

		.controls button {
			margin-top: 1rem;
			width: 10rem;
			height: 3rem;
		}
		.controls button:hover {
			background: rgba(0, 0, 255, 0.25);
		}
		.names-list-container {
			padding: 2rem;
			border-radius: 20px;
			width: 20rem;
		}

		.list-header {
			grid-template-rows: 2rem;
			grid-template-columns: 10rem 10rem;
			font-size: 1.2rem;
			padding-bottom: 1rem;
			width: 21rem;
		}
		.names-list {
			grid-template-rows: 3rem;
			grid-template-columns: 10rem 10rem;
			padding-top: 1rem;
		}
		.names-list li {
			margin: 1rem 0;
			height: 3rem;
		}
		.elf {
			margin-bottom: -3rem;
			width: 8rem;
			height: 8rem;
		}
	}
	@media (max-width: 460px) {
		.controls {
			flex-direction: column;
			align-items: center;
			margin-top: 3rem;
			border-radius: 20px;
			width: 16rem;
		}
		.controls label {
			display: none;
		}
		.controls input {
			font-size: 1.1rem;
		}
		.controls input::placeholder {
			text-align: center;
		}
		.controls button {
			width: 10rem;
			height: 2.5rem;
		}
		.controls button:hover {
			background: rgba(0, 0, 255, 0.25);
		}
		.names-list-container {
			padding: 2rem;
			margin: 3rem;
			border-radius: 20px;
			width: 16rem;
		}

		.list-header {
			grid-template-rows: 2rem;
			grid-template-columns: 8rem 8rem;
			font-size: 1.2rem;
			padding-bottom: 1rem;
			width: 15rem;
		}
		.names-list {
			grid-template-rows: 3rem;
			grid-template-columns: 8rem 8rem;
			padding-top: 1rem;
		}
		.names-list li {
			margin: 1rem 0;
			height: 4rem;
			text-align: center;
		}
	}
</style>
