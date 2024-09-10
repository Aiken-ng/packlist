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

export default function App() {
  const suggestionsArray = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape", "Honeydew"];
   const showSuggestions = (e: React.KeyboardEvent) => {
        const input = document.getElementById('textInput') as HTMLInputElement;
            const suggestionBox = document.getElementById('suggestions');
            if (suggestionBox !== null){
                suggestionBox.innerHTML = '';
                if (input !== null) {
                    const filteredSuggestions = suggestionsArray.filter(item => 
                        item.toLowerCase().startsWith(input.value.toLowerCase())
                    );
                    if (filteredSuggestions.length > 0) {
                        suggestionBox.style.display = 'block';
                        filteredSuggestions.forEach(suggestion => {
                            const suggestionDiv = document.createElement('div');
                            suggestionDiv.textContent = suggestion;
                            suggestionDiv.onclick = function() {
                                input.value = suggestion;
                                suggestionBox.style.display = 'none';
                            };
                            suggestionBox.appendChild(suggestionDiv);
                        });
                    } else {
                        suggestionBox.style.display = 'none';
                    }
                } else {
                    suggestionBox.style.display = 'none';
                }
            }
    };
  
  return(
      <main>
        <ul>
          <li><Link href="/"><a>Home</a></Link></li>
          <li><Link href="/changeoutlook"><a>Reassemble</a></Link></li>
        </ul>
        <div>
           <input id="textInput" type="text" onKeyUp={showSuggestions} placeholder="Start typing..."/>
        </div>
        <div id="suggestions"></div>
      </main>
  );
}
