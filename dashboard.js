// Example: Toggle admin menu
document.getElementById('adminMenuButton').addEventListener('click', function() {
    document.getElementById('adminDropdown').classList.toggle('hidden');
});

// Example: User creation (pseudo-code)
document.getElementById('userForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const data = {
        username: document.getElementById('username').value,
        // ...other fields
    };
    await fetch('/api/users', { method: 'POST', body: JSON.stringify(data) });
    alert('User created!');
});
