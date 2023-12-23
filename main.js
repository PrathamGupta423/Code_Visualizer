function executeCode() {
    const code = document.getElementById('codeInput').value;
    fetch('/runcode', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
    })
    .then(response => response.json())
    .then(data => {
        // Display execution trace in the UI
        document.getElementById('output').innerText = JSON.stringify(data, null, 2);
    })
    .catch(error => console.error('Error:', error));
}