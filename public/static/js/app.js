$(document).ready(function () {

  let url = "https://newsapi.org/v2/top-headlines?q=space&apiKey=e1952da524ab4e6e9eeccd8bee08f3f3";

  $.ajax({
    url: url,
    method: "GET",
    dataType: "JSON",

    beforeSend: function () {
      $(".progress").show();
    },

    complete: function () {
      $(".progress").hide();
    },

    success: function (newsdata) {
      let output = "";
      let count = 0;
      let latestNews = newsdata.articles;
      for (var i in latestNews) {
        if(count == 0){
          output += `<div class="container p-4">
          <div class="row">
          <div class="card-columns d-flex justify-content-center">`
          

        };
        output += `
              <div class="col-lg-6 mb-4">
                <div class="card" style="width: 27rem;">
                    <img class="card-img-top" src="${latestNews[i].urlToImage}" alt="${latestNews[i].title}">
                    <div class="card-body">
                      <h5 class="card-title">Title: <a href="${latestNews[i].url}" title="${latestNews[i].title}">${latestNews[i].title}</a></h5>
                      <h6 class="card-title">Author: ${latestNews[i].author}</h6>
                      <h6 class="card-title">News source: ${latestNews[i].source.name}</h6>
                      <h6 class="card-title">Published: ${latestNews[i].publishedAt}</h6>
                      <h6 class="card-title">Description: </h6>
                      <p class="card-text">${latestNews[i].description}</p>
                      <a href="${latestNews[i].url}" class="btn btn-warning">Read More</a>
                    </div>
                </div>
              </div>
            
        
        `;
        count += 1
        if(count == 2){
          output += `</div>
          </div>
          </div>`
          count = 0
        };
      }

      if (output !== "") {
        $("#newsResults").html(output);
        
      }

    },

    error: function () {
      let errorMsg = `<div class="errorMsg center">Some error occured</div>`;
      $("#newsResults").html(errorMsg);
    }
  })

});