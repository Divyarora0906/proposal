import React, { useState } from 'react';
import "./App.css";
import Heart from './Heart';

const Home = () => {
    const [day, setDay] = useState('');
    const [name, setName] = useState('');
    const [note, setNote] = useState('');
    const [generatedLink, setGeneratedLink] = useState('');
    const [copied, setCopied] = useState(false);
    const [senderName, setSenderName] = useState('');

    const handleGenerateLink = () => {
        if (day && name && senderName) {
            const link = `http://localhost:5173/custom?day=${encodeURIComponent(day)}&name=${encodeURIComponent(name)}&note=${encodeURIComponent(note)}&sender=${encodeURIComponent(senderName)}`;
            setGeneratedLink(link);
        } else {
            alert("Please select a day, enter a name, and provide your name!");
        }
    };
    
    const handleReset = () => {
        setDay('');
        setName('');
        setNote('');
        setGeneratedLink('');
        setCopied(false);
    };

    const handleCopy = () => {
        if (generatedLink) {
            navigator.clipboard.writeText(generatedLink);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <div className='Full-Container'>
            <Heart />
            <div className='Inner-Container'>
                <form onSubmit={(e) => e.preventDefault()}>
                    <h2>Proposal</h2>

                    <div className='first-field'>
                        <label>Choose a Day:</label>
                        <select value={day} onChange={(e) => setDay(e.target.value)} required>
                            <option value="">Select a Day</option>
                            <option value="Rose Day">🌹 Rose Day</option>
                            <option value="Propose Day">💍 Propose Day</option>
                            <option value="Chocolate Day">🍫 Chocolate Day</option>
                            <option value="Teddy Day">🧸 Teddy Day</option>
                            <option value="Promise Day">🤞 Promise Day</option>
                            <option value="Hug Day">🤗 Hug Day</option>
                            <option value="Kiss Day">💋 Kiss Day</option>
                            <option value="Valentine's Day">❤️ Valentine's Day</option>
                        </select>
                    </div>

                    <div className="second-field">
                        <label>Crush/GF Name:</label>
                        <input
                            type="text"
                            placeholder="Enter name..."
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="second-field">
                        <label>Your Name:</label>
                        <input
                            type="text"
                            placeholder="Enter your name..."
                            value={senderName}
                            onChange={(e) => setSenderName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="third-field">
                        <label>Add a Note:</label>
                        <textarea
                            placeholder="Write a special note..."
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                            maxLength={35}
                        />
                    </div>


                    <div className="button-group">
                        <button type="button" onClick={handleGenerateLink}>Generate Link</button>
                        <button type="button" onClick={handleReset} className="reset-btn">Reset</button>
                    </div>

                    {generatedLink && (
                        <div className="generated-link-container">
                            <p className="generated-link">
                                Your special link: <a href={generatedLink} target="_blank" rel="noopener noreferrer">{generatedLink}</a>
                            </p>
                            <br />
                            <button type="button" onClick={handleCopy} className="copy-btn">
                                {copied ? "Copied!" : "Copy Link"}
                            </button>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Home;
