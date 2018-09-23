import "../scss/main.scss";

window.addEventListener('load', function () {
    function MobileMenu() {
        let el = document.querySelector(".js-mobile-menu");
        let open = document.querySelector(".js-top-menu__open");
        let close = el.querySelector(".js-mobile-menu__close");

        let opened = false;

        function openMenu() {
            el.style.display = "block";
        }

        function closeMenu() {
            el.style.display = "none";
        }

        if (el && open && close) {
            open.addEventListener('click', () => {
                opened ? closeMenu() : openMenu();

                opened != opened;
            });
            close.addEventListener('click', () => {
                closeMenu();
                opened = false;
            });
        }
    }

    function Popup(el) {

        if (!el) {
            return;
        }

        let closeButton = el.querySelector(".js-popup-button");

        this.openPopup = function () {
            el.style.display = "flex";
        }

        this.closePopup = function () {
            el.style.display = "none";
        }

        el.addEventListener('click', (e) => {
            if (e.target == el || e.target == closeButton) {
                this.closePopup();
            }
        });
    }

    new MobileMenu();


    let form = document.querySelector(".form");

    if (form) {

        let success = new Popup(document.querySelector(".js-popup-success"));
        let failure = new Popup(document.querySelector(".js-popup-failure"));

        form.addEventListener('submit', (e) => {
            let invalid = [...form.elements].filter(el => {
                return !el.validity.valid;
            });
            if (invalid.length == 0) {
                success.openPopup();
            } else {
                failure.openPopup();
            }
            e.preventDefault();
        });

    }


});