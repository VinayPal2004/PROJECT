// === Age Calculator Script ===
const button = document.querySelector("button");

function calculateAge() {
    const input = document.getElementById('date').value;
    const result = document.getElementById('result');

    // If user hasn't selected a date
    if (input === '') {
        result.innerHTML = '⚠️ Please select your birth date.';
        result.style.color = '#ff7675';
        return;
    }

    const birthDate = new Date(input);
    const today = new Date();

    // Check for invalid future date
    if (birthDate > today) {
        result.innerHTML = '❌ Birth date cannot be in the future!';
        result.style.color = '#ff7675';
        return;
    }

    // Calculate difference
    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    // Adjust for negative days
    if (ageDays < 0) {
        ageMonths--;
        ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    // Adjust for negative months
    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    // Display result
    result.style.color = '#80cbc4';
    result.innerHTML = `🎂 You are <strong>${ageYears}</strong> years, <strong>${ageMonths}</strong> months, and <strong>${ageDays}</strong> days old.`;
}
button.addEventListener('click',()=>{
    calculateAge();
    console.log("click");
    
});