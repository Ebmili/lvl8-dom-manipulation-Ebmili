const colorNames = ['Red', 'Green', 'Blue', 'Yellow'];

colorNames.forEach(color => {
    const colorElement = document.getElementById(color);
    
    colorElement.addEventListener('mouseover', function() {
        document.getElementById('colorSquare').style.backgroundColor = color.toLowerCase();
    });
    
    colorElement.addEventListener('mouseout', function() {
        document.getElementById('colorSquare').style.backgroundColor = '';
    });
});