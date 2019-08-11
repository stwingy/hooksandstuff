import React, { useState } from 'react';
import './Hangman.css';
import img1 from './images/img1.png';
import img2 from './images/img2.png';
import img3 from './images/img3.png';
import img4 from './images/img4.png';
import img5 from './images/img5.png';
import img6 from './images/img6.png';
import img7 from './images/img7.png';
import { randomWord } from './words'

let W=randomWord()
function Hangman({maxWrong = 7}) {
    const images = [ img1, img2, img3, img4, img5, img6, img7 ];
	const[word,setWord ]=useState(W)
	const arr=Array.from(word)
    const[ correctWord,setcorrectWord] = useState(arr);
    let ac =correctWord.reduce((tot,curr)=>{
        tot +=(curr===" "? " /  ":"_ ")
           return tot
         },"")
	const [ guessedLetters, setGuessedLetters ] = useState(new Set());
	const [ right, setRight ] = useState(ac);
	const [ nGuesses, setNGuesses ] = useState(0);
	const [ nWrong, setNWrong ] = useState(0);

	
    function restart(ww){
     





 ac =Array.from(ww).reduce((tot,curr)=>{
    tot +=(curr===" "? " /  ":"_ ")
       return tot
     },"")
     setGuessedLetters(new Set())
     setRight(ac)
     setNGuesses(0)
	 setNWrong(0)
	 setWord(ww)
	 setcorrectWord (Array.from(ww));
	
    }

	function checkRight() {
		
		
		let a = correctWord.map((ltr) =>{ 
            return(
               
           ltr===" "?" / ": guessedLetters.has(ltr) ? ltr : ' _ ')});

		setRight(a);
	
	}
	function guessLetter(event,e) {
		event.persist()
		setNWrong((nWrong) => nWrong + (correctWord.includes(e) ? 0 : 1));
		setGuessedLetters(guessedLetters.add(e));
		checkRight();
		setNGuesses((nGuesses) => nGuesses + 1);
	}
	function generateButtons() {
		const letterArray = [
			'a',
			'b',
			'c',
			'd',
			'e',
			'f',
			'g',
			'h',
			'i',
			'j',
			'k',
			'l',
			'm',
			'n',
			'o',
			'p',
			'q',
			'r',
			's',
			't',
			'u',
			'v',
			'w',
			'x',
			'y',
			'z'
		];
		return letterArray.map((letter) => (
			<button onClick={(event) => guessLetter(event,letter)} key={letter}disabled ={guessedLetters.has(letter)}>
				{letter}
			</button>
		));
	}
	function checker(){
		console.log(word)
	if(Array.isArray(right)){
		const a =right.filter(i=>i !==" / ")
		//console.log(a.join("")===word.replace(/\s/g, ""))
		return a.join("")===word.replace(/\s/g, "")
	}
	
	}
    function checkGameOver(){
		const check =checker()
		console.log(check)
		if(check){
			return <div>
				<h2 style={{borderBottom:"none"}}>You Won</h2>
				<p>The answer was <em>"{word}"</em></p>
				<button onClick ={()=>restart(randomWord())}>Restart</button>
			</div>
		}
        if(nWrong<maxWrong){
            return <div className ="bholder">
                <img src={images[nWrong]} style={{ width: '300px', height: '300px',marginLeft:"auto",marginRight:"auto",display:"block" }} alt ={`${nGuesses}`}/>
                <h2>{right}</h2>
				<div>
{generateButtons()}
				</div>
			
			
            </div>
		
        }else{
            
        return(
            <>
            <h2 style={{borderBottom:"none"}}>{`You Lose! Should have been "${word}"`}</h2>
            <button onClick ={()=>restart(randomWord())}>Restart</button>
            </>
        )
        }
    }
	return (
		<div className="mainH">
			<div className="Hangman">
				<h1>hangman</h1>
				<p>{`You have had ${nGuesses} guesses`} </p>
				<p>{`And have ${nWrong} wrong out of a possible ${maxWrong} `}</p>
				
				<div className="btnHolder">{checkGameOver()}</div>
				
			</div>
		
		</div>
	);
}

export default Hangman;
