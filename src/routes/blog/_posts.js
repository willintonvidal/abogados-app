// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
    {
        "title":"Blogspost 1",
        "html":"<p>Derecho Penal</p>",
        "slug":"blogpost-1",
        "createdAt":"2020-06-22T04:36:26.000+00:00",
        "id":"1",
        "desc":"Derecho Penal",
        "tag":"general",
        "image":`<i class="fas fa-balance-scale-right" style="color:#A1B2CD;"></i>`
    },
    {
        "title":"Blogspost 2",
        "html":"<p>Derecho Privado, Corporativo y Resolución de Conflictos</p>",
        "slug":"blogpost-2",
        "createdAt":"2020-06-22T04:36:26.000+00:00",
        "id":"2",
        "desc":"Derecho Privado, Corporativo y Resolución de Conflictos",
        "tag":"general",
        "image":`<i class="fas fa-archway" style="color:#A1B2CD;"></i>`
    },
    {
        "title":"Blogspost 3",
        "html":"<p>Derecho Público y Contratación Estatal</p>",
        "slug":"blogpost-3",
        "createdAt":"2020-06-22T04:36:26.000+00:00",
        "id":"3",
        "desc":"Derecho Público y Contratación Estatal",
        "tag":"general",
        "image":`<i class="fas fa-scroll" style="color:#A1B2CD;"></i>`
    },
    {
        "title":"Blogspost 4",
        "html":"<p>Derecho Minero Energético y Protección de Inversiones</p>",
        "slug":"blogpost-4",
        "createdAt":"2020-06-22T04:36:26.000+00:00",
        "id":"4",
        "desc":"Derecho Minero Energético y Protección de Inversiones",
        "tag":"general",
        "image":`<i class="fas fa-hard-hat" style="color:#A1B2CD;"></i>`
    },
    {
        "title":"Blogspost 5",
        "html":"<p>Derecho Ambiental, Urbanístico y Ordenamiento Territorial</p>",
        "slug":"blogpost-5",
        "createdAt":"2020-06-22T04:36:26.000+00:00",
        "id":"5",
        "desc":"Derecho Ambiental, Urbanístico y Ordenamiento Territorial",
        "tag":"general",
        "image":`<i class="fas fa-archive" style="color:#A1B2CD;"></i>`
    },
    {
        "title":"Blogspost 6",
        "html":"<p>Derecho Laboral y Seguridad Social</p>",
        "slug":"blogpost-6",
        "createdAt":"2020-06-22T04:36:26.000+00:00",
        "id":"6",
        "desc":"Derecho Laboral y Seguridad Social",
        "tag":"general",
        "image":`<i class="fas fa-briefcase" style="color:#A1B2CD;"></i>`
    },
    {
        "title":"Blogspost 7",
        "html":"<p>Derecho Electoral</p>",
        "slug":"blogpost-7",
        "createdAt":"2020-06-22T04:36:26.000+00:00",
        "id":"6",
        "desc":"Derecho Electoral",
        "tag":"general",
        "image":`<i class="fas fa-book-open" style="color:#A1B2CD;"></i>`
    },
    {
        "title":"Blogspost 8",
        "html":"<p>Derecho del Entretenimiento y Derechos de Autor</p>",
        "slug":"blogpost-8",
        "createdAt":"2020-06-22T04:36:26.000+00:00",
        "id":"6",
        "desc":"Derecho del Entretenimiento y Derechos de Autor",
        "tag":"general",
        "image":`<i class="fas fa-photo-video" style="color:#A1B2CD;"></i>`
    },
    {
        "title":"Blogspost 9",
        "html":"<p>Dercho migratorio</p>",
        "slug":"blogpost-9",
        "createdAt":"2020-06-22T04:36:26.000+00:00",
        "id":"6",
        "desc":"Derecho del Entretenimiento y Derechos de Autor",
        "tag":"general",
        "image":`<i class="fas fa-users" style="color:#A1B2CD;"></i>`
    },
    {
        "title":"Blogspost 10",
        "html":"<p>Derecho Deportivo</p>",
        "slug":"blogpost-10",
        "createdAt":"2020-06-22T04:36:26.000+00:00",
        "id":"6",
        "desc":"Derecho Deportivo",
        "tag":"general",
        "image":`<i class="fas fa-skiing" style="color:#A1B2CD;"></i>`
    },
    {
        "title":"Blogspost 11",
        "html":"<p>Otros Servicios</p>",
        "slug":"blogpost-11",
        "createdAt":"2020-06-22T04:36:26.000+00:00",
        "id":"6",
        "desc":"Otros Servicios",
        "tag":"general",
        "image":`<i class="fas fa-ethernet" style="color:#A1B2CD;"></i>`
    },
    {
        "title":"Blogspost 12",
        "html":"<p>Asuntos Públicos y regulatorios</p>",
        "slug":"blogpost-12",
        "createdAt":"2020-06-22T04:36:26.000+00:00",
        "id":"6",
        "desc":"Asuntos Públicos y regulatorios",
        "tag":"general",
        "image":`<i class="fas fa-handshake" style="color:#A1B2CD;"></i>`
    }
];

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;
