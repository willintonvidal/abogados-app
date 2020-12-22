<script>
    import readingTime from '../utils/readingTime.js'
    import randomEmoji from '../utils/randomEmoji.js'
    import formatIsoTime from '../utils/formatIsoTime.js'
    export let post;

</script>
<style>
    .icono {
        font-size: 26px;
    }
     i{
		color:#A1B2CD;
    } 
</style>

<div class="Post-item col-md-4" >
    <div class="Post-content">
        <div class="Post-head">
            <div class="Post-title text-center">
                <div class="icono">{@html post.image}</div>
                <!-- <h4>                    
                    <a rel="prefetch" href="post/{post.slug}">{randomEmoji()} {post.title}</a>
                </h4> -->
            </div>
            <div class="Post-tags"></div>
            <div class="Post-desc  text-center">
                <p class="text-center">{post.desc}</p>
            </div>
            
        </div>
    </div>
</div>
<!-- 
.Post-item{
    color:#191a22;
    position:relative;
}
.Post-content {
    font-size:16px;
    font-weight: 300;
    display: grid;
    justify-content: space-between;
    grid-gap: 5px;
    grid-template-columns: 1fr; 
}
.Post-title {
    font-size: 28px;
    margin:0;
    padding:0;
}
.Post-title p{
    color:#333;
    font-size: 13px;
    font-weight: 300;
    margin-top: 5px;
    padding:0;
}
a{
    text-decoration: none;
    color:#22215b;
}
.Post-desc p {
    color:#333;
    font-size:16px;
    line-height: 28px;
    margin:0 auto;
    word-break: break-word;
}
.dot{
    font-weight: 700;
} -->