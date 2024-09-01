const usernameElement=document.querySelector('#username');
const submitBtn=document.querySelector('#submitBtn');
const div=document.createElement('div');
submitBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    const username=usernameElement.value;
    generateCard(getRequestUrl(username))
})

function getRequestUrl(username){
    return `https://api.github.com/users/${username}`;
}


// using XMLHttp Request (older way):

// function generateCard(requestUrl){
//     let xhr=new XMLHttpRequest()
//     xhr.open('GET', requestUrl)
//     xhr.onload=function(){
//         const data=JSON.parse(xhr.responseText);
//         console.log(data);
//         if(data.status==404){
//             div.innerHTML="<h2>Invalid Username</h2>"
//         } else {
//             div.innerHTML=`<div class="box">
//                 <div class="image">
//                     <img src="${data.avatar_url}" alt="profile photo">
//                 </div>
//                 <div class="content">
//                     <div class="small-box"></div>
//                     <div class="small-box-copy"></div>
//                     <p class="name">${data.name ?? data.login}</p>
//                     <p>Repo count: ${data.public_repos}</p>
//                     <p>Followers: ${data.followers}</p>
//                     <p>Following: ${data.following}</p>
//                     <p>Twitter: <a style="color:#000" href="https://x.com/${data.twitter_username ?? "NOT FOUND"}" >${data.twitter_username ?? "NOT FOUND"}</a></p>
//                     <p>Account Created: ${(data.created_at).substring(0,10)}</p>
//                     <button class="button"><a class="profileLink" href="${data.html_url}">Open Profile</a></button>
//                 </div>
//             </div>`
//         }
//         document.querySelector('body').appendChild(div)
//     }
//     xhr.send()
// }



// using fetch API
function generateCard(requestUrl){
    showLoader()
    fetch(requestUrl)
    .then((res)=>{  
        hideLoader()  
        return res.json()   // returning because it parsing to json return a promise (asynchronous task)
    })
    .then((data)=>{
        console.log(data);
        if(data.status==404){
            div.innerHTML="<h2>Invalid Username</h2>"
        } else {
            div.innerHTML=`<div class="box">
                <div class="image">
                    <img src="${data.avatar_url}" alt="profile photo">
                </div>
                <div class="content">
                    <div class="small-box"></div>
                    <div class="small-box-copy"></div>
                    <p class="name">${data.name ?? data.login}</p>
                    <p>Repo count: ${data.public_repos}</p>
                    <p>Followers: ${data.followers}</p>
                    <p>Following: ${data.following}</p>
                    <p>Twitter: <a style="color:#000" href="https://x.com/${data.twitter_username ?? "NOT FOUND"}" >${data.twitter_username ?? "NOT FOUND"}</a></p>
                    <p>Account Created: ${(data.created_at).substring(0,10)}</p>
                    <button class="button"><a class="profileLink" href="${data.html_url}">Open Profile</a></button>
                </div>
            </div>`
        }
        document.querySelector('body').appendChild(div)
    })
}


// loader visibility functions

function showLoader(){
    document.querySelector('.loader').style.display="block"
}
function hideLoader(){
    document.querySelector('.loader').style.display="none"
}