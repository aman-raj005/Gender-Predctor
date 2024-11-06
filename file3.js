// Chinese calendar data "GIRL",or gender prediction
const calendar = [
    
        ["GIRL", "BOY", "GIRL", "BOY", "BOY", "BOY", "BOY", "BOY", "BOY", "BOY", "BOY", "BOY"],
        ["BOY", "GIRL", "BOY", "GIRL", "GIRL", "BOY", "BOY", "BOY", "BOY", "BOY", "GIRL", "GIRL"],
        ["GIRL", "BOY", "GIRL", "BOY", "BOY", "BOY", "BOY", "BOY", "BOY", "GIRL", "BOY", "BOY"],
        ["BOY", "GIRL", "GIRL", "GIRL", "GIRL", "GIRL", "GIRL", "GIRL", "GIRL", "GIRL", "GIRL", "GIRL"],
        ["GIRL", "BOY", "BOY", "GIRL", "BOY", "GIRL", "GIRL", "BOY", "GIRL", "GIRL", "GIRL", "GIRL"],
        ["BOY", "BOY", "GIRL", "BOY", "BOY", "GIRL", "BOY", "GIRL", "BOY", "BOY", "BOY", "GIRL"],
        ["BOY", "GIRL", "BOY", "BOY", "GIRL", "BOY", "BOY", "GIRL", "GIRL", "GIRL", "GIRL", "GIRL"],
        ["GIRL", "BOY", "BOY", "GIRL", "GIRL", "BOY", "GIRL", "BOY", "BOY", "BOY", "BOY", "BOY"],
        ["BOY", "GIRL", "BOY", "GIRL", "GIRL", "BOY", "GIRL", "BOY", "GIRL", "GIRL", "GIRL", "GIRL"],
        ["GIRL", "BOY", "GIRL", "BOY", "GIRL", "GIRL", "BOY", "BOY", "BOY", "BOY", "GIRL", "BOY"],
        ["BOY", "GIRL", "BOY", "GIRL", "GIRL", "GIRL", "BOY", "BOY", "BOY", "BOY", "GIRL", "GIRL"],
        ["GIRL", "BOY", "GIRL", "GIRL", "BOY", "BOY", "BOY", "BOY", "BOY", "GIRL", "GIRL", "GIRL"],
        ["BOY", "GIRL", "GIRL", "GIRL", "GIRL", "GIRL", "GIRL", "GIRL", "GIRL", "GIRL", "BOY", "BOY"],
        ["BOY", "GIRL", "BOY", "GIRL", "GIRL", "GIRL", "GIRL", "GIRL", "GIRL", "GIRL", "GIRL", "BOY"],
        ["BOY", "GIRL", "BOY", "GIRL", "GIRL", "GIRL", "GIRL", "GIRL", "GIRL", "GIRL", "GIRL", "BOY"],
        ["GIRL", "BOY", "GIRL", "BOY", "GIRL", "GIRL", "GIRL", "BOY", "GIRL", "GIRL", "GIRL", "BOY"],
        ["BOY", "GIRL", "BOY", "GIRL", "GIRL", "GIRL", "GIRL", "GIRL", "GIRL", "GIRL", "BOY", "BOY"],
        ["BOY", "BOY", "GIRL", "BOY", "GIRL", "GIRL", "GIRL", "BOY", "GIRL", "GIRL", "BOY", "BOY"],
        ["GIRL", "BOY", "BOY", "GIRL", "BOY", "GIRL", "GIRL", "GIRL", "BOY", "BOY", "BOY", "BOY"],
        ["BOY", "GIRL", "BOY", "BOY", "GIRL", "BOY", "GIRL", "BOY", "GIRL", "BOY", "GIRL", "BOY"],
        ["GIRL", "BOY", "GIRL", "BOY", "BOY", "GIRL", "BOY", "GIRL", "BOY", "GIRL", "BOY", "GIRL"],
        ["BOY", "GIRL", "BOY", "BOY", "BOY", "GIRL", "GIRL", "BOY", "GIRL", "BOY", "GIRL", "GIRL"],
        ["GIRL", "BOY", "GIRL", "BOY", "GIRL", "BOY", "BOY", "GIRL", "BOY", "GIRL", "BOY", "GIRL"],
        ["BOY", "GIRL", "BOY", "GIRL", "BOY", "GIRL", "BOY", "BOY", "GIRL", "BOY", "GIRL", "BOY"],
        ["GIRL", "BOY", "GIRL", "BOY", "GIRL", "BOY", "GIRL", "BOY", "BOY", "GIRL", "BOY", "GIRL"],
        ["BOY", "GIRL", "BOY", "GIRL", "BOY", "GIRL", "BOY", "GIRL", "BOY", "BOY", "BOY", "BOY"],
        ["BOY", "BOY", "GIRL", "BOY", "BOY", "BOY", "GIRL", "BOY", "GIRL", "BOY", "GIRL", "GIRL"],
        ["GIRL", "BOY", "BOY", "GIRL", "GIRL", "GIRL", "BOY", "GIRL", "BOY", "GIRL", "BOY", "BOY"]
    
    
    
    ];
// Show welcome popup on page load
window.addEventListener('load', () => {
    showWelcomePopup();
});


// Function to show the welcome popup
function showWelcomePopup() {
    const popup = document.getElementById('welcomePopup');
    popup.classList.add('popup', 'active'); // Add active class to make it visible

    const closeBtn = popup.querySelector('.close-btn');
    closeBtn.addEventListener('click', () => {
        popup.classList.remove('active'); // Hide welcome popup
        showSecondPopup(); // Show second popup when closed
    });
}

// Function to show the second popup
function showSecondPopup() {
    const popup = document.getElementById('secondPopup');
    popup.classList.add('popup', 'active'); // Add active class to make it visible

    const closeBtn = popup.querySelector('.close-btn');
    const closePopup = () => {
        popup.classList.remove('active'); // Hide popup
        closeBtn.removeEventListener('click', closePopup); // Clean up event listener
    };

    closeBtn.addEventListener('click', closePopup);
    setTimeout(closePopup, 5000); // Auto-close after 60 seconds
}

// Trigger the welcome popup on page load or other conditions
window.onload = showWelcomePopup;












// Calculate age from dates
document.getElementById('calculateAge').addEventListener('click', () => {
    const birthDate = new Date(document.getElementById('birthDate').value);
    const conceptionDate = new Date(document.getElementById('conceptionDate').value);
    
    let age = conceptionDate.getFullYear() - birthDate.getFullYear();
    const monthDiff = conceptionDate.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0) {
        age--;
    }
    
    document.getElementById('age').value = age;
    document.getElementById('month').value = conceptionDate.getMonth() + 1;
});

// Form submission handler
document.getElementById('predictionForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value);
    const month = parseInt(document.getElementById('month').value);
    const address = document.getElementById('address').value;











    
    // Validate inputs
    if (!name || !age || !month) {
        alert('Please fill in all required fields');
        return;
    }

    // Predict gender based on chart
    const gender = predictGender(age, month);
    
    // Show result with animation
    showResult(name, gender);
    
    // Send data to server (you'll need to implement this)
    try {
        await sendData({
            name,
            age,
            month,
            address,
            gender
        });
    } catch (error) {
        console.error('Error sending data:', error);
    }
});

// Gender prediction function based on chart
function predictGender(age, month) {
    const rowIndex = age - 18;
    if (rowIndex >= 0 && rowIndex < calendar.length) {
        return calendar[rowIndex][month - 1];
    }
    return 'Unknown';
}

// Show result with animation
function showResult(name, gender) {
    const result = document.getElementById('result');
    result.style.display = 'block';
    result.style.backgroundColor = gender === 'BOY' ? 'var(--blue)' : 'var(--pink)';
    result.innerHTML = `
        <h2>🎉 Congratulations ${name}! 🎉</h2>
        <p>Based on Our Prediction, you are likely to have a:</p>
        <h3 style="color: white; font-size: 24px; text-align: center;">
            ${gender}
        </h3>
    `;

    // Add confetti animation
    createConfetti();
}

// Confetti animation
function createConfetti() {
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confetti.style.animation = `confetti 1s ease-in ${Math.random() * 2}s forwards`;
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 3000);
    }
}

// Data sending function (implement your server endpoint)
async function sendData(data) {
    // This is a placeholder - implement your actual server communication
    console.log('Sending data:', data);
    // Send email to devil692005@gmail.com
    // Update Excel sheet
}

// Populate the chart table
function populateChart() {
    const chartBody = document.getElementById('chartBody');

    for (let i = 0; i < calendar.length; i++) {
        const row = document.createElement('tr');

        // Add age
        const ageCell = document.createElement('td');
        ageCell.textContent = i + 18;
        row.appendChild(ageCell);


        // Add month data
        for (let j = 0; j < calendar[i].length; j++) {
            const cell = document.createElement('td');
            cell.textContent = calendar[i][j];
            cell.classList.add(calendar[i][j].toLowerCase());
            if (i === document.getElementById('age').value - 18 && j === document.getElementById('month').value - 1) {
                cell.classList.add('highlight');
            }
            row.appendChild(cell);
        }

        chartBody.appendChild(row);
    }
}

// Initialize the chart
populateChart();