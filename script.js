// Animate sections on scroll
document.addEventListener("scroll", function() {
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const scrollPosition = window.scrollY + window.innerHeight;
    if (scrollPosition > sectionTop && scrollPosition < sectionTop + sectionHeight) {
      section.classList.add("animate");
    } else {
      section.classList.remove("animate");
    }
  });
});

// Add navigation menu
const navMenu = document.createElement("nav");
navMenu.innerHTML = `
  <ul>
    <li><a href="#objectives">Objectives</a></li>
    <li><a href="#education">Education</a></li>
    <li><a href="#employment">Employment</a></li>
    <li><a href="#personal">Personal</a></li>
    <li><a href="#references">References</a></li>
  </ul>
`;
document.body.appendChild(navMenu);

// Make email address clickable
const emailLink = document.createElement("a");
emailLink.href = "mailto:saud123@gmail.com";
emailLink.textContent = "saud123@gmail.com";
document.querySelector("header p").appendChild(emailLink);

// Add print button
const printButton = document.createElement("button");
printButton.textContent = "Print CV";
printButton.onclick = function() {
  window.print();
};
document.body.appendChild(printButton);
