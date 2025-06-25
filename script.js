function toggleCard(header) {
  const card = header.parentElement;
  const content = card.querySelector(".card-content");
  const icon = header.querySelector(".toggle-icon");
  content.classList.toggle("active");
  icon.textContent = content.classList.contains("active") ? "−" : "+";
}


function toggleAll(expandir) {
  document.querySelectorAll('.card-content').forEach(content => {
    const icon = content.previousElementSibling.querySelector('.toggle-icon');
    if (expandir) {
      content.classList.add("open");
      icon.textContent = "−";
    } else {
      content.classList.remove("open");
      icon.textContent = "+";
    }
  });
}

