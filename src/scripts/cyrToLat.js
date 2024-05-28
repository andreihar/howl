import map from './map';

const isVowel = (char) => 'aeiouyAEIOUY'.includes(char);

const convert = (text) => {
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

export default convert;