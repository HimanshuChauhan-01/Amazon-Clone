document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.querySelector(".toggle-btn");
    const sidebar = document.querySelector(".sidebar");
    const cross=document.querySelector(".cross");
  
    toggleBtn.addEventListener("click", function () {
      sidebar.classList.toggle("open");
    });
    cross.addEventListener("click", function () {
        sidebar.classList.remove("open");
      });
  });
  const images = [
    "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/2024/BAU_BTF/Nov/Unrec/Shoes/1/30003._CB542120021_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/IMG25/Home/2025/MHS/April/Mega_home_sale_BAU_PC_-_Powercut_essentials._CB546103503_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Consumables/X-GL/Feb5/PC_Hero_1_3000._CB582457311_.jpg"
  ];
  
  let currentIndex = 0;
  const left = document.querySelector(".left");
  const right = document.querySelector(".right");
  const myImage = document.querySelector(".image");
  
  right.addEventListener("click", () => {
    if (currentIndex < images.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    myImage.src = images[currentIndex];
  });
  
  left.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = images.length - 1;
    }
    myImage.src = images[currentIndex];
  });

  