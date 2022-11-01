
// Load main page articles
fetch(`https://api.nasa.gov/planetary/apod?api_key=Watj9Kgy2p9T6xXiqp7beRkupgcACwu0K4bu6dHs&count=7`)
.then(res => res.json())
.then(data => {
    singlePageData = data;
    data.forEach((obj, i) => {
        if (i < 3) {
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
        } else if (i < 7) {
            document.querySelector(`#title${i}`).textContent = obj.title;
            document.querySelector(`#date${i}`).textContent = obj.date;
            document.querySelector(`#image${i}`).src = obj.hdurl;
        }
    })
})
.catch(err => console.log(`Error: ${err}`));


// Get links
let singlePageData
const singlePageLinks = Array.from(document.querySelectorAll('.image'));
for(let e = 0 ; e < singlePageLinks.length ; e++) {
    singlePageLinks[e].addEventListener('click', function() {
        return sessionStorage.setItem("apod", singlePageData[e].date);
    });
  }

// Render Single page
if (document.URL.includes('single.html')) {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=Watj9Kgy2p9T6xXiqp7beRkupgcACwu0K4bu6dHs&date=${sessionStorage['apod']}`)
        .then(res => res.json())
        .then(data => {
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
        })
        .catch(err => console.log(`Error: ${err}`))
}