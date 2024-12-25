function toggleMenu() {
  const menu = document.querySelector('.links');
  menu.classList.toggle('active');
}

let x = document.querySelector(".hum");
x.onclick = toggleMenu;


let listItems = document.querySelectorAll(".links a");

// Function to set active state and save to local storage
function setActiveLink(activeLink) {
  // Remove "active" class from all links
  listItems.forEach(item => item.classList.remove("activate"));

  // Add "active" class to the clicked link
  activeLink.classList.add("activate");

  // Save the unique identifier (e.g., href) to local storage
  localStorage.setItem("activeLink", activeLink.getAttribute("href"));
}

// Add click event listeners to each link
listItems.forEach(link => {
  link.onclick = function () {
    setActiveLink(link);
  };
});

// Restore the active link from local storage on page load
document.addEventListener("DOMContentLoaded", () => {
  const savedLinkHref = localStorage.getItem("activeLink");
  if (savedLinkHref) {
    const activeLink = Array.from(listItems).find(
      link => link.getAttribute("href") === savedLinkHref
    );
    if (activeLink) {
      setActiveLink(activeLink);
    }
  }
});


const resumeServices = document.querySelectorAll('.resume-services li');
const resumeServBox = document.querySelectorAll('.resume-sec-2 > div');

// Function to set the active state
function setActiveState(index) {
  // Remove active class from all nav items
  resumeServices.forEach(nav => nav.classList.remove('act'));
  // Add active class to clicked nav item
  resumeServices[index].classList.add('act');

  // Hide all sections
  resumeServBox.forEach(section => section.classList.add('notinactive'));
  // Show the corresponding section
  resumeServBox[index].classList.remove('notinactive');
  resumeServBox[index].classList.add('interactive');

  // Save the active index in local storage
  localStorage.setItem('activeIndex', index);
}

// Add click event listeners
resumeServices.forEach((item, index) => {
  item.addEventListener('click', () => {
    setActiveState(index);
  });
});

// On page load, restore the active state from local storage
document.addEventListener('DOMContentLoaded', () => {
  const savedIndex = localStorage.getItem('activeIndex');
  if (savedIndex !== null) {
    setActiveState(parseInt(savedIndex, 10));
  } else {
    // Set a default state if no state is saved
    setActiveState(0);
  }
});


