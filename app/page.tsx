"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import "./all_pages.css";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import Link from "next/link"
// import "@aws-amplify/ui-react/styles.css";

Amplify.configure(outputs);

const client = generateClient<Schema>();

const TypingEffect: React.FC<{ text: string; speed?: number }> = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      if (index < text.length-1)  {
        console.log(text[index])
        console.log(index)
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

export default function App() {
  return(
      <main>
        <ul>
        <li><Link href="/"><a>Home</a></Link></li>
{/*         <li><Link href="/puzzle3"><a>Puzzle 3</a></Link></li>
        <li><Link href="/puzzle3_clue"><a>Puzzle 3 hint 1</a></Link></li>
        <li><Link href="/puzzle3_clue2"><a>Puzzle 3 hint 2</a></Link></li> */}
        </ul>
      </main>
  );
}
