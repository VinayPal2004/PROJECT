const passwordbox = document.querySelector('#password');
const length = 12;
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const number = '1234567890';
const symbols = '!@#$%^&*()_=*/';

const allChars = uppercase + lowercase + number + symbols;

const button = document.querySelector('button');

const createpassword = () => {
  let password = "";

  // ensure at least one of each type
  password += uppercase[Math.floor(Math.random() * uppercase.length)];
  password += lowercase[Math.floor(Math.random() * lowercase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];

  // fill the rest
  while (password.length < length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  // shuffle characters
  password = password.split('').sort(() => 0.5 - Math.random()).join('');

  passwordbox.value = password;
  console.log(password);
};

button.addEventListener('click', () => {
  createpassword();
});
