import "../scss/main.scss";

window.addEventListener('load', function() {
    function MobileMenu () {
        let el =  document.querySelector(".js-mobile-menu");
        let open = document.querySelector(".js-top-menu__open");
        let close = el.querySelector(".js-mobile-menu__close");

        let opened = false;

        function openMenu() {
            el.style.display = "block";
        }
        function closeMenu() {
            el.style.display = "none";
        }

        if(el && open && close) {
            open.addEventListener('click', () =>  { 
                opened ? closeMenu() : openMenu();

                opened != opened;
            });
            close.addEventListener('click', () => {
                closeMenu();
                opened = false;
            });            
        }
    }

    new MobileMenu();
});