<script context="module">
	export function preload() {
		return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	import Post from '../components/Post.svelte'
	import Carrousel from '../components/Carrousel.svelte'
	export let posts;
</script>
<style>
	.Posts {
		display:flex;
	}
	.Home {
		width: 100%;
	}

	.minh-100 {
		height: 100vh;
	}

	::placeholder {
	color: white;
	}
</style>

<svelte:head>
	<title>Home</title>
</svelte:head>

<!--  -->


<div class="Home">

	<div class="row justify-content-center">
		<div class="col-md-8">
				<Carrousel />
		</div>
	</div>
	
	
	<br />
	<br />
	<div class="row align-items-center">

		<div class="col-md-5 align-center text-center">
			<h1>Soluciones Integrales</h1>
			<br>
			<h3>En todas las areas del derecho</h3>
			<br>
			<!-- <h5>Ustedes son la causa más importante,</h5>
			<h5>la batalla que siempre estamos dispuestos a dar</h5>
			<br>
			<p>Nuestra filosofía está orientada a la prestación de servicios de asesoría, consultoría preventiva y resolución de problemas. Para eso trabajamos con rigurosidad y disciplina en las siguientes áreas del derecho:</p> -->
		</div>
		<div class="col-md-7">
			<div class="Posts row">
				{#each  posts as post }
					<Post {post}/>
				{/each}
			</div>
		</div>	
	</div>
	
	
	
</div>
