<script lang="ts">
	import { slide } from 'svelte/transition'
	import { page } from '$app/stores'
	import { copy } from 'svelte-copy'
	import type { Page } from '@sveltejs/kit'
	import { dev } from '$app/environment'

	let challenges = [
		{
			id: 1,
			title: 'Naughty or Nice',
			content:
				"With the hundreds of thousands of letters from children piling up alongside their records of good and bad deeds, the Elves are in dire need of a modern solution.<br><br>The task was was to build a system for the elves, enabling them to input names and tally each childs deeds to keep track of whether they're good or bad."
		},
		{
			id: 2,
			title: 'Merry Munch-o-Meter',
			content:
				'Amidst the holiday cheer, a small problem has arisen - how can we keep track of how many cookies Santa has munched!<br><br>The task was creating a Cookie Counter for Santa, which can show the tally of cookies munched. There is an option to add, remove, and reset the count.<br><br>Also Santas mood changes based on the number of cookies eaten - he gets a little merrier with each cookie!'
		},
		{
			id: 3,
			title: 'Jingle Bell Balancer',
			content:
				"Santa's sleigh can carry a maximum load of only 100 kg per journey. <br><br>The task was create a tool where Santa can choose whose presents to include on his run. The tool should show the current sleigh load and if the maximum of 100kg has been exceeded."
		},
		{ id: 4, title: 'Heart of Christmas', content: 'tbd' },
		{ id: 5, title: 'Present Progress', content: 'tbd' },
		{ id: 6, title: 'Misteltoe Metronome', content: 'tbd' },
		{ id: 7, title: 'Morse Mischief', content: 'tbd' },
		{ id: 8, title: "Santa's Mysterious Deck of Doubles", content: 'tbd' },
		{ id: 9, title: "Santa's Final Countdown", content: 'tbd' },
		{ id: 10, title: 'Pop-up! Spreading the holiday cheer', content: 'tbd' },
		{ id: 11, title: 'Tinsel Transformers', content: 'tbd' },
		{ id: 12, title: 'Greetings and salutations', content: 'tbd' },
		{ id: 13, title: 'Jingle Bell Balancer 2.0', content: 'tbd' },
		{ id: 14, title: 'Snowfall Symphony', content: 'tbd' },
		{ id: 15, title: 'Sparkling Snowglobes', content: 'tbd' },
		{ id: 16, title: 'Lessons from Amazon™️', content: 'tbd' },
		{ id: 17, title: 'Festive Funds', content: 'tbd' },
		{ id: 18, title: "Santa's Quiz", content: 'tbd' },
		{ id: 19, title: 'Polar Lights', content: 'tbd' },
		{ id: 20, title: 'Jingle Jokes', content: 'tbd' },
		{ id: 21, title: 'Oh the weather outside is frightful', content: 'tbd' },
		{ id: 22, title: 'Snowflake Silhouettes', content: 'tbd' },
		{ id: 23, title: 'ElfNet Social', content: 'tbd' },
		{ id: 24, title: "Santa's Magical Tracker", content: 'tbd' }
	]

	let url_id = Number($page.url.hash.slice(5))

	let currentOpen = url_id

	function openAccordion(panelNumber: number) {
		if (currentOpen === panelNumber) {
			currentOpen = 0
		} else {
			currentOpen = panelNumber
		}
	}
</script>

<ul>
	{#each challenges as challenge (challenge.id)}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
		<li
			on:click={() => openAccordion(challenge.id)}
			class="accordion {currentOpen === challenge.id ? 'active' : ''} {currentOpen ===
			challenge.id + 1
				? 'next-active'
				: ''}"
		>
			Day {challenge.id} - {challenge.title}
			{#if currentOpen === challenge.id}
				<i class="fa-solid fa-angle-up"></i>
			{:else}
				<i class="fa-solid fa-angle-down"></i>
			{/if}
		</li>
		<li />
		{#if currentOpen === challenge.id}
			<div
				transition:slide={{ duration: 300 }}
				class="panel {currentOpen === challenge.id ? 'active' : ''}"
			>
				<span>
					{@html challenge.content}
				</span>
				<a class="solution-button" href="/solutions/2023/{challenge.id}">
					<i class="fa-solid fa-pen-ruler"></i>My solution</a
				>
				<a
					class="solution-copy-link"
					href="#day-{challenge.id}"
					use:copy={dev
						? `${$page.url.hostname}:${$page.url.port}${$page.url.pathname}#day-${challenge.id}`
						: `${$page.url.hostname}${$page.url.pathname}#day-${challenge.id}`}
				>
					<i class="fa-solid fa-link tooltip">
						<span class="tooltiptext">Copy link to Day {challenge.id} challenge</span>
					</i>
				</a>
			</div>
		{/if}
	{/each}
</ul>

<style>
	ul {
		list-style: none;
	}
	.accordion {
		background-color: #111827;
		color: #9ca3af;
		cursor: pointer;
		padding: 18px 18px 18px 18px;
		text-align: left;
		transition: 0.4s;
		font-weight: 400;
		font-size: 1rem;
		border-left: #9ca3af solid 2px;
		border-right: #9ca3af solid 2px;
		border-bottom: #9ca3af solid 2px;
		border-top: 0;
	}

	.accordion i {
		font-size: 1rem;
		color: #9ca3af;
		float: right;
		margin-left: 5px;
	}

	.active,
	.accordion:hover {
		background-color: #1f2937;
	}

	.panel {
		padding: 2rem;
		background-color: #111827;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		font-weight: 100;
		color: #fff;
		border-top: 0;
		border-bottom: 2px;
		border-left: 2px;
		border-right: 2px;
		border-color: #9ca3af;
		border-style: solid;
	}
	.panel span {
		line-height: 1.75rem;
	}

	.accordion:first-of-type {
		border-radius: 20px 20px 0 0;
		border-top: solid 2px;
	}
	.accordion.active {
		border: #ff3e00 solid 2px;
		border-top: 0;
	}
	.next-active {
		border-bottom: #ff3e00 solid 2px;
	}
	.accordion.active:first-of-type {
		border: #ff3e00 solid 2px;
	}

	.solution-button {
		font-size: 1.5rem;
		width: 10rem;

		margin: 2rem auto 0;
		background-color: #ff3e00;
		border-radius: 1rem;
		text-decoration: none;
		color: #fff;
		font-weight: 400;
		text-align: center;
		padding: 1rem;
	}
	.solution-copy-link {
		font-size: 1.5rem;
		width: 10rem;
		margin: 2rem auto 0;
		border-radius: 1rem;
		text-decoration: none;
		color: #fff;
		font-weight: 400;
		text-align: center;
		cursor: pointer;
	}

	.solution-copy-link:hover {
		color: rgba(255, 255, 255, 75%);
	}

	.solution-button:hover {
		color: rgba(255, 255, 255, 75%);
		background-color: rgba(255, 64, 0, 75%);
	}
	.solution-button i {
		margin-right: 0.5rem;
	}

	/* Tooltip container */
	.tooltip {
		position: relative;
		display: inline-block;
		border-bottom: 1px dotted black; /* If you want dots under the hoverable text */
		margin-top: 1rem;
		margin-bottom: 1rem;
	}

	/* Tooltip text */
	.tooltip .tooltiptext {
		visibility: hidden;
		width: 120px;
		color: #fff;
		text-align: center;
		padding: 5px 0;
		border-radius: 6px;
		background-color: black;
		/* Position the tooltip text - see examples below! */
		position: absolute;
		z-index: 1;
		width: 120px;
		bottom: 125%;
		left: 50%;
		margin-left: -60px;
		line-height: normal;
		font-size: 0.75rem;
	}

	/* Show the tooltip text when you mouse over the tooltip container */
	.tooltip:hover .tooltiptext {
		visibility: visible;
	}
	.tooltip .tooltiptext::after {
		content: ' ';
		position: absolute;
		top: 100%; /* At the bottom of the tooltip */
		left: 50%;
		margin-left: -5px;
		border-width: 5px;
		border-style: solid;
		border-color: black transparent transparent transparent;
	}
</style>
