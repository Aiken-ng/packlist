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

function App() {
  return (
      <main>
        <ul>
        <li><Link href="/"><a>Home</a></Link></li>
        <li><Link href="/puzzle3"><a>Puzzle 3</a></Link></li>
        <li><Link href="/puzzle3_clue"><a>Puzzle 3 hint 1</a></Link></li>
          <li><Link href="/puzzle3_clue2"><a>Puzzle 3 hint 2</a></Link></li>
        </ul>
        <div className="App">
        Colossians 1:27-2:3<br />
        To them God has chosen to make known among the Gentiles the glorious riches of this mystery, which is <Link href="/secret"><a>Christ</a></Link> in you, the hope of glory. We proclaim him, admonishing and teaching everyone with all wisdom, so that we may present everyone perfect in <Link href="/scroll1"><a>Christ</a></Link>. To this end I labor, struggling with all his energy, which so powerfully works in me. I want you to know how much I am struggling for you and for those at Laodicea, and for all who have not met me personally. My purpose is that they may be encouraged in heart and united in love, so that they may have the full riches of complete understanding, in order that they may know the mystery of God, namely, <Link href="/snake"><a className="highlight">Christ</a></Link>, in whom are hidden all the treasures of wisdom and knowledge.
        </div>
      </main>
  );
}

export default App;
