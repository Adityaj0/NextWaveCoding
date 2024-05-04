document.getElementById('join-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const userEmail = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const reason = document.getElementById('reason').value;
    const contribution = document.getElementById('contribution').value;
    const suggestions = document.getElementById('suggestions').value;
    const education = document.getElementById('education').value;

    Email.send({
        SecureToken: "YourSecureTokenHere", // Replace with your secure token from smtpjs.com
        To: 'adityaj0714@gmail.com',
        From: "no-reply@yourdomain.com", // Use a fixed "from" email address
        Subject: "New Join Us Form Submission",
        Body: `
            <strong>First Name:</strong> ${firstName}<br>
            <strong>Last Name:</strong> ${lastName}<br>
            <strong>User Email:</strong> ${userEmail}<br>
            <strong>Phone:</strong> ${phone}<br>
            <strong>Reason:</strong> ${reason}<br>
            <strong>Contribution:</strong> ${contribution}<br>
            <strong>Suggestions:</strong> ${suggestions}<br>
            <strong>Education:</strong> ${education}
        `,
        ReplyTo: userEmail // Set the reply-to address to the user's email
    }).then(message => alert('Form submitted successfully!'));

    // Reset the form after submission
    document.getElementById('join-form').reset();
});
