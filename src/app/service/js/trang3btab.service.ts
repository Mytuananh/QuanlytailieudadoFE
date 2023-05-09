import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Trang3btabService {

  constructor() { }

  init() {
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);

    const tabs = $$(".tab-item-hs");
    const panes = $$(".tab-pane-hs");


    // SonDN fixed - Active size wrong size on first load.
    // Original post: https://www.facebook.com/groups/649972919142215/?multi_permalinks=1175881616551340


    tabs.forEach((tab, index) => {
      const pane = panes[index];

      (tab as HTMLElement).onclick = function () {
        $(".tab-item-hs.active")!.classList.remove("active");
        $(".tab-pane-hs.active")!.classList.remove("active");


        tab.classList.add("active");
        pane.classList.add("active");
      };
    });

    const tabsHs = $$(".tab-item-hs-nam");
    const panesHs = $$(".tab-pane-hs-nam");


    // SonDN fixed - Active size wrong size on first load.
    // Original post: https://www.facebook.com/groups/649972919142215/?multi_permalinks=1175881616551340


    tabsHs.forEach((tab, index) => {
      const pane = panesHs[index];

      (tab as HTMLElement).onclick = function () {
        $(".tab-item-hs-nam.active")!.classList.remove("active");
        $(".tab-pane-hs-nam.active")!.classList.remove("active");



        tab.classList.add("active");
        pane.classList.add("active");
      };
    });

    /*-------------------------------------------------------------------------------------------------------------------*/
    const songList = document.querySelector('.tab-list')!;
    const scrollLeftButton = document.querySelector('.scroll-left')!;
    const scrollRightButton = document.querySelector('.scroll-right')!;
    const songList1 = document.querySelector('.tab-list-1')!;
    const scrollLeftButton1 = document.querySelector('.scroll-left-1')!;
    const scrollRightButton1 = document.querySelector('.scroll-right-1')!;
    let currentIndex = 0;
    // Thay đổi trong phần JavaScript
    const visibleSongs = 1; // Số lượng bài hát hiển thị cùng một lúc
    let currentIndex1 = 0;
    // Thay đổi trong phần JavaScript
    const visibleSongs1 = 1; // Số lượng bài hát hiển thị cùng một lúc

    // Thay đổi trong phần JavaScript
    const currentYear = new Date().getFullYear(); // Lấy năm hiện tại
    function scrollToCurrentYear() {
      for (let i = 0; i < songList1.childElementCount; i++) {
        const song = songList1.children[i];
        const songYear = parseInt(song.getAttribute('data-year')!, 10);

        if (songYear === currentYear) {
          currentIndex1 = Math.max(0, i - (i % visibleSongs1)); // Đảm bảo index là bội số của visibleSongs
          break;
        }
      }
      updateCarousel1();
    }
    // Khai báo biến
    const selectTab = document.querySelector('#select-tab')! as HTMLSelectElement;
    const tabNamHS = document.querySelector('#tab-nam-hs')! as HTMLElement;
    const tabNamHS1 = document.querySelector('#tab-nam-hs-1')! as HTMLElement;
    const tabItemHS = document.querySelector('#hs1')! as HTMLElement;
    const tabItemHS1 = document.querySelector('#hs2')! as HTMLElement;

    // Xử lý sự kiện change của phần tử select
    selectTab.addEventListener('change', () => {
      if (selectTab.value === 'tab-nam-hs') {
        tabNamHS.style.display = 'block';
        tabNamHS1.style.display = 'none';
        tabItemHS.style.display = 'block';
        tabItemHS1.style.display = 'none';
        const addNewBtn = document.getElementById('addNewBtn') as HTMLElement;
        const addNewBtn1 = document.getElementById('addNewBtn-1') as HTMLElement;
        const addNewBtn2 = document.getElementById('addNewBtn-2') as HTMLElement;
        const addNewBtn3 = document.getElementById('addNewBtn-3') as HTMLElement;
        const addNewBtn4 = document.getElementById('addNewBtn-4') as HTMLElement;
        const addNewBtnKhac = document.getElementById('addNewKhac') as HTMLElement;
        const functionList = document.getElementById('functionList') as HTMLElement;
        const functionList1 = document.getElementById('functionList-1') as HTMLElement;
        const functionList2 = document.getElementById('functionList-2') as HTMLElement;
        const functionList3 = document.getElementById('functionList-3') as HTMLElement;
        const functionList4 = document.getElementById('functionList-4') as HTMLElement;
        const functionListKhac = document.getElementById('functionListKhac') as HTMLElement;
        const modal = document.getElementById('myModal') as HTMLElement;
        const modal1 = document.getElementById('myModal1') as HTMLElement;
        const modal2 = document.getElementById('myModal-1') as HTMLElement;
        const modal3 = document.getElementById('myModal2') as HTMLElement;
        const modal4 = document.getElementById('myModal-2') as HTMLElement;
        const modal5 = document.getElementById('myModal3') as HTMLElement;
        const modal6 = document.getElementById('myModal-3') as HTMLElement;
        const modal7 = document.getElementById('myModal4') as HTMLElement;
        const modal8 = document.getElementById('myModal-4') as HTMLElement;
        const modal9 = document.getElementById('myModal5') as HTMLElement;
        const modal10 = document.getElementById('myModal6') as HTMLElement;
        const modal11 = document.getElementById('myModal7') as HTMLElement;
        const modal12 = document.getElementById('myModal8') as HTMLElement;
        const modal13 = document.getElementById('myModal9') as HTMLElement;
        const modal14 = document.getElementById('myModal10') as HTMLElement;
        const modalKhac = document.getElementById('myModalKhac') as HTMLElement;
        const modalKhac1 = document.getElementById('myModalKhac1') as HTMLElement;
        const modalKhac2 = document.getElementById('myModalKhac2') as HTMLElement;
        // Get the <span> element that closes the modal
        const span = document.getElementsByClassName("close")[0] as HTMLElement;
        const span1 = document.getElementsByClassName("close-1")[0] as HTMLElement;
        const span2 = document.getElementsByClassName("close-2")[0] as HTMLElement;
        const span3 = document.getElementsByClassName("close-3")[0] as HTMLElement;
        const span4 = document.getElementsByClassName("close-4")[0] as HTMLElement;
        const span5 = document.getElementsByClassName("close-5")[0] as HTMLElement;
        const span6 = document.getElementsByClassName("close-6")[0] as HTMLElement;
        const span7 = document.getElementsByClassName("close-7")[0] as HTMLElement;
        const span8 = document.getElementsByClassName("close-8")[0] as HTMLElement;
        const span9 = document.getElementsByClassName("close-9")[0] as HTMLElement;
        const span10 = document.getElementsByClassName("close-10")[0] as HTMLElement;
        const span11 = document.getElementsByClassName("close-11")[0] as HTMLElement;
        const span12 = document.getElementsByClassName("close-12")[0] as HTMLElement;
        const span13 = document.getElementsByClassName("close-13")[0] as HTMLElement;
        const span14 = document.getElementsByClassName("close-14")[0] as HTMLElement;
        const spanKhac = document.getElementsByClassName("close-khac")[0] as HTMLElement;
        const spanKhac1 = document.getElementsByClassName("close-khac-1")[0] as HTMLElement;
        const spanKhac2 = document.getElementsByClassName("close-khac-2")[0] as HTMLElement;
        // Get the buttons to save and cancel changes
        const saveBtn = document.getElementById("saveBtn") as HTMLElement;
        const cancelBtn = document.getElementById("cancelBtn") as HTMLElement;
        const saveBtn1 = document.getElementById("saveBtn1") as HTMLElement;
        const cancelBtn1 = document.getElementById("cancelBtn1") as HTMLElement;
        const saveBtn2 = document.getElementById("saveBtn-1") as HTMLElement;
        const cancelBtn2 = document.getElementById("cancelBtn-1") as HTMLElement;
        const saveBtn3 = document.getElementById("saveBtn1-2") as HTMLElement;
        const cancelBtn3 = document.getElementById("cancelBtn1-2") as HTMLElement;
        const saveBtn4 = document.getElementById("saveBtn-2") as HTMLElement;
        const cancelBtn4 = document.getElementById("cancelBtn-2") as HTMLElement;
        const saveBtn5 = document.getElementById("saveBtn1-3") as HTMLElement;
        const cancelBtn5 = document.getElementById("cancelBtn1-3") as HTMLElement;
        const saveBtn6 = document.getElementById("saveBtn-3") as HTMLElement;
        const cancelBtn6 = document.getElementById("cancelBtn-3") as HTMLElement;
        const saveBtn7 = document.getElementById("saveBtn1-4") as HTMLElement;
        const cancelBtn7 = document.getElementById("cancelBtn1-4") as HTMLElement;
        const saveBtn8 = document.getElementById("saveBtn-4") as HTMLElement;
        const cancelBtn8 = document.getElementById("cancelBtn-4") as HTMLElement;
        const saveBtn9 = document.getElementById("saveBtn1-5") as HTMLElement;
        const cancelBtn9 = document.getElementById("cancelBtn1-5") as HTMLElement;
        const cancelBtnHs = document.getElementById("cancelBtn-hs") as HTMLElement;
        const saveBtnHS = document.getElementById("saveBtn1-hs") as HTMLElement;
        const cancelBtnHs1 = document.getElementById("cancelBtn-hs-1") as HTMLElement;
        const saveBtnHS1 = document.getElementById("saveBtn1-hs-1") as HTMLElement;
        const cancelBtnHs2 = document.getElementById("cancelBtn-hs-2") as HTMLElement;
        const saveBtnHS2 = document.getElementById("saveBtn1-hs-2") as HTMLElement;
        const cancelBtnHs3 = document.getElementById("cancelBtn-hs-3") as HTMLElement;
        const saveBtnHS3 = document.getElementById("saveBtn1-hs-3") as HTMLElement;
        const cancelBtnHs4 = document.getElementById("cancelBtn-hs-4") as HTMLElement;
        const saveBtnHS4 = document.getElementById("saveBtn1-hs-4") as HTMLElement;
        const cancelBtnKhac = document.getElementById("cancelBtn-khac") as HTMLElement;
        const saveBtnKhac = document.getElementById("saveBtn-khac") as HTMLElement;
        const saveBtnKhac1 = document.getElementById("saveBtn1-khac") as HTMLElement;
        const cancelBtnKhac1 = document.getElementById("cancelBtn1-khac") as HTMLElement;
        const cancelBtnHsKhac = document.getElementById("cancelBtn-hs-khac") as HTMLElement;
        const saveBtnHSKhac = document.getElementById("saveBtn1-hs-khac") as HTMLElement;
        // Get the form and all input fields
        const form = document.querySelector("form") as HTMLFormElement;
        const inputFields = form.querySelectorAll("input, select");

        // Hide the function list initially
        functionList.style.display = "none";
        functionList1.style.display = "none";
        functionList2.style.display = "none";
        functionList3.style.display = "none";
        functionList4.style.display = "none";
        functionListKhac.style.display = "none";
        // Show the function list when addNewBtn is clicked and hide the modal
        addNewBtn.addEventListener('click', function () {
          functionList.style.display = "block";
          modal.style.display = "none";
          modal1.style.display = "none";
          modal11.style.display = "none";
        });
        addNewBtn1.addEventListener('click', function () {
          functionList1.style.display = "block";
          modal2.style.display = "none";
          modal3.style.display = "none";
          modal10.style.display = "none";
        });
        addNewBtn2.addEventListener('click', function () {
          functionList2.style.display = "block";
          modal4.style.display = "none";
          modal5.style.display = "none";
          modal12.style.display = "none";
        });
        addNewBtn3.addEventListener('click', function () {
          functionList3.style.display = "block";
          modal6.style.display = "none";
          modal7.style.display = "none";
          modal13.style.display = "none";
        });
        addNewBtn4.addEventListener('click', function () {
          functionList4.style.display = "block";
          modal8.style.display = "none";
          modal9.style.display = "none";
          modal14.style.display = "none";
        });
        addNewBtnKhac.addEventListener('click', function () {
          functionListKhac.style.display = "block";
          modalKhac.style.display = "none";
          modalKhac1.style.display = "none";
          modalKhac2.style.display = "none";
        })
        // Hide the function list when any function is clicked, except for "thongTinChung", and show the modal
        functionList.addEventListener('click', function (event) {
          const functionName = (event.target! as HTMLElement).getAttribute('data-function');
          if (functionName === "thongTinChung") {
            functionList.style.display = "none";
            modal1.style.display = "none";
            modal.style.display = "block"
            modal11.style.display = "none";
          }
          if (functionName === "thongTinQuanLy") {
            modal11.style.display = "none";
            modal.style.display = 'none';
            functionList.style.display = "none";
            modal1.style.display = "block"
          }
          if (functionName === "hoSoCongTrinh") {
            modal.style.display = 'none';
            functionList.style.display = "none";
            modal1.style.display = "none"
            modal11.style.display = "block";
          }
        });
        functionList1.addEventListener('click', function (event) {
          const functionName = (event.target! as HTMLElement).getAttribute('data-function');
          if (functionName === "thongTinChung") {
            functionList1.style.display = "none";
            modal3.style.display = "none";
            modal2.style.display = "block"
            modal10.style.display = "none";
          }
          if (functionName === "thongTinQuanLy") {
            modal2.style.display = 'none';
            functionList1.style.display = "none";
            modal3.style.display = "block"
            modal10.style.display = "none";
          }
          if (functionName === "hoSoCongTrinh") {
            modal2.style.display = 'none';
            functionList1.style.display = "none";
            modal3.style.display = "none"
            modal10.style.display = "block";
          }
        });
        functionList2.addEventListener('click', function (event) {
          const functionName = (event.target! as HTMLElement).getAttribute('data-function');
          if (functionName === "thongTinChung") {
            functionList2.style.display = "none";
            modal5.style.display = "none";
            modal4.style.display = "block"
            modal12.style.display = "none";
          }
          if (functionName === "thongTinQuanLy") {
            modal4.style.display = 'none';
            functionList2.style.display = "none";
            modal5.style.display = "block"
            modal12.style.display = "none";
          }
          if (functionName === "hoSoCongTrinh") {
            modal4.style.display = 'none';
            functionList2.style.display = "none";
            modal5.style.display = "none"
            modal12.style.display = "block";
          }
        });
        functionList3.addEventListener('click', function (event) {
          const functionName = (event.target! as HTMLElement).getAttribute('data-function');
          if (functionName === "thongTinChung") {
            functionList3.style.display = "none";
            modal7.style.display = "none";
            modal6.style.display = "block"
            modal13.style.display = "none";
          }
          if (functionName === "thongTinQuanLy") {
            modal6.style.display = 'none';
            functionList3.style.display = "none";
            modal7.style.display = "block"
            modal13.style.display = "none";
          }
          if (functionName === "hoSoCongTrinh") {
            modal6.style.display = 'none';
            functionList3.style.display = "none";
            modal7.style.display = "none"
            modal13.style.display = "block";
          }
        });
        functionList4.addEventListener('click', function (event) {
          const functionName = (event.target! as HTMLElement).getAttribute('data-function');
          if (functionName === "thongTinChung") {
            functionList4.style.display = "none";
            modal9.style.display = "none";
            modal8.style.display = "block"
            modal14.style.display = "none";
          }
          if (functionName === "thongTinQuanLy") {
            modal8.style.display = 'none';
            functionList4.style.display = "none";
            modal9.style.display = "block"
            modal14.style.display = "none";
          }
          if (functionName === "hoSoCongTrinh") {
            modal8.style.display = 'none';
            functionList4.style.display = "none";
            modal9.style.display = "none"
            modal14.style.display = "block";
          }
        });
        functionListKhac.addEventListener('click', function (event) {
          const functionName = (event.target! as HTMLElement).getAttribute('data-function');
          if (functionName === "thongTinChung") {
            functionListKhac.style.display = "none";
            modalKhac.style.display = "block";
            modalKhac1.style.display = "none";
            modalKhac2.style.display = "none";
          }
          if (functionName === "thongTinQuanLy") {
            modalKhac.style.display = 'none';
            functionListKhac.style.display = "none";
            modalKhac1.style.display = "block"
            modalKhac2.style.display = "none"
          }
          if (functionName === "hoSoCongTrinh") {
            modalKhac.style.display = 'none';
            functionListKhac.style.display = "none";
            modalKhac1.style.display = "none"
            modalKhac2.style.display = "block";
          }
        });
        // Get the error message elements
        const projectCodeError = document.getElementById("project-code-error") as HTMLElement;
        const projectNameError = document.getElementById("project-name-error") as HTMLElement;
        const projectLocationError = document.getElementById("project-location-error") as HTMLElement;
        const projectHistoryError = document.getElementById("project-history-error") as HTMLElement;
        const projectCodeHSError = document.getElementById("project-code-error-hs") as HTMLElement;
        const projectNameHsError = document.getElementById("project-name-error-hs") as HTMLElement;
        const projectLocationNameHsError = document.getElementById("project-location-name-error-hs") as HTMLElement;
        const projectLocationHsError = document.getElementById("project-location-error-hs") as HTMLElement;
        const projectDvlhsError = document.getElementById("project-dvlhs-error-hs") as HTMLElement;

        const projectCodeError1 = document.getElementById("project-code-error-1") as HTMLElement;
        const projectNameError1 = document.getElementById("project-name-error-1") as HTMLElement;
        const projectLocationError1 = document.getElementById("project-location-error-1") as HTMLElement;
        const projectHistoryError1 = document.getElementById("project-history-error-1") as HTMLElement;
        const projectCodeHSError1 = document.getElementById("project-code-error-hs-1") as HTMLElement;
        const projectNameHsError1 = document.getElementById("project-name-error-hs-1") as HTMLElement;
        const projectLocationNameHsError1 = document.getElementById("project-location-name-error-hs-1") as HTMLElement;
        const projectLocationHsError1 = document.getElementById("project-location-error-hs-1") as HTMLElement;
        const projectDvlhsError1 = document.getElementById("project-dvlhs-error-hs-1") as HTMLElement;

        const projectCodeError2 = document.getElementById("project-code-error-2") as HTMLElement;
        const projectNameError2 = document.getElementById("project-name-error-2") as HTMLElement;
        const projectLocationError2 = document.getElementById("project-location-error-2") as HTMLElement;
        const projectHistoryError2 = document.getElementById("project-history-error-2") as HTMLElement;
        const projectCodeHSError2 = document.getElementById("project-code-error-hs-2") as HTMLElement;
        const projectNameHsError2 = document.getElementById("project-name-error-hs-2") as HTMLElement;
        const projectLocationNameHsError2 = document.getElementById("project-location-name-error-hs-2") as HTMLElement;
        const projectLocationHsError2 = document.getElementById("project-location-error-hs-2") as HTMLElement;
        const projectDvlhsError2 = document.getElementById("project-dvlhs-error-hs-2") as HTMLElement;

        const projectCodeError3 = document.getElementById("project-code-error-3") as HTMLElement;
        const projectNameError3 = document.getElementById("project-name-error-3") as HTMLElement;
        const projectLocationError3 = document.getElementById("project-location-error-3") as HTMLElement;
        const projectHistoryError3 = document.getElementById("project-history-error-3") as HTMLElement;
        const projectCodeHSError3 = document.getElementById("project-code-error-hs-3") as HTMLElement;
        const projectNameHsError3 = document.getElementById("project-name-error-hs-3") as HTMLElement;
        const projectLocationNameHsError3 = document.getElementById("project-location-name-error-hs-3") as HTMLElement;
        const projectLocationHsError3 = document.getElementById("project-location-error-hs-3") as HTMLElement;
        const projectDvlhsError3 = document.getElementById("project-dvlhs-error-hs-3") as HTMLElement;

        const projectCodeError4 = document.getElementById("project-code-error-4") as HTMLElement;
        const projectNameError4 = document.getElementById("project-name-error-4") as HTMLElement;
        const projectLocationError4 = document.getElementById("project-location-error-4") as HTMLElement;
        const projectHistoryError4 = document.getElementById("project-history-error-4") as HTMLElement;
        const projectCodeHSError4 = document.getElementById("project-code-error-hs-4") as HTMLElement;
        const projectNameHsError4 = document.getElementById("project-name-error-hs-4") as HTMLElement;
        const projectLocationNameHsError4 = document.getElementById("project-location-name-error-hs-4") as HTMLElement;
        const projectLocationHsError4 = document.getElementById("project-location-error-hs-4") as HTMLElement;
        const projectDvlhsError4 = document.getElementById("project-dvlhs-error-hs-4") as HTMLElement;

        const projectCodeErrorKhac = document.getElementById("project-code-error-khac") as HTMLElement;
        const projectNameErrorKhac = document.getElementById("project-name-error-khac") as HTMLElement;
        const projectLocationErrorKhac = document.getElementById("project-location-error-khac") as HTMLElement;
        const projectHistoryErrorKhac = document.getElementById("project-history-error-khac") as HTMLElement;
        const projectCodeHSErrorKhac = document.getElementById("project-code-error-hs--khac") as HTMLElement;
        const projectNameHsErrorKhac = document.getElementById("project-name-error-hs-khac") as HTMLElement;
        const projectLocationNameHsErrorKhac = document.getElementById("project-location-name-error-hs-khac") as HTMLElement;
        const projectLocationHsErrorKhac = document.getElementById("project-location-error-hs-khac") as HTMLElement;
        const projectDvlhsErrorKhac = document.getElementById("project-dvlhs-error-hs-khac") as HTMLElement;

        // Function to clear all input fields in the form
        function clearFormInputs() {
          inputFields.forEach((field) => {
            (field as HTMLInputElement).value = "";
          });
        }

        // Function to validate the input fields
        function validateFormInputs() {
          let isValid = true;
          const projectCodeValue = (document.getElementById("project-code-num") as HTMLInputElement).value;

          if (projectCodeValue === "") {
            projectCodeError.textContent = "Chưa nhập mã công trình!";
            isValid = false;
          } else {
            projectCodeError.textContent = "";
          }

          const projectNameValue = (document.getElementById("project-name") as HTMLInputElement).value;
          if (projectNameValue === "") {
            projectNameError.textContent = "Chưa điền tên công trình";
            isValid = false;
          } else {
            projectNameError.textContent = "";
          }

          const projectLocationNameValue = (document.getElementById(
            "project-location-name"
          ) as HTMLInputElement).value;
          const projectLocationXValue = (document.getElementById(
            "project-location-x"
          ) as HTMLInputElement).value;
          const projectLocationYValue = (document.getElementById(
            "project-location-y"
          ) as HTMLInputElement).value;
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

          const projectHistoryValue = (document.getElementById(
            "project-history"
          ) as HTMLInputElement).value;
          if (
            projectHistoryValue === ""
          ) {
            projectHistoryError.textContent = "Chưa nhập thông tin lịch sử xây dựng công trình";
            isValid = false;
          } else {
            projectHistoryError.textContent = "";
          }
          const projectCodeHSErrorValue1 = (document.getElementById("project-code-hs-1") as HTMLInputElement).value;
          if (projectCodeHSErrorValue1 === "") {
            projectCodeHSError1.textContent = "Chưa nhập mã hồ sơ";
            isValid = false;
          } else {
            projectCodeHSError1.textContent = "";
          }
          const projectNameHsErrorValue1 = (document.getElementById("project-name-hs-1") as HTMLInputElement).value;
          if (projectNameHsErrorValue1 === "") {
            projectNameHsError1.textContent = "Chưa nhập tên hồ sơ công trình";
            isValid = false;
          } else {
            projectNameHsError1.textContent = "";
          }
          const projectLocationNameHsErrorValue1 = (document.getElementById("project-location-name-hs-1") as HTMLInputElement).value;
          if (projectLocationNameHsErrorValue1 === "") {
            projectLocationNameHsError1.textContent = "Chưa điền địa điểm công trình";
            isValid = false;
          } else {
            projectLocationNameHsError1.textContent = "";
          }
          const projectLocationHsErrorValueX1 = (document.getElementById("project-location-x-hs-1") as HTMLInputElement).value;
          const projectLocationHsErrorValueY1 = (document.getElementById("project-location-y-hs-1") as HTMLInputElement).value;
          if (projectLocationHsErrorValueX1 === "" || projectLocationHsErrorValueY1 === "") {
            projectLocationHsError1.textContent = "Chưa nhập tọa độ";
            isValid = false;
          } else {
            projectLocationHsError1.textContent = "";
          }
          const projectDvlhsErrorValue1 = (document.getElementById("project-dvlhs-hs-1") as HTMLInputElement).value;
          if (projectDvlhsErrorValue1 === "") {
            projectDvlhsError1.textContent = "Chưa nhập đơn vị lập hồ sơ";
            isValid = false;
          } else {
            projectDvlhsError1.textContent = "";
          }
          return isValid;
        }
        function validateFormInputs1() {
          let isValid = true;
          const projectCodeValue1 = (document.getElementById("project-code-num-1") as HTMLInputElement).value;
          if (projectCodeValue1 === "") {
            projectCodeError1.textContent = "Chưa nhập mã công trình!";
            isValid = false;
          } else {
            projectCodeError1.textContent = "";
          }

          const projectNameValue1 = (document.getElementById("project-name-1") as HTMLInputElement).value;
          if (projectNameValue1 === "") {
            projectNameError1.textContent = "Chưa điền tên công trình";
            isValid = false;
          } else {
            projectNameError1.textContent = "";
          }
          const projectLocationNameValue1 = (document.getElementById(
            "project-location-name-1"
          ) as HTMLInputElement).value;
          const projectLocationXValue1 = (document.getElementById(
            "project-location-x-1"
          ) as HTMLInputElement).value;
          const projectLocationYValue1 = (document.getElementById(
            "project-location-y-1"
          ) as HTMLInputElement).value;

          if (
            projectLocationNameValue1 === "" ||
            projectLocationXValue1 === "" ||
            projectLocationYValue1 === ""
          ) {
            projectLocationError1.textContent = "Chưa nhập vị trí hoặc địa điểm hoặc tọa độ";
            isValid = false;
          } else {
            projectLocationError1.textContent = "";
          }

          const projectHistoryValue1 = (document.getElementById(
            "project-history-1"
          ) as HTMLInputElement).value;

          if (
            projectHistoryValue1 === ""
          ) {
            projectHistoryError1.textContent = "Chưa nhập thông tin lịch sử xây dựng công trình";
            isValid = false;
          } else {
            projectHistoryError1.textContent = "";
          }
          const projectCodeHSErrorValue = (document.getElementById("project-code-hs") as HTMLInputElement).value;
          if (projectCodeHSErrorValue === "") {
            projectCodeHSError.textContent = "Chưa nhập mã hồ sơ";
            isValid = false;
          } else {
            projectCodeHSError.textContent = "";
          }
          const projectNameHsErrorValue = (document.getElementById("project-name-hs") as HTMLInputElement).value;
          if (projectNameHsErrorValue === "") {
            projectNameHsError.textContent = "Chưa nhập tên hồ sơ công trình";
            isValid = false;
          } else {
            projectNameHsError.textContent = "";
          }
          const projectLocationNameHsErrorValue = (document.getElementById("project-location-name-hs") as HTMLInputElement).value;
          if (projectLocationNameHsErrorValue === "") {
            projectLocationNameHsError.textContent = "Chưa điền địa điểm công trình";
            isValid = false;
          } else {
            projectLocationNameHsError.textContent = "";
          }
          const projectLocationHsErrorValueX = (document.getElementById("project-location-x-hs") as HTMLInputElement).value;
          const projectLocationHsErrorValueY = (document.getElementById("project-location-y-hs") as HTMLInputElement).value;
          if (projectLocationHsErrorValueX === "" || projectLocationHsErrorValueY === "") {
            projectLocationHsError.textContent = "Chưa nhập tọa độ";
            isValid = false;
          } else {
            projectLocationHsError.textContent = "";
          }
          const projectDvlhsErrorValue = (document.getElementById("project-dvlhs-hs") as HTMLInputElement).value;
          if (projectDvlhsErrorValue === "") {
            projectDvlhsError.textContent = "Chưa nhập đơn vị lập hồ sơ";
            isValid = false;
          } else {
            projectDvlhsError.textContent = "";
          }
          return isValid;
        }
        function validateFormInputs2() {
          let isValid = true;
          const projectCodeValue2 = (document.getElementById("project-code-num-2") as HTMLInputElement).value;
          if (projectCodeValue2 === "") {
            projectCodeError2.textContent = "Chưa nhập mã công trình!";
            isValid = false;
          } else {
            projectCodeError2.textContent = "";
          }

          const projectNameValue2 = (document.getElementById("project-name-2") as HTMLInputElement).value;
          if (projectNameValue2 === "") {
            projectNameError2.textContent = "Chưa điền tên công trình";
            isValid = false;
          } else {
            projectNameError2.textContent = "";
          }
          const projectLocationNameValue2 = (document.getElementById(
            "project-location-name-2"
          ) as HTMLInputElement).value;
          const projectLocationXValue2 = (document.getElementById(
            "project-location-x-2"
          ) as HTMLInputElement).value;
          const projectLocationYValue2 = (document.getElementById(
            "project-location-y-2"
          ) as HTMLInputElement).value;

          if (
            projectLocationNameValue2 === "" ||
            projectLocationXValue2 === "" ||
            projectLocationYValue2 === ""
          ) {
            projectLocationError2.textContent = "Chưa nhập vị trí hoặc địa điểm hoặc tọa độ";
            isValid = false;
          } else {
            projectLocationError2.textContent = "";
          }
          const projectHistoryValue2 = (document.getElementById(
            "project-history-2"
          ) as HTMLInputElement).value;
          if (
            projectHistoryValue2 === ""
          ) {
            projectHistoryError2.textContent = "Chưa nhập thông tin lịch sử xây dựng công trình";
            isValid = false;
          } else {
            projectHistoryError2.textContent = "";
          }
          const projectCodeHSErrorValue2 = (document.getElementById("project-code-hs-2") as HTMLInputElement).value;
          if (projectCodeHSErrorValue2 === "") {
            projectCodeHSError2.textContent = "Chưa nhập mã hồ sơ";
            isValid = false;
          } else {
            projectCodeHSError2.textContent = "";
          }
          const projectNameHsErrorValue2 = (document.getElementById("project-name-hs-2") as HTMLInputElement).value;
          if (projectNameHsErrorValue2 === "") {
            projectNameHsError2.textContent = "Chưa nhập tên hồ sơ công trình";
            isValid = false;
          } else {
            projectNameHsError2.textContent = "";
          }
          const projectLocationNameHsErrorValue2 = (document.getElementById("project-location-name-hs-2") as HTMLInputElement).value;
          if (projectLocationNameHsErrorValue2 === "") {
            projectLocationNameHsError2.textContent = "Chưa điền địa điểm công trình";
            isValid = false;
          } else {
            projectLocationNameHsError2.textContent = "";
          }
          const projectLocationHsErrorValueX2 = (document.getElementById("project-location-x-hs-2") as HTMLInputElement).value;
          const projectLocationHsErrorValueY2 = (document.getElementById("project-location-y-hs-2") as HTMLInputElement).value;
          if (projectLocationHsErrorValueX2 === "" || projectLocationHsErrorValueY2 === "") {
            projectLocationHsError2.textContent = "Chưa nhập tọa độ";
            isValid = false;
          } else {
            projectLocationHsError2.textContent = "";
          }
          const projectDvlhsErrorValue2 = (document.getElementById("project-dvlhs-hs-2") as HTMLInputElement).value;
          if (projectDvlhsErrorValue2 === "") {
            projectDvlhsError2.textContent = "Chưa nhập đơn vị lập hồ sơ";
            isValid = false;
          } else {
            projectDvlhsError2.textContent = "";
          }
          return isValid;
        }
        function validateFormInputs3() {
          let isValid = true;
          const projectCodeValue3 = (document.getElementById("project-code-num-3") as HTMLInputElement).value;
          if (projectCodeValue3 === "") {
            projectCodeError3.textContent = "Chưa nhập mã công trình!";
            isValid = false;
          } else {
            projectCodeError3.textContent = "";
          }

          const projectNameValue3 = (document.getElementById("project-name-3") as HTMLInputElement).value;
          if (projectNameValue3 === "") {
            projectNameError3.textContent = "Chưa điền tên công trình";
            isValid = false;
          } else {
            projectNameError3.textContent = "";
          }
          const projectLocationNameValue3 = (document.getElementById(
            "project-location-name-3"
          ) as HTMLInputElement).value;
          const projectLocationXValue3 = (document.getElementById(
            "project-location-x-3"
          ) as HTMLInputElement).value;
          const projectLocationYValue3 = (document.getElementById(
            "project-location-y-3"
          ) as HTMLInputElement).value;

          if (
            projectLocationNameValue3 === "" ||
            projectLocationXValue3 === "" ||
            projectLocationYValue3 === ""
          ) {
            projectLocationError3.textContent = "Chưa nhập vị trí hoặc địa điểm hoặc tọa độ";
            isValid = false;
          } else {
            projectLocationError3.textContent = "";
          }
          const projectHistoryValue3 = (document.getElementById(
            "project-history-3"
          ) as HTMLInputElement).value;
          if (
            projectHistoryValue3 === ""
          ) {
            projectHistoryError3.textContent = "Chưa nhập thông tin lịch sử xây dựng công trình";
            isValid = false;
          } else {
            projectHistoryError3.textContent = "";
          }
          const projectCodeHSErrorValue3 = (document.getElementById("project-code-hs-3") as HTMLInputElement).value;
          if (projectCodeHSErrorValue3 === "") {
            projectCodeHSError3.textContent = "Chưa nhập mã hồ sơ";
            isValid = false;
          } else {
            projectCodeHSError3.textContent = "";
          }
          const projectNameHsErrorValue3 = (document.getElementById("project-name-hs-3") as HTMLInputElement).value;
          if (projectNameHsErrorValue3 === "") {
            projectNameHsError3.textContent = "Chưa nhập tên hồ sơ công trình";
            isValid = false;
          } else {
            projectNameHsError3.textContent = "";
          }
          const projectLocationNameHsErrorValue3 = (document.getElementById("project-location-name-hs-3") as HTMLInputElement).value;
          if (projectLocationNameHsErrorValue3 === "") {
            projectLocationNameHsError3.textContent = "Chưa điền địa điểm công trình";
            isValid = false;
          } else {
            projectLocationNameHsError3.textContent = "";
          }
          const projectLocationHsErrorValueX3 = (document.getElementById("project-location-x-hs-3") as HTMLInputElement).value;
          const projectLocationHsErrorValueY3 = (document.getElementById("project-location-y-hs-3") as HTMLInputElement).value;
          if (projectLocationHsErrorValueX3 === "" || projectLocationHsErrorValueY3 === "") {
            projectLocationHsError3.textContent = "Chưa nhập tọa độ";
            isValid = false;
          } else {
            projectLocationHsError3.textContent = "";
          }
          const projectDvlhsErrorValue3 = (document.getElementById("project-dvlhs-hs-3") as HTMLInputElement).value;
          if (projectDvlhsErrorValue3 === "") {
            projectDvlhsError3.textContent = "Chưa nhập đơn vị lập hồ sơ";
            isValid = false;
          } else {
            projectDvlhsError3.textContent = "";
          }
          return isValid;
        }
        function validateFormInputs4() {
          let isValid = true;
          const projectCodeValue4 = (document.getElementById("project-code-num-4") as HTMLInputElement).value;
          if (projectCodeValue4 === "") {
            projectCodeError4.textContent = "Chưa nhập mã công trình!";
            isValid = false;
          } else {
            projectCodeError4.textContent = "";
          }

          const projectNameValue4 = (document.getElementById("project-name-4") as HTMLInputElement).value;
          if (projectNameValue4 === "") {
            projectNameError4.textContent = "Chưa điền tên công trình";
            isValid = false;
          } else {
            projectNameError4.textContent = "";
          }
          const projectLocationNameValue4 = (document.getElementById(
            "project-location-name-4"
          ) as HTMLInputElement).value;
          const projectLocationXValue4 = (document.getElementById(
            "project-location-x-4"
          ) as HTMLInputElement).value;
          const projectLocationYValue4 = (document.getElementById(
            "project-location-y-4"
          ) as HTMLInputElement).value;

          if (
            projectLocationNameValue4 === "" ||
            projectLocationXValue4 === "" ||
            projectLocationYValue4 === ""
          ) {
            projectLocationError4.textContent = "Chưa nhập vị trí hoặc địa điểm hoặc tọa độ";
            isValid = false;
          } else {
            projectLocationError4.textContent = "";
          }
          const projectHistoryValue4 = (document.getElementById(
            "project-history-4"
          ) as HTMLInputElement).value;
          if (
            projectHistoryValue4 === ""
          ) {
            projectHistoryError4.textContent = "Chưa nhập thông tin lịch sử xây dựng công trình";
            isValid = false;
          } else {
            projectHistoryError4.textContent = "";
          }
          const projectCodeHSErrorValue4 = (document.getElementById("project-code-hs-4") as HTMLInputElement).value;
          if (projectCodeHSErrorValue4 === "") {
            projectCodeHSError4.textContent = "Chưa nhập mã hồ sơ";
            isValid = false;
          } else {
            projectCodeHSError4.textContent = "";
          }
          const projectNameHsErrorValue4 = (document.getElementById("project-name-hs-4") as HTMLInputElement).value;
          if (projectNameHsErrorValue4 === "") {
            projectNameHsError4.textContent = "Chưa nhập tên hồ sơ công trình";
            isValid = false;
          } else {
            projectNameHsError4.textContent = "";
          }
          const projectLocationNameHsErrorValue4 = (document.getElementById("project-location-name-hs-4") as HTMLInputElement).value;
          if (projectLocationNameHsErrorValue4 === "") {
            projectLocationNameHsError4.textContent = "Chưa điền địa điểm công trình";
            isValid = false;
          } else {
            projectLocationNameHsError4.textContent = "";
          }
          const projectLocationHsErrorValueX4 = (document.getElementById("project-location-x-hs-4") as HTMLInputElement).value;
          const projectLocationHsErrorValueY4 = (document.getElementById("project-location-y-hs-4") as HTMLInputElement).value;
          if (projectLocationHsErrorValueX4 === "" || projectLocationHsErrorValueY4 === "") {
            projectLocationHsError4.textContent = "Chưa nhập tọa độ";
            isValid = false;
          } else {
            projectLocationHsError4.textContent = "";
          }
          const projectDvlhsErrorValue4 = (document.getElementById("project-dvlhs-hs-4") as HTMLInputElement).value;
          if (projectDvlhsErrorValue4 === "") {
            projectDvlhsError4.textContent = "Chưa nhập đơn vị lập hồ sơ";
            isValid = false;
          } else {
            projectDvlhsError4.textContent = "";
          }
          return isValid;
        }

        function validateFormInputsKhac() {
          let isValid = true;
          const projectCodeValueKhac = (document.getElementById("project-code-num-khac") as HTMLInputElement).value;
          if (projectCodeValueKhac === "") {
            projectCodeErrorKhac.textContent = "Chưa nhập mã công trình!";
            isValid = false;
          } else {
            projectCodeErrorKhac.textContent = "";
          }

          const projectNameValueKhac = (document.getElementById("project-name-khac") as HTMLInputElement).value;
          if (projectNameValueKhac === "") {
            projectNameErrorKhac.textContent = "Chưa điền tên công trình";
            isValid = false;
          } else {
            projectNameErrorKhac.textContent = "";
          }
          const projectLocationNameValueKhac = (document.getElementById(
            "project-location-name-khac"
          ) as HTMLInputElement).value;
          const projectLocationXValueKhac = (document.getElementById(
            "project-location-x-khac"
          ) as HTMLInputElement).value;
          const projectLocationYValueKhac = (document.getElementById(
            "project-location-y-khac"
          ) as HTMLInputElement).value;

          if (
            projectLocationNameValueKhac === "" ||
            projectLocationXValueKhac === "" ||
            projectLocationYValueKhac === ""
          ) {
            projectLocationErrorKhac.textContent = "Chưa nhập vị trí hoặc địa điểm hoặc tọa độ";
            isValid = false;
          } else {
            projectLocationErrorKhac.textContent = "";
          }
          const projectHistoryValueKhac = (document.getElementById(
            "project-history-khac"
          ) as HTMLInputElement).value;
          if (
            projectHistoryValueKhac === ""
          ) {
            projectHistoryErrorKhac.textContent = "Chưa nhập thông tin lịch sử xây dựng công trình";
            isValid = false;
          } else {
            projectHistoryErrorKhac.textContent = "";
          }
          const projectCodeHSErrorValueKhac = (document.getElementById("project-code-hs-khac") as HTMLInputElement).value;
          if (projectCodeHSErrorValueKhac === "") {
            projectCodeHSErrorKhac.textContent = "Chưa nhập mã hồ sơ";
            isValid = false;
          } else {
            projectCodeHSErrorKhac.textContent = "";
          }
          const projectNameHsErrorValueKhac = (document.getElementById("project-name-hs-khac") as HTMLInputElement).value;
          if (projectNameHsErrorValueKhac === "") {
            projectNameHsErrorKhac.textContent = "Chưa nhập tên hồ sơ công trình";
            isValid = false;
          } else {
            projectNameHsErrorKhac.textContent = "";
          }
          const projectLocationNameHsErrorValueKhac = (document.getElementById("project-location-name-hs-khac") as HTMLInputElement).value;
          if (projectLocationNameHsErrorValueKhac === "") {
            projectLocationNameHsErrorKhac.textContent = "Chưa điền địa điểm công trình";
            isValid = false;
          } else {
            projectLocationNameHsErrorKhac.textContent = "";
          }
          const projectLocationHsErrorValueXKhac = (document.getElementById("project-location-x-hs-khac") as HTMLInputElement).value;
          const projectLocationHsErrorValueYKhac = (document.getElementById("project-location-y-hs-khac") as HTMLInputElement).value;
          if (projectLocationHsErrorValueXKhac === "" || projectLocationHsErrorValueYKhac === "") {
            projectLocationHsErrorKhac.textContent = "Chưa nhập tọa độ";
            isValid = false;
          } else {
            projectLocationHsErrorKhac.textContent = "";
          }
          const projectDvlhsErrorValueKhac = (document.getElementById("project-dvlhs-hs-khac") as HTMLInputElement).value;
          if (projectDvlhsErrorValueKhac === "") {
            projectDvlhsErrorKhac.textContent = "Chưa nhập đơn vị lập hồ sơ";
            isValid = false;
          } else {
            projectDvlhsErrorKhac.textContent = "";
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

        function saveFormData1() {
          if (validateFormInputs1()) {
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            // Do something with the form data, e.g. send it to the server
            console.log(data);
            closeModal1();
            clearFormInputs();
          }
        }

        function saveFormData2() {
          if (validateFormInputs2()) {
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            // Do something with the form data, e.g. send it to the server
            console.log(data);
            closeModal2();
            clearFormInputs();
          }
        }

        function saveFormData3() {
          if (validateFormInputs3()) {
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            // Do something with the form data, e.g. send it to the server
            console.log(data);
            closeModal3();
            clearFormInputs();
          }
        }

        function saveFormData4() {
          if (validateFormInputs4()) {
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            // Do something with the form data, e.g. send it to the server
            console.log(data);
            closeModal4();
            clearFormInputs();
          }
        }

        function saveFormDataKhac() {
          if (validateFormInputsKhac()) {
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            // Do something with the form data, e.g. send it to the server
            console.log(data);
            closeModalKhac();
            clearFormInputs();
          }
        }

        // Function to close the modal
        function closeModal() {
          modal.style.display = "none";
          modal1.style.display = "none";
          modal11.style.display = "none";
        }

        function closeModal1() {
          modal2.style.display = "none";
          modal3.style.display = "none";
          modal10.style.display = "none";
        }

        function closeModal2() {
          modal4.style.display = "none";
          modal5.style.display = "none";
          modal12.style.display = "none";
        }

        function closeModal3() {
          modal6.style.display = "none";
          modal7.style.display = "none";
          modal13.style.display = "none";
        }

        function closeModal4() {
          modal8.style.display = "none";
          modal9.style.display = "none";
          modal14.style.display = "none";
        }

        function closeModalKhac() {
          modalKhac.style.display = "none";
          modalKhac1.style.display = "none";
          modalKhac2.style.display = "none";
        }

        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
          closeModal1();
        };
        span1.onclick = function () {
          closeModal1();
        };
        span10.onclick = function () {
          closeModal1();
        };
        span2.onclick = function () {
          closeModal();
        };
        span3.onclick = function () {
          closeModal();
        };
        span11.onclick = function () {
          closeModal();
        };
        span4.onclick = function () {
          closeModal2();
        };
        span5.onclick = function () {
          closeModal2();
        };
        span12.onclick = function () {
          closeModal2();
        };
        span6.onclick = function () {
          closeModal3();
        };
        span7.onclick = function () {
          closeModal3();
        };
        span13.onclick = function () {
          closeModal3();
        };
        span8.onclick = function () {
          closeModal4();
        };
        span9.onclick = function () {
          closeModal4();
        };
        span14.onclick = function () {
          closeModal4();
        };
        spanKhac.onclick = function () {
          closeModalKhac();
        };
        spanKhac1.onclick = function () {
          closeModalKhac();
        };
        spanKhac2.onclick = function () {
          closeModalKhac();
        };
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
          if (event.target === modal) {
            closeModal();
          }
          if (event.target === modal1) {
            closeModal();
          }
          if (event.target === modal11) {
            closeModal();
          }
          if (event.target === modal2) {
            closeModal1();
          }
          if (event.target === modal3) {
            closeModal1();
          }
          if (event.target === modal10) {
            closeModal1();
          }
          if (event.target === modal4) {
            closeModal2();
          }
          if (event.target === modal5) {
            closeModal2();
          }
          if (event.target === modal12) {
            closeModal2();
          }
          if (event.target === modal6) {
            closeModal3();
          }
          if (event.target === modal7) {
            closeModal3();
          }
          if (event.target === modal13) {
            closeModal3();
          }
          if (event.target === modal8) {
            closeModal4();
          }
          if (event.target === modal9) {
            closeModal4();
          }
          if (event.target === modal14) {
            closeModal4();
          }
          if (event.target === modalKhac) {
            closeModalKhac();
          }
          if (event.target === modalKhac1) {
            closeModalKhac();
          }
          if (event.target === modalKhac2) {
            closeModalKhac();
          }
          if (event.target !== functionList1 && event.target !== addNewBtn1) {
            functionList1.style.display = "none";
          }
          if (event.target !== functionList && event.target !== addNewBtn) {
            functionList.style.display = "none";
          }
          if (event.target !== functionList2 && event.target !== addNewBtn2) {
            functionList2.style.display = "none";
          }
          if (event.target !== functionList3 && event.target !== addNewBtn3) {
            functionList3.style.display = "none";
          }
          if (event.target !== functionList4 && event.target !== addNewBtn4) {
            functionList4.style.display = "none";
          }
          if (event.target !== functionListKhac && event.target !== addNewBtnKhac) {
            functionListKhac.style.display = "none";
          }
        };
        // When the user clicks the save button, save the form data
        saveBtn.onclick = function () {
          saveFormData();
        };
        saveBtn1.onclick = function () {
          saveFormData();
        }
        saveBtnHS1.onclick = function () {
          saveFormData();
        }
        saveBtn2.onclick = function () {
          saveFormData1();
        }
        saveBtn3.onclick = function () {
          saveFormData1();
        }
        saveBtnHS.onclick = function () {
          saveFormData1();
        }
        saveBtn4.onclick = function () {
          saveFormData2();
        }
        saveBtn5.onclick = function () {
          saveFormData2();
        }
        saveBtnHS2.onclick = function () {
          saveFormData2();
        }
        saveBtn6.onclick = function () {
          saveFormData3();
        }
        saveBtn7.onclick = function () {
          saveFormData3();
        }
        saveBtnHS3.onclick = function () {
          saveFormData3();
        }
        saveBtn8.onclick = function () {
          saveFormData4();
        }
        saveBtn9.onclick = function () {
          saveFormData4();
        }
        saveBtnHS4.onclick = function () {
          saveFormData4();
        }
        saveBtnKhac.onclick = function () {
          saveFormDataKhac();
        }
        saveBtnKhac1.onclick = function () {
          saveFormDataKhac();
        }
        saveBtnHSKhac.onclick = function () {
          saveFormDataKhac();
        }
        // When the user clicks the cancel button, close the modal
        cancelBtn.onclick = function () {
          closeModal();
        };
        cancelBtn1.onclick = function () {
          closeModal();
        }
        cancelBtnHs1.onclick = function () {
          closeModal();
        }
        cancelBtn2.onclick = function () {
          closeModal1();
        }
        cancelBtn3.onclick = function () {
          closeModal1();
        }
        cancelBtnHs.onclick = function () {
          closeModal1();
        }
        cancelBtn4.onclick = function () {
          closeModal2();
        }
        cancelBtn5.onclick = function () {
          closeModal2();
        }
        cancelBtnHs2.onclick = function () {
          closeModal2();
        }
        cancelBtn6.onclick = function () {
          closeModal3();
        }
        cancelBtn7.onclick = function () {
          closeModal3();
        }
        cancelBtnHs3.onclick = function () {
          closeModal3();
        }
        cancelBtn8.onclick = function () {
          closeModal4();
        }
        cancelBtn9.onclick = function () {
          closeModal4();
        }
        cancelBtnHs4.onclick = function () {
          closeModal4();
        }
        cancelBtnKhac.onclick = function () {
          closeModalKhac();
        }
        cancelBtnKhac1.onclick = function () {
          closeModalKhac();
        }
        cancelBtnHsKhac.onclick = function () {
          closeModalKhac();
        }

        // Hiển thị thẻ input-link mặc định nếu lựa chọn là "link"
        const infoInput = document.querySelectorAll('.input-link') as NodeListOf<HTMLElement>;
        infoInput.forEach(function (input) {
          input.style.display = "block";
          const infoType = document.querySelectorAll('.infoType');
          infoType.forEach(function (inf) {
            inf.addEventListener("change", () => {
              const infoType = inf.innerHTML;
              const infoFiles = document.querySelectorAll('.input-file') as NodeListOf<HTMLElement>;
              infoFiles.forEach(function (infoFile) {
                if (infoType === "link") {
                  input.style.display = "block";
                  infoFile.style.display = "none";
                } else if (infoType === "file") {
                  input.style.display = "none";
                  infoFile.style.display = "block";
                }
              });
            })
          });
        })

        function removeSelectedImage() {
          var select = document.getElementById('imageFiles') as HTMLSelectElement;
          var selected = select.selectedIndex;
          if (selected >= 0) {
            select.remove(selected);
          }
        }

        function updateImageOptions() {
          var input = document.getElementById('imageInput') as HTMLInputElement;
          var select = document.getElementById('imageFiles') as HTMLSelectElement;
          select.innerHTML = '';
          if (!input.files) return;
          for (var i = 0; i < input.files.length; i++) {
            var option = document.createElement('option');
            option.value = input.files[i].name;
            option.text = input.files[i].name;
            select.add(option);
          }
        }

        function removeSelectedImage1() {
          var select = document.getElementById('imageFiles-1') as HTMLSelectElement;
          var selected = select.selectedIndex;
          if (selected >= 0) {
            select.remove(selected);
          }
        }

        function updateImageOptions1() {
          var input = document.getElementById('imageInput-1') as HTMLInputElement;
          var select = document.getElementById('imageFiles-1') as HTMLSelectElement;
          select.innerHTML = '';
          if (!input.files) return;

          for (var i = 0; i < input.files.length; i++) {
            var option = document.createElement('option');
            option.value = input.files[i].name;
            option.text = input.files[i].name;
            select.add(option);
          }
        }

        function removeSelectedImage2() {
          var select = document.getElementById('imageFiles-2') as HTMLSelectElement;
          var selected = select.selectedIndex;
          if (selected >= 0) {
            select.remove(selected);
          }
        }

        function updateImageOptions2() {
          var input = document.getElementById('imageInput-2') as HTMLInputElement;
          var select = document.getElementById('imageFiles-2') as HTMLSelectElement;
          select.innerHTML = '';
          if (!input.files) return;

          for (var i = 0; i < input.files.length; i++) {
            var option = document.createElement('option');
            option.value = input.files[i].name;
            option.text = input.files[i].name;
            select.add(option);
          }
        }

        function removeSelectedImage3() {
          var select = document.getElementById('imageFiles-3') as HTMLSelectElement;
          var selected = select.selectedIndex;
          if (selected >= 0) {
            select.remove(selected);
          }
        }

        function updateImageOptions3() {
          var input = document.getElementById('imageInput-3') as HTMLInputElement;
          var select = document.getElementById('imageFiles-3') as HTMLSelectElement;
          select.innerHTML = '';
          if (!input.files) return;

          for (var i = 0; i < input.files.length; i++) {
            var option = document.createElement('option');
            option.value = input.files[i].name;
            option.text = input.files[i].name;
            select.add(option);
          }
        }

        function removeSelectedImage4() {
          var select = document.getElementById('imageFiles-4') as HTMLSelectElement;
          var selected = select.selectedIndex;
          if (selected >= 0) {
            select.remove(selected);
          }
        }

        function updateImageOptions4() {
          var input = document.getElementById('imageInput-4') as HTMLInputElement;
          var select = document.getElementById('imageFiles-4') as HTMLSelectElement;
          select.innerHTML = '';
          if (!input.files) return;

          for (var i = 0; i < input.files.length; i++) {
            var option = document.createElement('option');
            option.value = input.files[i].name;
            option.text = input.files[i].name;
            select.add(option);
          }
        }
        function removeSelectedImageKhac() {
          var select = document.getElementById('imageFiles-khac') as HTMLSelectElement;
          var selected = select.selectedIndex;
          if (selected >= 0) {
            select.remove(selected);
          }
        }

        function updateImageOptionsKhac() {
          var input = document.getElementById('imageInput-khac') as HTMLInputElement;
          var select = document.getElementById('imageFiles-khac') as HTMLSelectElement;
          select.innerHTML = '';
          if (!input.files) return;

          for (var i = 0; i < input.files.length; i++) {
            var option = document.createElement('option');
            option.value = input.files[i].name;
            option.text = input.files[i].name;
            select.add(option);
          }
        }


      } else if (selectTab.value === 'tab-nam-hs-1') {
        tabNamHS.style.display = 'none';
        tabNamHS1.style.display = 'block';
        tabItemHS.style.display = 'none';
        tabItemHS1.style.display = 'block';
        /*---------------------------------------------Modal------------------------------------------------------------------*/
        const addNewBtn2035 = document.getElementById('addNewNam2035') as HTMLElement;
        const addNewBtn2034 = document.getElementById('addNewNam2034') as HTMLElement;
        const addNewBtn2033 = document.getElementById('addNewNam2033') as HTMLElement;
        const addNewBtn2032 = document.getElementById('addNewNam2032') as HTMLElement;
        const addNewBtn2031 = document.getElementById('addNewNam2031') as HTMLElement;
        const addNewBtn2030 = document.getElementById('addNewNam2030') as HTMLElement;
        const addNewBtn2029 = document.getElementById('addNewNam2029') as HTMLElement;
        const addNewBtn2028 = document.getElementById('addNewNam2028') as HTMLElement;
        const addNewBtn2027 = document.getElementById('addNewNam2027') as HTMLElement;
        const addNewBtn2026 = document.getElementById('addNewNam2026') as HTMLElement;
        const addNewBtn2025 = document.getElementById('addNewNam2025') as HTMLElement;
        const addNewBtn2024 = document.getElementById('addNewNam2024') as HTMLElement;
        const addNewBtn2023 = document.getElementById('addNewNam2023') as HTMLElement;
        const addNewBtn2022 = document.getElementById('addNewNam2022') as HTMLElement;
        const addNewBtn2021 = document.getElementById('addNewNam2021') as HTMLElement;
        const addNewBtn2020 = document.getElementById('addNewNam2020') as HTMLElement;
        const addNewBtn2019 = document.getElementById('addNewNam2019') as HTMLElement;
        const addNewBtn2018 = document.getElementById('addNewNam2018') as HTMLElement;
        const addNewBtn2017 = document.getElementById('addNewNam2017') as HTMLElement;


        const functionListNam2035 = document.getElementById('functionListNam2035') as HTMLElement;
        const functionListNam2034 = document.getElementById('functionListNam2034') as HTMLElement;
        const functionListNam2033 = document.getElementById('functionListNam2033') as HTMLElement;
        const functionListNam2032 = document.getElementById('functionListNam2032') as HTMLElement;
        const functionListNam2031 = document.getElementById('functionListNam2031') as HTMLElement;
        const functionListNam2030 = document.getElementById('functionListNam2030') as HTMLElement;
        const functionListNam2029 = document.getElementById('functionListNam2029') as HTMLElement;
        const functionListNam2028 = document.getElementById('functionListNam2028') as HTMLElement;
        const functionListNam2027 = document.getElementById('functionListNam2027') as HTMLElement;
        const functionListNam2026 = document.getElementById('functionListNam2026') as HTMLElement;
        const functionListNam2025 = document.getElementById('functionListNam2025') as HTMLElement;
        const functionListNam2024 = document.getElementById('functionListNam2024') as HTMLElement;
        const functionListNam2023 = document.getElementById('functionListNam2023') as HTMLElement;
        const functionListNam2022 = document.getElementById('functionListNam2022') as HTMLElement;
        const functionListNam2021 = document.getElementById('functionListNam2021') as HTMLElement;
        const functionListNam2020 = document.getElementById('functionListNam2020') as HTMLElement;
        const functionListNam2019 = document.getElementById('functionListNam2019') as HTMLElement;
        const functionListNam2018 = document.getElementById('functionListNam2018') as HTMLElement;
        const functionListNam2017 = document.getElementById('functionListNam2017') as HTMLElement;


        const modalNam2035 = document.getElementById('myModalNam2035') as HTMLElement;
        const modalNam2034 = document.getElementById('myModalNam2034') as HTMLElement;
        const modalNam2033 = document.getElementById('myModalNam2033') as HTMLElement;
        const modalNam2032 = document.getElementById('myModalNam2032') as HTMLElement;
        const modalNam2031 = document.getElementById('myModalNam2031') as HTMLElement;
        const modalNam2030 = document.getElementById('myModalNam2030') as HTMLElement;
        const modalNam2029 = document.getElementById('myModalNam2029') as HTMLElement;
        const modalNam2028 = document.getElementById('myModalNam2028') as HTMLElement;
        const modalNam2027 = document.getElementById('myModalNam2027') as HTMLElement;
        const modalNam2026 = document.getElementById('myModalNam2026') as HTMLElement;
        const modalNam2025 = document.getElementById('myModalNam2025') as HTMLElement;
        const modalNam2024 = document.getElementById('myModalNam2024') as HTMLElement;
        const modalNam2023 = document.getElementById('myModalNam2023') as HTMLElement;
        const modalNam2022 = document.getElementById('myModalNam2022') as HTMLElement;
        const modalNam2021 = document.getElementById('myModalNam2021') as HTMLElement;
        const modalNam2020 = document.getElementById('myModalNam2020') as HTMLElement;
        const modalNam2019 = document.getElementById('myModalNam2019') as HTMLElement;
        const modalNam2018 = document.getElementById('myModalNam2018') as HTMLElement;
        const modalNam2017 = document.getElementById('myModalNam2017') as HTMLElement;


        const span2035 = document.getElementsByClassName("close2035")[0] as HTMLElement;
        const span2034 = document.getElementsByClassName("close2034")[0] as HTMLElement;
        const span2033 = document.getElementsByClassName("close2033")[0] as HTMLElement;
        const span2032 = document.getElementsByClassName("close2032")[0] as HTMLElement;
        const span2031 = document.getElementsByClassName("close2031")[0] as HTMLElement;
        const span2030 = document.getElementsByClassName("close2030")[0] as HTMLElement;
        const span2029 = document.getElementsByClassName("close2029")[0] as HTMLElement;
        const span2028 = document.getElementsByClassName("close2028")[0] as HTMLElement;
        const span2027 = document.getElementsByClassName("close2027")[0] as HTMLElement;
        const span2026 = document.getElementsByClassName("close2026")[0] as HTMLElement;
        const span2025 = document.getElementsByClassName("close2025")[0] as HTMLElement;
        const span2024 = document.getElementsByClassName("close2024")[0] as HTMLElement;
        const span2023 = document.getElementsByClassName("close2023")[0] as HTMLElement;
        const span2022 = document.getElementsByClassName("close2022")[0] as HTMLElement;
        const span2021 = document.getElementsByClassName("close2021")[0] as HTMLElement;
        const span2020 = document.getElementsByClassName("close2020")[0] as HTMLElement;
        const span2019 = document.getElementsByClassName("close2019")[0] as HTMLElement;
        const span2018 = document.getElementsByClassName("close2018")[0] as HTMLElement;
        const span2017 = document.getElementsByClassName("close2017")[0] as HTMLElement;


        // Get the buttons to save and cancel changes
        const cancelBtn2035 = document.getElementById("cancelBtn-hs-nam-2035") as HTMLElement;
        const cancelBtn2034 = document.getElementById("cancelBtn-hs-nam-2034") as HTMLElement;
        const cancelBtn2033 = document.getElementById("cancelBtn-hs-nam-2033") as HTMLElement;
        const cancelBtn2032 = document.getElementById("cancelBtn-hs-nam-2032") as HTMLElement;
        const cancelBtn2031 = document.getElementById("cancelBtn-hs-nam-2031") as HTMLElement;
        const cancelBtn2030 = document.getElementById("cancelBtn-hs-nam-2030") as HTMLElement;
        const cancelBtn2029 = document.getElementById("cancelBtn-hs-nam-2029") as HTMLElement;
        const cancelBtn2028 = document.getElementById("cancelBtn-hs-nam-2028") as HTMLElement;
        const cancelBtn2027 = document.getElementById("cancelBtn-hs-nam-2027") as HTMLElement;
        const cancelBtn2026 = document.getElementById("cancelBtn-hs-nam-2026") as HTMLElement;
        const cancelBtn2025 = document.getElementById("cancelBtn-hs-nam-2025") as HTMLElement;
        const cancelBtn2024 = document.getElementById("cancelBtn-hs-nam-2024") as HTMLElement;
        const cancelBtn2023 = document.getElementById("cancelBtn-hs-nam-2023") as HTMLElement;
        const cancelBtn2022 = document.getElementById("cancelBtn-hs-nam-2022") as HTMLElement;
        const cancelBtn2021 = document.getElementById("cancelBtn-hs-nam-2021") as HTMLElement;
        const cancelBtn2020 = document.getElementById("cancelBtn-hs-nam-2020") as HTMLElement;
        const cancelBtn2019 = document.getElementById("cancelBtn-hs-nam-2019") as HTMLElement;
        const cancelBtn2018 = document.getElementById("cancelBtn-hs-nam-2018") as HTMLElement;
        const cancelBtn2017 = document.getElementById("cancelBtn-hs-nam-2017") as HTMLElement;


        const saveBtn2035 = document.getElementById("saveBtn1-hs-nam-2035") as HTMLElement;
        const saveBtn2034 = document.getElementById("saveBtn1-hs-nam-2034") as HTMLElement;
        const saveBtn2033 = document.getElementById("saveBtn1-hs-nam-2033") as HTMLElement;
        const saveBtn2032 = document.getElementById("saveBtn1-hs-nam-2032") as HTMLElement;
        const saveBtn2031 = document.getElementById("saveBtn1-hs-nam-2031") as HTMLElement;
        const saveBtn2030 = document.getElementById("saveBtn1-hs-nam-2030") as HTMLElement;
        const saveBtn2029 = document.getElementById("saveBtn1-hs-nam-2029") as HTMLElement;
        const saveBtn2028 = document.getElementById("saveBtn1-hs-nam-2028") as HTMLElement;
        const saveBtn2027 = document.getElementById("saveBtn1-hs-nam-2027") as HTMLElement;
        const saveBtn2026 = document.getElementById("saveBtn1-hs-nam-2026") as HTMLElement;
        const saveBtn2025 = document.getElementById("saveBtn1-hs-nam-2025") as HTMLElement;
        const saveBtn2024 = document.getElementById("saveBtn1-hs-nam-2024") as HTMLElement;
        const saveBtn2023 = document.getElementById("saveBtn1-hs-nam-2023") as HTMLElement;
        const saveBtn2022 = document.getElementById("saveBtn1-hs-nam-2022") as HTMLElement;
        const saveBtn2021 = document.getElementById("saveBtn1-hs-nam-2021") as HTMLElement;
        const saveBtn2020 = document.getElementById("saveBtn1-hs-nam-2020") as HTMLElement;
        const saveBtn2019 = document.getElementById("saveBtn1-hs-nam-2019") as HTMLElement;
        const saveBtn2018 = document.getElementById("saveBtn1-hs-nam-2018") as HTMLElement;
        const saveBtn2017 = document.getElementById("saveBtn1-hs-nam-2017") as HTMLElement;


        // Get the form and all input fields
        const form = document.querySelector("form") as HTMLFormElement;
        const inputFields = form.querySelectorAll("input, select");

        // Hide the function list initially
        functionListNam2035.style.display = "none";
        functionListNam2034.style.display = "none";
        functionListNam2033.style.display = "none";
        functionListNam2032.style.display = "none";
        functionListNam2031.style.display = "none";
        functionListNam2030.style.display = "none";
        functionListNam2029.style.display = "none";
        functionListNam2028.style.display = "none";
        functionListNam2027.style.display = "none";
        functionListNam2026.style.display = "none";
        functionListNam2025.style.display = "none";
        functionListNam2024.style.display = "none";
        functionListNam2023.style.display = "none";
        functionListNam2022.style.display = "none";
        functionListNam2021.style.display = "none";
        functionListNam2020.style.display = "none";
        functionListNam2019.style.display = "none";
        functionListNam2018.style.display = "none";
        functionListNam2017.style.display = "none";

        // Show the function list when addNewBtn is clicked and hide the modal
        addNewBtn2035.addEventListener('click', function () {
          functionListNam2035.style.display = "block";
          modalNam2035.style.display = "none";
        });
        addNewBtn2034.addEventListener('click', function () {
          functionListNam2034.style.display = "block";
          modalNam2034.style.display = "none";
        });
        addNewBtn2033.addEventListener('click', function () {
          functionListNam2033.style.display = "block";
          modalNam2033.style.display = "none";
        });
        addNewBtn2032.addEventListener('click', function () {
          functionListNam2032.style.display = "block";
          modalNam2032.style.display = "none";
        });
        addNewBtn2031.addEventListener('click', function () {
          functionListNam2031.style.display = "block";
          modalNam2031.style.display = "none";
        });
        addNewBtn2030.addEventListener('click', function () {
          functionListNam2030.style.display = "block";
          modalNam2030.style.display = "none";
        });
        addNewBtn2029.addEventListener('click', function () {
          functionListNam2029.style.display = "block";
          modalNam2029.style.display = "none";
        });
        addNewBtn2028.addEventListener('click', function () {
          functionListNam2028.style.display = "block";
          modalNam2028.style.display = "none";
        });
        addNewBtn2027.addEventListener('click', function () {
          functionListNam2027.style.display = "block";
          modalNam2027.style.display = "none";
        });
        addNewBtn2026.addEventListener('click', function () {
          functionListNam2026.style.display = "block";
          modalNam2026.style.display = "none";
        });
        addNewBtn2025.addEventListener('click', function () {
          functionListNam2025.style.display = "block";
          modalNam2025.style.display = "none";
        });
        addNewBtn2024.addEventListener('click', function () {
          functionListNam2024.style.display = "block";
          modalNam2024.style.display = "none";
        });
        addNewBtn2023.addEventListener('click', function () {
          functionListNam2023.style.display = "block";
          modalNam2023.style.display = "none";
        });
        addNewBtn2022.addEventListener('click', function () {
          functionListNam2022.style.display = "block";
          modalNam2022.style.display = "none";
        });
        addNewBtn2021.addEventListener('click', function () {
          functionListNam2021.style.display = "block";
          modalNam2021.style.display = "none";
        });
        addNewBtn2020.addEventListener('click', function () {
          functionListNam2020.style.display = "block";
          modalNam2020.style.display = "none";
        });
        addNewBtn2019.addEventListener('click', function () {
          functionListNam2019.style.display = "block";
          modalNam2019.style.display = "none";
        });
        addNewBtn2018.addEventListener('click', function () {
          functionListNam2018.style.display = "block";
          modalNam2018.style.display = "none";
        });
        addNewBtn2017.addEventListener('click', function () {
          functionListNam2017.style.display = "block";
          modalNam2017.style.display = "none";
        });

        // Hide the function list when any function is clicked, except for "thongTinChung", and show the modal
        functionListNam2035.addEventListener('click', function (event) {
          const functionName = (event.target! as HTMLElement).getAttribute('data-function');
          if (functionName === "hoSoCongTrinh") {
            functionListNam2035.style.display = "none";
            modalNam2035.style.display = "block";
          }
        });
        functionListNam2034.addEventListener('click', function (event) {
          const functionName = (event.target! as HTMLElement).getAttribute('data-function');
          if (functionName === "hoSoCongTrinh") {
            functionListNam2034.style.display = "none";
            modalNam2034.style.display = "block";
          }
        });
        functionListNam2033.addEventListener('click', function (event) {
          const functionName = (event.target! as HTMLElement).getAttribute('data-function');
          if (functionName === "hoSoCongTrinh") {
            functionListNam2033.style.display = "none";
            modalNam2033.style.display = "block";
          }
        });
        functionListNam2032.addEventListener('click', function (event) {
          const functionName = (event.target! as HTMLElement).getAttribute('data-function');
          if (functionName === "hoSoCongTrinh") {
            functionListNam2032.style.display = "none";
            modalNam2032.style.display = "block";
          }
        });
        functionListNam2031.addEventListener('click', function (event) {
          const functionName = (event.target! as HTMLElement).getAttribute('data-function');
          if (functionName === "hoSoCongTrinh") {
            functionListNam2031.style.display = "none";
            modalNam2031.style.display = "block";
          }
        });
        functionListNam2030.addEventListener('click', function (event) {
          const functionName = (event.target! as HTMLElement).getAttribute('data-function');
          if (functionName === "hoSoCongTrinh") {
            functionListNam2030.style.display = "none";
            modalNam2030.style.display = "block";
          }
        });
        functionListNam2029.addEventListener('click', function (event) {
          const functionName = (event.target! as HTMLElement).getAttribute('data-function');
          if (functionName === "hoSoCongTrinh") {
            functionListNam2029.style.display = "none";
            modalNam2029.style.display = "block";
          }
        });
        functionListNam2028.addEventListener('click', function (event) {
          const functionName = (event.target! as HTMLElement).getAttribute('data-function');
          if (functionName === "hoSoCongTrinh") {
            functionListNam2028.style.display = "none";
            modalNam2028.style.display = "block";
          }
        });
        functionListNam2027.addEventListener('click', function (event) {
          const functionName = (event.target! as HTMLElement).getAttribute('data-function');
          if (functionName === "hoSoCongTrinh") {
            functionListNam2027.style.display = "none";
            modalNam2027.style.display = "block";
          }
        });
        functionListNam2026.addEventListener('click', function (event) {
          const functionName = (event.target! as HTMLElement).getAttribute('data-function');
          if (functionName === "hoSoCongTrinh") {
            functionListNam2026.style.display = "none";
            modalNam2026.style.display = "block";
          }
        });
        functionListNam2025.addEventListener('click', function (event) {
          const functionName = (event.target! as HTMLElement).getAttribute('data-function');
          if (functionName === "hoSoCongTrinh") {
            functionListNam2025.style.display = "none";
            modalNam2025.style.display = "block";
          }
        });
        functionListNam2024.addEventListener('click', function (event) {
          const functionName = (event.target! as HTMLElement).getAttribute('data-function');
          if (functionName === "hoSoCongTrinh") {
            functionListNam2024.style.display = "none";
            modalNam2024.style.display = "block";
          }
        });
        functionListNam2023.addEventListener('click', function (event) {
          const functionName = (event.target! as HTMLElement).getAttribute('data-function');
          if (functionName === "hoSoCongTrinh") {
            functionListNam2023.style.display = "none";
            modalNam2023.style.display = "block";
          }
        });
        functionListNam2022.addEventListener('click', function (event) {
          const functionName = (event.target! as HTMLElement).getAttribute('data-function');
          if (functionName === "hoSoCongTrinh") {
            functionListNam2022.style.display = "none";
            modalNam2022.style.display = "block";
          }
        });
        functionListNam2021.addEventListener('click', function (event) {
          const functionName = (event.target! as HTMLElement).getAttribute('data-function');
          if (functionName === "hoSoCongTrinh") {
            functionListNam2021.style.display = "none";
            modalNam2021.style.display = "block";
          }
        });
        functionListNam2020.addEventListener('click', function (event) {
          const functionName = (event.target! as HTMLElement).getAttribute('data-function');
          if (functionName === "hoSoCongTrinh") {
            functionListNam2020.style.display = "none";
            modalNam2020.style.display = "block";
          }
        });
        functionListNam2019.addEventListener('click', function (event) {
          const functionName = (event.target! as HTMLElement).getAttribute('data-function');
          if (functionName === "hoSoCongTrinh") {
            functionListNam2019.style.display = "none";
            modalNam2019.style.display = "block";
          }
        });
        functionListNam2018.addEventListener('click', function (event) {
          const functionName = (event.target! as HTMLElement).getAttribute('data-function');
          if (functionName === "hoSoCongTrinh") {
            functionListNam2018.style.display = "none";
            modalNam2018.style.display = "block";
          }
        });
        functionListNam2017.addEventListener('click', function (event) {
          const functionName = (event.target! as HTMLElement).getAttribute('data-function');
          if (functionName === "hoSoCongTrinh") {
            functionListNam2017.style.display = "none";
            modalNam2017.style.display = "block";
          }
        });


        const projectCodeHSError2035 = document.getElementById("project-code-error-hs-nam-2035") as HTMLElement;
        const projectNameHsError2035 = document.getElementById("project-name-error-hs-nam-2035") as HTMLElement;
        const projectLocationNameHsError2035 = document.getElementById("project-location-name-error-hs-nam-2035") as HTMLElement;
        const projectLocationHsError2035 = document.getElementById("project-location-error-hs-nam-2035") as HTMLElement;
        const projectDvlhsError2035 = document.getElementById("project-dvlhs-error-hs-nam-2035") as HTMLElement;

        const projectCodeHSError2034 = document.getElementById("project-code-error-hs-nam-2034") as HTMLElement;
        const projectNameHsError2034 = document.getElementById("project-name-error-hs-nam-2034") as HTMLElement;
        const projectLocationNameHsError2034 = document.getElementById("project-location-name-error-hs-nam-2034") as HTMLElement;
        const projectLocationHsError2034 = document.getElementById("project-location-error-hs-nam-2034") as HTMLElement;
        const projectDvlhsError2034 = document.getElementById("project-dvlhs-error-hs-nam-2034") as HTMLElement;

        const projectCodeHSError2033 = document.getElementById("project-code-error-hs-nam-2033") as HTMLElement;
        const projectNameHsError2033 = document.getElementById("project-name-error-hs-nam-2033") as HTMLElement;
        const projectLocationNameHsError2033 = document.getElementById("project-location-name-error-hs-nam-2033") as HTMLElement;
        const projectLocationHsError2033 = document.getElementById("project-location-error-hs-nam-2033") as HTMLElement;
        const projectDvlhsError2033 = document.getElementById("project-dvlhs-error-hs-nam-2033") as HTMLElement;

        const projectCodeHSError2032 = document.getElementById("project-code-error-hs-nam-2032") as HTMLElement;
        const projectNameHsError2032 = document.getElementById("project-name-error-hs-nam-2032") as HTMLElement;
        const projectLocationNameHsError2032 = document.getElementById("project-location-name-error-hs-nam-2032") as HTMLElement;
        const projectLocationHsError2032 = document.getElementById("project-location-error-hs-nam-2032") as HTMLElement;
        const projectDvlhsError2032 = document.getElementById("project-dvlhs-error-hs-nam-2032") as HTMLElement;

        const projectCodeHSError2031 = document.getElementById("project-code-error-hs-nam-2031") as HTMLElement;
        const projectNameHsError2031 = document.getElementById("project-name-error-hs-nam-2031") as HTMLElement;
        const projectLocationNameHsError2031 = document.getElementById("project-location-name-error-hs-nam-2031") as HTMLElement;
        const projectLocationHsError2031 = document.getElementById("project-location-error-hs-nam-2031") as HTMLElement;
        const projectDvlhsError2031 = document.getElementById("project-dvlhs-error-hs-nam-2031") as HTMLElement;

        const projectCodeHSError2030 = document.getElementById("project-code-error-hs-nam-2030") as HTMLElement;
        const projectNameHsError2030 = document.getElementById("project-name-error-hs-nam-2030") as HTMLElement;
        const projectLocationNameHsError2030 = document.getElementById("project-location-name-error-hs-nam-2030") as HTMLElement;
        const projectLocationHsError2030 = document.getElementById("project-location-error-hs-nam-2030") as HTMLElement;
        const projectDvlhsError2030 = document.getElementById("project-dvlhs-error-hs-nam-2030") as HTMLElement;

        const projectCodeHSError2029 = document.getElementById("project-code-error-hs-nam-2029") as HTMLElement;
        const projectNameHsError2029 = document.getElementById("project-name-error-hs-nam-2029") as HTMLElement;
        const projectLocationNameHsError2029 = document.getElementById("project-location-name-error-hs-nam-2029") as HTMLElement;
        const projectLocationHsError2029 = document.getElementById("project-location-error-hs-nam-2029") as HTMLElement;
        const projectDvlhsError2029 = document.getElementById("project-dvlhs-error-hs-nam-2029") as HTMLElement;

        const projectCodeHSError2028 = document.getElementById("project-code-error-hs-nam-2028") as HTMLElement;
        const projectNameHsError2028 = document.getElementById("project-name-error-hs-nam-2028") as HTMLElement;
        const projectLocationNameHsError2028 = document.getElementById("project-location-name-error-hs-nam-2028") as HTMLElement;
        const projectLocationHsError2028 = document.getElementById("project-location-error-hs-nam-2028") as HTMLElement;
        const projectDvlhsError2028 = document.getElementById("project-dvlhs-error-hs-nam-2028") as HTMLElement;

        const projectCodeHSError2027 = document.getElementById("project-code-error-hs-nam-2027") as HTMLElement;
        const projectNameHsError2027 = document.getElementById("project-name-error-hs-nam-2027") as HTMLElement;
        const projectLocationNameHsError2027 = document.getElementById("project-location-name-error-hs-nam-2027") as HTMLElement;
        const projectLocationHsError2027 = document.getElementById("project-location-error-hs-nam-2027") as HTMLElement;
        const projectDvlhsError2027 = document.getElementById("project-dvlhs-error-hs-nam-2027") as HTMLElement;

        const projectCodeHSError2026 = document.getElementById("project-code-error-hs-nam-2026") as HTMLElement;
        const projectNameHsError2026 = document.getElementById("project-name-error-hs-nam-2026") as HTMLElement;
        const projectLocationNameHsError2026 = document.getElementById("project-location-name-error-hs-nam-2026") as HTMLElement;
        const projectLocationHsError2026 = document.getElementById("project-location-error-hs-nam-2026") as HTMLElement;
        const projectDvlhsError2026 = document.getElementById("project-dvlhs-error-hs-nam-2026") as HTMLElement;

        const projectCodeHSError2025 = document.getElementById("project-code-error-hs-nam-2025") as HTMLElement;
        const projectNameHsError2025 = document.getElementById("project-name-error-hs-nam-2025") as HTMLElement;
        const projectLocationNameHsError2025 = document.getElementById("project-location-name-error-hs-nam-2025") as HTMLElement;
        const projectLocationHsError2025 = document.getElementById("project-location-error-hs-nam-2025") as HTMLElement;
        const projectDvlhsError2025 = document.getElementById("project-dvlhs-error-hs-nam-2025") as HTMLElement;

        const projectCodeHSError2024 = document.getElementById("project-code-error-hs-nam-2024") as HTMLElement;
        const projectNameHsError2024 = document.getElementById("project-name-error-hs-nam-2024") as HTMLElement;
        const projectLocationNameHsError2024 = document.getElementById("project-location-name-error-hs-nam-2024") as HTMLElement;
        const projectLocationHsError2024 = document.getElementById("project-location-error-hs-nam-2024") as HTMLElement;
        const projectDvlhsError2024 = document.getElementById("project-dvlhs-error-hs-nam-2024") as HTMLElement;

        const projectCodeHSError2023 = document.getElementById("project-code-error-hs-nam-2023") as HTMLElement;
        const projectNameHsError2023 = document.getElementById("project-name-error-hs-nam-2023") as HTMLElement;
        const projectLocationNameHsError2023 = document.getElementById("project-location-name-error-hs-nam-2023") as HTMLElement;
        const projectLocationHsError2023 = document.getElementById("project-location-error-hs-nam-2023") as HTMLElement;
        const projectDvlhsError2023 = document.getElementById("project-dvlhs-error-hs-nam-2023") as HTMLElement;

        const projectCodeHSError2022 = document.getElementById("project-code-error-hs-nam-2022") as HTMLElement;
        const projectNameHsError2022 = document.getElementById("project-name-error-hs-nam-2022") as HTMLElement;
        const projectLocationNameHsError2022 = document.getElementById("project-location-name-error-hs-nam-2022") as HTMLElement;
        const projectLocationHsError2022 = document.getElementById("project-location-error-hs-nam-2022") as HTMLElement;
        const projectDvlhsError2022 = document.getElementById("project-dvlhs-error-hs-nam-2022") as HTMLElement;

        const projectCodeHSError2021 = document.getElementById("project-code-error-hs-nam-2021") as HTMLElement;
        const projectNameHsError2021 = document.getElementById("project-name-error-hs-nam-2021") as HTMLElement;
        const projectLocationNameHsError2021 = document.getElementById("project-location-name-error-hs-nam-2021") as HTMLElement;
        const projectLocationHsError2021 = document.getElementById("project-location-error-hs-nam-2021") as HTMLElement;
        const projectDvlhsError2021 = document.getElementById("project-dvlhs-error-hs-nam-2021") as HTMLElement;

        const projectCodeHSError2020 = document.getElementById("project-code-error-hs-nam-2020") as HTMLElement;
        const projectNameHsError2020 = document.getElementById("project-name-error-hs-nam-2020") as HTMLElement;
        const projectLocationNameHsError2020 = document.getElementById("project-location-name-error-hs-nam-2020") as HTMLElement;
        const projectLocationHsError2020 = document.getElementById("project-location-error-hs-nam-2020") as HTMLElement;
        const projectDvlhsError2020 = document.getElementById("project-dvlhs-error-hs-nam-2020") as HTMLElement;

        const projectCodeHSError2019 = document.getElementById("project-code-error-hs-nam-2019") as HTMLElement;
        const projectNameHsError2019 = document.getElementById("project-name-error-hs-nam-2019") as HTMLElement;
        const projectLocationNameHsError2019 = document.getElementById("project-location-name-error-hs-nam-2019") as HTMLElement;
        const projectLocationHsError2019 = document.getElementById("project-location-error-hs-nam-2019") as HTMLElement;
        const projectDvlhsError2019 = document.getElementById("project-dvlhs-error-hs-nam-2019") as HTMLElement;

        const projectCodeHSError2018 = document.getElementById("project-code-error-hs-nam-2018") as HTMLElement;
        const projectNameHsError2018 = document.getElementById("project-name-error-hs-nam-2018") as HTMLElement;
        const projectLocationNameHsError2018 = document.getElementById("project-location-name-error-hs-nam-2018") as HTMLElement;
        const projectLocationHsError2018 = document.getElementById("project-location-error-hs-nam-2018") as HTMLElement;
        const projectDvlhsError2018 = document.getElementById("project-dvlhs-error-hs-nam-2018") as HTMLElement;

        const projectCodeHSError2017 = document.getElementById("project-code-error-hs-nam-2017") as HTMLElement;
        const projectNameHsError2017 = document.getElementById("project-name-error-hs-nam-2017") as HTMLElement;
        const projectLocationNameHsError2017 = document.getElementById("project-location-name-error-hs-nam-2017") as HTMLElement;
        const projectLocationHsError2017 = document.getElementById("project-location-error-hs-nam-2017") as HTMLElement;
        const projectDvlhsError2017 = document.getElementById("project-dvlhs-error-hs-nam-2017") as HTMLElement;

        // Function to clear all input fields in the form
        function clearFormInputs() {
          inputFields.forEach((field) => {
            (field as HTMLInputElement).value = "";
          });
        }

        // Function to validate the input fields
        function validateFormInputs2035() {
          let isValid = true;
          const projectCodeHSErrorValue2035 = (document.getElementById("project-code-hs-nam-2035") as HTMLInputElement).value;
          if (projectCodeHSErrorValue2035 === "") {
            projectCodeHSError2035.textContent = "Chưa nhập mã hồ sơ";
            isValid = false;
          } else {
            projectCodeHSError2035.textContent = "";
          }
          const projectNameHsErrorValue2035 = (document.getElementById("project-name-hs-nam-2035") as HTMLInputElement).value;
          if (projectNameHsErrorValue2035 === "") {
            projectNameHsError2035.textContent = "Chưa nhập tên hồ sơ công trình";
            isValid = false;
          } else {
            projectNameHsError2035.textContent = "";
          }
          const projectLocationNameHsErrorValue2035 = (document.getElementById("project-location-name-hs-nam-2035") as HTMLInputElement).value;
          if (projectLocationNameHsErrorValue2035 === "") {
            projectLocationNameHsError2035.textContent = "Chưa điền địa điểm công trình";
            isValid = false;
          } else {
            projectLocationNameHsError2035.textContent = "";
          }
          const projectLocationHsErrorValueX2035 = (document.getElementById("project-location-x-hs-nam-2035") as HTMLInputElement).value;
          const projectLocationHsErrorValueY2035 = (document.getElementById("project-location-y-hs-nam-2035") as HTMLInputElement).value;
          if (projectLocationHsErrorValueX2035 === "" || projectLocationHsErrorValueY2035 === "") {
            projectLocationHsError2035.textContent = "Chưa nhập tọa độ";
            isValid = false;
          } else {
            projectLocationHsError2035.textContent = "";
          }
          const projectDvlhsErrorValue2035 = (document.getElementById("project-dvlhs-hs-nam-2035") as HTMLInputElement).value;
          if (projectDvlhsErrorValue2035 === "") {
            projectDvlhsError2035.textContent = "Chưa nhập đơn vị lập hồ sơ";
            isValid = false;
          } else {
            projectDvlhsError2035.textContent = "";
          }
          return isValid;
        }

        // Function to validate the input fields
        function validateFormInputs2034() {
          let isValid = true;
          const projectCodeHSErrorValue2034 = (document.getElementById("project-code-hs-nam-2034") as HTMLInputElement).value;
          if (projectCodeHSErrorValue2034 === "") {
            projectCodeHSError2034.textContent = "Chưa nhập mã hồ sơ";
            isValid = false;
          } else {
            projectCodeHSError2034.textContent = "";
          }
          const projectNameHsErrorValue2034 = (document.getElementById("project-name-hs-nam-2034") as HTMLInputElement).value;
          if (projectNameHsErrorValue2034 === "") {
            projectNameHsError2034.textContent = "Chưa nhập tên hồ sơ công trình";
            isValid = false;
          } else {
            projectNameHsError2034.textContent = "";
          }
          const projectLocationNameHsErrorValue2034 = (document.getElementById("project-location-name-hs-nam-2034") as HTMLInputElement).value;
          if (projectLocationNameHsErrorValue2034 === "") {
            projectLocationNameHsError2034.textContent = "Chưa điền địa điểm công trình";
            isValid = false;
          } else {
            projectLocationNameHsError2034.textContent = "";
          }
          const projectLocationHsErrorValueX2034 = (document.getElementById("project-location-x-hs-nam-2034") as HTMLInputElement).value;
          const projectLocationHsErrorValueY2034 = (document.getElementById("project-location-y-hs-nam-2034") as HTMLInputElement).value;
          if (projectLocationHsErrorValueX2034 === "" || projectLocationHsErrorValueY2034 === "") {
            projectLocationHsError2034.textContent = "Chưa nhập tọa độ";
            isValid = false;
          } else {
            projectLocationHsError2034.textContent = "";
          }
          const projectDvlhsErrorValue2034 = (document.getElementById("project-dvlhs-hs-nam-2034") as HTMLInputElement).value;
          if (projectDvlhsErrorValue2034 === "") {
            projectDvlhsError2034.textContent = "Chưa nhập đơn vị lập hồ sơ";
            isValid = false;
          } else {
            projectDvlhsError2034.textContent = "";
          }
          return isValid;
        }

        // Function to validate the input fields
        function validateFormInputs2033() {
          let isValid = true;
          const projectCodeHSErrorValue2033 = (document.getElementById("project-code-hs-nam-2033") as HTMLInputElement).value;
          if (projectCodeHSErrorValue2033 === "") {
            projectCodeHSError2033.textContent = "Chưa nhập mã hồ sơ";
            isValid = false;
          } else {
            projectCodeHSError2033.textContent = "";
          }
          const projectNameHsErrorValue2033 = (document.getElementById("project-name-hs-nam-2033") as HTMLInputElement).value;
          if (projectNameHsErrorValue2033 === "") {
            projectNameHsError2033.textContent = "Chưa nhập tên hồ sơ công trình";
            isValid = false;
          } else {
            projectNameHsError2033.textContent = "";
          }
          const projectLocationNameHsErrorValue2033 = (document.getElementById("project-location-name-hs-nam-2033") as HTMLInputElement).value;
          if (projectLocationNameHsErrorValue2033 === "") {
            projectLocationNameHsError2033.textContent = "Chưa điền địa điểm công trình";
            isValid = false;
          } else {
            projectLocationNameHsError2033.textContent = "";
          }
          const projectLocationHsErrorValueX2033 = (document.getElementById("project-location-x-hs-nam-2033") as HTMLInputElement).value;
          const projectLocationHsErrorValueY2033 = (document.getElementById("project-location-y-hs-nam-2033") as HTMLInputElement).value;
          if (projectLocationHsErrorValueX2033 === "" || projectLocationHsErrorValueY2033 === "") {
            projectLocationHsError2033.textContent = "Chưa nhập tọa độ";
            isValid = false;
          } else {
            projectLocationHsError2033.textContent = "";
          }
          const projectDvlhsErrorValue2033 = (document.getElementById("project-dvlhs-hs-nam-2033") as HTMLInputElement).value;
          if (projectDvlhsErrorValue2033 === "") {
            projectDvlhsError2033.textContent = "Chưa nhập đơn vị lập hồ sơ";
            isValid = false;
          } else {
            projectDvlhsError2033.textContent = "";
          }
          return isValid;
        }

        // Function to validate the input fields
        function validateFormInputs2032() {
          let isValid = true;
          const projectCodeHSErrorValue2032 = (document.getElementById("project-code-hs-nam-2032") as HTMLInputElement).value;
          if (projectCodeHSErrorValue2032 === "") {
            projectCodeHSError2032.textContent = "Chưa nhập mã hồ sơ";
            isValid = false;
          } else {
            projectCodeHSError2032.textContent = "";
          }
          const projectNameHsErrorValue2032 = (document.getElementById("project-name-hs-nam-2032") as HTMLInputElement).value;
          if (projectNameHsErrorValue2032 === "") {
            projectNameHsError2032.textContent = "Chưa nhập tên hồ sơ công trình";
            isValid = false;
          } else {
            projectNameHsError2032.textContent = "";
          }
          const projectLocationNameHsErrorValue2032 = (document.getElementById("project-location-name-hs-nam-2032") as HTMLInputElement).value;
          if (projectLocationNameHsErrorValue2032 === "") {
            projectLocationNameHsError2032.textContent = "Chưa điền địa điểm công trình";
            isValid = false;
          } else {
            projectLocationNameHsError2032.textContent = "";
          }
          const projectLocationHsErrorValueX2032 = (document.getElementById("project-location-x-hs-nam-2032") as HTMLInputElement).value;
          const projectLocationHsErrorValueY2032 = (document.getElementById("project-location-y-hs-nam-2032") as HTMLInputElement).value;
          if (projectLocationHsErrorValueX2032 === "" || projectLocationHsErrorValueY2032 === "") {
            projectLocationHsError2032.textContent = "Chưa nhập tọa độ";
            isValid = false;
          } else {
            projectLocationHsError2032.textContent = "";
          }
          const projectDvlhsErrorValue2032 = (document.getElementById("project-dvlhs-hs-nam-2032") as HTMLInputElement).value;
          if (projectDvlhsErrorValue2032 === "") {
            projectDvlhsError2032.textContent = "Chưa nhập đơn vị lập hồ sơ";
            isValid = false;
          } else {
            projectDvlhsError2032.textContent = "";
          }
          return isValid;
        }

        // Function to validate the input fields
        function validateFormInputs2031() {
          let isValid = true;
          const projectCodeHSErrorValue2031 = (document.getElementById("project-code-hs-nam-2031") as HTMLInputElement).value;
          if (projectCodeHSErrorValue2031 === "") {
            projectCodeHSError2031.textContent = "Chưa nhập mã hồ sơ";
            isValid = false;
          } else {
            projectCodeHSError2031.textContent = "";
          }
          const projectNameHsErrorValue2031 = (document.getElementById("project-name-hs-nam-2031") as HTMLInputElement).value;
          if (projectNameHsErrorValue2031 === "") {
            projectNameHsError2031.textContent = "Chưa nhập tên hồ sơ công trình";
            isValid = false;
          } else {
            projectNameHsError2031.textContent = "";
          }
          const projectLocationNameHsErrorValue2031 = (document.getElementById("project-location-name-hs-nam-2031") as HTMLInputElement).value;
          if (projectLocationNameHsErrorValue2031 === "") {
            projectLocationNameHsError2031.textContent = "Chưa điền địa điểm công trình";
            isValid = false;
          } else {
            projectLocationNameHsError2031.textContent = "";
          }
          const projectLocationHsErrorValueX2031 = (document.getElementById("project-location-x-hs-nam-2031") as HTMLInputElement).value;
          const projectLocationHsErrorValueY2031 = (document.getElementById("project-location-y-hs-nam-2031") as HTMLInputElement).value;
          if (projectLocationHsErrorValueX2031 === "" || projectLocationHsErrorValueY2031 === "") {
            projectLocationHsError2031.textContent = "Chưa nhập tọa độ";
            isValid = false;
          } else {
            projectLocationHsError2031.textContent = "";
          }
          const projectDvlhsErrorValue2031 = (document.getElementById("project-dvlhs-hs-nam-2031") as HTMLInputElement).value;
          if (projectDvlhsErrorValue2031 === "") {
            projectDvlhsError2031.textContent = "Chưa nhập đơn vị lập hồ sơ";
            isValid = false;
          } else {
            projectDvlhsError2031.textContent = "";
          }
          return isValid;
        }

        // Function to validate the input fields
        function validateFormInputs2030() {
          let isValid = true;
          const projectCodeHSErrorValue2030 = (document.getElementById("project-code-hs-nam-2030") as HTMLInputElement).value;
          if (projectCodeHSErrorValue2030 === "") {
            projectCodeHSError2030.textContent = "Chưa nhập mã hồ sơ";
            isValid = false;
          } else {
            projectCodeHSError2030.textContent = "";
          }
          const projectNameHsErrorValue2030 = (document.getElementById("project-name-hs-nam-2030") as HTMLInputElement).value;
          if (projectNameHsErrorValue2030 === "") {
            projectNameHsError2030.textContent = "Chưa nhập tên hồ sơ công trình";
            isValid = false;
          } else {
            projectNameHsError2030.textContent = "";
          }
          const projectLocationNameHsErrorValue2030 = (document.getElementById("project-location-name-hs-nam-2030") as HTMLInputElement).value;
          if (projectLocationNameHsErrorValue2030 === "") {
            projectLocationNameHsError2030.textContent = "Chưa điền địa điểm công trình";
            isValid = false;
          } else {
            projectLocationNameHsError2030.textContent = "";
          }
          const projectLocationHsErrorValueX2030 = (document.getElementById("project-location-x-hs-nam-2030") as HTMLInputElement).value;
          const projectLocationHsErrorValueY2030 = (document.getElementById("project-location-y-hs-nam-2030") as HTMLInputElement).value;
          if (projectLocationHsErrorValueX2030 === "" || projectLocationHsErrorValueY2030 === "") {
            projectLocationHsError2030.textContent = "Chưa nhập tọa độ";
            isValid = false;
          } else {
            projectLocationHsError2030.textContent = "";
          }
          const projectDvlhsErrorValue2030 = (document.getElementById("project-dvlhs-hs-nam-2030") as HTMLInputElement).value;
          if (projectDvlhsErrorValue2030 === "") {
            projectDvlhsError2030.textContent = "Chưa nhập đơn vị lập hồ sơ";
            isValid = false;
          } else {
            projectDvlhsError2030.textContent = "";
          }
          return isValid;
        }

        // Function to validate the input fields
        function validateFormInputs2029() {
          let isValid = true;
          const projectCodeHSErrorValue2029 = (document.getElementById("project-code-hs-nam-2029") as HTMLInputElement).value;
          if (projectCodeHSErrorValue2029 === "") {
            projectCodeHSError2029.textContent = "Chưa nhập mã hồ sơ";
            isValid = false;
          } else {
            projectCodeHSError2029.textContent = "";
          }
          const projectNameHsErrorValue2029 = (document.getElementById("project-name-hs-nam-2029") as HTMLInputElement).value;
          if (projectNameHsErrorValue2029 === "") {
            projectNameHsError2029.textContent = "Chưa nhập tên hồ sơ công trình";
            isValid = false;
          } else {
            projectNameHsError2029.textContent = "";
          }
          const projectLocationNameHsErrorValue2029 = (document.getElementById("project-location-name-hs-nam-2029") as HTMLInputElement).value;
          if (projectLocationNameHsErrorValue2029 === "") {
            projectLocationNameHsError2029.textContent = "Chưa điền địa điểm công trình";
            isValid = false;
          } else {
            projectLocationNameHsError2029.textContent = "";
          }
          const projectLocationHsErrorValueX2029 = (document.getElementById("project-location-x-hs-nam-2029") as HTMLInputElement).value;
          const projectLocationHsErrorValueY2029 = (document.getElementById("project-location-y-hs-nam-2029") as HTMLInputElement).value;
          if (projectLocationHsErrorValueX2029 === "" || projectLocationHsErrorValueY2029 === "") {
            projectLocationHsError2029.textContent = "Chưa nhập tọa độ";
            isValid = false;
          } else {
            projectLocationHsError2029.textContent = "";
          }
          const projectDvlhsErrorValue2029 = (document.getElementById("project-dvlhs-hs-nam-2029") as HTMLInputElement).value;
          if (projectDvlhsErrorValue2029 === "") {
            projectDvlhsError2029.textContent = "Chưa nhập đơn vị lập hồ sơ";
            isValid = false;
          } else {
            projectDvlhsError2029.textContent = "";
          }
          return isValid;
        }

        // Function to validate the input fields
        function validateFormInputs2028() {
          let isValid = true;
          const projectCodeHSErrorValue2028 = (document.getElementById("project-code-hs-nam-2028") as HTMLInputElement).value;
          if (projectCodeHSErrorValue2028 === "") {
            projectCodeHSError2028.textContent = "Chưa nhập mã hồ sơ";
            isValid = false;
          } else {
            projectCodeHSError2028.textContent = "";
          }
          const projectNameHsErrorValue2028 = (document.getElementById("project-name-hs-nam-2028") as HTMLInputElement).value;
          if (projectNameHsErrorValue2028 === "") {
            projectNameHsError2028.textContent = "Chưa nhập tên hồ sơ công trình";
            isValid = false;
          } else {
            projectNameHsError2028.textContent = "";
          }
          const projectLocationNameHsErrorValue2028 = (document.getElementById("project-location-name-hs-nam-2028") as HTMLInputElement).value;
          if (projectLocationNameHsErrorValue2028 === "") {
            projectLocationNameHsError2028.textContent = "Chưa điền địa điểm công trình";
            isValid = false;
          } else {
            projectLocationNameHsError2028.textContent = "";
          }
          const projectLocationHsErrorValueX2028 = (document.getElementById("project-location-x-hs-nam-2028") as HTMLInputElement).value;
          const projectLocationHsErrorValueY2028 = (document.getElementById("project-location-y-hs-nam-2028") as HTMLInputElement).value;
          if (projectLocationHsErrorValueX2028 === "" || projectLocationHsErrorValueY2028 === "") {
            projectLocationHsError2028.textContent = "Chưa nhập tọa độ";
            isValid = false;
          } else {
            projectLocationHsError2028.textContent = "";
          }
          const projectDvlhsErrorValue2028 = (document.getElementById("project-dvlhs-hs-nam-2028") as HTMLInputElement).value;
          if (projectDvlhsErrorValue2028 === "") {
            projectDvlhsError2028.textContent = "Chưa nhập đơn vị lập hồ sơ";
            isValid = false;
          } else {
            projectDvlhsError2028.textContent = "";
          }
          return isValid;
        }

        // Function to validate the input fields
        function validateFormInputs2027() {
          let isValid = true;
          const projectCodeHSErrorValue2027 = (document.getElementById("project-code-hs-nam-2027") as HTMLInputElement).value;
          if (projectCodeHSErrorValue2027 === "") {
            projectCodeHSError2027.textContent = "Chưa nhập mã hồ sơ";
            isValid = false;
          } else {
            projectCodeHSError2027.textContent = "";
          }
          const projectNameHsErrorValue2027 = (document.getElementById("project-name-hs-nam-2027") as HTMLInputElement).value;
          if (projectNameHsErrorValue2027 === "") {
            projectNameHsError2027.textContent = "Chưa nhập tên hồ sơ công trình";
            isValid = false;
          } else {
            projectNameHsError2027.textContent = "";
          }
          const projectLocationNameHsErrorValue2027 = (document.getElementById("project-location-name-hs-nam-2027") as HTMLInputElement).value;
          if (projectLocationNameHsErrorValue2027 === "") {
            projectLocationNameHsError2027.textContent = "Chưa điền địa điểm công trình";
            isValid = false;
          } else {
            projectLocationNameHsError2027.textContent = "";
          }
          const projectLocationHsErrorValueX2027 = (document.getElementById("project-location-x-hs-nam-2027") as HTMLInputElement).value;
          const projectLocationHsErrorValueY2027 = (document.getElementById("project-location-y-hs-nam-2027") as HTMLInputElement).value;
          if (projectLocationHsErrorValueX2027 === "" || projectLocationHsErrorValueY2027 === "") {
            projectLocationHsError2027.textContent = "Chưa nhập tọa độ";
            isValid = false;
          } else {
            projectLocationHsError2027.textContent = "";
          }
          const projectDvlhsErrorValue2027 = (document.getElementById("project-dvlhs-hs-nam-2027") as HTMLInputElement).value;
          if (projectDvlhsErrorValue2027 === "") {
            projectDvlhsError2027.textContent = "Chưa nhập đơn vị lập hồ sơ";
            isValid = false;
          } else {
            projectDvlhsError2027.textContent = "";
          }
          return isValid;
        }

        // Function to validate the input fields
        function validateFormInputs2026() {
          let isValid = true;
          const projectCodeHSErrorValue2026 = (document.getElementById("project-code-hs-nam-2026") as HTMLInputElement).value;
          if (projectCodeHSErrorValue2026 === "") {
            projectCodeHSError2026.textContent = "Chưa nhập mã hồ sơ";
            isValid = false;
          } else {
            projectCodeHSError2026.textContent = "";
          }
          const projectNameHsErrorValue2026 = (document.getElementById("project-name-hs-nam-2026") as HTMLInputElement).value;
          if (projectNameHsErrorValue2026 === "") {
            projectNameHsError2026.textContent = "Chưa nhập tên hồ sơ công trình";
            isValid = false;
          } else {
            projectNameHsError2026.textContent = "";
          }
          const projectLocationNameHsErrorValue2026 = (document.getElementById("project-location-name-hs-nam-2026") as HTMLInputElement).value;
          if (projectLocationNameHsErrorValue2026 === "") {
            projectLocationNameHsError2026.textContent = "Chưa điền địa điểm công trình";
            isValid = false;
          } else {
            projectLocationNameHsError2026.textContent = "";
          }
          const projectLocationHsErrorValueX2026 = (document.getElementById("project-location-x-hs-nam-2026") as HTMLInputElement).value;
          const projectLocationHsErrorValueY2026 = (document.getElementById("project-location-y-hs-nam-2026") as HTMLInputElement).value;
          if (projectLocationHsErrorValueX2026 === "" || projectLocationHsErrorValueY2026 === "") {
            projectLocationHsError2026.textContent = "Chưa nhập tọa độ";
            isValid = false;
          } else {
            projectLocationHsError2026.textContent = "";
          }
          const projectDvlhsErrorValue2026 = (document.getElementById("project-dvlhs-hs-nam-2026") as HTMLInputElement).value;
          if (projectDvlhsErrorValue2026 === "") {
            projectDvlhsError2026.textContent = "Chưa nhập đơn vị lập hồ sơ";
            isValid = false;
          } else {
            projectDvlhsError2026.textContent = "";
          }
          return isValid;
        }

        // Function to validate the input fields
        function validateFormInputs2025() {
          let isValid = true;
          const projectCodeHSErrorValue2025 = (document.getElementById("project-code-hs-nam-2025") as HTMLInputElement).value;
          if (projectCodeHSErrorValue2025 === "") {
            projectCodeHSError2025.textContent = "Chưa nhập mã hồ sơ";
            isValid = false;
          } else {
            projectCodeHSError2025.textContent = "";
          }
          const projectNameHsErrorValue2025 = (document.getElementById("project-name-hs-nam-2025") as HTMLInputElement).value;
          if (projectNameHsErrorValue2025 === "") {
            projectNameHsError2025.textContent = "Chưa nhập tên hồ sơ công trình";
            isValid = false;
          } else {
            projectNameHsError2025.textContent = "";
          }
          const projectLocationNameHsErrorValue2025 = (document.getElementById("project-location-name-hs-nam-2025") as HTMLInputElement).value;
          if (projectLocationNameHsErrorValue2025 === "") {
            projectLocationNameHsError2025.textContent = "Chưa điền địa điểm công trình";
            isValid = false;
          } else {
            projectLocationNameHsError2025.textContent = "";
          }
          const projectLocationHsErrorValueX2025 = (document.getElementById("project-location-x-hs-nam-2025") as HTMLInputElement).value;
          const projectLocationHsErrorValueY2025 = (document.getElementById("project-location-y-hs-nam-2025") as HTMLInputElement).value;
          if (projectLocationHsErrorValueX2025 === "" || projectLocationHsErrorValueY2025 === "") {
            projectLocationHsError2025.textContent = "Chưa nhập tọa độ";
            isValid = false;
          } else {
            projectLocationHsError2025.textContent = "";
          }
          const projectDvlhsErrorValue2025 = (document.getElementById("project-dvlhs-hs-nam-2025") as HTMLInputElement).value;
          if (projectDvlhsErrorValue2025 === "") {
            projectDvlhsError2025.textContent = "Chưa nhập đơn vị lập hồ sơ";
            isValid = false;
          } else {
            projectDvlhsError2025.textContent = "";
          }
          return isValid;
        }

        // Function to validate the input fields
        function validateFormInputs2024() {
          let isValid = true;
          const projectCodeHSErrorValue2024 = (document.getElementById("project-code-hs-nam-2024") as HTMLInputElement).value;
          if (projectCodeHSErrorValue2024 === "") {
            projectCodeHSError2024.textContent = "Chưa nhập mã hồ sơ";
            isValid = false;
          } else {
            projectCodeHSError2024.textContent = "";
          }
          const projectNameHsErrorValue2024 = (document.getElementById("project-name-hs-nam-2024") as HTMLInputElement).value;
          if (projectNameHsErrorValue2024 === "") {
            projectNameHsError2024.textContent = "Chưa nhập tên hồ sơ công trình";
            isValid = false;
          } else {
            projectNameHsError2024.textContent = "";
          }
          const projectLocationNameHsErrorValue2024 = (document.getElementById("project-location-name-hs-nam-2024") as HTMLInputElement).value;
          if (projectLocationNameHsErrorValue2024 === "") {
            projectLocationNameHsError2024.textContent = "Chưa điền địa điểm công trình";
            isValid = false;
          } else {
            projectLocationNameHsError2024.textContent = "";
          }
          const projectLocationHsErrorValueX2024 = (document.getElementById("project-location-x-hs-nam-2024") as HTMLInputElement).value;
          const projectLocationHsErrorValueY2024 = (document.getElementById("project-location-y-hs-nam-2024") as HTMLInputElement).value;
          if (projectLocationHsErrorValueX2024 === "" || projectLocationHsErrorValueY2024 === "") {
            projectLocationHsError2024.textContent = "Chưa nhập tọa độ";
            isValid = false;
          } else {
            projectLocationHsError2024.textContent = "";
          }
          const projectDvlhsErrorValue2024 = (document.getElementById("project-dvlhs-hs-nam-2024") as HTMLInputElement).value;
          if (projectDvlhsErrorValue2024 === "") {
            projectDvlhsError2024.textContent = "Chưa nhập đơn vị lập hồ sơ";
            isValid = false;
          } else {
            projectDvlhsError2024.textContent = "";
          }
          return isValid;
        }

        // Function to validate the input fields
        function validateFormInputs2023() {
          let isValid = true;
          const projectCodeHSErrorValue2023 = (document.getElementById("project-code-hs-nam-2023") as HTMLInputElement).value;
          if (projectCodeHSErrorValue2023 === "") {
            projectCodeHSError2023.textContent = "Chưa nhập mã hồ sơ";
            isValid = false;
          } else {
            projectCodeHSError2023.textContent = "";
          }
          const projectNameHsErrorValue2023 = (document.getElementById("project-name-hs-nam-2023") as HTMLInputElement).value;
          if (projectNameHsErrorValue2023 === "") {
            projectNameHsError2023.textContent = "Chưa nhập tên hồ sơ công trình";
            isValid = false;
          } else {
            projectNameHsError2023.textContent = "";
          }
          const projectLocationNameHsErrorValue2023 = (document.getElementById("project-location-name-hs-nam-2023") as HTMLInputElement).value;
          if (projectLocationNameHsErrorValue2023 === "") {
            projectLocationNameHsError2023.textContent = "Chưa điền địa điểm công trình";
            isValid = false;
          } else {
            projectLocationNameHsError2023.textContent = "";
          }
          const projectLocationHsErrorValueX2023 = (document.getElementById("project-location-x-hs-nam-2023") as HTMLInputElement).value;
          const projectLocationHsErrorValueY2023 = (document.getElementById("project-location-y-hs-nam-2023") as HTMLInputElement).value;
          if (projectLocationHsErrorValueX2023 === "" || projectLocationHsErrorValueY2023 === "") {
            projectLocationHsError2023.textContent = "Chưa nhập tọa độ";
            isValid = false;
          } else {
            projectLocationHsError2023.textContent = "";
          }
          const projectDvlhsErrorValue2023 = (document.getElementById("project-dvlhs-hs-nam-2023") as HTMLInputElement).value;
          if (projectDvlhsErrorValue2023 === "") {
            projectDvlhsError2023.textContent = "Chưa nhập đơn vị lập hồ sơ";
            isValid = false;
          } else {
            projectDvlhsError2023.textContent = "";
          }
          return isValid;
        }

        // Function to validate the input fields
        function validateFormInputs2022() {
          let isValid = true;
          const projectCodeHSErrorValue2022 = (document.getElementById("project-code-hs-nam-2022") as HTMLInputElement).value;
          if (projectCodeHSErrorValue2022 === "") {
            projectCodeHSError2022.textContent = "Chưa nhập mã hồ sơ";
            isValid = false;
          } else {
            projectCodeHSError2022.textContent = "";
          }
          const projectNameHsErrorValue2022 = (document.getElementById("project-name-hs-nam-2022") as HTMLInputElement).value;
          if (projectNameHsErrorValue2022 === "") {
            projectNameHsError2022.textContent = "Chưa nhập tên hồ sơ công trình";
            isValid = false;
          } else {
            projectNameHsError2022.textContent = "";
          }
          const projectLocationNameHsErrorValue2022 = (document.getElementById("project-location-name-hs-nam-2022") as HTMLInputElement).value;
          if (projectLocationNameHsErrorValue2022 === "") {
            projectLocationNameHsError2022.textContent = "Chưa điền địa điểm công trình";
            isValid = false;
          } else {
            projectLocationNameHsError2022.textContent = "";
          }
          const projectLocationHsErrorValueX2022 = (document.getElementById("project-location-x-hs-nam-2022") as HTMLInputElement).value;
          const projectLocationHsErrorValueY2022 = (document.getElementById("project-location-y-hs-nam-2022") as HTMLInputElement).value;
          if (projectLocationHsErrorValueX2022 === "" || projectLocationHsErrorValueY2022 === "") {
            projectLocationHsError2022.textContent = "Chưa nhập tọa độ";
            isValid = false;
          } else {
            projectLocationHsError2022.textContent = "";
          }
          const projectDvlhsErrorValue2022 = (document.getElementById("project-dvlhs-hs-nam-2022") as HTMLInputElement).value;
          if (projectDvlhsErrorValue2022 === "") {
            projectDvlhsError2022.textContent = "Chưa nhập đơn vị lập hồ sơ";
            isValid = false;
          } else {
            projectDvlhsError2022.textContent = "";
          }
          return isValid;
        }

        // Function to validate the input fields
        function validateFormInputs2021() {
          let isValid = true;
          const projectCodeHSErrorValue2021 = (document.getElementById("project-code-hs-nam-2021") as HTMLInputElement).value;
          if (projectCodeHSErrorValue2021 === "") {
            projectCodeHSError2021.textContent = "Chưa nhập mã hồ sơ";
            isValid = false;
          } else {
            projectCodeHSError2021.textContent = "";
          }
          const projectNameHsErrorValue2021 = (document.getElementById("project-name-hs-nam-2021") as HTMLInputElement).value;
          if (projectNameHsErrorValue2021 === "") {
            projectNameHsError2021.textContent = "Chưa nhập tên hồ sơ công trình";
            isValid = false;
          } else {
            projectNameHsError2021.textContent = "";
          }
          const projectLocationNameHsErrorValue2021 = (document.getElementById("project-location-name-hs-nam-2021") as HTMLInputElement).value;
          if (projectLocationNameHsErrorValue2021 === "") {
            projectLocationNameHsError2021.textContent = "Chưa điền địa điểm công trình";
            isValid = false;
          } else {
            projectLocationNameHsError2021.textContent = "";
          }
          const projectLocationHsErrorValueX2021 = (document.getElementById("project-location-x-hs-nam-2021") as HTMLInputElement).value;
          const projectLocationHsErrorValueY2021 = (document.getElementById("project-location-y-hs-nam-2021") as HTMLInputElement).value;
          if (projectLocationHsErrorValueX2021 === "" || projectLocationHsErrorValueY2021 === "") {
            projectLocationHsError2021.textContent = "Chưa nhập tọa độ";
            isValid = false;
          } else {
            projectLocationHsError2021.textContent = "";
          }
          const projectDvlhsErrorValue2021 = (document.getElementById("project-dvlhs-hs-nam-2021") as HTMLInputElement).value;
          if (projectDvlhsErrorValue2021 === "") {
            projectDvlhsError2021.textContent = "Chưa nhập đơn vị lập hồ sơ";
            isValid = false;
          } else {
            projectDvlhsError2021.textContent = "";
          }
          return isValid;
        }

        // Function to validate the input fields
        function validateFormInputs2020() {
          let isValid = true;
          const projectCodeHSErrorValue2020 = (document.getElementById("project-code-hs-nam-2020") as HTMLInputElement).value;
          if (projectCodeHSErrorValue2020 === "") {
            projectCodeHSError2020.textContent = "Chưa nhập mã hồ sơ";
            isValid = false;
          } else {
            projectCodeHSError2020.textContent = "";
          }
          const projectNameHsErrorValue2020 = (document.getElementById("project-name-hs-nam-2020") as HTMLInputElement).value;
          if (projectNameHsErrorValue2020 === "") {
            projectNameHsError2020.textContent = "Chưa nhập tên hồ sơ công trình";
            isValid = false;
          } else {
            projectNameHsError2020.textContent = "";
          }
          const projectLocationNameHsErrorValue2020 = (document.getElementById("project-location-name-hs-nam-2020") as HTMLInputElement).value;
          if (projectLocationNameHsErrorValue2020 === "") {
            projectLocationNameHsError2020.textContent = "Chưa điền địa điểm công trình";
            isValid = false;
          } else {
            projectLocationNameHsError2020.textContent = "";
          }
          const projectLocationHsErrorValueX2020 = (document.getElementById("project-location-x-hs-nam-2020") as HTMLInputElement).value;
          const projectLocationHsErrorValueY2020 = (document.getElementById("project-location-y-hs-nam-2020") as HTMLInputElement).value;
          if (projectLocationHsErrorValueX2020 === "" || projectLocationHsErrorValueY2020 === "") {
            projectLocationHsError2020.textContent = "Chưa nhập tọa độ";
            isValid = false;
          } else {
            projectLocationHsError2020.textContent = "";
          }
          const projectDvlhsErrorValue2020 = (document.getElementById("project-dvlhs-hs-nam-2020") as HTMLInputElement).value;
          if (projectDvlhsErrorValue2020 === "") {
            projectDvlhsError2020.textContent = "Chưa nhập đơn vị lập hồ sơ";
            isValid = false;
          } else {
            projectDvlhsError2020.textContent = "";
          }
          return isValid;
        }

        // Function to validate the input fields
        function validateFormInputs2019() {
          let isValid = true;
          const projectCodeHSErrorValue2019 = (document.getElementById("project-code-hs-nam-2019") as HTMLInputElement).value;
          if (projectCodeHSErrorValue2019 === "") {
            projectCodeHSError2019.textContent = "Chưa nhập mã hồ sơ";
            isValid = false;
          } else {
            projectCodeHSError2019.textContent = "";
          }
          const projectNameHsErrorValue2019 = (document.getElementById("project-name-hs-nam-2019") as HTMLInputElement).value;
          if (projectNameHsErrorValue2019 === "") {
            projectNameHsError2019.textContent = "Chưa nhập tên hồ sơ công trình";
            isValid = false;
          } else {
            projectNameHsError2019.textContent = "";
          }
          const projectLocationNameHsErrorValue2019 = (document.getElementById("project-location-name-hs-nam-2019") as HTMLInputElement).value;
          if (projectLocationNameHsErrorValue2019 === "") {
            projectLocationNameHsError2019.textContent = "Chưa điền địa điểm công trình";
            isValid = false;
          } else {
            projectLocationNameHsError2019.textContent = "";
          }
          const projectLocationHsErrorValueX2019 = (document.getElementById("project-location-x-hs-nam-2019") as HTMLInputElement).value;
          const projectLocationHsErrorValueY2019 = (document.getElementById("project-location-y-hs-nam-2019") as HTMLInputElement).value;
          if (projectLocationHsErrorValueX2019 === "" || projectLocationHsErrorValueY2019 === "") {
            projectLocationHsError2019.textContent = "Chưa nhập tọa độ";
            isValid = false;
          } else {
            projectLocationHsError2019.textContent = "";
          }
          const projectDvlhsErrorValue2019 = (document.getElementById("project-dvlhs-hs-nam-2019") as HTMLInputElement).value;
          if (projectDvlhsErrorValue2019 === "") {
            projectDvlhsError2019.textContent = "Chưa nhập đơn vị lập hồ sơ";
            isValid = false;
          } else {
            projectDvlhsError2019.textContent = "";
          }
          return isValid;
        }

        // Function to validate the input fields
        function validateFormInputs2018() {
          let isValid = true;
          const projectCodeHSErrorValue2018 = (document.getElementById("project-code-hs-nam-2018") as HTMLInputElement).value;
          if (projectCodeHSErrorValue2018 === "") {
            projectCodeHSError2018.textContent = "Chưa nhập mã hồ sơ";
            isValid = false;
          } else {
            projectCodeHSError2018.textContent = "";
          }
          const projectNameHsErrorValue2018 = (document.getElementById("project-name-hs-nam-2018") as HTMLInputElement).value;
          if (projectNameHsErrorValue2018 === "") {
            projectNameHsError2018.textContent = "Chưa nhập tên hồ sơ công trình";
            isValid = false;
          } else {
            projectNameHsError2018.textContent = "";
          }
          const projectLocationNameHsErrorValue2018 = (document.getElementById("project-location-name-hs-nam-2018") as HTMLInputElement).value;
          if (projectLocationNameHsErrorValue2018 === "") {
            projectLocationNameHsError2018.textContent = "Chưa điền địa điểm công trình";
            isValid = false;
          } else {
            projectLocationNameHsError2018.textContent = "";
          }
          const projectLocationHsErrorValueX2018 = (document.getElementById("project-location-x-hs-nam-2018") as HTMLInputElement).value;
          const projectLocationHsErrorValueY2018 = (document.getElementById("project-location-y-hs-nam-2018") as HTMLInputElement).value;
          if (projectLocationHsErrorValueX2018 === "" || projectLocationHsErrorValueY2018 === "") {
            projectLocationHsError2018.textContent = "Chưa nhập tọa độ";
            isValid = false;
          } else {
            projectLocationHsError2018.textContent = "";
          }
          const projectDvlhsErrorValue2018 = (document.getElementById("project-dvlhs-hs-nam-2018") as HTMLInputElement).value;
          if (projectDvlhsErrorValue2018 === "") {
            projectDvlhsError2018.textContent = "Chưa nhập đơn vị lập hồ sơ";
            isValid = false;
          } else {
            projectDvlhsError2018.textContent = "";
          }
          return isValid;
        }

        // Function to validate the input fields
        function validateFormInputs2017() {
          let isValid = true;
          const projectCodeHSErrorValue2017 = (document.getElementById("project-code-hs-nam-2017") as HTMLInputElement).value;
          if (projectCodeHSErrorValue2017 === "") {
            projectCodeHSError2017.textContent = "Chưa nhập mã hồ sơ";
            isValid = false;
          } else {
            projectCodeHSError2017.textContent = "";
          }
          const projectNameHsErrorValue2017 = (document.getElementById("project-name-hs-nam-2017") as HTMLInputElement).value;
          if (projectNameHsErrorValue2017 === "") {
            projectNameHsError2017.textContent = "Chưa nhập tên hồ sơ công trình";
            isValid = false;
          } else {
            projectNameHsError2017.textContent = "";
          }
          const projectLocationNameHsErrorValue2017 = (document.getElementById("project-location-name-hs-nam-2017") as HTMLInputElement).value;
          if (projectLocationNameHsErrorValue2017 === "") {
            projectLocationNameHsError2017.textContent = "Chưa điền địa điểm công trình";
            isValid = false;
          } else {
            projectLocationNameHsError2017.textContent = "";
          }
          const projectLocationHsErrorValueX2017 = (document.getElementById("project-location-x-hs-nam-2017") as HTMLInputElement).value;
          const projectLocationHsErrorValueY2017 = (document.getElementById("project-location-y-hs-nam-2017") as HTMLInputElement).value;
          if (projectLocationHsErrorValueX2017 === "" || projectLocationHsErrorValueY2017 === "") {
            projectLocationHsError2017.textContent = "Chưa nhập tọa độ";
            isValid = false;
          } else {
            projectLocationHsError2017.textContent = "";
          }
          const projectDvlhsErrorValue2017 = (document.getElementById("project-dvlhs-hs-nam-2017") as HTMLInputElement).value;
          if (projectDvlhsErrorValue2017 === "") {
            projectDvlhsError2017.textContent = "Chưa nhập đơn vị lập hồ sơ";
            isValid = false;
          } else {
            projectDvlhsError2017.textContent = "";
          }
          return isValid;
        }


        // Function to save the form data
        function saveFormData2035() {
          if (validateFormInputs2035()) {
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            // Do something with the form data, e.g. send it to the server
            console.log(data);
            closeModal2035();
            clearFormInputs();
          }
        }
        // Function to save the form data
        function saveFormData2034() {
          if (validateFormInputs2034()) {
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            // Do something with the form data, e.g. send it to the server
            console.log(data);
            closeModal2034();
            clearFormInputs();
          }
        }
        // Function to save the form data
        function saveFormData2033() {
          if (validateFormInputs2033()) {
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            // Do something with the form data, e.g. send it to the server
            console.log(data);
            closeModal2033();
            clearFormInputs();
          }
        }
        // Function to save the form data
        function saveFormData2032() {
          if (validateFormInputs2032()) {
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            // Do something with the form data, e.g. send it to the server
            console.log(data);
            closeModal2032();
            clearFormInputs();
          }
        }
        // Function to save the form data
        function saveFormData2031() {
          if (validateFormInputs2031()) {
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            // Do something with the form data, e.g. send it to the server
            console.log(data);
            closeModal2031();
            clearFormInputs();
          }
        }
        // Function to save the form data
        function saveFormData2030() {
          if (validateFormInputs2030()) {
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            // Do something with the form data, e.g. send it to the server
            console.log(data);
            closeModal2030();
            clearFormInputs();
          }
        }
        // Function to save the form data
        function saveFormData2029() {
          if (validateFormInputs2029()) {
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            // Do something with the form data, e.g. send it to the server
            console.log(data);
            closeModal2029();
            clearFormInputs();
          }
        }
        // Function to save the form data
        function saveFormData2028() {
          if (validateFormInputs2028()) {
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            // Do something with the form data, e.g. send it to the server
            console.log(data);
            closeModal2028();
            clearFormInputs();
          }
        }
        // Function to save the form data
        function saveFormData2027() {
          if (validateFormInputs2027()) {
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            // Do something with the form data, e.g. send it to the server
            console.log(data);
            closeModal2027();
            clearFormInputs();
          }
        }
        // Function to save the form data
        function saveFormData2026() {
          if (validateFormInputs2026()) {
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            // Do something with the form data, e.g. send it to the server
            console.log(data);
            closeModal2026();
            clearFormInputs();
          }
        }
        // Function to save the form data
        function saveFormData2025() {
          if (validateFormInputs2025()) {
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            // Do something with the form data, e.g. send it to the server
            console.log(data);
            closeModal2025();
            clearFormInputs();
          }
        }
        // Function to save the form data
        function saveFormData2024() {
          if (validateFormInputs2024()) {
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            // Do something with the form data, e.g. send it to the server
            console.log(data);
            closeModal2024();
            clearFormInputs();
          }
        }
        // Function to save the form data
        function saveFormData2023() {
          if (validateFormInputs2023()) {
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            // Do something with the form data, e.g. send it to the server
            console.log(data);
            closeModal2023();
            clearFormInputs();
          }
        }
        // Function to save the form data
        function saveFormData2022() {
          if (validateFormInputs2022()) {
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            // Do something with the form data, e.g. send it to the server
            console.log(data);
            closeModal2022();
            clearFormInputs();
          }
        }
        // Function to save the form data
        function saveFormData2021() {
          if (validateFormInputs2021()) {
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            // Do something with the form data, e.g. send it to the server
            console.log(data);
            closeModal2021();
            clearFormInputs();
          }
        }
        // Function to save the form data
        function saveFormData2020() {
          if (validateFormInputs2020()) {
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            // Do something with the form data, e.g. send it to the server
            console.log(data);
            closeModal2020();
            clearFormInputs();
          }
        }
        // Function to save the form data
        function saveFormData2019() {
          if (validateFormInputs2019()) {
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            // Do something with the form data, e.g. send it to the server
            console.log(data);
            closeModal2019();
            clearFormInputs();
          }
        }
        // Function to save the form data
        function saveFormData2018() {
          if (validateFormInputs2018()) {
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            // Do something with the form data, e.g. send it to the server
            console.log(data);
            closeModal2018();
            clearFormInputs();
          }
        }
        // Function to save the form data
        function saveFormData2017() {
          if (validateFormInputs2017()) {
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            // Do something with the form data, e.g. send it to the server
            console.log(data);
            closeModal2017();
            clearFormInputs();
          }
        }

        // Function to close the modal
        function closeModal2035() {
          modalNam2035.style.display = "none";
        }
        function closeModal2034() {
          modalNam2034.style.display = "none";
        }
        function closeModal2033() {
          modalNam2033.style.display = "none";
        }
        function closeModal2032() {
          modalNam2032.style.display = "none";
        }
        function closeModal2031() {
          modalNam2031.style.display = "none";
        }
        function closeModal2030() {
          modalNam2030.style.display = "none";
        }
        function closeModal2029() {
          modalNam2029.style.display = "none";
        }
        function closeModal2028() {
          modalNam2028.style.display = "none";
        }
        function closeModal2027() {
          modalNam2027.style.display = "none";
        }
        function closeModal2026() {
          modalNam2026.style.display = "none";
        }
        function closeModal2025() {
          modalNam2025.style.display = "none";
        }
        function closeModal2024() {
          modalNam2024.style.display = "none";
        }
        function closeModal2023() {
          modalNam2023.style.display = "none";
        }
        function closeModal2022() {
          modalNam2022.style.display = "none";
        }
        function closeModal2021() {
          modalNam2021.style.display = "none";
        }
        function closeModal2020() {
          modalNam2020.style.display = "none";
        }
        function closeModal2019() {
          modalNam2019.style.display = "none";
        }
        function closeModal2018() {
          modalNam2018.style.display = "none";
        }
        function closeModal2017() {
          modalNam2017.style.display = "none";
        }

        // When the user clicks on <span> (x), close the modal
        span2035.onclick = function () {
          closeModal2035();
        };
        span2034.onclick = function () {
          closeModal2034();
        };
        span2033.onclick = function () {
          closeModal2033();
        };
        span2032.onclick = function () {
          closeModal2032();
        };
        span2031.onclick = function () {
          closeModal2031();
        };
        span2030.onclick = function () {
          closeModal2030();
        };
        span2029.onclick = function () {
          closeModal2029();
        };
        span2028.onclick = function () {
          closeModal2028();
        };
        span2027.onclick = function () {
          closeModal2027();
        };
        span2026.onclick = function () {
          closeModal2026();
        };
        span2025.onclick = function () {
          closeModal2025();
        };
        span2024.onclick = function () {
          closeModal2024();
        };
        span2023.onclick = function () {
          closeModal2023();
        };
        span2022.onclick = function () {
          closeModal2022();
        };
        span2021.onclick = function () {
          closeModal2021();
        };
        span2020.onclick = function () {
          closeModal2020();
        };
        span2019.onclick = function () {
          closeModal2019();
        };
        span2018.onclick = function () {
          closeModal2018();
        };
        span2017.onclick = function () {
          closeModal2017();
        };

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
          if (event.target === modalNam2035) {
            closeModal2035();
          }
          if (event.target === modalNam2035) {
            closeModal2034();
          }
          if (event.target === modalNam2033) {
            closeModal2033();
          }
          if (event.target === modalNam2032) {
            closeModal2032();
          }
          if (event.target === modalNam2031) {
            closeModal2031();
          }
          if (event.target === modalNam2030) {
            closeModal2030();
          }
          if (event.target === modalNam2029) {
            closeModal2029();
          }
          if (event.target === modalNam2028) {
            closeModal2028();
          }
          if (event.target === modalNam2027) {
            closeModal2027();
          }
          if (event.target === modalNam2026) {
            closeModal2026();
          }
          if (event.target === modalNam2025) {
            closeModal2025();
          }
          if (event.target === modalNam2024) {
            closeModal2024();
          }
          if (event.target === modalNam2023) {
            closeModal2023();
          }
          if (event.target === modalNam2022) {
            closeModal2022();
          }
          if (event.target === modalNam2021) {
            closeModal2021();
          }
          if (event.target === modalNam2020) {
            closeModal2020();
          }
          if (event.target === modalNam2019) {
            closeModal2019();
          }
          if (event.target === modalNam2018) {
            closeModal2018();
          }
          if (event.target === modalNam2017) {
            closeModal2017();
          }
          if (event.target !== functionListNam2035 && event.target !== addNewBtn2035) {
            functionListNam2035.style.display = "none";
          }
          if (event.target !== functionListNam2034 && event.target !== addNewBtn2034) {
            functionListNam2034.style.display = "none";
          }
          if (event.target !== functionListNam2033 && event.target !== addNewBtn2033) {
            functionListNam2033.style.display = "none";
          }
          if (event.target !== functionListNam2032 && event.target !== addNewBtn2032) {
            functionListNam2032.style.display = "none";
          }
          if (event.target !== functionListNam2031 && event.target !== addNewBtn2031) {
            functionListNam2031.style.display = "none";
          }
          if (event.target !== functionListNam2030 && event.target !== addNewBtn2030) {
            functionListNam2030.style.display = "none";
          }
          if (event.target !== functionListNam2029 && event.target !== addNewBtn2029) {
            functionListNam2029.style.display = "none";
          }
          if (event.target !== functionListNam2028 && event.target !== addNewBtn2028) {
            functionListNam2028.style.display = "none";
          }
          if (event.target !== functionListNam2027 && event.target !== addNewBtn2027) {
            functionListNam2027.style.display = "none";
          }
          if (event.target !== functionListNam2026 && event.target !== addNewBtn2026) {
            functionListNam2026.style.display = "none";
          }
          if (event.target !== functionListNam2025 && event.target !== addNewBtn2025) {
            functionListNam2025.style.display = "none";
          }
          if (event.target !== functionListNam2024 && event.target !== addNewBtn2024) {
            functionListNam2024.style.display = "none";
          }
          if (event.target !== functionListNam2023 && event.target !== addNewBtn2023) {
            functionListNam2023.style.display = "none";
          }
          if (event.target !== functionListNam2022 && event.target !== addNewBtn2022) {
            functionListNam2022.style.display = "none";
          }
          if (event.target !== functionListNam2021 && event.target !== addNewBtn2021) {
            functionListNam2021.style.display = "none";
          }
          if (event.target !== functionListNam2020 && event.target !== addNewBtn2020) {
            functionListNam2020.style.display = "none";
          }
          if (event.target !== functionListNam2019 && event.target !== addNewBtn2019) {
            functionListNam2019.style.display = "none";
          }
          if (event.target !== functionListNam2018 && event.target !== addNewBtn2018) {
            functionListNam2018.style.display = "none";
          }
          if (event.target !== functionListNam2017 && event.target !== addNewBtn2017) {
            functionListNam2017.style.display = "none";
          }
        };

        // When the user clicks the save button, save the form data
        saveBtn2035.onclick = function () {
          saveFormData2035();
        };
        saveBtn2034.onclick = function () {
          saveFormData2034();
        };
        saveBtn2033.onclick = function () {
          saveFormData2033();
        };
        saveBtn2032.onclick = function () {
          saveFormData2032();
        };
        saveBtn2031.onclick = function () {
          saveFormData2031();
        };
        saveBtn2030.onclick = function () {
          saveFormData2030();
        };
        saveBtn2029.onclick = function () {
          saveFormData2029();
        };
        saveBtn2028.onclick = function () {
          saveFormData2028();
        };
        saveBtn2027.onclick = function () {
          saveFormData2027();
        };
        saveBtn2026.onclick = function () {
          saveFormData2026();
        };
        saveBtn2025.onclick = function () {
          saveFormData2025();
        };
        saveBtn2024.onclick = function () {
          saveFormData2024();
        };
        saveBtn2023.onclick = function () {
          saveFormData2023();
        };
        saveBtn2022.onclick = function () {
          saveFormData2022();
        };
        saveBtn2021.onclick = function () {
          saveFormData2021();
        };
        saveBtn2020.onclick = function () {
          saveFormData2020();
        };
        saveBtn2019.onclick = function () {
          saveFormData2019();
        };
        saveBtn2018.onclick = function () {
          saveFormData2018();
        };
        saveBtn2017.onclick = function () {
          saveFormData2017();
        };

        // When the user clicks the cancel button, close the modal
        cancelBtn2035.onclick = function () {
          closeModal2035();
        };
        cancelBtn2034.onclick = function () {
          closeModal2034();
        };
        cancelBtn2033.onclick = function () {
          closeModal2033();
        };
        cancelBtn2032.onclick = function () {
          closeModal2032();
        };
        cancelBtn2031.onclick = function () {
          closeModal2031();
        };
        cancelBtn2030.onclick = function () {
          closeModal2030();
        };
        cancelBtn2029.onclick = function () {
          closeModal2029();
        };
        cancelBtn2028.onclick = function () {
          closeModal2028();
        };
        cancelBtn2027.onclick = function () {
          closeModal2027();
        };
        cancelBtn2026.onclick = function () {
          closeModal2026();
        };
        cancelBtn2025.onclick = function () {
          closeModal2025();
        };
        cancelBtn2024.onclick = function () {
          closeModal2024();
        };
        cancelBtn2023.onclick = function () {
          closeModal2023();
        };
        cancelBtn2022.onclick = function () {
          closeModal2022();
        };
        cancelBtn2021.onclick = function () {
          closeModal2021();
        };
        cancelBtn2020.onclick = function () {
          closeModal2020();
        };
        cancelBtn2019.onclick = function () {
          closeModal2019();
        };
        cancelBtn2018.onclick = function () {
          closeModal2018();
        };
        cancelBtn2017.onclick = function () {
          closeModal2017();
        };
        scrollToCurrentYear(); // Cuộn danh sách về năm hiện tại
      }
    });
    function removeSelectedImage2035() {
      var select = document.getElementById('imageFiles2035') as HTMLSelectElement;
      var selected = select.selectedIndex;
      if (selected >= 0) {
        select.remove(selected);
      }
    }

    function updateImageOptions2035() {
      var input = document.getElementById('imageInput2035') as HTMLInputElement;
      var select = document.getElementById('imageFiles2035') as HTMLSelectElement;
      select.innerHTML = '';
      if (!input.files) return;
      for (var i = 0; i < input.files.length; i++) {
        var option = document.createElement('option');
        option.value = input.files[i].name;
        option.text = input.files[i].name;
        select.add(option);
      }
    }

    function removeSelectedImage2034() {
      var select = document.getElementById('imageFiles2034') as HTMLSelectElement;
      var selected = select.selectedIndex;
      if (selected >= 0) {
        select.remove(selected);
      }
    }

    function updateImageOptions2034() {
      var input = document.getElementById('imageInput2034') as HTMLInputElement;
      var select = document.getElementById('imageFiles2034') as HTMLSelectElement;
      select.innerHTML = '';
      if (!input.files) return;
      for (var i = 0; i < input.files.length; i++) {
        var option = document.createElement('option');
        option.value = input.files[i].name;
        option.text = input.files[i].name;
        select.add(option);
      }
    }

    function removeSelectedImage2033() {
      var select = document.getElementById('imageFiles2033') as HTMLSelectElement;
      var selected = select.selectedIndex;
      if (selected >= 0) {
        select.remove(selected);
      }
    }

    function updateImageOptions2033() {
      var input = document.getElementById('imageInput2033') as HTMLInputElement;
      var select = document.getElementById('imageFiles2033') as HTMLSelectElement;
      select.innerHTML = '';
      if (!input.files) return;
      for (var i = 0; i < input.files.length; i++) {
        var option = document.createElement('option');
        option.value = input.files[i].name;
        option.text = input.files[i].name;
        select.add(option);
      }
    }

    function removeSelectedImage2032() {
      var select = document.getElementById('imageFiles2032') as HTMLSelectElement;
      var selected = select.selectedIndex;
      if (selected >= 0) {
        select.remove(selected);
      }
    }

    function updateImageOptions2032() {
      var input = document.getElementById('imageInput2032') as HTMLInputElement;
      var select = document.getElementById('imageFiles2032') as HTMLSelectElement;
      select.innerHTML = '';
      if (!input.files) return;
      for (var i = 0; i < input.files.length; i++) {
        var option = document.createElement('option');
        option.value = input.files[i].name;
        option.text = input.files[i].name;
        select.add(option);
      }
    }

    function removeSelectedImage2031() {
      var select = document.getElementById('imageFiles2031') as HTMLSelectElement;
      var selected = select.selectedIndex;
      if (selected >= 0) {
        select.remove(selected);
      }
    }

    function updateImageOptions2031() {
      var input = document.getElementById('imageInput2031') as HTMLInputElement;
      var select = document.getElementById('imageFiles2031') as HTMLSelectElement;
      select.innerHTML = '';
      if (!input.files) return;
      for (var i = 0; i < input.files.length; i++) {
        var option = document.createElement('option');
        option.value = input.files[i].name;
        option.text = input.files[i].name;
        select.add(option);
      }
    }

    function removeSelectedImage2030() {
      var select = document.getElementById('imageFiles2030') as HTMLSelectElement;
      var selected = select.selectedIndex;
      if (selected >= 0) {
        select.remove(selected);
      }
    }

    function updateImageOptions2030() {
      var input = document.getElementById('imageInput2030') as HTMLInputElement;
      var select = document.getElementById('imageFiles2030') as HTMLSelectElement;
      select.innerHTML = '';
      if (!input.files) return;
      for (var i = 0; i < input.files.length; i++) {
        var option = document.createElement('option');
        option.value = input.files[i].name;
        option.text = input.files[i].name;
        select.add(option);
      }
    }

    function removeSelectedImage2029() {
      var select = document.getElementById('imageFiles2029') as HTMLSelectElement;
      var selected = select.selectedIndex;
      if (selected >= 0) {
        select.remove(selected);
      }
    }

    function updateImageOptions2029() {
      var input = document.getElementById('imageInput2029') as HTMLInputElement;
      var select = document.getElementById('imageFiles2029') as HTMLSelectElement;
      select.innerHTML = '';
      if (!input.files) return;
      for (var i = 0; i < input.files.length; i++) {
        var option = document.createElement('option');
        option.value = input.files[i].name;
        option.text = input.files[i].name;
        select.add(option);
      }
    }

    function removeSelectedImage2028() {
      var select = document.getElementById('imageFiles2028') as HTMLSelectElement;
      var selected = select.selectedIndex;
      if (selected >= 0) {
        select.remove(selected);
      }
    }

    function updateImageOptions2028() {
      var input = document.getElementById('imageInput2028') as HTMLInputElement;
      var select = document.getElementById('imageFiles2028') as HTMLSelectElement;
      select.innerHTML = '';
      if (!input.files) return;
      for (var i = 0; i < input.files.length; i++) {
        var option = document.createElement('option');
        option.value = input.files[i].name;
        option.text = input.files[i].name;
        select.add(option);
      }
    }

    function removeSelectedImage2027() {
      var select = document.getElementById('imageFiles2027') as HTMLSelectElement;
      var selected = select.selectedIndex;
      if (selected >= 0) {
        select.remove(selected);
      }
    }

    function updateImageOptions2027() {
      var input = document.getElementById('imageInput2027') as HTMLInputElement;
      var select = document.getElementById('imageFiles2027') as HTMLSelectElement;
      select.innerHTML = '';
      if (!input.files) return;
      for (var i = 0; i < input.files.length; i++) {
        var option = document.createElement('option');
        option.value = input.files[i].name;
        option.text = input.files[i].name;
        select.add(option);
      }
    }

    function removeSelectedImage2026() {
      var select = document.getElementById('imageFiles2026') as HTMLSelectElement;
      var selected = select.selectedIndex;
      if (selected >= 0) {
        select.remove(selected);
      }
    }

    function updateImageOptions2026() {
      var input = document.getElementById('imageInput2026') as HTMLInputElement;
      var select = document.getElementById('imageFiles2026') as HTMLSelectElement;
      select.innerHTML = '';
      if (!input.files) return;
      for (var i = 0; i < input.files.length; i++) {
        var option = document.createElement('option');
        option.value = input.files[i].name;
        option.text = input.files[i].name;
        select.add(option);
      }
    }

    function removeSelectedImage2025() {
      var select = document.getElementById('imageFiles2025') as HTMLSelectElement;
      var selected = select.selectedIndex;
      if (selected >= 0) {
        select.remove(selected);
      }
    }

    function updateImageOptions2025() {
      var input = document.getElementById('imageInput2025') as HTMLInputElement;
      var select = document.getElementById('imageFiles2025') as HTMLSelectElement;
      select.innerHTML = '';
      if (!input.files) return;
      for (var i = 0; i < input.files.length; i++) {
        var option = document.createElement('option');
        option.value = input.files[i].name;
        option.text = input.files[i].name;
        select.add(option);
      }
    }

    function removeSelectedImage2024() {
      var select = document.getElementById('imageFiles2024') as HTMLSelectElement;
      var selected = select.selectedIndex;
      if (selected >= 0) {
        select.remove(selected);
      }
    }

    function updateImageOptions2024() {
      var input = document.getElementById('imageInput2024') as HTMLInputElement;
      var select = document.getElementById('imageFiles2024') as HTMLSelectElement;
      select.innerHTML = '';
      if (!input.files) return;
      for (var i = 0; i < input.files.length; i++) {
        var option = document.createElement('option');
        option.value = input.files[i].name;
        option.text = input.files[i].name;
        select.add(option);
      }
    }

    function removeSelectedImage2023() {
      var select = document.getElementById('imageFiles2023') as HTMLSelectElement;
      var selected = select.selectedIndex;
      if (selected >= 0) {
        select.remove(selected);
      }
    }

    function updateImageOptions2023() {
      var input = document.getElementById('imageInput2023') as HTMLInputElement;
      var select = document.getElementById('imageFiles2023') as HTMLSelectElement;
      select.innerHTML = '';
      if (!input.files) return;
      for (var i = 0; i < input.files.length; i++) {
        var option = document.createElement('option');
        option.value = input.files[i].name;
        option.text = input.files[i].name;
        select.add(option);
      }
    }

    function removeSelectedImage2022() {
      var select = document.getElementById('imageFiles2022') as HTMLSelectElement;
      var selected = select.selectedIndex;
      if (selected >= 0) {
        select.remove(selected);
      }
    }

    function updateImageOptions2022() {
      var input = document.getElementById('imageInput2022') as HTMLInputElement;
      var select = document.getElementById('imageFiles2022') as HTMLSelectElement;
      select.innerHTML = '';
      if (!input.files) return;
      for (var i = 0; i < input.files.length; i++) {
        var option = document.createElement('option');
        option.value = input.files[i].name;
        option.text = input.files[i].name;
        select.add(option);
      }
    }

    function removeSelectedImage2021() {
      var select = document.getElementById('imageFiles2021') as HTMLSelectElement;
      var selected = select.selectedIndex;
      if (selected >= 0) {
        select.remove(selected);
      }
    }

    function updateImageOptions2021() {
      var input = document.getElementById('imageInput2021') as HTMLInputElement;
      var select = document.getElementById('imageFiles2021') as HTMLSelectElement;
      select.innerHTML = '';
      if (!input.files) return;
      for (var i = 0; i < input.files.length; i++) {
        var option = document.createElement('option');
        option.value = input.files[i].name;
        option.text = input.files[i].name;
        select.add(option);
      }
    }

    function removeSelectedImage2020() {
      var select = document.getElementById('imageFiles2020') as HTMLSelectElement;
      var selected = select.selectedIndex;
      if (selected >= 0) {
        select.remove(selected);
      }
    }

    function updateImageOptions2020() {
      var input = document.getElementById('imageInput2020') as HTMLInputElement;
      var select = document.getElementById('imageFiles2020') as HTMLSelectElement;
      select.innerHTML = '';
      if (!input.files) return;
      for (var i = 0; i < input.files.length; i++) {
        var option = document.createElement('option');
        option.value = input.files[i].name;
        option.text = input.files[i].name;
        select.add(option);
      }
    }

    function removeSelectedImage2019() {
      var select = document.getElementById('imageFiles2019') as HTMLSelectElement;
      var selected = select.selectedIndex;
      if (selected >= 0) {
        select.remove(selected);
      }
    }

    function updateImageOptions2019() {
      var input = document.getElementById('imageInput2019') as HTMLInputElement;
      var select = document.getElementById('imageFiles2019') as HTMLSelectElement;
      select.innerHTML = '';
      if (!input.files) return;
      for (var i = 0; i < input.files.length; i++) {
        var option = document.createElement('option');
        option.value = input.files[i].name;
        option.text = input.files[i].name;
        select.add(option);
      }
    }

    function removeSelectedImage2018() {
      var select = document.getElementById('imageFiles2018') as HTMLSelectElement;
      var selected = select.selectedIndex;
      if (selected >= 0) {
        select.remove(selected);
      }
    }

    function updateImageOptions2018() {
      var input = document.getElementById('imageInput2018') as HTMLInputElement;
      var select = document.getElementById('imageFiles2018') as HTMLSelectElement;
      select.innerHTML = '';
      if (!input.files) return;
      for (var i = 0; i < input.files.length; i++) {
        var option = document.createElement('option');
        option.value = input.files[i].name;
        option.text = input.files[i].name;
        select.add(option);
      }
    }

    function removeSelectedImage2017() {
      var select = document.getElementById('imageFiles2017') as HTMLSelectElement;
      var selected = select.selectedIndex;
      if (selected >= 0) {
        select.remove(selected);
      }
    }

    function updateImageOptions2017() {
      var input = document.getElementById('imageInput2017') as HTMLInputElement;
      var select = document.getElementById('imageFiles2017') as HTMLSelectElement;
      select.innerHTML = '';
      if (!input.files) return;
      for (var i = 0; i < input.files.length; i++) {
        var option = document.createElement('option');
        option.value = input.files[i].name;
        option.text = input.files[i].name;
        select.add(option);
      }
    }
    // Thêm mã JavaScript để xử lý việc cuộn danh sách bài hát tại đây

    // Thay đổi trong phần JavaScript
    scrollLeftButton.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex -= visibleSongs;
        if (currentIndex < 0) {
          currentIndex = 0;
        }
        updateCarousel();
      }
    });

    scrollRightButton.addEventListener('click', () => {
      if (currentIndex < songList.childElementCount - visibleSongs) {
        currentIndex += visibleSongs;
        if (currentIndex > songList.childElementCount - visibleSongs) {
          currentIndex = songList.childElementCount - visibleSongs;
        }
        updateCarousel();
      }
    });

    function updateCarousel() {
      const transformValue = -currentIndex * 29.2;
      (songList as HTMLElement).style.transform = `translateX(${transformValue}vh)`;

      // Cập nhật trạng thái nút mũi tên
      scrollLeftButton.classList.toggle('hidden', currentIndex === 0);
      scrollLeftButton.classList.toggle('visible', currentIndex !== 0);
      scrollRightButton.classList.toggle('hidden', currentIndex >= songList.childElementCount - visibleSongs);
      scrollRightButton.classList.toggle('visible', currentIndex < songList.childElementCount - visibleSongs);
    }
    // Thay đổi trong phần JavaScript
    scrollLeftButton1.addEventListener('click', () => {
      if (currentIndex1 > 0) {
        currentIndex1 -= visibleSongs1;
        if (currentIndex1 < 0) {
          currentIndex1 = 0;
        }
        updateCarousel1();
      }
    });

    scrollRightButton1.addEventListener('click', () => {
      if (currentIndex1 < songList1.childElementCount - visibleSongs1) {
        currentIndex1 += visibleSongs1;
        if (currentIndex1 > songList1.childElementCount - visibleSongs1) {
          currentIndex1 = songList1.childElementCount - visibleSongs1;
        }
        updateCarousel1();
      }
    });

    function updateCarousel1() {
      const transformValue = -currentIndex1 * 29.3;
      (songList1 as HTMLElement).style.transform = `translateX(${transformValue}vh)`;

      // Cập nhật trạng thái nút mũi tên
      scrollLeftButton1.classList.toggle('hidden', currentIndex1 === 0);
      scrollLeftButton1.classList.toggle('visible', currentIndex1 !== 0);
      scrollRightButton1.classList.toggle('hidden', currentIndex1 >= songList1.childElementCount - visibleSongs1);
      scrollRightButton1.classList.toggle('visible', currentIndex1 < songList1.childElementCount - visibleSongs1);
    }

    document.addEventListener("DOMContentLoaded", function () {
      var optionSelect = document.getElementById("select-tab") as HTMLSelectElement;

      optionSelect.addEventListener("change", function () {
        var selectedValue = optionSelect.value;
        var div1 = document.getElementById("tab-nam-hs") as HTMLElement;
        var div2 = document.getElementById("tab-nam-hs-1") as HTMLElement;

        if (selectedValue === "tab-nam-hs") {
          div1.style.display = "flex";
          div2.style.display = "none";
        } else if (selectedValue === "tab-nam-hs-1") {
          div1.style.display = "none";
          div2.style.display = "flex";
        }
      });
    });




  }
}
