const lowerMap = [
    [/аi/g, "aj"], [/эi/g, "ej"], [/оi/g, "oj"], [/уi/g, "uj"], [/ыi/g, "yj"],
    [/а/g, "a"], [/б/g, "b"], [/в/g, "v"], [/г/g, "h"], [/ґ/g, "g"], [/д/g, "d"], [/ж/g, "ž"], [/зь/g, "ź"],
    [/з/g, "z"], [/й/g, "j"], [/к/g, "k"], [/ль/g, "l"], [/л/g, "ł"], [/м/g, "m"], [/нь/g, "ń"],
    [/н/g, "n"], [/о/g, "o"], [/п/g, "p"], [/р/g, "r"], [/сь/g, "ś"], [/с/g, "s"], [/т/g, "t"], [/у/g, "u"],
    [/ў/g, "ŭ"], [/ф/g, "f"], [/х/g, "ch"], [/ць/g, "ć"], [/ц/g, "c"], [/ч/g, "č"], [/ш/g, "š"], [/ы/g, "y"],
    [/ь/g, ""], [/э/g, "e"],
    [/lя/g, "la"], [/lе/g, "le"], [/lё/g, "lo"], [/lю/g, "lu"], [/lі/g, "li"],
    [/łя/g, "la"], [/łе/g, "le"], [/łё/g, "lo"], [/łю/g, "lu"], [/łі/g, "li"],
];

const upperMap = lowerMap.flatMap(([regex, replacement]) => {
    const cyrillic = regex.source.replace(/^\//, '').replace(/\/g$/, '');
    if (cyrillic.length === 1) {
        return [[new RegExp(cyrillic.toUpperCase(), 'g'), replacement.toUpperCase()]];
    }
    const [first, second] = cyrillic;
    return [[new RegExp(`${first.toUpperCase()}(${second.toUpperCase()}|${second})`, 'g'), replacement[0].toUpperCase() + replacement.slice(1)]];
});

const map = [...upperMap, ...lowerMap];

const isVowel = (char) => 'aeiouyAEIOUY'.includes(char);

const belToLat = (text) => {
    map.forEach(char => {
        text = text.replace(char[0], char[1]);
    });

    let result = '';
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if ('еёюяЕЁЮЯ'.includes(char)) {
            if (i === 0 || text[i - 1] === ' ' || (result.length > 0 && isVowel(result.slice(-1)))) {
                char = char.replace('е', 'je').replace('ё', 'jo').replace('ю', 'ju').replace('я', 'ja').replace('Е', 'Je').replace('Ё', 'Jo').replace('Ю', 'Ju').replace('Я', 'Ja');
            } else {
                char = char.replace('е', 'ie').replace('ё', 'io').replace('ю', 'iu').replace('я', 'ia').replace('Е', 'IE').replace('Ё', 'IO').replace('Ю', 'IU').replace('Я', 'IA');
            }
        } else if ('іІ'.includes(char)) {
            if (i !== 0 && (result.length > 0 && isVowel(result.slice(-1)))) {
                char = char.replace('і', 'ji').replace('І', 'Ji');
            } else {
                char = char.replace('і', 'i').replace('І', 'I');
            }
        }
        result += char;
    }
    result = result.replace('’i', 'j').replace('’І', 'J').replace('ći', 'ćj').replace('Ći', 'Ćj').replace('ĆI', 'ĆJ').replace('śi', 'śj').replace('Śi', 'Śj').replace('ŚI', 'ŚJ').replace('ńi', 'nj').replace('Ńi', 'Ńj').replace('ŃI', 'ŃJ').replace('źi', 'źj').replace('Źi', 'Źj').replace('ŹI', 'ŹJ');
    return result;
};

export default belToLat;
