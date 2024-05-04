document.getElementById('join-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const reason = document.getElementById('reason').value;
    const contribution = document.getElementById('contribution').value;
    const suggestions = document.getElementById('suggestions').value;
    const education = document.getElementById('education').value;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username: "nextwavecodeacademy@gmail.com",
        Password : "742AA48283B4CE332BFB9045779953073D85", // Replace with your secure token from smtpjs.com
        To: 'adityaj0714@gmail.com',
        From: "your-adityaj0714@gmail.comemail@example.com", // Replace with your "from" email address
        Subject: "New Join Us Form Submission",
        Body: `
            <strong>First Name:</strong> ${firstName}<br>
            <strong>Last Name:</strong> ${lastName}<br>
            <strong>Email:</strong> ${email}<br>
            <strong>Phone:</strong> ${phone}<br>
            <strong>Reason:</strong> ${reason}<br>
            <strong>Contribution:</strong> ${contribution}<br>
            <strong>Suggestions:</strong> ${suggestions}<br>
            <strong>Education:</strong> ${education}
        `
    }).then(message => alert('Form submitted successfully!'));

    // Reset the form after submission
    document.getElementById('join-form').reset();
});