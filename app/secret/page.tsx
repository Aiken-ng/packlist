"use client";
import { useState, useEffect } from "react";
import React from "react"
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import "../all_pages.css";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import Link from "next/link";
import "@aws-amplify/ui-react/styles.css";
Amplify.configure(outputs);

const TypingEffect: React.FC<{ text: string; speed?: number }> = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      if (index < text.length-1) {
        setDisplayedText(prev => prev + text[index]);
        index += 1;
      } else {
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed]);

  return (
    <div style={{
      fontFamily: 'Courier New, Courier, monospace',
      fontSize: '20px',
      borderRight: '3px solid #000',
      whiteSpace: 'pre-wrap', // Ensure text wraps
      overflowWrap: 'break-word', // Handle long words
      maxWidth: '100%', // Ensure it fits within its container
      animation: 'blink-caret 0.75s step-end infinite',
    }}>
      {displayedText}
      <style>{`
        @keyframes blink-caret {
          from, to { border-color: transparent; }
          50% { border-color: black; }
        }
      `}</style>
    </div>
  );
};

function App() {
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [showQR, setShowQR] = useState(false);
    
    const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (password == "deeploveofGod") {
      setShowQR(true);
    } else {
      setShowQR(false);
      setError("Wrong Password!")
    }
  };
  
  return (
      <main>
        <ul>
        <li><Link href="/"><a>Home</a></Link></li>
        <li><Link href="/puzzle3"><a>Puzzle 3</a></Link></li>
        <li><Link href="/puzzle3_clue"><a>Puzzle 3 hint 1</a></Link></li>
          <li><Link href="/puzzle3_clue2"><a>Puzzle 3 hint 2</a></Link></li>
        </ul>

        <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>
        {error && (
          <div style={{ color: 'red', marginBottom: '10px' }}>
            <p>{error}</p>
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
    
      {showQR && (
        <div style={{ marginTop: '20px' }}>
          <a href="https://t.me/andy_GG_2023_bot">Click here</a>:)))
            <p>or scan here</p>:
            <img src="/tele-qrcode.png" style={{ height: '340px' }} alt="telegram QR code-image!" />
          Congrats on completing Puzzle 3!
        </div>
      )}
        <div><Link href="https://www.youtube.com/watch?v=7ypHVEiHbHo"><a>https://www.youtube.com/watch?v=7ypHVEiHbHo</a></Link></div>
      </main>
  );
}
export default App;
