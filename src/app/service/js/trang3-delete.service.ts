import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Trang3DeleteService {

  constructor() { }

  initTrang3Delete(projects: string[]) {

    document.getElementById("toggleBtn1")!.addEventListener("click", function () {
      let deleteColumns = document.getElementsByClassName("deleteColumn1");
      for (let i = 0; i < deleteColumns.length; i++) {
        if ((deleteColumns[i] as HTMLElement).style.display === "none") {
          (deleteColumns[i] as HTMLElement).style.display = "table-cell";
        } else {
          (deleteColumns[i] as HTMLElement).style.display = "none";
        }
      }
    });

    /*Modal hỏi delete*/
    // document.getElementById("deleteBtn")!.addEventListener("click", function () {
    //   document.getElementById("confirmModal")!.style.display = "block";
    // });

    // document.getElementById("yesBtn")!.addEventListener("click", function () {
    //   // Thực hiện xóa dữ liệu tại đây
    //   console.log("Xóa dữ liệu");

    //   // Đóng modal
    //   document.getElementById("confirmModal")!.style.display = "none";
    // });

    document.getElementById("noBtn")!.addEventListener("click", function () {
      document.getElementById("confirmModal")!.style.display = "none";
    });

    /*-------------------------------------------------công trình liên quan----------------------------------------------*/
    const searchInput = document.getElementById('related-projects-1')! as HTMLInputElement;
    const searchResults = document.getElementById('searchResults')!;
    const selectedProjects = document.getElementById('selectedCT')! as HTMLSelectElement;

    searchInput.addEventListener('input', (e) => {
      const query = (e.target! as HTMLInputElement).value.toLowerCase();
      searchResults.innerHTML = '';

      if (query === '') {
        searchResults.style.display = 'none';
      } else {
        searchResults.style.display = 'block';

        projects.forEach((project) => {
          if (project.toLowerCase().includes(query)) {
            const result = document.createElement('div');
            result.textContent = project;
            result.addEventListener('click', () => {
              const isSelected = Array.from(selectedProjects.options).some(
                (option) => option.value === project
              );

              if (!isSelected) {
                const option = document.createElement('option');
                option.value = project;
                option.classList.add("selectedCTLQ")
                option.textContent = project;
                option.selected = true;
                const selectedSize = selectedProjects.size;
                selectedProjects.add(option);
                option.addEventListener('click', () => {
                  selectedProjects.remove(selectedSize);
                });
              }

              // Ẩn search-results khi chọn công trình
              searchResults.style.display = 'none';
            });
            searchResults.appendChild(result);
          }
        });
      }
    });
    // Ẩn search-results khi nhấp chuột ra ngoài màn hình
    document.addEventListener('click', (e) => {
      if (e.target !== searchInput && e.target !== searchResults) {
        searchResults.style.display = 'none';
      }
    });

    // Hiển thị search-results khi ấn vào ô tìm kiếm
    searchInput.addEventListener('focus', () => {
      if (searchInput.value !== '') {
        searchResults.style.display = 'block';
      }
    });

  }
}
