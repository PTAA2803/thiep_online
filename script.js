document.addEventListener("DOMContentLoaded", () => {
    const intro = document.getElementById("intro");
    const bookWrapper = document.getElementById("book-wrapper");
    const book = document.querySelector(".book");
  
    // Thời gian Intro: 2.5s
    setTimeout(() => {
      intro.style.opacity = "0";
      
      setTimeout(() => {
        intro.style.display = "none";
        bookWrapper.classList.remove("hidden");
        
        setTimeout(() => {
          bookWrapper.classList.add("visible");
          
          // Mở sách
          setTimeout(() => {
            book.classList.add("open");
          }, 800);
          
        }, 50);
      }, 800); 
  
    }, 2500);
  });
