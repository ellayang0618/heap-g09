function loadHomePage(){
    console.log("home page is loaded")
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
    if (data.media_type == 'image'){
        document.getElementById('home_photo').innerHTML = `<img class="img-fluid" width="350" height="250" src="${data.url}" alt="">`;
    }else{
        document.getElementById('home_photo').innerHTML = `<iframe width="500" height="350" src = "${data.url}"></iframe>`
    
    }
    document.getElementById('home_photo').onclick=function (){
        window.location.href = "{{ url_for('gallery_page') }}";
    }

    
}