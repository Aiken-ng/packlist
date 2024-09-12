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
// Require to show the browser cookies of the website of which item is stored on the database.
// check off the items that are with you before leaving
export default function App() {
  return(
      <main>
        <ul>
          <li><Link href="/"><a>Home</a></Link></li>
          <li><Link href="/changeoutlook"><a>Reassemble</a></Link></li>
        </ul>
        <h2>
          The Following items with you
        </h2>
      </main>
  );
}
