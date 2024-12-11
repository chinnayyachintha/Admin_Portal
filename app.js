// Handle the login form submission
document.getElementById('login-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        // Redirect to Cognito Hosted UI for Login
        const loginURL = "https://your-cognito-domain.auth.region.amazoncognito.com/login?client_id=YOUR_APP_CLIENT_ID&response_type=code&scope=email+openid&redirect_uri=https://admin.example.com";
        window.location.href = loginURL;
    } catch (error) {
        console.error('Login failed:', error);
        alert('Login failed. Please check your credentials and try again.');
    }
});

// Redirect user to Cognito Sign-Up page
document.getElementById('signup-link').addEventListener('click', () => {
    const signupURL = "https://your-cognito-domain.auth.region.amazoncognito.com/signup?client_id=YOUR_APP_CLIENT_ID&response_type=code&scope=email+openid&redirect_uri=https://admin.example.com";
    window.location.href = signupURL;
});
