
    function closeMenu(){
        var element = document.querySelectorAll('.header-sub-menu');
        for(i=0; i<=5; i++){
            console.log('element ::',element[i]);
            element[i].style.display = 'none';
        }
    }

    function closeMainMenu(){
        var element = document.querySelector('.mobile-menu-icon-wrapper');
        element.style.display = 'none';
    }
    function openMainMenu(){
        var element = document.querySelector('.mobile-menu-icon-wrapper');
        element.style.display = 'flex';
    }

    function openCloseMenu(event){
        event.nextElementSibling.style.display = 'flex';
    }

    function inputSearchBox() {
        var x = document.getElementById("search-item-box");
        console.log(x);
        if (x.style.display === "none") {
            x.style.display = "flex";
        } else {
            x.style.display = "none";
        }
    }
