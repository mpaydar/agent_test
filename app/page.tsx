"use client";

import { useState } from "react";

export default function Home() {
  const [prompt, setPrompt] = useState("");

  return (
    <div className="flex min-h-screen flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="flex w-full max-w-xl flex-col items-center gap-4 px-6">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Ask me anything..."
          rows={4}
          className="w-full resize-none rounded-2xl border border-black/10 bg-white p-4 text-base text-black shadow-sm outline-none transition-colors focus:border-black/20 dark:border-white/15 dark:bg-zinc-900 dark:text-zinc-50 dark:focus:border-white/25"
        />
        <button
          type="button"
          className="rounded-full bg-black px-8 py-3 text-base font-medium text-white shadow-md transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
