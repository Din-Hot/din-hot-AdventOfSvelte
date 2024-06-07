<script lang="ts">
	import { scale, slide } from 'svelte/transition';

	let dropDownOpened = false;
</script>

<nav class="menu-bar">
	<h1 class="logo"><a href="/">Din-Hot Advent of Svelte challenge</a></h1>
	<ul>
		<li><a href="About">About</a></li>
		<li
			on:mouseenter={() => (dropDownOpened = !dropDownOpened)}
			on:mouseleave={() => (dropDownOpened = !dropDownOpened)}
		>
			Year <i class="fas fa-caret-down"></i>
			{#if dropDownOpened}
				<div transition:slide={{ duration: 300 }} class="dropdown-menu">
					<ul transition:scale={{ duration: 370 }}>
						<li><a href="/2023">2023</a></li>
						<li><a href="/2024">2024 <br />(Not yet out)</a></li>
					</ul>
				</div>
			{/if}
		</li>
		<li><a href="/contact">Contact me</a></li>
	</ul>
</nav>

<style>
	.logo a {
		font-size: 1.25rem;
		color: white;
		text-decoration: none;
	}

	.logo a:hover {
		color: rgba(255, 255, 255, 0.75);
	}
	.menu-bar {
		height: 1.75rem;
		background-color: #ff3e00;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.5rem 4%;
	}
	.menu-bar ul {
		list-style: none;
		display: flex;
	}
	.menu-bar ul li {
		padding: 0.5rem 2rem;
		position: relative;
	}
	.menu-bar ul li a,
	li {
		font-size: 1rem;
		color: white;
		text-decoration: none;
		cursor: pointer;
		transition: all 0.3s;
	}
	.menu-bar ul li a:hover,
	li:hover {
		color: rgba(255, 255, 255, 0.75);
	}
	.fas {
		float: right;
		margin-left: 0.75rem;
	}
	/* dropdown menu style */
	.dropdown-menu {
		z-index: 1;
		display: block;
		position: absolute;
		left: 0;
		top: 100%;
		background-color: #ff3e00;
	}
	.dropdown-menu ul {
		display: block;
		margin: 0.5rem;
	}
	.dropdown-menu ul li {
		text-align: center;
		width: 6rem;
		padding: 0.5rem;
	}
</style>
