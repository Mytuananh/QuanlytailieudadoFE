function mainMenu() {
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);

    const tabs = $$(".tab-item");
    const panes = $$(".tab-pane");


    // SonDN fixed - Active size wrong size on first load.
    // Original post: https://www.facebook.com/groups/649972919142215/?multi_permalinks=1175881616551340


    tabs.forEach((tab, index) => {
        const pane = panes[index];

        tab.onclick = function () {
            $(".tab-item.active").classList.remove("active");
            $(".tab-pane.active").classList.remove("active");


            this.classList.add("active");
            pane.classList.add("active");
        };
    });

    const sidebar = document.querySelector('.side-bar-1');
    const toggleButton = document.querySelector('.sidebar-toggle');
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    toggleButton.addEventListener('click', () => {
        const isSidebarActive = sidebar.classList.contains('active');
        sidebar.classList.toggle('active');
        toggleButton.classList.toggle('active');
        dropdownToggles.forEach(function(toggle) {
            toggle.classList.toggle('disabled', !isSidebarActive);
        });
        dropdownToggles.forEach((toggle) => {
            const dropdownMenu = toggle.nextElementSibling;
            if (dropdownMenu.style.display === 'block') {
                toggle.parentNode.classList.remove('open');
                dropdownMenu.style.display = 'none';
            }
        });
        // Cuộn sidebar lên đầu trang
        sidebar.scrollTop = 0;
    });
    dropdownToggles.forEach(function(toggle) {
        toggle.addEventListener('click', function(event) {
            event.preventDefault();
            if (!sidebar.classList.contains('active')) {
                return;
            }
            this.parentNode.classList.toggle('open');
            var dropdownMenu = this.nextElementSibling;
            dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
        });
    });

}