<script context="module">
	export function preload() {
		return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	import Post from '../components/Post.svelte'
	export let posts;
</script>
<style>
	.Home {
		display:grid;
		justify-content: space-between;
		grid-gap:15px;
		grid-template-columns: 1fr;
	}
</style>

<svelte:head>
	<title>Home</title>
</svelte:head>

<div class="Home">
	<h1>Soluciones Integrales</h1>
	<h3>En todas las areas del derecho</h3>
	<h5>Ustedes son la causa más importante,</h5>
	<h5>la batalla que siempre estamos dispuestos a dar</h5>
	<p>Nuestra filosofía está orientada a la prestación de servicios de asesoría, consultoría preventiva y resolución de problemas. Para eso trabajamos con rigurosidad y disciplina en las siguientes áreas del derecho:</p>
	<div class="Posts">
		{#each  posts as post }
			<Post {post}/>
		{/each}
	</div>
</div>
