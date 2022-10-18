// Load main page articles
fetch(`https://api.nasa.gov/planetary/apod?api_key=Watj9Kgy2p9T6xXiqp7beRkupgcACwu0K4bu6dHs&count=3`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        data.forEach((obj, i) => {
            document.querySelector(`#title${i}`).textContent = obj.title
            document.querySelector(`#date${i}`).textContent = obj.date
            document.querySelector(`#date${i}`).datetime = obj.date
            document.querySelector(`#explanation${i}`).textContent = obj.explanation
            if (obj.media_type === "image") {
                document.querySelector(`#image${i}`).src = obj.hdurl;
                document.querySelector(`#video${i}`).style.display = 'none';
                document.querySelector(`#image${i}`).src = obj.hdurl;
                document.querySelector(`#image${i}`).style.display = 'block';
            } else if (obj.media_type === "video") {
                document.querySelector(`#video${i}`).src = obj.url;
                document.querySelector(`#image${i}`).style.display = 'none';
                document.querySelector(`#video${i}`).src = obj.url;
                document.querySelector(`#video${i}`).style.display = 'block';
            }
        })
    })
    .catch(err => console.log(`Error: ${err}`))