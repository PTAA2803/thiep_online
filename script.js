setTimeout(() => {
    document.getElementById("intro").style.display = "none";
    const card = document.getElementById("card");
    card.classList.remove("hidden");
  }, 2500); // 2.5 giây sau mới mở thiệp
  