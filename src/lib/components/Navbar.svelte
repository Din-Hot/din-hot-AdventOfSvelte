<script lang="ts">
	import { scale, slide } from 'svelte/transition'

	let dropDownOpened = false
	let menuActive = false

	function closeMenu() {
		menuActive = false
	}
</script>

<nav>
	<div class="menu-bar">
		<h1 class="logo">
			<a href="/" on:click={closeMenu}>Din-Hot Advent of Svelte challenge</a>
		</h1>
		<ul class="navigation">
			<li><a href="/about">About</a></li>
			<li
				on:mouseenter={() => (dropDownOpened = true)}
				on:mouseleave={() => (dropDownOpened = false)}
			>
				<a href="#top" on:click={() => (dropDownOpened = !dropDownOpened)}
					>Year <span class="down-arrow">▼</span></a
				>

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
		<ul class="phone-navigation">
			<a
				href="#top"
				on:click={() => {
					menuActive = !menuActive
				}}
			>
				<li class="bars">
					<i class="fa-solid fa-bars"></i>
				</li>
			</a>
		</ul>
	</div>

	{#if menuActive}
		<ul transition:slide={{ duration: 300 }} class="phone-menu">
			<div transition:scale={{ duration: 370 }}>
				<li><a href="/about" on:click={closeMenu}>About</a></li>
				<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<li
					on:click={() => (dropDownOpened = !dropDownOpened)}
					class:frame={dropDownOpened}
					class={`${dropDownOpened ? 'hover-enabled' : ''}`}
				>
					<a href="#top">Year <span class="down-arrow">{dropDownOpened ? '▲' : '▼'}</span></a>
					{#if dropDownOpened}
						<li><a href="/2023" on:click={closeMenu}>2023</a></li>
						<li><a href="/2024" on:click={closeMenu}>2024 <br />(Not yet out)</a></li>
					{/if}
				</li>
				<li><a href="/contact" on:click={closeMenu}>Contact me</a></li>
			</div>
		</ul>
	{/if}
</nav>

<style>
	.down-arrow {
		font-size: 0.5rem;
		margin-left: 0.25rem;
	}
	.phone-navigation,
	.phone-menu {
		display: none;
	}
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
	.navigation {
		list-style: none;
		display: flex;
	}
	.navigation li {
		padding: 0.5rem 2rem;
		position: relative;
	}
	a,
	li {
		font-size: 1rem;
		color: white;
		text-decoration: none;
		cursor: pointer;
	}
	a:hover {
		color: rgba(255, 255, 255, 0.75);
	}

	.hover-enabled:hover {
		color: rgba(255, 255, 255, 0.75);
	}

	.phone-menu {
		height: 5rem;
	}

	/* dropdown menu styles */

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

	.phone-menu {
		background-color: #ff3e00;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		height: auto;
	}

	.phone-menu li {
		margin-top: 16px;
		margin-bottom: 16px;
	}
	.frame {
		border: #22304e 4px solid;
		margin-top: 12px;
		margin-bottom: 12px;
		padding: 2rem;
	}

	/*Mobile styles*/

	@media (max-width: 768px) {
		.navigation {
			display: none;
		}

		.phone-navigation,
		.phone-menu {
			display: flex;
		}
		.logo a {
			font-size: 1rem;
		}
		.logo a:hover {
			color: white;
		}
		li {
			font-size: 0.75rem;
		}
	}
	@media (max-width: 460px) {
		li {
			font-size: 1.5rem;
		}
		a {
			font-size: 1.5rem;
		}
	}
</style>
