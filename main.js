var currentSlide = 0;
var slides = document.getElementsByClassName("slide");
const categoryAPI = "http://localhost:3000/category"
const newPostAPT = "http://localhost:3000/newPost"

// chuyen slide dau trang
function nextSlide() {
    slides[currentSlide].style.display = "none";
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.display = "block";
}

setInterval(nextSlide, 3000);


function start() {
    getCategory(renderCategories);
    getNewPost(renderNewPosts);
}



// ham lay category
function getCategory(callBack) {
    fetch(categoryAPI)
        .then(function (response) {
            return response.json();
        })
        .then(callBack)
}

// render ra list cate
function renderCategories(categories) {
    var listCategoryBlock = document.querySelector('#list-categories')
    var html = categories.map(category => `<li class="cate-item">
         <a> <img src="image/${category.image}"><span>${category.title}</span> </a> 
            </li>`)
    listCategoryBlock.innerHTML = html.join('');
}


// 
function getNewPost(callBack) {
    fetch(newPostAPT)
        .then(response => response.json())
        .then(callBack)
}


function renderNewPosts(newPosts) {
    var blockNewPost = document.querySelector('#block-new-posy-list')
    var html = newPosts.map(newpost => `
            <li>
            <div class="new-post-item">
                <a href="#">
                    <img src="image/${newpost.image}" alt="">
                    <div class="post-item-title">
                        <p>${newpost.title}</p>
                    </div>
                </a>
                <div class="price">
                    <p>${newpost.price}</p>
                </div>
                <div class="post-item-footer">
                    <ul>
                        <li><img src="https://img.icons8.com/ios/50/null/bag-diagonal-view.png" /></li>
                        <li>.</li>
                        <li>
                            <p>${newpost.time}</p>
                        </li>
                        <li>.</li>
                        <li class="location-info">${newpost.location}</li>
                    </ul>
                </div>
            </div>
        </li>
    `)
    blockNewPost.innerHTML = html.join('');
}





