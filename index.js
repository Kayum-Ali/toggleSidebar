// Get references to elements
const sidebar = document.querySelector('.sidebar');
const openSidebarBtn = document.querySelector('.open-sidebar-btn');
const closeSidebarBtn = document.querySelector('.close-sidebar-btn');

// Function to open the sidebar
function openSidebar() {
    sidebar.classList.add('open');
    document.body.classList.add('body-no-scroll');
}

// Function to close the sidebar
function closeSidebar() {
    sidebar.classList.remove('open');
    document.body.classList.remove('body-no-scroll');
}

// Event listeners for opening and closing the sidebar
openSidebarBtn.addEventListener('click', openSidebar);
closeSidebarBtn.addEventListener('click', closeSidebar);
