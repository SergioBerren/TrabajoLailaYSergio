document.addEventListener('DOMContentLoaded', function() {
    let elemsSelect = document.querySelectorAll('select');
    M.FormSelect.init(elemsSelect);

    let elemsTextarea = document.querySelectorAll('textarea');
    M.textareaAutoResize(elemsTextarea);
});