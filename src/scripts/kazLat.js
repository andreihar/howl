const lowerMap = [
    [/дж/g, "j"], [/ия/g, "ıa"],
    [/а/g, "a"], [/ә/g, "ä"], [/б/g, "b"], [/в/g, "v"], [/г/g, "g"], [/ғ/g, "ğ"], [/д/g, "d"], [/е/g, "e"],
    [/ж/g, "j"], [/з/g, "z"], [/и/g, "ı"], [/й/g, "ı"], [/к/g, "k"], [/қ/g, "q"], [/л/g, "l"], [/м/g, "m"],
    [/н/g, "n"], [/ң/g, "ŋ"], [/о/g, "o"], [/ө/g, "ö"], [/п/g, "p"], [/р/g, "r"], [/с/g, "s"], [/т/g, "t"],
    [/у/g, "w"], [/ұ/g, "u"], [/ү/g, "ü"], [/ф/g, "f"], [/х/g, "h"], [/һ/g, "h"], [/ц/g, "s"], [/ч/g, "ç"],
    [/ш/g, "ş"], [/щ/g, "şş"], [/ъ/g, ""], [/ы/g, "y"], [/і/g, "i"], [/э/g, "e"], [/ь/g, ""], [/ю/g, "ü"]
];

// ю я ё

const upperMap = lowerMap.flatMap(([regex, replacement]) => {
    const cyrillic = regex.source.replace(/^\//, '').replace(/\/g$/, '');
    const customToUpperCase = (str) => str.replace(/i/g, 'İ').replace(/ı/g, 'I').toUpperCase();
    if (cyrillic.length === 1) {
        return [[new RegExp(cyrillic.toUpperCase(), 'g'), customToUpperCase(replacement)]];
    }
    const [first, second] = cyrillic;
    return [[new RegExp(`${first.toUpperCase()}(${second.toUpperCase()}|${second})`, 'g'), customToUpperCase(replacement[0]) + replacement.slice(1)]];
});

const map = [...upperMap, ...lowerMap];

const isVowel = (char) => 'aäeıioöwuüyAÄEIİOÖWUÜY'.includes(char);

const kazToLat = (text) => {
    map.forEach(char => {
        text = text.replace(char[0], char[1]);
    });

    let result = '';
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if ('яЯ'.includes(char)) {
            if (i !== 0 && (result.length > 0 && isVowel(result.slice(-1)))) {
                char = char.replace('я', 'ıa').replace('Я', 'Ia');
            } else {
                char = char.replace('я', 'ä').replace('Я', 'Ä');
            }
        } else if ('юЮ'.includes(char)) {
            if (i !== 0 && (result.length > 0 && isVowel(result.slice(-1)))) {
                char = char.replace('ю', 'ıw').replace('Ю', 'Iw');
            } else {
                char = char.replace('ю', 'ü').replace('Ю', 'Ü');
            }
        }
        result += char;
    }
    result = result.replace(/\b(?!batmessiah\b|Qussaıyn\b|class\b)\w*ss\w*\b/g, (word) => {
        return word.replace(/ss/g, 's');
    });
    return result;
};

export default kazToLat;
