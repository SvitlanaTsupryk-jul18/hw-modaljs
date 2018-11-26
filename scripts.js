(function() {
    mobileMenu();
    //modalWindow();
    modal();
    ////////////////
    function mobileMenu() {
        var clone;
        var divider;
        var mobileMenu;
        var menuItem = document.querySelectorAll('.js-menu-item');
        // -> querySelectorAll -> [] -> length? -> 0 ? -> false
        // -> [Node, Node, Node]
        if (!menuItem.length) return;

        mobileMenu = document.createElement("div");

        // Node List hasn't sort method, so we should take sort from Array
        var elements = Array.prototype.slice.call(menuItem);
        elements.sort(function(a, b) {
            return a.dataset.menuOrder - b.dataset.menuOrder;
        });

        elements.forEach(function(item, i) {
            clone = item.cloneNode(true);
            clone.classList.remove('hidden-mobile');
            mobileMenu.appendChild(clone);
            if (i < menuItem.length - 1) {
                divider = document.createElement("hr")
                mobileMenu.appendChild(divider);
            }
        });

        document.querySelector(".js-mobile-menu").appendChild(mobileMenu);
    }

    function modalWindow1() {
        var className = '.js-modal';
        var activeClass = 'open';
        var modal = document.querySelector(className);
        // null
        // Node
        if (!modal) return;

        var modalTrigger = document.querySelector(className + '-trigger');
        var modalClose = document.querySelector(className + '-close');

        modalTrigger.addEventListener('click', function(e) {
            e.preventDefault();
            toggleModal();
            // вы же знаете на какую кнопку кликнули?
        });

        modalClose.addEventListener('click', function(e) {
            e.preventDefault();
            toggleModal();
        });

        function toggleModal() {
            document.querySelector('body').classList.toggle('modal-open');
            // скрой все секции в модалке
            // покажи конкретную секцию в модалке
            modal.classList.toggle(activeClass);
        }

    }


    function modal() {
        var className = '.js-modal';
        var activeClass = 'open';
        var modal = document.querySelector(className);
        // null
        // Node
        if (!modal) return;
        var modalTrigger = document.querySelectorAll(className + '-trigger'); // кнопка
        var modalClose = document.querySelector(className + '-close');

        modalTrigger.forEach(function(item, i, arr) {
            modalTrigger[i].addEventListener('click', function(e) {
                e.preventDefault();
                // вы же знаете на какую кнопку кликнули?
                //console.log(this.dataset.item);
                toggleModal.call(this); // вызывает функцию с указанным значением this 
            });
        });

        modalClose.addEventListener('click', function(e) {
            e.preventDefault();
            modal.classList.toggle(activeClass);
        });

        function toggleModal() {
            //console.log(this.dataset.item);
            document.querySelector('body').classList.toggle('modal-open');
            // скрой все секции в модалке
            var cont = modal.querySelectorAll("section");
            cont.forEach(function(item, i, arr) {
                cont[i].style.display = 'none';
            });
            // покажи конкретную секцию в модалке
            var section = modal.querySelectorAll('[data-item]');
            let c = this.dataset.item;
            for (var i = 0; i < section.length; i++) {
                if (section[i].dataset.item == c) {
                    section[i].style.display = 'block';
                    section[i].style.color = 'white';
                }
            }
            modal.classList.toggle(activeClass);
        }
    }
})();