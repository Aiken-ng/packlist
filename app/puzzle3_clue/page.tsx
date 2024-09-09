"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import "../all_pages.css";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import Link from "next/link"
// import "@aws-amplify/ui-react/styles.css";

Amplify.configure(outputs);

const client = generateClient<Schema>();
const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        alert("Why did you click?");
        alert("I told you not to click?");
        alert("Who asked you to click?");
        alert("Didn't you read do not click?");
        alert("But if you were wondering,");
        alert('Is the word "click" a hyperlink?');
        alert("Who knows what may happen if you try clicking it");
        alert("Though let me warn you, it does say do not click");
        alert("Or maybe clicking something is a good thing");
};

export default function about_us() {
  return(
      <main>
        <ul>
        <li><Link href="/"><a>Home</a></Link></li>
        <li><Link href="/puzzle3"><a>Puzzle 3</a></Link></li>
        <li><Link href="/puzzle3_clue"><a>Puzzle 3 hint 1</a></Link></li>
          <li><Link href="/puzzle3_clue2"><a>Puzzle 3 hint 2</a></Link></li>
        </ul>
      <div>
        <a href="#" style={{ textDecoration: 'underline', fontWeight: 'bolder' }} onClick={handleLinkClick}>Do not </a><a href="#" onClick={handleLinkClick}>click</a>
      </div>
      </main>
  );
}
