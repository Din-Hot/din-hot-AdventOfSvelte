<script lang="ts">
	import { slide } from 'svelte/transition'
	import { page } from '$app/stores'
	import { goto } from '$app/navigation'

	let challenges = [
		{
			id: 1,
			title: 'Naughty or Nice',
			content:
				'Challenge was to build a system for the elves, enabling them to input names and tally each childs deeds to keep track of whether they’re good or bad.'
		},
		{ id: 2, title: 'Merry Munch-o-Meter', content: 'Second challenge' },
		{ id: 3, title: 'Jingle Bell Balancer', content: 'Third challenge' },
		{ id: 4, title: 'Heart of Christmas', content: 'tbd' },
		{ id: 5, title: 'Present Progress', content: 'tbd' },
		{ id: 6, title: 'Misteltoe Metronome', content: 'tbd' },
		{ id: 7, title: 'Morse Mischief', content: 'tbd' }
	]

	let url_id = Number($page.url.hash.slice(5))

	console.log(url_id)

	let currentOpen = url_id

	function openAccordion(panelNumber: number) {
		if (currentOpen === panelNumber) {
			currentOpen = 0
		} else {
			currentOpen = panelNumber
			// goto(`${$page.url.pathname}#day-${panelNumber}`)
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
				<a href="#day-{challenge.id}" aria-roledescription="opens day {challenge.id}"
					><i class="fa-solid fa-angle-up"></i></a
				>
			{:else}
				<a href="#day-{challenge.id}" aria-roledescription="closes day {challenge.id}"
					><i class="fa-solid fa-angle-down"></i></a
				>
			{/if}
		</li>
		{#if currentOpen === challenge.id}
			<div
				transition:slide={{ duration: 300 }}
				class="panel {currentOpen === challenge.id ? 'active' : ''}"
			>
				<span>
					{challenge.content}
				</span>

				<a class="solution-button" href="/solutions/2023/{challenge.id}">
					<i class="fa-solid fa-pen-ruler"></i>My solution</a
				>
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
	.accordion a {
		font-size: 1rem;
		color: #9ca3af;
		text-decoration: none;
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

	.solution-button:hover {
		color: rgba(255, 255, 255, 75%);
		background-color: rgba(255, 64, 0, 75%);
	}
	.solution-button i {
		margin-right: 0.5rem;
	}
</style>
