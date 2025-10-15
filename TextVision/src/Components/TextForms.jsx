import React, { useState } from 'react';
import TextToSpeech from './TextToSpeech';

export default function TextForm(props) {
    const [Text, setText] = useState("");
    const [textColor, setTextColor] = useState("#000000");
    const [vowel, setVowel] = useState(0);
    const [consonent, setConsonent] = useState(0);


    function updateUpCase() {
        let upperText = Text.toUpperCase();
        setText(upperText);
    }

    function updateLoCase() {
        let lowerCase = Text.toLowerCase();
        setText(lowerCase);
    }

    function TrimText() {
        let TrimText = Text.trim();
        setText(TrimText);
    }

    function SpeakText() {
        if (Text.trim().length == 0) {
            return alert("Please enter some text first!")
        }
        let synthesis = window.speechSynthesis;
        let voice = new SpeechSynthesisUtterance(Text);
        synthesis.speak(voice);
    }

    function cleartext() {
        let lowerCase = '';
        setText(lowerCase);
        setVowel(0)
        setConsonent(0)
    }

    function handleChange(evt) {
        setText(evt.target.value);
    }

    function reverseWords(text) {
        let str = text.trim().split(/\s+/);
        let i = 0;
        let j = str.length - 1;
        while (i < j) {   //TC=O(n/2)
            let temp = str[i];
            str[i] = str[j];
            str[j] = temp;
            i++;
            j--;
        }
        setText(str.join(" "));
    }

    const removeNumbers = () => {
        let newText = Text.replace(/[0-9]/g, "");
        setText(newText);
    };

    const removeSpecialCharacter = () => {
        let newText = Text.replace(/[^a-zA-Z0-9 ]/g, "");
        setText(newText);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleChangeColor = (event) => {
        setTextColor(event.target.value);
    }

    const countVowelConsonant = (text) => {
        let vowelCount = 0;
        let consonantCount = 0;

        const lowerText = text.toLowerCase();

        for (let i = 0; i < lowerText.length; i++) {
            const char = lowerText[i];

            if (/[a-z]/.test(char)) {
                if ("aeiou".includes(char)) {
                    vowelCount++;
                } else {
                    consonantCount++;
                }
            }
        }
        setVowel(vowelCount);
        setConsonent(consonantCount);
    };

    const handleEncodeText = (text) => {
        try {
            let encodedText = btoa(text); // built-in JS function
            setText(encodedText);
            alert("Text encoded successfully!", "success");
        } catch (error) {
            alert("Failed to encode text. Make sure it’s plain text.", "danger");
        }

    };

    const handleDecodeText = (text) => {
        try {
            let decodedText = atob(text);
            setText(decodedText);
            alert("Text decoded successfully!", "success");
        } catch (error) {
            alert("Failed to decode text. Ensure it’s valid Base64.", "danger");
        }
    };

    const handleCopyText = (text) => {
        navigator.clipboard
            .writeText(text)
            .then(() => {
                alert("Text copied to clipboard!", "success");
            })
            .catch(() => {
                alert("Failed to copy text!", "danger");
            });
    };

    return (
        <>
            <div id='textarea-container' className={`input-container text-${props.mode === 'light' ? 'dark' : 'light'}`} >

                <h2 className='title'>Enter the Text to analyze</h2>

                <div className="mb-3">
                    <textarea className="form-control" id="myBox" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'gray', color: textColor }} value={Text} placeholder={"Enter the text here"} onChange={handleChange} rows="6"></textarea>
                </div>
                <div id='buttons-container'>
                    <button id="btn" className="btn btn-primary" onClick={updateUpCase}>To upper case</button>
                    <button id="btn" className="btn btn-primary" onClick={updateLoCase}>To lower case</button>
                    <button id="btn" className="btn btn-primary" onClick={TrimText}>Trim the Text</button>
                    <button type='submit' id="btn" className='btn btn-primary' onClick={() => handleCopyText(Text)}>Copy Text</button>
                    <button id="btn" className="btn btn-primary" onClick={() => reverseWords(Text)}> Reverse Words</button>
                    <button id="btn" className="btn btn-primary" onClick={() => removeNumbers()}>Remove number</button>
                    <button id="btn" className="btn btn-primary" onClick={() => removeSpecialCharacter()}>Remove special character</button>


                    <form id='color-input' onSubmit={handleSubmit}>
                        <div id='style-inner'>
                            <input
                                type="color"
                                value={textColor}
                                onChange={handleChangeColor}
                            />
                            <button type='submit' id="btn" className='btn btn-primary'>Set text color</button>
                        </div>
                    </form>

                    <div id='style-border'>
                        <div id='style-inner'>
                            <div style={{ padding: "10px", }}>Vowel: <span style={{ color: '#ff992d' }}>{vowel}</span> &nbsp;
                                Consonent:<span style={{ color: '#ff992d' }}> {consonent}</span></div>
                            <button id="btn" className="btn btn-primary" onClick={() => countVowelConsonant(Text)}>Count vowel & consonent</button>
                        </div>
                    </div>

                    <div id='style-border'>
                        <div id='style-inner'>
                            <button id="btn" className="btn btn-primary" onClick={() => handleEncodeText(Text)}>Encode text
                            </button>

                            <button id="btn" className="btn btn-primary" onClick={() => handleDecodeText(Text)}>Decode text
                            </button>
                        </div>
                    </div>

                    <div id='voice-container'>
                        <TextToSpeech text={Text} mode={props.mode} />
                    </div>

                    <button id="btn" className="btn btn-primary" onClick={SpeakText}>Texts in Voice</button>

                    <button id="btn" className="btn btn-primary" onClick={cleartext}>Clear the text</button>
                </div>

            </div >
            <div id="input-container" className='lastDiv' style={{ color: props.mode === 'light' ? 'GrayText' : 'silver' }}>
                <h2>Your text summery </h2>
                <p id="para" >{Text.split(" ").length - 1} words and {Text.length} Text</p>
                <h4 id="para">Time to read {0.08 * (Text.split(" ").length - 1)}</h4>
            </div>
        </>
    )
}
