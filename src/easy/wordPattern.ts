export function solve(): boolean {
        let pattern = "abba";
        let s = "dog dog dog dog";

        let letters = pattern.split("");
        let words = s.split(" ");

        if(letters.length != words.length) {
                return false;
        }

        let letterToWord= new Map<string,string>();
        let wordToLetter= new Map<string,string>();

        for(let i = 0; i< letters.length; i++) {
                let letter = letters[i];
                let word = words[i];
                let asscWord = letterToWord.get(letter);
                let asscLetter = wordToLetter.get(word);

                if(!asscWord && !asscLetter){
                        letterToWord.set(letter, word);
                        wordToLetter.set(word, letter);

                }else {
                        if(asscWord!=word || asscLetter != letter) {
                                return false;
                        }
                }

        }
        return true;
}
