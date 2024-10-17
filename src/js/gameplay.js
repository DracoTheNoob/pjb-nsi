function playSound() {
    let ding = new Audio('src/audio/ding.mp3')
	ding.play()
}

function makeNumberNice(number) {
    if (number < 10) {
        return "0" + String(number)
    } else {
        return String(number)
    }
}

function radomBackground() {
    document.getElementById
}

function countdown() {
    const secondsRemaining = parseInt(document.getElementById("secondes").innerHTML)
    const minutesRemaining = parseInt(document.getElementById("minutes").innerHTML)

    if (secondsRemaining == 31 && minutesRemaining == 0) {
        playSound()
    }

    if (secondsRemaining > 0) {
        document.getElementById("secondes").innerHTML = makeNumberNice(secondsRemaining - 1)
    }

    if (secondsRemaining > 0) {
        setTimeout(countdown, 1000)
        
    } else if (secondsRemaining == 0 && minutesRemaining != 0) {
        document.getElementById("minutes").innerHTML = makeNumberNice(minutesRemaining - 1)
        document.getElementById("secondes").innerHTML = "59"
        setTimeout(countdown, 1000)

    } 
        
        
}


setTimeout(countdown, 1000)

function ramdomImg() {
    var images = ['1.jpg', '2.jpg', '3.jpg',]
    document.getElementsByClassName('mainview')[0].style.backgroundImage = 'url(' + images[Math.floor(Math.random() * images.length)] + ')'
}

function open_map() {
    const square = document.getElementById("square")
    
    square.style.width = "calc(100vw - 2*30px)"
    square.style.height = "calc(100vh - 2*30px)"
    square.style.right = "30px"
    square.style.bottom = "30px"
    square.style.backgroundImage = "/images/map.jpg"
    square.innerHTML = ""
    square.style.backgroundColor = 'grey';
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'grey';
        square.style.right = "30px"
        square.style.bottom = "30px"
    });

    const close = document.getElementById("close")
    close.style.fontSize = "25px"
    close.innerHTML = "x"
    close.style.paddingRight = "20px"
    close.style.paddingLeft = "20px"
    close.style.borderRadius = "10px"
    close.style.backgroundColor = "White"
    close.addEventListener('mouseover', () => {
        close.style.backgroundColor = "rgb(255, 105, 105)"
        close.style.cursor = "pointer"
    })
}

function close_map() {
    const square = document.getElementById("square")
    
    square.style.width = "75px"
    square.style.height = "75px"
    square.style.backgroundImage = "None"
    square.innerHTML = "🗺️"
    square.style.backgroundColor = 'grey';
    square.style.padding = "None"
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'rgb(192, 182, 182)';
        square.style.height = "80px"
        square.style.width = "80px"
        square.style.right = "27.5px"
        square.style.bottom = "27.5px"
    })
    square.addEventListener('mouseout', () => {
        square.style.backgroundColor = 'grey';
    })

    const close = document.getElementById("close")
    close.innerHTML = ""
    close.style.padding = "None"
    close.style.backgroundColor = "White"
    close.addEventListener('mouseover', () => {
        close.style.backgroundColor = "rgb(255, 105, 105)"
        close.style.cursor = "pointer"
    })
    
}