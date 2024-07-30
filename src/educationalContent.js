function showSection(section) {
    // Hide all sections
    document.querySelectorAll('.content-section').forEach(el => {
        el.classList.remove('active');
    });

    // Remove 'active' class from all tab buttons
    document.querySelectorAll('.tab-button').forEach(el => {
        el.classList.remove('active');
    });

    // Show the selected section
    document.querySelector(`.${section}`).classList.add('active');
    document.querySelector(`.tab-button[onclick="showSection('${section}')"]`).classList.add('active');
}