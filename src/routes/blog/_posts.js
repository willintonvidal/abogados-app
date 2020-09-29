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
        "html":"<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has</p>",
        "slug":"blogpost-1",
        "createdAt":"2020-06-22T04:36:26.000+00:00",
        "id":"1",
        "desc":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of",
        "tag":"general",
        "image":"https://arepa.s3.amazonaws.com/blogpost-cover.png"
    },
    {
        "title":"Blogspost 2",
        "html":"<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has</p>",
        "slug":"blogpost-2",
        "createdAt":"2020-06-22T04:36:26.000+00:00",
        "id":"2",
        "desc":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of",
        "tag":"general",
        "image":"https://arepa.s3.amazonaws.com/blogpost-cover.png"
    },
    {
        "title":"Blogspost 3",
        "html":"<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has</p>",
        "slug":"blogpost-3",
        "createdAt":"2020-06-22T04:36:26.000+00:00",
        "id":"3",
        "desc":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of",
        "tag":"general",
        "image":"https://arepa.s3.amazonaws.com/blogpost-cover.png"
    },
    {
        "title":"Blogspost 4",
        "html":"<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has</p>",
        "slug":"blogpost-4",
        "createdAt":"2020-06-22T04:36:26.000+00:00",
        "id":"4",
        "desc":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of",
        "tag":"general",
        "image":"https://arepa.s3.amazonaws.com/blogpost-cover.png"
    },
    {
        "title":"Blogspost 5",
        "html":"<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has</p>",
        "slug":"blogpost-5",
        "createdAt":"2020-06-22T04:36:26.000+00:00",
        "id":"5",
        "desc":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of",
        "tag":"general",
        "image":"https://arepa.s3.amazonaws.com/blogpost-cover.png"
    },
    {
        "title":"Blogspost 6",
        "html":"<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has</p>",
        "slug":"blogpost-6",
        "createdAt":"2020-06-22T04:36:26.000+00:00",
        "id":"6",
        "desc":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of",
        "tag":"general",
        "image":"https://arepa.s3.amazonaws.com/blogpost-cover.png"
    }
];

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;
