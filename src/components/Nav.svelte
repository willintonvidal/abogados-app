<script>
	export let segment;
</script>

<style>
	.Nav {
		border-bottom: 1px solid rgba(255,0,121,0.2);
		font-weight: 300;
		/*background-color:#fafbfc;*/
		color: #191a22;
	}
	.Nav-container {
		display: grid;
		grid-template-columns: minmax(auto,1024px);
		justify-content: center;
		align-items:center
	}
	.Nav-content {
		display: flex;
		justify-content: space-between;
	}
	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 0 1em;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(255,62,0);
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 1em 1em 1em 0;
		display: block;
		font-size: 14px;
		font-weight: 300;
		transition: all 0.3s ease-in-out 0s;
		color: rgba(25,26,34,0.7);
	}
	a:hover {
		color: rgba(25,26,34,1);
	}
</style>

<nav  class="Nav">
	<div class="Nav-container">
		<div class="Nav-content">
			<div class="Nav-social">
				<ul>
					<li><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">Inicio</a></li>
					<li><a aria-current="{segment === 'portafolio' ? 'page' : undefined}" href="portafolio">Portafolio</a></li>
					<li><a aria-current="{segment === 'quienessomos' ? 'page' : undefined}" href="quienessomos">Quiémes Somos</a></li>
					<li><a aria-current="{segment === 'areasdepractica' ? 'page' : undefined}" href="areasdepractica">Áreas de Práctica</a></li>
					<li><a aria-current="{segment === 'abogados' ? 'page' : undefined}" href="abogados">Abogados</a></li>
					<li><a aria-current="{segment === 'contacto' ? 'page' : undefined}" href="contacto">Contacto</a></li>
					<!-- <li><a aria-current="{segment === 'about' ? 'page' : undefined}" href="about">about</a></li>
					<li><a aria-current="{segment === 'contact' ? 'page' : undefined}" href="contact">Contact</a></li>
					<li><a aria-current="{segment === 'general' ? 'page' : undefined}" href="general">General</a></li>
					<li><a rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog">blog</a></li> -->
				</ul>
			</div>
		</div>
	</div>
</nav>

<!-- 
	DEGRADADOS
	background: rgb(0,169,225);
	background: linear-gradient(90deg, rgba(0,169,225,1) 0%, rgba(34,83,103,1) 0%, rgba(7,66,82,1) 20%, rgba(6,46,58,1) 57%, rgba(34,83,103,1) 95%);

	DEGRADADO CLARO
	background: rgb(0,169,225);
	background: linear-gradient(90deg, rgba(0,169,225,1) 6%, rgba(10,142,178,1) 99%);

	COLOR 1: 00a9e1
	COLOR 2: 225367
	COLOR 3: 0a8eb2
	COLOR 4: 062e3a
 -->
