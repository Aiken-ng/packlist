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
        const input = document.getElementById('textInput').value.toLowerCase();
            const suggestionBox = document.getElementById('suggestions');
            // Clear previous suggestions
            suggestionBox.innerHTML = '';
            if (input!) {
                // Filter suggestions based on user input
                const filteredSuggestions = suggestionsArray.filter(item => 
                    item.toLowerCase().startsWith(input)
                );

                if (filteredSuggestions.length > 0) {
                    suggestionBox.style.display = 'block';
                    filteredSuggestions.forEach(suggestion => {
                        const suggestionDiv = document.createElement('div');
                        suggestionDiv.textContent = suggestion;
                        suggestionDiv.onclick = function() {
                            document.getElementById('textInput').value = suggestion;
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
      </main>
  );
}




{/* ////////
<h2>Type a word to see suggestions:</h2>
    <input type="text" id="textInput" onkeyup="showSuggestions()" placeholder="Start typing..." autocomplete="off">
    <div id="suggestions"></div>

    <script>
        const suggestionsArray = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape", "Honeydew"];

        function showSuggestions() {
            const input = document.getElementById('textInput').value.toLowerCase();
            const suggestionBox = document.getElementById('suggestions');

            // Clear previous suggestions
            suggestionBox.innerHTML = '';
            if (input) {
                // Filter suggestions based on user input
                const filteredSuggestions = suggestionsArray.filter(item => 
                    item.toLowerCase().startsWith(input)
                );

                if (filteredSuggestions.length > 0) {
                    suggestionBox.style.display = 'block';
                    filteredSuggestions.forEach(suggestion => {
                        const suggestionDiv = document.createElement('div');
                        suggestionDiv.textContent = suggestion;
                        suggestionDiv.onclick = function() {
                            document.getElementById('textInput').value = suggestion;
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
        } */}
