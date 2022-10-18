    // Load initial today's APOD
    fetch(`https://api.nasa.gov/planetary/apod?api_key=Watj9Kgy2p9T6xXiqp7beRkupgcACwu0K4bu6dHs`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector(`#titleByDate`).textContent = data.title;
        document.querySelector(`#dateByDate`).textContent = data.date;
        document.querySelector(`#dateByDate`).datetime = data.date;
        document.querySelector(`#explanationByDate`).textContent = data.explanation;
        if (data.media_type === "image") {
            document.querySelector(`#videoByDate`).style.display = 'none';
            document.querySelector(`#imageByDate`).style.display = 'block';
            document.querySelector(`#imageByDate`).src = data.hdurl;
        } else if (data.media_type === "video") {
            document.querySelector(`#imageByDate`).style.display = 'none';
            document.querySelector(`#videoByDate`).style.display = 'block';
            document.querySelector(`#videoByDate`).src = data.url;
        }
    })
    .catch(err => console.log(`Error: ${err}`))
    
    // Load article page by date
    document.querySelector('#submitDate').addEventListener('submit', submitDate)
    function submitDate(event) {
        event.preventDefault();
        const inputVal = document.querySelector('#inputDate').value;
        console.log(inputVal)

        fetch(`https://api.nasa.gov/planetary/apod?api_key=Watj9Kgy2p9T6xXiqp7beRkupgcACwu0K4bu6dHs&date=${inputVal}`)
        .then(res => res.json())
        .then(data => {
            if (data.code === 400) {
                console.log('error')
                document.querySelector('#dateMessage').textContent = data.msg;
                document.querySelector('#dateMessage').style.display = 'block';
            } else {
                console.log(data)
                document.querySelector('#dateMessage').style.display = 'none';
                document.querySelector(`#titleByDate`).textContent = data.title
                document.querySelector(`#dateByDate`).textContent = data.date
                document.querySelector(`#dateByDate`).datetime = data.date
                document.querySelector(`#explanationByDate`).textContent = data.explanation
                if (data.media_type === "image") {
                    document.querySelector(`#videoByDate`).style.display = 'none';
                    document.querySelector(`#imageByDate`).style.display = 'block';
                    document.querySelector(`#imageByDate`).src = data.hdurl;
                } else if (data.media_type === "video") {
                    document.querySelector(`#imageByDate`).style.display = 'none';
                    document.querySelector(`#videoByDate`).style.display = 'block';
                    document.querySelector(`#videoByDate`).src = data.url;
                }
            }
        })
        .catch(err => console.log(`Error: ${err}`))
    }

    // fetch(`https://api.nasa.gov/planetary/apod?api_key=Watj9Kgy2p9T6xXiqp7beRkupgcACwu0K4bu6dHs&count=3`)
    // .then(res => res.json())
    // .then(data => {
    //     console.log(data)
    //     data.forEach((obj, i) => {
    //         document.querySelector(`#title${i}`).textContent = obj.title
    //         document.querySelector(`#date${i}`).textContent = obj.date
    //         document.querySelector(`#date${i}`).datetime = obj.date
    //         document.querySelector(`#explanation${i}`).textContent = obj.explanation
    //         if (obj.media_type === "image") {
    //             document.querySelector(`#image${i}`).src = obj.hdurl
    //         } else if (obj.media_type === "video") {
    //             document.querySelector(`#video${i}`).src = obj.url
    //         }
    //     })
    // })
    // .catch(err => console.log(`Error: ${err}`))