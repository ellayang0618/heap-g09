
function loadGalleryPage(){
    console.log("gallery page is loaded")
    sendApiRequest()
}

//An asynchronous function to fetch data from the API.
async function sendApiRequest(){
    API_KEY = 'Nf9R0l8xs8r7ZgCFF5rNTaaxQFRAIUcvEP454sEn'
    let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
    console.log(response)
    let data = await response.json()
    console.log(data)
    useApiData(data)
}


//function that does something with the data received from the API. The name of the function should be customized to whatever you are doing with the data
function useApiData(data){
    document.getElementById('title1').innerHTML = `<h1>${data.title}</h1>`;
    document.getElementById('content1').innerText = data.explanation;
    document.getElementById('image1').innerHTML = `<img class="img-fluid" width="350" height="250" src="${data.url}" alt="">`;
    document.getElementById('date1').innerText = data.date;
}