function CountVowels(str) {
    let count = 0;
    for (const char of str) {
        console.log(char);
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u')
            count++;
    }
    return count;
}
