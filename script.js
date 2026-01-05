document.addEventListener("DOMContentLoaded", () => {
    const intro = document.getElementById("intro");
    const bookWrapper = document.getElementById("book-wrapper");
    const book = document.querySelector(".book");
    const btn = document.getElementById("open-btn"); // Lấy nút bấm
  
    // 1. Chạy Intro xong thì hiện sách (Giữ nguyên)
    setTimeout(() => {
      intro.style.opacity = "0";
      
      setTimeout(() => {
        intro.style.display = "none";
        bookWrapper.classList.remove("hidden");
        
        setTimeout(() => {
          bookWrapper.classList.add("visible");
          // LƯU Ý: Ở đây không còn lệnh tự động mở book.classList.add("open") nữa
        }, 50);
        
      }, 800); 
  
    }, 2500);
  
    // 2. Xử lý sự kiện bấm nút
    btn.addEventListener("click", () => {
      // Thêm class mở sách
      book.classList.add("open");
      
      // Ẩn nút đi sau khi bấm để đỡ vướng
      btn.style.opacity = "0";
      btn.style.pointerEvents = "none"; // Không cho bấm nữa
    });
  });
