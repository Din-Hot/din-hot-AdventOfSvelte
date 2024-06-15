<script lang="ts">
</script>

<div class="containter">
	<slot></slot>

	<div class="snowfall">
		<div class="snowflake"></div>
		<div class="snowflake"></div>
		<div class="snowflake"></div>
		<div class="snowflake"></div>
		<div class="snowflake"></div>
		<div class="snowflake"></div>
		<div class="snowflake"></div>
		<div class="snowflake"></div>
		<div class="snowflake"></div>
		<div class="snowflake"></div>
		<div class="snowflake"></div>
		<div class="snowflake"></div>
		<div class="snowflake"></div>
		<div class="snowflake"></div>
		<div class="snowflake"></div>
		<div class="snowflake"></div>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
	.containter {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
	}

	.snowfall {
		position: absolute;
		z-index: -1;
		inset: 0;
		overflow: hidden;
		background: linear-gradient(#22304e, #111827 85%);
	}

	.snowflake {
		--small: 3px;
		--medium: 7px;
		width: var(--small);
		height: var(--small);
		position: absolute;
		background-color: #fff;
		border-radius: 50%;
		animation:
			snow 6s linear infinite,
			wind 10s ease-in-out infinite;
		top: -10%;
		left: 10%;
		opacity: 75%;
	}

	.snowflake:nth-child(2n + 3) {
		/* 3, 5, 7, ... */
		width: var(--medium);
		height: var(--medium);
	}

	.snowflake:nth-child(1) {
		left: 25%;
		animation-delay: 1s;
	}

	.snowflake:nth-child(2) {
		left: 85%;
		animation-delay: 1.5s;
	}

	.snowflake:nth-child(3) {
		left: 30%;
		animation-delay: 2s;
	}

	.snowflake:nth-child(4) {
		left: 65%;
		animation-delay: 2.5s;
	}

	.snowflake:nth-child(5) {
		left: 25%;
		animation-delay: 3s;
	}

	.snowflake:nth-child(6) {
		left: 95%;
		animation-delay: 3.5s;
	}

	.snowflake:nth-child(7) {
		left: 55%;
		animation-delay: 4s;
	}

	.snowflake:nth-child(8) {
		left: 10%;
		animation-delay: 4.5s;
	}

	.snowflake:nth-child(9) {
		left: 70%;
		animation-delay: 5s;
	}

	.snowflake:nth-child(10) {
		left: 20%;
		animation-delay: 5.5s;
	}
	.snowflake:nth-child(11) {
		left: 75%;
		animation-delay: 6s;
	}
	.snowflake:nth-child(12) {
		left: 15%;
		animation-delay: 7s;
	}
	.snowflake:nth-child(13) {
		left: 95%;
		animation-delay: 7.5s;
	}
	.snowflake:nth-child(14) {
		left: 5%;
		animation-delay: 8s;
	}
	.snowflake:nth-child(15) {
		left: 55%;
		animation-delay: 8.5s;
	}
	.snowflake:nth-child(16) {
		left: 30%;
		animation-delay: 9s;
	}

	@keyframes snow {
		100% {
			top: 100%;
		}
	}

	@keyframes wind {
		50% {
			transform: translateX(120px);
		}
	}
</style>
