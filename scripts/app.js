//MENU
    const burger = document.querySelector('.header__burger');
    const menuContent = document.querySelector('.header__content');
    const dropdownLink = document.querySelector('.dropdownLink');
    const dropdownMenu = document.querySelector('.dropdownList');
    const tabsClosing = document.querySelectorAll('.automaticClosing');
    //menu opening
    burger.addEventListener('click', () => {
        menuContent.classList.toggle('header__content--open');
        burger.classList.toggle('header__burger--open');
        dropdownMenu.classList.remove('dropdownList--actif');
        dropdownLink.classList.remove('dropdownLink--open');
        document.body.classList.toggle('menuOpen');
    });
    //automatic closing on mobile
    for(var i=0;i < tabsClosing.length; i++){
	    tabsClosing[i].addEventListener('click', function(){
	        menuContent.classList.remove('header__content--open');
            burger.classList.remove('header__burger--open');
            dropdownMenu.classList.remove('dropdownList--actif');
            dropdownLink.classList.remove('dropdownLink--open');
            document.body.classList.remove('menuOpen');
	    }, false);   
	}
    //dropdown menu
    dropdownLink.addEventListener('click', () => {
        dropdownMenu.classList.toggle('dropdownList--actif');
        dropdownLink.classList.toggle('dropdownLink--open');
    });

//ALERT
    const alertButton = document.querySelector('.coronaAlert__button');
    const alertContent = document.querySelector('.coronaAlert__content');
    alertButton.addEventListener('click', () => {
        alertContent.classList.toggle('coronaAlert__content--visible');
        alertButton.classList.toggle('coronaAlert__button--open');
    });

//NEWSROOM
    const options = document.querySelectorAll('.newsOptions__el');
    const ul = document.querySelector('.newsList');
    const url = "assets/json/news.json";
    //initialization
    fetch(url)
        .then((response) =>{
            return response.json();
        })
        .then ((json) =>{
            cache = json;
            json.forEach((data) =>{
                if(`${data.id}` == 2){
                    const li = document.createElement('li');
                    li.classList.add('newsList__el');
                    ul.appendChild(li);
                    li.innerHTML = `
                        <a href="#">
                            <figure class="new">
                                <img class="new__img" src="${data.Image}" srcset="${data.ImageRetina}" alt="${data.ImageCaption}"/>
                                <figcaption class="title title--subtitle title--news">${data.Title}</figcaption>
                                <figcaption class="new__article">${data.Article}</figcaption>
                            </figure>
                        </a>
                        `;
                }
            });
        });
    //on click
    options.forEach((option) => {
        option.addEventListener('click', (el) => {
            removeClass();
            el.currentTarget.classList.add('newsOptions__el--actif');
            const ul = document.querySelector('.newsList');
            ul.classList.add("disappearArticle");
            const id = el.currentTarget.getAttribute("data-id");
            setTimeout(() => {
                ul.classList.remove("disappearArticle");
                const url = "assets/json/news.json";
                fetch(url)
                    .then((response) =>{
                        return response.json();
                    })
                    .then ((json) =>{
                        cache = json;
                        json.forEach((data) =>{
                            if(id === `${data.id}`){
                                const li = document.createElement('li');
                                li.classList.add('newsList__el');
                                ul.appendChild(li);
                                li.innerHTML = `
                                    <figure class="new">
                                        <img class="new__img" src="${data.Image}" alt="${data.ImageCaption}"/>
                                        <figcaption class="title title--subtitle title--news">${data.Title}</figcaption>
                                        <figcaption class="new__article">${data.Article}</figcaption>
                                    </figure>`;
                            }
                        });
                    });
            }, 200);
            setTimeout(() => {
                ul.innerHTML= "";
            }, 205)
        })
    });
    function removeClass(){
        options.forEach((option) => {
            option.classList.remove('newsOptions__el--actif');
        })
    }
//# sourceMappingURL=app.js.map
