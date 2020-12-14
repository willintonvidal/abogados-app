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
	.Posts {
		display:flex;
	}
	.Home {
		width: 100%;
	}
	.carousel {
  overflow: scroll;
  padding-left: 30px;
  width: 100%;
  position: relative;
}

.carousel__container {
  transition: 450ms -webkit-transform;
  transition: 450ms transform;
  transition: 450ms transform, 450ms -webkit-transform;
  font-size: 0;
  white-space: nowrap;
  margin: 70px 0px;
  padding-bottom: 10px;
}

.carousel__container:hover .carousel-item {
  opacity: 0.3;
}

.carousel__container:hover .carousel-item:hover {
  -webkit-transform: scale(1.5);
          transform: scale(1.5);
  opacity: 1;
}

.carousel-item {
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  display: inline-block;
  width: 200px;
  height: 250px;
  margin-right: 10px;
  font-size: 20px;
  cursor: pointer;
  transition: 450ms all;
  -webkit-transform-origin: center left;
          transform-origin: center left;
}

.carousel-item:hover ~ .carousel-item {
  -webkit-transform: translate3d(100px, 0, 0);
          transform: translate3d(100px, 0, 0);
}

.carousel-item__img {
  width: 200px;
  height: 250px;
  -o-object-fit: cover;
     object-fit: cover;
}

.carousel-item__details {
  align-items: flex-start;
  background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%);
  bottom: 0;
  display: flex;
  font-size: 10px;
  flex-direction: column;
  justify-content: flex-end;
  left: 0;
  opacity: 0;
  transition: 450ms opacity;
  padding: 10px;
  position: absolute;
  right: 0;
  top: 0;
}

.carousel-item__details--img {
  width: 20px;
}

.carousel-item:hover .carousel-item__details {
  opacity: 1;
}

.carousel-item__details--title {
  color: white;
  margin: 5px 0px 0px 0px;
}

.carousel-item__details--subtitle {
  color: white;
  font-size: 8px;
  margin: 3px 0px;
}

::placeholder {
  color: white;
}
</style>

<svelte:head>
	<title>Home</title>
</svelte:head>

<!-- <section class="carousel">
	<div class="carousel__container">
  
	  <div class="carousel-item">
		<img class="carousel-item__img" src="fotos/1.jpeg" alt=""  />
		<div class="carousel-item__details">
		  <div>
			<img class="carousel-item__details--img" src="./assets/play-icon.png" alt="Play Icon"> 
			<img class="carousel-item__details--img" src="./assets/plus-icon.png" alt="Plus Icon"> 
		  </div>
		  <p class="carousel-item__details--title">Título descriptivo</p>
		  <p class="carousel-item__details--subtitle">2019 16+ 114 minutos</p>
		</div>
	  </div>

	  <div class="carousel-item">
		<img class="carousel-item__img" src="fotos/9.jpeg" alt=""  />
		<div class="carousel-item__details">
		  <div>             
			<img class="carousel-item__details--img" src="./assets/play-icon.png" alt="Play Icon">
			<img class="carousel-item__details--img" src="./assets/plus-icon.png" alt="Plus Icon">
		  </div>
		  <p class="carousel-item__details--title">Título descriptivo</p>
		  <p class="carousel-item__details--subtitle">2019 16+ 114 minutos</p>
		</div>
	  </div>

	  <div class="carousel-item">
		<img class="carousel-item__img" src="fotos/7.jpeg" alt=""  />
		<div class="carousel-item__details">
		  <div>             
			<img class="carousel-item__details--img" src="./assets/play-icon.png" alt="Play Icon">
			<img class="carousel-item__details--img" src="./assets/plus-icon.png" alt="Plus Icon">
		  </div>
		  <p class="carousel-item__details--title">Título descriptivo</p>
		  <p class="carousel-item__details--subtitle">2019 16+ 114 minutos</p>
		</div>
	  </div>

	  <div class="carousel-item">
		<img class="carousel-item__img" src="fotos/4.jpeg" alt=""  />
		<div class="carousel-item__details">
		  <div>             
			<img class="carousel-item__details--img" src="./assets/play-icon.png" alt="Play Icon">
			<img class="carousel-item__details--img" src="./assets/plus-icon.png" alt="Plus Icon">
		  </div>
		  <p class="carousel-item__details--title">Título descriptivo</p>
		  <p class="carousel-item__details--subtitle">2019 16+ 114 minutos</p>
		</div>
	  </div>

	  <div class="carousel-item">
		<img class="carousel-item__img" src="fotos/5.jpeg" alt=""  />
		<div class="carousel-item__details">
		  <div>             
			<img class="carousel-item__details--img" src="./assets/play-icon.png" alt="Play Icon">
			<img class="carousel-item__details--img" src="./assets/plus-icon.png" alt="Plus Icon">
		  </div>
		  <p class="carousel-item__details--title">Título descriptivo</p>
		  <p class="carousel-item__details--subtitle">2019 16+ 114 minutos</p>
		</div>
	  </div>

	</div>
  </section> -->


<div class="Home">
	<div class="row">
		<div class="col-md-12">
		</div>
		<div class="col-md-5">
			<h1>Soluciones Integrales</h1>
			<br>
			<h3>En todas las areas del derecho</h3>
			<br>
			<h5>Ustedes son la causa más importante,</h5>
			<h5>la batalla que siempre estamos dispuestos a dar</h5>
			<br>
			<p>Nuestra filosofía está orientada a la prestación de servicios de asesoría, consultoría preventiva y resolución de problemas. Para eso trabajamos con rigurosidad y disciplina en las siguientes áreas del derecho:</p>
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
