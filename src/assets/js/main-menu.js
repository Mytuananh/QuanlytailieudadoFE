function mainMenu() {
    if (typeof global === 'undefined') {
        var global = window;
      }
      
    console.log('main menu js');
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);

    const tabs = $$(".tab-item");
    // const panes = $$(".tab-pane");
    const navbar_tabs =  $$("#navbar-tab-panes li a")

    // SonDN fixed - Active size wrong size on first load.
    // Original post: https://www.facebook.com/groups/649972919142215/?multi_permalinks=1175881616551340


    tabs.forEach((tab, index) => {
        // const pane = panes[index];

        tab.onclick = function () {
            $(".tab-item.active").classList.remove("active");
            // $(".tab-pane.active").classList.remove("active");


            this.classList.add("active");
            // pane.classList.add("active");
        };
    });

    navbar_tabs.forEach((tab, index) => {
        const t = tabs[index];

        tab.onclick = function () {
            $(".tab-item.active").classList.remove("active");
            // $(".tab-pane.active").classList.remove("active");


            t.classList.add("active");
            // pane.classList.add("active");
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



    // ----------------------------- Modal --------------------
    var addNewBtn = document.getElementById('addNewBtn');
    var functionList = document.getElementById('functionList');
    var modal = document.getElementById('myModal');
    var modal1 = document.getElementById('myModal1')
    // Get the <span> element that closes the modal
    const span = document.getElementsByClassName("close")[0];
    // const span1 = document.getElementsByClassName("close1")[0];

    // Get the buttons to save and cancel changes
    const saveBtn = document.getElementById("saveBtn");
    const cancelBtn = document.getElementById("cancelBtn");
    const saveBtn1 = document.getElementById("saveBtn1");
    const cancelBtn1 = document.getElementById("cancelBtn1");

    // Get the form and all input fields
    const form = document.querySelector("form");
    const inputFields = form.querySelectorAll("input, select");

    // Hide the function list initially
    functionList.style.display = "none";

    // Show the function list when addNewBtn is clicked and hide the modal
    addNewBtn.addEventListener('click', function () {
        functionList.style.display = "block";
        modal.style.display = "none";
        modal1.style.display = "none";
    });

    // Hide the function list when any function is clicked, except for "thongTinChung", and show the modal
    functionList.addEventListener('click', function (event) {
        var functionName = event.target.getAttribute('data-function');
        if (functionName === "thongTinChung") {
            functionList.style.display = "none";
            modal1.style.display = "none";
            modal.style.display = "block"
        }
        if (functionName === "thongTinQuanLy") {
            modal.style.display = 'none';
            functionList.style.display = "none";
            modal1.style.display = "block"
        }
    });

    // Get the error message elements
    const projectCodeError = document.getElementById("project-code-error");
    const projectNameError = document.getElementById("project-name-error");
    const projectLocationError = document.getElementById("project-location-error");
    const projectHistoryError = document.getElementById("project-history-error");

    // Function to clear all input fields in the form
    function clearFormInputs() {
        inputFields.forEach((field) => {
            field.value = "";
        });
    }

    // Function to validate the input fields
    function validateFormInputs() {
        let isValid = true;
        const projectCodeValue = document.getElementById("project-code-num").value;

        if (projectCodeValue === "") {
            projectCodeError.textContent = "Chưa nhập mã công trình!";
            isValid = false;
        } else {
            projectCodeError.textContent = "";
        }

        const projectNameValue = document.getElementById("project-name").value;
        if (projectNameValue === "") {
            projectNameError.textContent = "Chưa điền tên công trình";
            isValid = false;
        } else {
            projectNameError.textContent = "";
        }

        const projectLocationNameValue = document.getElementById(
            "project-location-name"
        ).value;
        const projectLocationXValue = document.getElementById(
            "project-location-x"
        ).value;
        const projectLocationYValue = document.getElementById(
            "project-location-y"
        ).value;
        if (
            projectLocationNameValue === "" ||
            projectLocationXValue === "" ||
            projectLocationYValue === ""
        ) {
            projectLocationError.textContent = "Chưa nhập vị trí hoặc địa điểm hoặc tọa độ";
            isValid = false;
        } else {
            projectLocationError.textContent = "";
        }

        const projectHistoryValue = document.getElementById(
            "project-history"
        ).value;
        if (
            projectHistoryValue === ""
        ) {
            projectHistoryError.textContent = "Chưa nhập thông tin lịch sử xây dựng công trình";
            isValid = false;
        } else {
            projectHistoryError.textContent = "";
        }

        return isValid;
    }

    // Function to save the form data
    function saveFormData() {
        if (validateFormInputs()) {
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            // Do something with the form data, e.g. send it to the server
            console.log(data);
            closeModal();
            clearFormInputs();
        }
    }

    // Function to close the modal
    function closeModal() {
        modal.style.display = "none";
        modal1.style.display = "none";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        closeModal();
    };
    // span1.onclick = function () {
    //     closeModal();
    // }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target === modal) {
            closeModal();
        }
    };

    // When the user clicks the save button, save the form data
    saveBtn.onclick = function () {
        saveFormData();
    };
    saveBtn1.onclick = function () {
        saveFormData();
    }
    // When the user clicks the cancel button, close the modal
    cancelBtn.onclick = function () {
        closeModal();
    };
    cancelBtn1.onclick = function () {
        closeModal();
    }

    // Function to close the modal
    function closeModal() {
        modal.style.display = "none";
        modal1.style.display = "none";
    }

}