function generateForm(){
    document.getElementById('discussion_form').innerHTML= `<textarea id="post_content" rows="5" cols="80" placeholder="Let's share something interesting..." class="rounded border-warning"></textarea>
    <button id="post_btn" type='submit' class="btn btn-outline-warning mt-5">Post</button>
    `;

    const post_btn = document.getElementById('post_btn');
    post_btn.addEventListener('click', postContent);

    function postContent(){
        post_btn.style.display = "none";
        const post_content = document.getElementById('post_content')
        post_content.style.display = "none";

        // console.log("sentence",post_content.value)
        const para = document.createElement('p');
        const node = document.createTextNode(post_content.value);
        para.appendChild(node);
        console.log("sentence",para)
        let sentence = para.innerText


        let output = 
    `<div class="card mb-2">
    <div class="card-body p-2 p-sm-3">
        <div class="media forum-item">
            <a href="#" data-toggle="collapse" data-target=".forum-content"><img
                    src="../static/img/team-2.jpg"
                    class="mr-3 rounded-circle" width="50" alt="User" /></a>
            <div class="media-body">
                <h6><a href="#" data-toggle="collapse" data-target=".forum-content"
                        class="text-body"></a></h6>
                <p class="text-secondary">
                    ${sentence}
                </p>
                <p class="text-muted"><a href="javascript:void(0)">Jason_51</a> posted <span
                        class="text-secondary font-weight-bold">1 minute ago</span></p>
            </div>
            
        </div>
    </div>
    </div>`;
    let forumContentParent = document.getElementById("forum_content").innerHTML
    // forumContentParent.insertBefore(para, forumContentParent.childNodes[0])
    document.getElementById("forum_content").innerHTML += output;

 
    }
    


}