document.addEventListener("DOMContentLoaded", () => {
    const intro = document.getElementById("intro");
    const bookWrapper = document.getElementById("book-wrapper");
    const book = document.querySelector(".book");
    const btn = document.getElementById("open-btn");
  
    // 1. Chạy Intro xong thì hiện sách (đóng)
    setTimeout(() => {
      intro.style.opacity = "0";
      
      setTimeout(() => {
        intro.style.display = "none";
        bookWrapper.classList.remove("hidden");
        
        setTimeout(() => {
          bookWrapper.classList.add("visible");
        }, 50);
        
      }, 800); 
  
    }, 2500);
  
    // 2. Xử lý sự kiện bấm nút icon
    btn.addEventListener("click", () => {
      // Thêm class mở sách
      book.classList.add("open");
      
      // Ẩn nút icon đi
      btn.style.opacity = "0";
      btn.style.pointerEvents = "none";
    });
  });
