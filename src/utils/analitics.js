const analyticsTracking = (eventName) => {
    if(typeof windows !== 'undefined'){
        window.ga('send', 'event','social','click', eventName,{
            noInteraction: true
        });
    } 
}
export default analyticsTracking;