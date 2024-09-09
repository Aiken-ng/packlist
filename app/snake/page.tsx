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
import { useAuthenticator, Authenticator } from '@aws-amplify/ui-react';
Amplify.configure(outputs);
import Snakegame from "../snakegame";

export default function App(){
  return (
      <main>
        <ul>
        <li><Link href="/"><a>Home</a></Link></li>
        <li><Link href="/puzzle3"><a>Puzzle 3</a></Link></li>
        <li><Link href="/puzzle3_clue"><a>Puzzle 3 hint 1</a></Link></li>
          <li><Link href="/puzzle3_clue2"><a>Puzzle 3 hint 2</a></Link></li>
        </ul>
        <h1>Defeat 10 enemies in total!</h1>
        <div className="App" style={{ overflow: 'hidden'}}>
            <Snakegame />
        </div>
        <div>Be careful not to refresh</div>
      </main>
  );
}
