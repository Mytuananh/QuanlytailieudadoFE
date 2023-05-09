import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Trang3btabmodService {

  constructor() { }

  initTrang3btabmod() {
    /*---------------------------------------------Modal------------------------------------------------------------------*/
    const addNewBtn2035 = document.getElementById('addNewNam2035')!;
    const addNewBtn2034 = document.getElementById('addNewNam2034')!;
    const addNewBtn2033 = document.getElementById('addNewNam2033')!;
    const addNewBtn2032 = document.getElementById('addNewNam2032')!;
    const addNewBtn2031 = document.getElementById('addNewNam2031')!;
    const addNewBtn2030 = document.getElementById('addNewNam2030')!;
    const addNewBtn2029 = document.getElementById('addNewNam2029')!;
    const addNewBtn2028 = document.getElementById('addNewNam2028')!;
    const addNewBtn2027 = document.getElementById('addNewNam2027')!;
    const addNewBtn2026 = document.getElementById('addNewNam2026')!;
    const addNewBtn2025 = document.getElementById('addNewNam2025')!;
    const addNewBtn2024 = document.getElementById('addNewNam2024')!;
    const addNewBtn2023 = document.getElementById('addNewNam2023')!;
    const addNewBtn2022 = document.getElementById('addNewNam2022')!;
    const addNewBtn2021 = document.getElementById('addNewNam2021')!;
    const addNewBtn2020 = document.getElementById('addNewNam2020')!;
    const addNewBtn2019 = document.getElementById('addNewNam2019')!;
    const addNewBtn2018 = document.getElementById('addNewNam2018')!;
    const addNewBtn2017 = document.getElementById('addNewNam2017')!;


    const functionListNam2035 = document.getElementById('functionListNam2035')!;
    const functionListNam2034 = document.getElementById('functionListNam2034')!;
    const functionListNam2033 = document.getElementById('functionListNam2033')!;
    const functionListNam2032 = document.getElementById('functionListNam2032')!;
    const functionListNam2031 = document.getElementById('functionListNam2031')!;
    const functionListNam2030 = document.getElementById('functionListNam2030')!;
    const functionListNam2029 = document.getElementById('functionListNam2029')!;
    const functionListNam2028 = document.getElementById('functionListNam2028')!;
    const functionListNam2027 = document.getElementById('functionListNam2027')!;
    const functionListNam2026 = document.getElementById('functionListNam2026')!;
    const functionListNam2025 = document.getElementById('functionListNam2025')!;
    const functionListNam2024 = document.getElementById('functionListNam2024')!;
    const functionListNam2023 = document.getElementById('functionListNam2023')!;
    const functionListNam2022 = document.getElementById('functionListNam2022')!;
    const functionListNam2021 = document.getElementById('functionListNam2021')!;
    const functionListNam2020 = document.getElementById('functionListNam2020')!;
    const functionListNam2019 = document.getElementById('functionListNam2019')!;
    const functionListNam2018 = document.getElementById('functionListNam2018')!;
    const functionListNam2017 = document.getElementById('functionListNam2017')!;


    const modalNam2035 = document.getElementById('myModalNam2035')!;
    const modalNam2034 = document.getElementById('myModalNam2034')!;
    const modalNam2033 = document.getElementById('myModalNam2033')!;
    const modalNam2032 = document.getElementById('myModalNam2032')!;
    const modalNam2031 = document.getElementById('myModalNam2031')!;
    const modalNam2030 = document.getElementById('myModalNam2030')!;
    const modalNam2029 = document.getElementById('myModalNam2029')!;
    const modalNam2028 = document.getElementById('myModalNam2028')!;
    const modalNam2027 = document.getElementById('myModalNam2027')!;
    const modalNam2026 = document.getElementById('myModalNam2026')!;
    const modalNam2025 = document.getElementById('myModalNam2025')!;
    const modalNam2024 = document.getElementById('myModalNam2024')!;
    const modalNam2023 = document.getElementById('myModalNam2023')!;
    const modalNam2022 = document.getElementById('myModalNam2022')!;
    const modalNam2021 = document.getElementById('myModalNam2021')!;
    const modalNam2020 = document.getElementById('myModalNam2020')!;
    const modalNam2019 = document.getElementById('myModalNam2019')!;
    const modalNam2018 = document.getElementById('myModalNam2018')!;
    const modalNam2017 = document.getElementById('myModalNam2017')!;


    const span2035 = document.getElementsByClassName("close2035")[0]!;
    const span2034 = document.getElementsByClassName("close2034")[0]!;
    const span2033 = document.getElementsByClassName("close2033")[0]!;
    const span2032 = document.getElementsByClassName("close2032")[0]!;
    const span2031 = document.getElementsByClassName("close2031")[0]!;
    const span2030 = document.getElementsByClassName("close2030")[0]!;
    const span2029 = document.getElementsByClassName("close2029")[0]!;
    const span2028 = document.getElementsByClassName("close2028")[0]!;
    const span2027 = document.getElementsByClassName("close2027")[0]!;
    const span2026 = document.getElementsByClassName("close2026")[0]!;
    const span2025 = document.getElementsByClassName("close2025")[0]!;
    const span2024 = document.getElementsByClassName("close2024")[0]!;
    const span2023 = document.getElementsByClassName("close2023")[0]!;
    const span2022 = document.getElementsByClassName("close2022")[0]!;
    const span2021 = document.getElementsByClassName("close2021")[0]!;
    const span2020 = document.getElementsByClassName("close2020")[0]!;
    const span2019 = document.getElementsByClassName("close2019")[0]!;
    const span2018 = document.getElementsByClassName("close2018")[0]!;
    const span2017 = document.getElementsByClassName("close2017")[0]!;


    // Get the buttons to save and cancel changes
    const cancelBtn2035 = document.getElementById("cancelBtn-hs-nam-2035")!;
    const cancelBtn2034 = document.getElementById("cancelBtn-hs-nam-2034")!;
    const cancelBtn2033 = document.getElementById("cancelBtn-hs-nam-2033")!;
    const cancelBtn2032 = document.getElementById("cancelBtn-hs-nam-2032")!;
    const cancelBtn2031 = document.getElementById("cancelBtn-hs-nam-2031")!;
    const cancelBtn2030 = document.getElementById("cancelBtn-hs-nam-2030")!;
    const cancelBtn2029 = document.getElementById("cancelBtn-hs-nam-2029")!;
    const cancelBtn2028 = document.getElementById("cancelBtn-hs-nam-2028")!;
    const cancelBtn2027 = document.getElementById("cancelBtn-hs-nam-2027")!;
    const cancelBtn2026 = document.getElementById("cancelBtn-hs-nam-2026")!;
    const cancelBtn2025 = document.getElementById("cancelBtn-hs-nam-2025")!;
    const cancelBtn2024 = document.getElementById("cancelBtn-hs-nam-2024")!;
    const cancelBtn2023 = document.getElementById("cancelBtn-hs-nam-2023")!;
    const cancelBtn2022 = document.getElementById("cancelBtn-hs-nam-2022")!;
    const cancelBtn2021 = document.getElementById("cancelBtn-hs-nam-2021")!;
    const cancelBtn2020 = document.getElementById("cancelBtn-hs-nam-2020")!;
    const cancelBtn2019 = document.getElementById("cancelBtn-hs-nam-2019")!;
    const cancelBtn2018 = document.getElementById("cancelBtn-hs-nam-2018")!;
    const cancelBtn2017 = document.getElementById("cancelBtn-hs-nam-2017")!;


    const saveBtn2035 = document.getElementById("saveBtn1-hs-nam-2035")!;
    const saveBtn2034 = document.getElementById("saveBtn1-hs-nam-2034")!;
    const saveBtn2033 = document.getElementById("saveBtn1-hs-nam-2033")!;
    const saveBtn2032 = document.getElementById("saveBtn1-hs-nam-2032")!;
    const saveBtn2031 = document.getElementById("saveBtn1-hs-nam-2031")!;
    const saveBtn2030 = document.getElementById("saveBtn1-hs-nam-2030")!;
    const saveBtn2029 = document.getElementById("saveBtn1-hs-nam-2029")!;
    const saveBtn2028 = document.getElementById("saveBtn1-hs-nam-2028")!;
    const saveBtn2027 = document.getElementById("saveBtn1-hs-nam-2027")!;
    const saveBtn2026 = document.getElementById("saveBtn1-hs-nam-2026")!;
    const saveBtn2025 = document.getElementById("saveBtn1-hs-nam-2025")!;
    const saveBtn2024 = document.getElementById("saveBtn1-hs-nam-2024")!;
    const saveBtn2023 = document.getElementById("saveBtn1-hs-nam-2023")!;
    const saveBtn2022 = document.getElementById("saveBtn1-hs-nam-2022")!;
    const saveBtn2021 = document.getElementById("saveBtn1-hs-nam-2021")!;
    const saveBtn2020 = document.getElementById("saveBtn1-hs-nam-2020")!;
    const saveBtn2019 = document.getElementById("saveBtn1-hs-nam-2019")!;
    const saveBtn2018 = document.getElementById("saveBtn1-hs-nam-2018")!;
    const saveBtn2017 = document.getElementById("saveBtn1-hs-nam-2017")!;


    // Get the form and all input fields
    const form = document.querySelector("form")!;
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


    const projectCodeHSError2035 = document.getElementById("project-code-error-hs-nam-2035")!;
    const projectNameHsError2035 = document.getElementById("project-name-error-hs-nam-2035")!;
    const projectLocationNameHsError2035 = document.getElementById("project-location-name-error-hs-nam-2035")!;
    const projectLocationHsError2035 = document.getElementById("project-location-error-hs-nam-2035")!;
    const projectDvlhsError2035 = document.getElementById("project-dvlhs-error-hs-nam-2035")!;

    const projectCodeHSError2034 = document.getElementById("project-code-error-hs-nam-2034")!;
    const projectNameHsError2034 = document.getElementById("project-name-error-hs-nam-2034")!;
    const projectLocationNameHsError2034 = document.getElementById("project-location-name-error-hs-nam-2034")!;
    const projectLocationHsError2034 = document.getElementById("project-location-error-hs-nam-2034")!;
    const projectDvlhsError2034 = document.getElementById("project-dvlhs-error-hs-nam-2034")!;

    const projectCodeHSError2033 = document.getElementById("project-code-error-hs-nam-2033")!;
    const projectNameHsError2033 = document.getElementById("project-name-error-hs-nam-2033")!;
    const projectLocationNameHsError2033 = document.getElementById("project-location-name-error-hs-nam-2033")!;
    const projectLocationHsError2033 = document.getElementById("project-location-error-hs-nam-2033")!;
    const projectDvlhsError2033 = document.getElementById("project-dvlhs-error-hs-nam-2033")!;

    const projectCodeHSError2032 = document.getElementById("project-code-error-hs-nam-2032")!;
    const projectNameHsError2032 = document.getElementById("project-name-error-hs-nam-2032")!;
    const projectLocationNameHsError2032 = document.getElementById("project-location-name-error-hs-nam-2032")!;
    const projectLocationHsError2032 = document.getElementById("project-location-error-hs-nam-2032")!;
    const projectDvlhsError2032 = document.getElementById("project-dvlhs-error-hs-nam-2032")!;

    const projectCodeHSError2031 = document.getElementById("project-code-error-hs-nam-2031")!;
    const projectNameHsError2031 = document.getElementById("project-name-error-hs-nam-2031")!;
    const projectLocationNameHsError2031 = document.getElementById("project-location-name-error-hs-nam-2031")!;
    const projectLocationHsError2031 = document.getElementById("project-location-error-hs-nam-2031")!;
    const projectDvlhsError2031 = document.getElementById("project-dvlhs-error-hs-nam-2031")!;

    const projectCodeHSError2030 = document.getElementById("project-code-error-hs-nam-2030")!;
    const projectNameHsError2030 = document.getElementById("project-name-error-hs-nam-2030")!;
    const projectLocationNameHsError2030 = document.getElementById("project-location-name-error-hs-nam-2030")!;
    const projectLocationHsError2030 = document.getElementById("project-location-error-hs-nam-2030")!;
    const projectDvlhsError2030 = document.getElementById("project-dvlhs-error-hs-nam-2030")!;

    const projectCodeHSError2029 = document.getElementById("project-code-error-hs-nam-2029")!;
    const projectNameHsError2029 = document.getElementById("project-name-error-hs-nam-2029")!;
    const projectLocationNameHsError2029 = document.getElementById("project-location-name-error-hs-nam-2029")!;
    const projectLocationHsError2029 = document.getElementById("project-location-error-hs-nam-2029")!;
    const projectDvlhsError2029 = document.getElementById("project-dvlhs-error-hs-nam-2029")!;

    const projectCodeHSError2028 = document.getElementById("project-code-error-hs-nam-2028")!;
    const projectNameHsError2028 = document.getElementById("project-name-error-hs-nam-2028")!;
    const projectLocationNameHsError2028 = document.getElementById("project-location-name-error-hs-nam-2028")!;
    const projectLocationHsError2028 = document.getElementById("project-location-error-hs-nam-2028")!;
    const projectDvlhsError2028 = document.getElementById("project-dvlhs-error-hs-nam-2028")!;

    const projectCodeHSError2027 = document.getElementById("project-code-error-hs-nam-2027")!;
    const projectNameHsError2027 = document.getElementById("project-name-error-hs-nam-2027")!;
    const projectLocationNameHsError2027 = document.getElementById("project-location-name-error-hs-nam-2027")!;
    const projectLocationHsError2027 = document.getElementById("project-location-error-hs-nam-2027")!;
    const projectDvlhsError2027 = document.getElementById("project-dvlhs-error-hs-nam-2027")!;

    const projectCodeHSError2026 = document.getElementById("project-code-error-hs-nam-2026")!;
    const projectNameHsError2026 = document.getElementById("project-name-error-hs-nam-2026")!;
    const projectLocationNameHsError2026 = document.getElementById("project-location-name-error-hs-nam-2026")!;
    const projectLocationHsError2026 = document.getElementById("project-location-error-hs-nam-2026")!;
    const projectDvlhsError2026 = document.getElementById("project-dvlhs-error-hs-nam-2026")!;

    const projectCodeHSError2025 = document.getElementById("project-code-error-hs-nam-2025")!;
    const projectNameHsError2025 = document.getElementById("project-name-error-hs-nam-2025")!;
    const projectLocationNameHsError2025 = document.getElementById("project-location-name-error-hs-nam-2025")!;
    const projectLocationHsError2025 = document.getElementById("project-location-error-hs-nam-2025")!;
    const projectDvlhsError2025 = document.getElementById("project-dvlhs-error-hs-nam-2025")!;

    const projectCodeHSError2024 = document.getElementById("project-code-error-hs-nam-2024")!;
    const projectNameHsError2024 = document.getElementById("project-name-error-hs-nam-2024")!;
    const projectLocationNameHsError2024 = document.getElementById("project-location-name-error-hs-nam-2024")!;
    const projectLocationHsError2024 = document.getElementById("project-location-error-hs-nam-2024")!;
    const projectDvlhsError2024 = document.getElementById("project-dvlhs-error-hs-nam-2024")!;

    const projectCodeHSError2023 = document.getElementById("project-code-error-hs-nam-2023")!;
    const projectNameHsError2023 = document.getElementById("project-name-error-hs-nam-2023")!;
    const projectLocationNameHsError2023 = document.getElementById("project-location-name-error-hs-nam-2023")!;
    const projectLocationHsError2023 = document.getElementById("project-location-error-hs-nam-2023")!;
    const projectDvlhsError2023 = document.getElementById("project-dvlhs-error-hs-nam-2023")!;

    const projectCodeHSError2022 = document.getElementById("project-code-error-hs-nam-2022")!;
    const projectNameHsError2022 = document.getElementById("project-name-error-hs-nam-2022")!;
    const projectLocationNameHsError2022 = document.getElementById("project-location-name-error-hs-nam-2022")!;
    const projectLocationHsError2022 = document.getElementById("project-location-error-hs-nam-2022")!;
    const projectDvlhsError2022 = document.getElementById("project-dvlhs-error-hs-nam-2022")!;

    const projectCodeHSError2021 = document.getElementById("project-code-error-hs-nam-2021")!;
    const projectNameHsError2021 = document.getElementById("project-name-error-hs-nam-2021")!;
    const projectLocationNameHsError2021 = document.getElementById("project-location-name-error-hs-nam-2021")!;
    const projectLocationHsError2021 = document.getElementById("project-location-error-hs-nam-2021")!;
    const projectDvlhsError2021 = document.getElementById("project-dvlhs-error-hs-nam-2021")!;

    const projectCodeHSError2020 = document.getElementById("project-code-error-hs-nam-2020")!;
    const projectNameHsError2020 = document.getElementById("project-name-error-hs-nam-2020")!;
    const projectLocationNameHsError2020 = document.getElementById("project-location-name-error-hs-nam-2020")!;
    const projectLocationHsError2020 = document.getElementById("project-location-error-hs-nam-2020")!;
    const projectDvlhsError2020 = document.getElementById("project-dvlhs-error-hs-nam-2020")!;

    const projectCodeHSError2019 = document.getElementById("project-code-error-hs-nam-2019")!;
    const projectNameHsError2019 = document.getElementById("project-name-error-hs-nam-2019")!;
    const projectLocationNameHsError2019 = document.getElementById("project-location-name-error-hs-nam-2019")!;
    const projectLocationHsError2019 = document.getElementById("project-location-error-hs-nam-2019")!;
    const projectDvlhsError2019 = document.getElementById("project-dvlhs-error-hs-nam-2019")!;

    const projectCodeHSError2018 = document.getElementById("project-code-error-hs-nam-2018")!;
    const projectNameHsError2018 = document.getElementById("project-name-error-hs-nam-2018")!;
    const projectLocationNameHsError2018 = document.getElementById("project-location-name-error-hs-nam-2018")!;
    const projectLocationHsError2018 = document.getElementById("project-location-error-hs-nam-2018")!;
    const projectDvlhsError2018 = document.getElementById("project-dvlhs-error-hs-nam-2018")!;

    const projectCodeHSError2017 = document.getElementById("project-code-error-hs-nam-2017")!;
    const projectNameHsError2017 = document.getElementById("project-name-error-hs-nam-2017")!;
    const projectLocationNameHsError2017 = document.getElementById("project-location-name-error-hs-nam-2017")!;
    const projectLocationHsError2017 = document.getElementById("project-location-error-hs-nam-2017")!;
    const projectDvlhsError2017 = document.getElementById("project-dvlhs-error-hs-nam-2017")!;

    // Function to clear all input fields in the form
    function clearFormInputs() {
      inputFields.forEach((field) => {
        (field as HTMLInputElement).value = "";
      });
    }

    // Function to validate the input fields
    function validateFormInputs2035() {
      let isValid = true;
      const projectCodeHSErrorValue2035 = (document.getElementById("project-code-hs-nam-2035")! as HTMLInputElement).value;
      if (projectCodeHSErrorValue2035 === "") {
        projectCodeHSError2035.textContent = "Chưa nhập mã hồ sơ";
        isValid = false;
      } else {
        projectCodeHSError2035.textContent = "";
      }
      const projectNameHsErrorValue2035 = (document.getElementById("project-name-hs-nam-2035")! as HTMLInputElement).value;
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
    (span2035 as HTMLElement).onclick = function () {
      closeModal2035();
    };
    (span2034 as HTMLElement).onclick = function () {
      closeModal2034();
    };
    (span2033 as HTMLElement).onclick = function () {
      closeModal2033();
    };
    (span2032 as HTMLElement).onclick = function () {
      closeModal2032();
    };
    (span2031 as HTMLElement).onclick = function () {
      closeModal2031();
    };
    (span2030 as HTMLElement).onclick = function () {
      closeModal2030();
    };
    (span2029 as HTMLElement).onclick = function () {
      closeModal2029();
    };
    (span2028 as HTMLElement).onclick = function () {
      closeModal2028();
    };
    (span2027 as HTMLElement).onclick = function () {
      closeModal2027();
    };
    (span2026 as HTMLElement).onclick = function () {
      closeModal2026();
    };
    (span2025 as HTMLElement).onclick = function () {
      closeModal2025();
    };
    (span2024 as HTMLElement).onclick = function () {
      closeModal2024();
    };
    (span2023 as HTMLElement).onclick = function () {
      closeModal2023();
    };
    (span2022 as HTMLElement).onclick = function () {
      closeModal2022();
    };
    (span2021 as HTMLElement).onclick = function () {
      closeModal2021();
    };
    (span2020 as HTMLElement).onclick = function () {
      closeModal2020();
    };
    (span2019 as HTMLElement).onclick = function () {
      closeModal2019();
    };
    (span2018 as HTMLElement).onclick = function () {
      closeModal2018();
    };
    (span2017 as HTMLElement).onclick = function () {
      closeModal2017();
    };

    // When the user clicks anywhere outside of the modal, close it
    (window).onclick = function (event) {
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
    (saveBtn2035 as HTMLElement).onclick = function () {
      saveFormData2035();
    };
    (saveBtn2034 as HTMLElement).onclick = function () {
      saveFormData2034();
    };
    (saveBtn2033 as HTMLElement).onclick = function () {
      saveFormData2033();
    };
    (saveBtn2032 as HTMLElement).onclick = function () {
      saveFormData2032();
    };
    (saveBtn2031 as HTMLElement).onclick = function () {
      saveFormData2031();
    };
    (saveBtn2030 as HTMLElement).onclick = function () {
      saveFormData2030();
    };
    (saveBtn2029 as HTMLElement).onclick = function () {
      saveFormData2029();
    };
    (saveBtn2028 as HTMLElement).onclick = function () {
      saveFormData2028();
    };
    (saveBtn2027 as HTMLElement).onclick = function () {
      saveFormData2027();
    };
    (saveBtn2026 as HTMLElement).onclick = function () {
      saveFormData2026();
    };
    (saveBtn2025 as HTMLElement).onclick = function () {
      saveFormData2025();
    };
    (saveBtn2024 as HTMLElement).onclick = function () {
      saveFormData2024();
    };
    (saveBtn2023 as HTMLElement).onclick = function () {
      saveFormData2023();
    };
    (saveBtn2022 as HTMLElement).onclick = function () {
      saveFormData2022();
    };
    (saveBtn2021 as HTMLElement).onclick = function () {
      saveFormData2021();
    };
    (saveBtn2020 as HTMLElement).onclick = function () {
      saveFormData2020();
    };
    (saveBtn2019 as HTMLElement).onclick = function () {
      saveFormData2019();
    };
    (saveBtn2018 as HTMLElement).onclick = function () {
      saveFormData2018();
    };
    (saveBtn2017 as HTMLElement).onclick = function () {
      saveFormData2017();
    };

    // When the user clicks the cancel button, close the modal
    cancelBtn2035.onclick = function () {
      closeModal2035();
    };
    cancelBtn2034.onclick = function () {
      closeModal2034();
    };
    (cancelBtn2033 as HTMLElement).onclick = function () {
      closeModal2033();
    };
    (cancelBtn2032 as HTMLElement).onclick = function () {
      closeModal2032();
    };
    (cancelBtn2031 as HTMLElement).onclick = function () {
      closeModal2031();
    };
    (cancelBtn2030 as HTMLElement).onclick = function () {
      closeModal2030();
    };
    (cancelBtn2029 as HTMLElement).onclick = function () {
      closeModal2029();
    };
    (cancelBtn2028 as HTMLElement).onclick = function () {
      closeModal2028();
    };
    (cancelBtn2027 as HTMLElement).onclick = function () {
      closeModal2027();
    };
    (cancelBtn2026 as HTMLElement).onclick = function () {
      closeModal2026();
    };
    (cancelBtn2025 as HTMLElement).onclick = function () {
      closeModal2025();
    };
    (cancelBtn2024 as HTMLElement).onclick = function () {
      closeModal2024();
    };
    (cancelBtn2023 as HTMLElement).onclick = function () {
      closeModal2023();
    };
    (cancelBtn2022 as HTMLElement).onclick = function () {
      closeModal2022();
    };
    (cancelBtn2021 as HTMLElement).onclick = function () {
      closeModal2021();
    };
    (cancelBtn2020 as HTMLElement).onclick = function () {
      closeModal2020();
    };
    (cancelBtn2019 as HTMLElement).onclick = function () {
      closeModal2019();
    };
    (cancelBtn2018 as HTMLElement).onclick = function () {
      closeModal2018();
    };
    (cancelBtn2017 as HTMLElement).onclick = function () {
      closeModal2017();
    };

    function removeSelectedImage2035() {
      var select = (document.getElementById('imageFiles2035')! as HTMLSelectElement);
      var selected = select.selectedIndex;
      if (selected >= 0) {
        select.remove(selected);
      }
    }

    function updateImageOptions2035() {
      var input = document.getElementById('imageInput2035')! as HTMLInputElement;
      var select = (document.getElementById('imageFiles2035') as HTMLSelectElement);
      select.innerHTML = '';
      if (!input.files) return;
      for (var i = 0; i < input.files!.length; i++) {
        var option = document.createElement('option');
        option.value = input.files![i].name;
        option.text = input.files![i].name;
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

  }
}
