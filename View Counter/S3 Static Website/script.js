// Update name function
function updateName() {
    const newName = document.getElementById('name').value;
    if (newName.trim() !== '') {
        document.getElementById('nameInput').innerHTML = `<p>Hello, ${newName}!</p>`;
    }
}

// Fetch and display view count
$(document).ready(function () {
    // Make AJAX request to Lambda URL
    $.ajax({
        url: 'https://oynnprf57b54y6glwr3v56ezvu0qeaes.lambda-url.ap-south-1.on.aws/',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            // Update view count
            document.getElementById('viewCount').innerText = data;
        },
        error: function () {
            // Handle error
            document.getElementById('viewCount').innerText = 'Error fetching views';
        }
    });
});
