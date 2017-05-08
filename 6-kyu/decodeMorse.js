/**
 * Created by Joshua Baert on 5/8/2017.
 */


decodeMorse = function(morse){
	console.log(morse);
	MORSE_CODE
	const decode = {
		morse: ['.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....', '..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.', '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-', '-.--', '--..',
			'.----', '..---', '...--', '....-', '.....', '-....', '--...', '---..', '----.', '-----',
			'*','...---...', '.-.-.-', '--..--', '..--..', '.----.', '-.-.--'],
		alpha: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
			'1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
			' ','SOS', '.', ',', '?', '\'', '!'],
	}
	let letters = morse.replace(/\s\s\s/g," * ").replace(/\s+/g, " ").split(' ');
	let sentence = letters
		.map((code,index)=>{
			return decode.alpha[decode.morse.indexOf(code)]
		}).join('')
	return sentence.indexOf(' ') < 1 ? sentence.replace(/\s+/,'') : sentence
}


console.log(decodeMorse('      ...---... -.-.--   - .... .   --.- ..- .. -.-. -.-   -... .-. --- .-- -.   ..-. --- -..-   .--- ..- -- .--. ...   --- ...- . .-.   - .... .   .-.. .- --.. -.--   -.. --- --. .-.-.-  '));
