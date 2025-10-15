import React, { useEffect, useState } from "react";


export default function TextToSpeech(props) {
    const [voices, setVoices] = useState([]);
    const [selectedVoice, setSelectedVoice] = useState(null);

    useEffect(() => {
        const synth = window.speechSynthesis;

        const loadVoices = () => {
            const availableVoices = synth.getVoices();
            setVoices(availableVoices);
            if (availableVoices.length > 0 && !selectedVoice) {
                setSelectedVoice(availableVoices[0]);
            }
        };

        // Load voices immediately if available, else when they change
        loadVoices();
        synth.onvoiceschanged = loadVoices;
    }, [selectedVoice]);

    const handleVoiceChange = (event) => {
        const voice = voices.find((v, i) => i === parseInt(event.target.value));
        setSelectedVoice(voice);
    };

    const handleSpeak = (text) => {
        if (text.trim().length==0) return alert("Please enter some text first!");

        const speech = new SpeechSynthesisUtterance(text);
        if (selectedVoice) {
            speech.voice = selectedVoice;
        }
        window.speechSynthesis.speak(speech);
    };

    return (
        <div id='voice-inner-container'>
            <select
                style={{
                    backgroundColor: props.mode === 'light' ? '#bfc4c9' : '#455a76',
                    color: props.mode === 'light' ? 'dark' : '#f8f9fa',
                }}
                className=' form-select'
                onChange={handleVoiceChange}
                value={voices.indexOf(selectedVoice)}
            >
                {voices.map((voice, i) => (
                    <option key={i} value={i}>
                        {voice.name} ({voice.lang})
                    </option>
                ))}
            </select>

            <button className="btn btn-primary" onClick={()=>handleSpeak(props.text)}>
                Speak
            </button>
        </div>
    );
}
