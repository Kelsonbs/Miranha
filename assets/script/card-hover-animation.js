function handleMouseEnter(){
    this.classList.add('s-card--hovered')
    document.body.id=`${this.id}-hovered`;
    console.log('ta funcionando')
}
function handleMouseLeave(){
    this.classList.remove('s-card--hovered')
    document.body.id=`${this.id}-hovered`;
}


function addEventListenersToCards(){
    const cardElements = document.getElementsByClassName('s-card')
    console.log(cardElements)

    for(let index = 0; index<cardElements.length; index++ ){
        const card = cardElements[index];
        card.addEventListener('mouseenter',handleMouseEnter)
        card.addEventListener('mouseleave', handleMouseLeave)
    }
}

document.addEventListener("DOMContentLoaded",addEventListenersToCards, false);


