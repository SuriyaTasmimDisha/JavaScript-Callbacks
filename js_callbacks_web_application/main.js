let btn = document.getElementById('btn')

if (btn) {
    btn.addEventListener('click', addGif)
}

function addGif() {
    let gif = document.createElement('img')
    gif.src = 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExazlxYTl1dTU2NXQ3enN0Ynp5bHQwNzdqdG9meHpqbDR1MTU5dHlsdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3GBG7xejOXhH7MyQkn/giphy.gif'
    gif.style.width = '50%'
        
    let card = document.getElementById('gif')
    card.innerHTML = ''
    card.appendChild(gif)
}