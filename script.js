
function toggleText(sectionId) {
    const section = document.getElementById(sectionId);
    const icon = event.target.querySelector('.accordion-icon');
    
    
    const isOpen = section.style.display === "block";
    section.style.display = isOpen ? "none" : "block";
    
    
    if (!isOpen) {
        icon.textContent = "▼"; 
    } else {
        icon.textContent = "▶"; 
    }
}
