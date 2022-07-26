
function loadGalleryPage(){
    console.log("gallery page is loaded")
    sendApiRequest()
}

//An asynchronous function to fetch data from the API.
async function sendApiRequest(){
    API_KEY = 'R5tVXdeOHcZbmXMTPknErP3hUNKdyfTxeQV1ZueN'
    let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
    console.log(response)
    let data = await response.json()
    console.log(data)
   
    useApiData(data)

}


function useApiData(data){
    document.getElementById('title1').innerHTML = `<h1>${data.title}</h1>`;
    document.getElementById('content1').innerText = data.explanation;
    if (data.media_type == 'image'){
        
        document.getElementById('source').innerHTML = `<img class="img-fluid" width="350" height="250" src="${data.url}" alt="">`;
    }else{
        document.getElementById('source').innerHTML = `<iframe width="500" height="350" src = "${data.url}"></iframe>`
    }
    
    document.getElementById('date1').innerText = data.date;
}