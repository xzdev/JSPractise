/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    let wordInLine = [];
    let lastLength = 0;
    let lastLine = true;
    let i = 0;
    for(let len = words.length; i < len; i++) {
        let word = words[i];
        let wordLength = word.length;

        if (lastLength + i + wordLength <= maxWidth) {
            lastLength += wordLength;
            wordInLine.push(word);
        } else {
            lastLine = false;
            break;
        }
    }

    if (!lastLine) {
        return [mergeLine(wordInLine, lastLength, maxWidth)].concat(fullJustify(words.slice(i), maxWidth));
    } else {
        return mergeLastLine(wordInLine, lastLength, maxWidth);
    }
};

function mergeLine(words, wordLength, maxWidth) {
    let wordsCount = words.length;
    if (words.length <= 2) {
        return [words[0], ' '.repeat(maxWidth - wordLength), words[1]||''].join('')
    }
    const count = wordsCount - 1; //length - 1 intervals
    const spaces = Math.floor((maxWidth - wordLength) / count);
    const lastWord = words[wordsCount - 1];
    const lastWordLength = lastWord.length;
    return [mergeLine(words.slice(0, wordsCount - 1), wordLength - lastWordLength, maxWidth - lastWordLength - spaces), ' '.repeat(spaces), lastWord].join('');
}

function mergeLastLine(words, wordLength, maxWidth) {
    return [[words.join(' '), ' '.repeat(Math.max(0, maxWidth - wordLength - words.length + 1))].join('')];
}

console.log(fullJustify([""], 0));
//console.log(fullJustify(["What","must","be","shall","be."], 12));
// console.log(fullJustify(["a","b","c","d","e"], 3));
console.log(fullJustify([""], 2));
// console.log(fullJustify(["a", "b", "c", "d", "e"], 1));
// console.log(fullJustify(["This", "is", "an", "example", "of", "text", "justification."], 16));
// console.log(fullJustify(["This", "is", "an", "example", "of", "text", "justification."], 18));
// console.log(fullJustify(["This", "is", "an", "example", "of", "text", "justification."], 100));