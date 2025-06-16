const palindromes = function (string) {
    let cleaned = string.toLowerCase().replace(/[^a-z0-9]/g, '')
    let final = cleaned.split('').reverse().join('');
    return final === cleaned;
};

// Do not edit below this line
module.exports = palindromes;
