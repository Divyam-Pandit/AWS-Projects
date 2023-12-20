async function submitForm() {
    event.preventDefault();

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const intro = document.getElementById('intro').value;

    try {
        const response = await fetch('https://v91v2l7i3f.execute-api.ap-south-1.amazonaws.com/prod/register', { 
   // API URLhas been mentioned,  mention you own api
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                email: email,
                phone: phone,
                intro: intro,
            }),
        });

        const responseData = await response.json();

        if (response.ok) {
	    const body = JSON.parse(responseData.body);

	    // For Debugging Purpose
	    // console.log(responseData.body);   
	    // console.log(mes.error+", "+mes.message);
            // console.log(responseData.statusCode);

            if (responseData.statusCode === 200) {
                alert(body.message);
                document.getElementById('name').value = '';
                document.getElementById('email').value = '';
                document.getElementById('phone').value = '';
                document.getElementById('intro').value = '';
            } else{
                alert(body.message+': '+body.error+', please try other email id');
		document.getElementById('email').value = '';
            }
        } else {
            alert('Registration failed. Please try again later.');
        }
    } catch (error) {
        console.error('An error occurred:', error);
        alert('Registration failed. Please try again later.');
    }
}
