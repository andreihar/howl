const upper = (str) => str.replace(/i/g, 'İ').replace(/ı/g, 'I').toUpperCase();
const vowelString = (lower) => {
    return lower + upper(lower);
};
const isVowel = (char) => vowelString('aäeıioöwuüy').includes(char);
const capFirst = (obj) => {
    const result = {};
    for (const [key, value] of Object.entries(obj)) {
        result[upper(key.charAt(0)) + key.slice(1)] = upper(value.charAt(0)) + value.slice(1);
    }
    return result;
};
const capAll = (obj) => {
    const result = {};
    for (const [key, value] of Object.entries(obj)) {
        result[upper(key)] = upper(value);
    }
    return result;
};
const replacement = (text, replacements) => {
    return Object.entries(replacements).reduce((acc, [key, value]) => acc.split(key).join(value), text);
};
const handleSpecialChar = (char, replacements, result, i) => {
    if (i !== 0 && (result.length > 0 && isVowel(result.slice(-1))))
        char = replacement(char, { ...replacements.before, ...capFirst(replacements.before) });
    else
        char = replacement(char, { ...replacements.after, ...capFirst(replacements.after) });
    return char;
};

const lowerMap = {
    'дж': 'j', 'ия': 'ıa',
    'а': 'a', 'ә': 'ä', 'б': 'b', 'в': 'v', 'г': 'g', 'ғ': 'ğ', 'д': 'd', 'е': 'e',
    'ж': 'j', 'з': 'z', 'и': 'ı', 'й': 'ı', 'к': 'k', 'қ': 'q', 'л': 'l', 'м': 'm',
    'н': 'n', 'ң': 'ŋ', 'о': 'o', 'ө': 'ö', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't',
    'у': 'w', 'ұ': 'u', 'ү': 'ü', 'ф': 'f', 'х': 'h', 'һ': 'h', 'ц': 's', 'ч': 'ç',
    'ш': 'ş', 'щ': 'şş', 'ъ': '', 'ы': 'y', 'і': 'i', 'э': 'e'
};
const map = { ...capFirst(lowerMap), ...capAll(lowerMap), ...lowerMap };

const kazToLat = (text) => {
    text = replacement(text, map);
    let result = '';
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (vowelString('я').includes(char)) {
            char = handleSpecialChar(char, { before: { 'я': 'ıa' }, after: { 'я': 'ä' } }, result, i);
        } else if (vowelString('ю').includes(char)) {
            char = handleSpecialChar(char, { before: { 'ю': 'ıw' }, after: { 'ю': 'ü' } }, result, i);
        } else if (vowelString('ё').includes(char)) {
            char = handleSpecialChar(char, { before: { 'ё': 'ıo' }, after: { 'ё': 'ö' } }, result, i);
        } else if (vowelString('ь').includes(char)) {
            const soft = { 'a': 'ä', 'o': 'ö', 'u': 'ü', 'y': 'i', 'w': 'ü' };
            const softDict = { ...capFirst(soft), ...soft };
            if (i < text.length - 1 && isVowel(text[i + 1])) {
                result += replacement(text[i + 1], softDict);
                i++; // Skip the replaced vowel
            } else {
                // Find the closest vowel before the soft sign
                let j = result.length - 1;
                while (j >= 0 && !isVowel(result[j])) j--;
                if (j >= 0)
                    result = result.slice(0, j) + replacement(result[j], softDict) + result.slice(j + 1);
            }
            continue;
        }
        result += char;
    }
    result = result.replace(/\b(?!batmessiah\b|Qussaıyn\b|class\b)\w*ss\w*\b/g, (word) => {
        return word.replace(/ss/g, 's');
    });
    return result;
};

export default kazToLat;
