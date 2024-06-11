<script lang="ts">
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
	<form on:submit|preventDefault={addName} class="controls">
		<label for="name">Name:</label>
		<input type="text" id="name" placeholder="name" bind:value={name} />

		<label for="tally">Tally:</label>
		<input type="number" id="tally" placeholder="tally" bind:value={tally} />

		<button>Add New</button>
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
						<li>{item.name}</li>
					{/each}
				</div>
				<div class="tally-count">
					{#each namesList as item}
						{#if item.tally <= 0 && item.name.toUpperCase() !== 'AMELA'}
							<li class="naughty">{item.tally}</li>
						{:else if item.tally > 0 && item.name.toUpperCase() !== 'AMELA'}
							<li class="nice">{item.tally}</li>
						{:else if item.tally <= 0 && item.name.toUpperCase() === 'AMELA'}
							<li class="naughty">{item.tally}</li>
						{:else}
							<li>{item.tally}</li>
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
		justify-content: center;
		align-items: center;
		background-color: #278d38;
		height: 100vh;
	}

	.controls {
		display: flex;
		justify-content: space-around;
		background-color: rgba(255, 255, 255, 75%);
		padding: 2rem;
		margin-top: 5rem;
		border-radius: 20px;
		width: 40rem;
	}
	.controls button {
		background: rgba(0, 0, 255, 0.25);
		border: black solid 1px;
		outline: none;
		box-shadow: none;
		cursor: pointer;
	}
	.controls button:hover {
		background: rgba(0, 0, 255, 0.5);
	}

	.controls button:active {
		background: rgba(0, 0, 255, 0.75);
	}

	.names-list-container {
		background-color: rgba(255, 255, 255, 75%);
		padding: 2rem;
		margin: 3rem;
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
			padding: 2rem;
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
		}
		.controls input::placeholder {
			text-align: center;
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
			margin: 3rem;
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
	}
	@media (max-width: 460px) {
		.controls {
			flex-direction: column;
			align-items: center;
			padding: 2rem;
			margin-top: 3rem;
			border-radius: 20px;
			width: 16rem;
		}
		.controls label {
			display: none;
		}
		.controls input {
			margin: 0.5rem;
			font-size: 1.1rem;
		}
		.controls input::placeholder {
			text-align: center;
		}
		.controls button {
			margin-top: 1rem;
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
