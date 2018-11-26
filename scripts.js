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

    // function modalWindow() {
    //   var className = '.js-modal';
    //   var activeClass = 'open';
    //   var modal = document.querySelector(className);
    //   // null
    //   // Node
    //   if (!modal) return;

    //   var modalTrigger = document.querySelector(className + '-trigger');
    //   var modalClose = document.querySelector(className + '-close');

    //   modalTrigger.addEventListener('click', function(e) {
    //     e.preventDefault();
    //     toggleModal();
    //     // вы же знаете на какую кнопку кликнули?
    //   });

    //   modalClose.addEventListener('click', function (e) {
    //     e.preventDefault();
    //     toggleModal();
    //   });

    //   function toggleModal() {
    //     document.querySelector('body').classList.toggle('modal-open');
    //     // скрой все секции в модалке
    //     // покажи конкретную секцию в модалке
    //     modal.classList.toggle(activeClass);
    //   }

    // }


    function modal() {
        var className = '.js-modal';
        var activeClass = 'open';
        var modal = document.querySelector(className);

        // null
        // Node
        if (!modal) return;

        var modalTrigger = document.querySelectorAll(className + '-trigger'); // кнопка
        var modalClose = document.querySelector(className + '-close');
        var content = document.querySelectorAll('p[data-item]');


        modalTrigger.forEach(function(item, i, arr) {
            modalTrigger[i].addEventListener('click', function(e) {
                e.preventDefault();
                toggleModal();
                // вы же знаете на какую кнопку кликнули?
                console.log(this.dataset.item);
            });
        });


        modalClose.addEventListener('click', function(e) {
            e.preventDefault();
            toggleModal();
        });

        function toggleModal() {
            //////!!!!!!!!!ничего не передается!!!!
            console.log(this.dataset.item);

            document.querySelector('body').classList.toggle('modal-open');
            // скрой все секции в модалке
            var cont = document.querySelectorAll("div.js-modal>div");
            cont.forEach(function(item, i, arr) {
                cont[i].style.display = 'none';
                //console.log(cont[i]);
            });
            // покажи конкретную секцию в модалке
            let c = 'data-item =' + '"' + this.dataset.item + '"';
            var text = content.querySelector("[" + c + "]");
            modal.appendChild(text);
            modal.classList.toggle(activeClass);
        }

    }

})();