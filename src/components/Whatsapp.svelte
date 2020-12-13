<style>
.Whatsaap-container {
    display: grid;
    grid-template-columns: minmax(auto, 1024px);
    justify-content: center;
    align-items: center;
}
.Whatsapp-content {
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
@keyframes latidos{
    from {transform: none;}
    50% {transform: scale(1.4);}
    to {transform: none;}
}
.Whatsapp-content img {
    width: 50px;
    height: 50px;
    animation: latidos 3s infinite;
}
.Whatsapp-content span {
    animation: latidos 5s;
}
</style>
<div class="Whatsapp">
    <div class="Whatsaap-container">
        <div class="Whatsapp-content">
            <h5>Escríbanos su consulta</h5>
            <a href="https://api.whatsapp.com/send/?phone=3155352902&text&app_absent=0" target="_blank">
                <img src="whatsapp.png" alt="WhatsApp">
            </a>
        </div>
    </div>
</div>