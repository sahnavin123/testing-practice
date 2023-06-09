const caesarCipher = (str, shift) => {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (char.match(/[a-z]/i)) {
      const charCode = str.charCodeAt(i);
      let shiftedCode = charCode + shift;

      if (char.match(/[A-Z]/)) {
        shiftedCode = ((shiftedCode - 65) % 26) + 65;
      } else if (char.match(/[a-z]/)) {
        shiftedCode = ((shiftedCode - 97) % 26) + 97;
      }

      char = String.fromCharCode(shiftedCode);
    }

    result += char;
  }

  return result;
};

export default caesarCipher;
