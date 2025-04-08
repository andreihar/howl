const vowelString = (lower) => {
    return lower + lower.toUpperCase();
};
const isVowel = (char) => vowelString('aeiouyŭ').includes(char);
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
const applyCase = (str, isAllCaps, isUpper) => {
    if (isAllCaps) {
        return str.toUpperCase();
    } else if (isUpper) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }
    return str;
};

const softMapLat = {
    'зь': 'ź', 'ль': 'l', 'нь': 'ń', 'сь': 'ś', 'ць': 'ć',
};
const doubleMapLat = {
    'ля': 'la', 'ле': 'le', 'лё': 'lo', 'лю': 'lu', 'лі': 'li',
};
const singleMapLat = {
    'а': 'a', 'б': 'b', 'в': 'v', 'г': 'h', 'ґ': 'g', 'д': 'd', 'ж': 'ž',
    'з': 'z', 'й': 'j', 'к': 'k', 'л': 'ł', 'м': 'm',
    'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u',
    'ў': 'ŭ', 'ф': 'f', 'х': 'ch', 'ц': 'c', 'ч': 'č', 'ш': 'š', 'ы': 'y',
    'ь': '', 'э': 'e'
};
let map = {};
Object.assign(map, capFirst(softMapLat), capAll(softMapLat), softMapLat);
Object.assign(map, capFirst(doubleMapLat), capAll(doubleMapLat), doubleMapLat);
Object.assign(map, capFirst(singleMapLat), capAll(singleMapLat), singleMapLat);

const belToLat = (text) => {
    function processWord(word) {
        const isAllCaps = word.length > 1 && word === word.toUpperCase();
        let result = '';
        let i = 0;
        while (i < word.length) {
            let char = word[i];
            // Special handling for CH digraph
            if ((char === 'C' || char === 'c') && i + 1 < word.length && (word[i + 1] === 'H' || word[i + 1] === 'h')) {
                if (char === char.toUpperCase() && word[i + 1] === word[i + 1].toUpperCase()) {
                    if (isAllCaps) {
                        result += 'CH';
                    } else {
                        result += 'Ch';
                    }
                } else if (char === char.toUpperCase()) {
                    result += 'Ch';
                } else {
                    result += 'ch';
                }
                i += 2;
                continue;
            }
            // Check if char is a vowel that needs special handling
            if (vowelString('еёюяі').includes(char)) {
                if (vowelString('і').includes(char)) { // Special handling for і
                    if (i > 0 && "'’‘".includes(result.slice(-1))) {
                        result = result.slice(0, -1);
                        char = applyCase('ji', isAllCaps, char === char.toUpperCase());
                    } else if (i + 1 < word.length && word[i + 1] === '́') {
                        result = result.slice(0, -1);
                        // Then, remove the accent
                        i += 1;
                        char = applyCase('ji', isAllCaps, char === char.toUpperCase());
                    } else if (i !== 0 && result && isVowel(result.slice(-1))) {
                        char = applyCase('ji', isAllCaps, char === char.toUpperCase());
                    } else {
                        char = applyCase('i', isAllCaps, char === char.toUpperCase());
                    }
                } else { // Handling for е, ё, ю, я
                    // You may want to adjust this logic if you have a softMapLat in your JS context
                    if (
                        i === 0 ||
                        word[i - 1] === ' ' ||
                        (result && "'’‘".includes(result.slice(-1))) ||
                        (result && isVowel(result.slice(-1)))
                    ) {
                        const js = { 'е': 'je', 'ё': 'jo', 'ю': 'ju', 'я': 'ja' };
                        char = applyCase(js[char.toLowerCase()], isAllCaps, char === char.toUpperCase());
                        if (result && "'’‘".includes(result.slice(-1))) {
                            result = result.slice(0, -1);
                        }
                    } else {
                        const is_ = { 'е': 'ie', 'ё': 'io', 'ю': 'iu', 'я': 'ia' };
                        char = applyCase(is_[char.toLowerCase()], isAllCaps, char === char.toUpperCase());
                    }
                }
            }
            result += char;
            i += 1;
        }
        return result;
    }
    // Split text into words and delimiters, don't split on apostrophes
    const tokens = text.match(/[^\s\p{L}]+|[\p{L}]+(?:['’‘́][\p{L}]+)*|\s+/gu) || [];
    let out = [];
    for (const token of tokens) {
        if (/^[\p{L}]+/u.test(token)) {
            out.push(processWord(replacement(token, map)));
        } else {
            out.push(token);
        }
    }
    return out.join('');
};

export default belToLat;
