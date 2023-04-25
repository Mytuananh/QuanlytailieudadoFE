import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Modaltrang3Service {

  constructor() { }

  initModalTrang3() {
    console.log('11 modal');
    const addNewBtn1 = document.getElementById('addNewBtn-1')!;
    const functionList1 = document.getElementById('functionList-1')!;
    const modal2 = document.getElementById('myModal-1')!;
    const modal3 = document.getElementById('myModal2')!;
    const modal10 = document.getElementById('myModal6')!;
    // Get the <span> element that closes the modal
    const span = document.getElementsByClassName("close")[0]! as HTMLElement;
    const span1 = document.getElementsByClassName("close-1")[0]! as HTMLElement;
    const span10 = document.getElementsByClassName("close-10")[0]! as HTMLElement;
    // Get the buttons to save and cancel changes
    const saveBtn2 = document.getElementById("saveBtn-1")!; //
    const cancelBtn2 = document.getElementById("cancelBtn-1")!; //
    const saveBtn3 = document.getElementById("saveBtn1-2")!;//
    const cancelBtn3 = document.getElementById("cancelBtn1-2")!;//
    const cancelBtnHs = document.getElementById("cancelBtn-hs")!;//
    const saveBtnHS = document.getElementById("saveBtn1-hs")!;//
    // Get the form and all input fields
    const form = document.querySelector("form")!;
    const inputFields = form.querySelectorAll("input, select")!;

    // Hide the function list initially
    functionList1.style.display = "none";
    // Show the function list when addNewBtn is clicked and hide the modal
    console.log('newBtn1 addEL 100');
    addNewBtn1.addEventListener('click', function () {
      console.log('newBtn1 them moi');
      functionList1.style.display = "block";
      modal2.style.display = "none";
      modal3.style.display = "none";
      modal10.style.display = "none";
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

    // Get the error message elements
    const projectCodeHSError = document.getElementById("project-code-error-hs")!;//
    const projectNameHsError = document.getElementById("project-name-error-hs")!;//
    const projectLocationNameHsError = document.getElementById("project-location-name-error-hs")!;//
    const projectLocationHsError = document.getElementById("project-location-error-hs")!;//
    const projectDvlhsError = document.getElementById("project-dvlhs-error-hs")!;//

    const projectCodeError1 = document.getElementById("project-code-error-1")!;//
    const projectNameError1 = document.getElementById("project-name-error-1")!;//
    const projectLocationError1 = document.getElementById("project-location-error-1")!;//
    const projectHistoryError1 = document.getElementById("project-history-error-1")!;//
    // Function to clear all input fields in the form
    function clearFormInputs() {
      inputFields.forEach((field) => {
        (field as HTMLInputElement).value = "";
      });
    }

    // Function to validate the input fields
    function validateFormInputs1() {
      let isValid = true;
      const projectCodeValue1 = (document.getElementById("project-code-num-1")! as HTMLInputElement).value;
      if (projectCodeValue1 === "") {
        projectCodeError1.textContent = "Chưa nhập mã công trình!";
        isValid = false;
      } else {
        projectCodeError1.textContent = "";
      }

      const projectNameValue1 = (document.getElementById("project-name-1")! as HTMLInputElement).value;
      if (projectNameValue1 === "") {
        projectNameError1.textContent = "Chưa điền tên công trình";
        isValid = false;
      } else {
        projectNameError1.textContent = "";
      }
      const projectLocationNameValue1 = (document.getElementById(
        "project-location-name-1"
      )! as HTMLInputElement).value;
      const projectLocationXValue1 = (document.getElementById(
        "project-location-x-1"
      )! as HTMLInputElement).value;
      const projectLocationYValue1 = (document.getElementById(
        "project-location-y-1"
      )! as HTMLInputElement).value;

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
      )! as HTMLInputElement).value;

      if (
        projectHistoryValue1 === ""
      ) {
        projectHistoryError1.textContent = "Chưa nhập thông tin lịch sử xây dựng công trình";
        isValid = false;
      } else {
        projectHistoryError1.textContent = "";
      }
      const projectCodeHSErrorValue = (document.getElementById("project-code-hs")! as HTMLInputElement).value;
      if (projectCodeHSErrorValue === "") {
        projectCodeHSError.textContent = "Chưa nhập mã hồ sơ";
        isValid = false;
      } else {
        projectCodeHSError.textContent = "";
      }
      const projectNameHsErrorValue = (document.getElementById("project-name-hs")! as HTMLInputElement).value; //
      if (projectNameHsErrorValue === "") {
        projectNameHsError.textContent = "Chưa nhập tên hồ sơ công trình";
        isValid = false;
      } else {
        projectNameHsError.textContent = "";
      }
      const projectLocationNameHsErrorValue = (document.getElementById("project-location-name-hs")! as HTMLInputElement).value;
      if (projectLocationNameHsErrorValue === "") {
        projectLocationNameHsError.textContent = "Chưa điền địa điểm công trình";
        isValid = false;
      } else {
        projectLocationNameHsError.textContent = "";
      }
      const projectLocationHsErrorValueX = (document.getElementById("project-location-x-hs")! as HTMLInputElement).value;
      const projectLocationHsErrorValueY = (document.getElementById("project-location-y-hs")! as HTMLInputElement).value;
      if (projectLocationHsErrorValueX === "" || projectLocationHsErrorValueY === "") {
        projectLocationHsError.textContent = "Chưa nhập tọa độ";
        isValid = false;
      } else {
        projectLocationHsError.textContent = "";
      }
      const projectDvlhsErrorValue = (document.getElementById("project-dvlhs-hs")! as HTMLInputElement).value;
      if (projectDvlhsErrorValue === "") {
        projectDvlhsError.textContent = "Chưa nhập đơn vị lập hồ sơ";
        isValid = false;
      } else {
        projectDvlhsError.textContent = "";
      }
      return isValid;
    }

    // Function to save the form data
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

    // Function to close the modal
    function closeModal1() {
      modal2.style.display = "none";
      modal3.style.display = "none";
      modal10.style.display = "none";
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
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target === modal2) {
        closeModal1();
      }
      if (event.target === modal3) {
        closeModal1();
      }
      if (event.target === modal10) {
        closeModal1();
      }
      if (event.target !== functionList1 && event.target !== addNewBtn1) {
        functionList1.style.display = "none";
      }
    };

    // When the user clicks the save button, save the form data
    saveBtn2.onclick = function () {
      saveFormData1();
    }
    saveBtn3.onclick = function () {
      saveFormData1();
    }
    saveBtnHS.onclick = function () {
      saveFormData1();
    }

    // When the user clicks the cancel button, close the modal
    cancelBtn2.onclick = function () {
      closeModal1();
    }
    cancelBtn3.onclick = function () {
      closeModal1();
    }
    cancelBtnHs.onclick = function () {
      closeModal1();
    }

    // Hiển thị thẻ input-link mặc định nếu lựa chọn là "link"
    const infoInput = document.querySelectorAll('.input-link');
    infoInput.forEach((input) => {
      (input as HTMLElement).style.display = "block";
      const infoType = document.querySelectorAll('.infoType');
      infoType.forEach((inf) => {
        inf.addEventListener("change", () => {
          const infoType = (inf as HTMLSelectElement).value;
          const infoFiles = document.querySelectorAll('.input-file');
          infoFiles.forEach(function (infoFile) {
            if (infoType === "link") {
              (input as HTMLElement).style.display = "block";
              (infoFile as HTMLElement).style.display = "none";
            } else if (infoType === "file") {
              (input as HTMLElement).style.display = "none";
              (infoFile as HTMLElement).style.display = "block";
            }
          });
        })
      });

    })


  }
}
