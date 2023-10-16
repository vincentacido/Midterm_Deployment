// Function to handle login form submission
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    try {
    
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

        if (username.trim() === '') {
            throw new Error('Please enter a valid username.');
        }

        // Use a regular expression to validate the password
        if (!/.*[A-Z].*/.test(password) || /[0-9]/.test(password)) {
            throw new Error('Password must contain at least one capital letter and no numbers.');
        }

        alert('Login successful');
        window.location.href = 'index.html';
    } catch (error) {
        // Handle validation errors
        alert(error.message);
        console.log("Error: " + error.message);
    } finally {
        // Clear the form
        document.getElementById('login-username').value = '';
        document.getElementById('login-password').value = '';
        console.log("Finally");
    }
});

