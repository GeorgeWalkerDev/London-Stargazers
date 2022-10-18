fetch(`https://api.nasa.gov/planetary/apod?api_key=Watj9Kgy2p9T6xXiqp7beRkupgcACwu0K4bu6dHs&count=12`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        data.forEach((obj, i) => {
            console.log(document.querySelector(`#description${i}`))
            document.querySelector(`#description${i}`).textContent = obj.explanation
            document.querySelector(`#image${i}`).src = obj.hdurl
            document.querySelector(`#link${i}`).href = obj.hdurl
        })
    })
    .catch(err => console.log(`Error: ${err}`))