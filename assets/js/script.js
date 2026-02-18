document.addEventListener("DOMContentLoaded", () => {
  const accordionHeaders = document.querySelectorAll(".accordion-header");

  accordionHeaders.forEach(header => {
    header.addEventListener("click", () => {
      const item = header.parentElement;
      const content = item.querySelector(".accordion-content");
      const icon = header.querySelector(".accordion-icon");

      document.querySelectorAll(".accordion-item").forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.querySelector(".accordion-content").style.maxHeight = null;
          otherItem.querySelector(".accordion-icon").style.transform = "rotate(0deg)";
        }
      });

      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        icon.style.transform = "rotate(0deg)";
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
        icon.style.transform = "rotate(45deg)";
      }
    });
  });
});
