// Function to generate the password
function generatePassword() {
    const length = parseInt(document.getElementById('length').value) || 8;
    const uppercase = document.getElementById('uppercase').checked;
    const lowercase = document.getElementById('lowercase').checked;
    const numbers = document.getElementById('numbers').checked;
    const symbols = document.getElementById('symbols').checked;
  
    const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
    const numChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';
  
    let availableChars = '';
    let password = '';
    let requiredChars = [];
  
    // Add selected character types to availableChars and ensure required types
    if (uppercase) {
      availableChars += upperChars;
      requiredChars.push(upperChars.charAt(Math.floor(Math.random() * upperChars.length)));
    }
    if (lowercase) availableChars += lowerChars;
    if (numbers) {
      availableChars += numChars;
      requiredChars.push(numChars.charAt(Math.floor(Math.random() * numChars.length)));
    }
    if (symbols) {
      availableChars += symbolChars;
      requiredChars.push(symbolChars.charAt(Math.floor(Math.random() * symbolChars.length)));
    }
  
    // If no character type is selected, alert the user
    if (availableChars === '') {
      alert('Please select at least one character type!');
      return;
    }
  
    // Ensure the password is at least 8 characters long
    if (length < 8) {
      alert('Password length must be at least 8 characters!');
      return;
    }
  
    // Fill the password with the required characters first
    password = requiredChars.join('');
  
    // Generate the rest of the password
    for (let i = password.length; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * availableChars.length);
      password += availableChars[randomIndex];
    }
  
    // Shuffle the password to ensure randomness
    password = shuffleString(password);
  
    // Display the password in the input field
    document.getElementById('password').value = password;
  }
  
  // Function to shuffle the password
  function shuffleString(str) {
    const arr = str.split('');
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
    }
    return arr.join('');
  }
  
  // Function to copy password to clipboard
  function copyToClipboard() {
    const passwordField = document.getElementById('password');
    passwordField.select();
    document.execCommand('copy');
    alert('Password copied to clipboard!');
  }
  