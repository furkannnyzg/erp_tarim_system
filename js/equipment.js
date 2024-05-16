document.addEventListener("DOMContentLoaded", function() {
    
    document.querySelectorAll('.category').forEach(category => {
        const dropdownArrow = category.querySelector('.dropdown-arrow');
        const dropdownContent = category.querySelector('.dropdown-content');

        dropdownArrow.addEventListener('click', function() {
            dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
        });
    });
});