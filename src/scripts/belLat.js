const vowelString = (lower) => {
    return lower + lower.toUpperCase();
};
const isVowel = (char) => vowelString('aeiouy').includes(char);
const capFirst = (obj) => {
    for (const [key, value] of Object.entries(obj))
        obj[key.charAt(0).toUpperCase() + key.slice(1)] = value.charAt(0).toUpperCase() + value.slice(1);
    return obj;
};
const capAll = (obj) => {
    for (const [key, value] of Object.entries(obj))
        obj[key.toUpperCase()] = value.toUpperCase();
    return obj;
};
const replacement = (text, replacements) => {
    return Object.entries(replacements).reduce((acc, [key, value]) => acc.split(key).join(value), text);
};

const lowerMap = {
    'а': 'a', 'б': 'b', 'в': 'v', 'г': 'h', 'ґ': 'g', 'д': 'd', 'ж': 'ž', 'зь': 'ź',
    'з': 'z', 'й': 'j', 'к': 'k', 'ль': 'l', 'л': 'ł', 'м': 'm', 'нь': 'ń',
    'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'сь': 'ś', 'с': 's', 'т': 't', 'у': 'u',
    'ў': 'ŭ', 'ф': 'f', 'х': 'ch', 'ць': 'ć', 'ц': 'c', 'ч': 'č', 'ш': 'š', 'ы': 'y',
    'ь': '', 'э': 'e', 'lя': 'la', 'lе': 'le', 'lё': 'lo', 'lю': 'lu', 'lі': 'li',
    'łя': 'la', 'łе': 'le', 'łё': 'lo', 'łю': 'lu', 'łі': 'li'
};
const map = { ...capFirst(lowerMap), ...capAll(lowerMap), ...lowerMap };

const belToLat = (text) => {
    text = replacement(text, map);
    let result = '';
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (vowelString('еёюя').includes(char)) {
            if (i === 0 || text[i - 1] === ' ' || (result.length > 0 && isVowel(result.slice(-1)))) {
                const js = { 'е': 'je', 'ё': 'jo', 'ю': 'ju', 'я': 'ja' };
                char = replacement(char, { ...js, ...capFirst(js) });
            } else {
                const is = { 'е': 'ie', 'ё': 'io', 'ю': 'iu', 'я': 'ia' };
                char = replacement(char, { ...is, ...capAll(is) });
            }
        } else if ('іІ'.includes(char)) {
            if (i !== 0 && (result.length > 0 && isVowel(result.slice(-1)))) {
                let i = { 'і': 'ji' };
                char = replacement(char, { ...i, ...capFirst(i) });
            } else {
                let i = { 'і': 'i' };
                char = replacement(char, { ...i, ...capFirst(i) });
            }
        }
        result += char;
    }
    const soft = { '’i': 'j', 'ći': 'ćj', 'śi': 'śj', 'ńi': 'nj', 'źi': 'źj', 'í': 'ji' };
    result = replacement(result, { ...capFirst(soft), ...capAll(soft), ...soft });
    return result;
};

export default belToLat;
