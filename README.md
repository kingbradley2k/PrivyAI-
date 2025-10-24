# PrivyAI-
A Chrome Extension that brings local, private AI writing assistance using Gemini Nano and Chrome’s built-in AI APIs.  (Built for the Google Chrome Built-in AI Challenge 2025)

Unlike cloud-based AI tools that send user data to remote servers, PrivyAI processes everything locally on the user’s device, ensuring complete privacy, reliability, and instant performance.

🧠 Problem Statement

Millions of users rely on AI writing tools daily — for editing emails, refining reports, or generating summaries. However, most of these tools require sending sensitive text (personal, academic, or corporate) to cloud servers for processing.

This creates privacy and data security risks, especially for individuals working with confidential material such as:

Corporate communications

Academic research

Legal or medical documents

There’s currently no simple, local, privacy-first AI assistant available directly within the browser for text tasks.

💡 Solution

PrivyAI brings secure and intelligent writing assistance to the browser, powered entirely by client-side AI.

It allows users to:

Proofread text with the Proofreader API – correct grammar, spelling, and punctuation.

Rewrite text with the Rewriter API – rephrase content to sound more formal, creative, or concise.

Summarize text with the Summarizer API – extract key insights or short overviews.

(Optional) Detect and anonymize personal data before text is shared externally.

All these actions happen offline, ensuring that no data ever leaves the user’s browser.

🧩 APIs to be Used
API	Purpose	Description
Proofreader API	Grammar & spell checking	Suggests corrections for typos and grammar issues locally.
Rewriter API	Rephrasing	Generates alternate versions of text in different tones or styles.
Summarizer API	Text summarization	Condenses long passages into key points for faster reading.
Prompt API (optional)	Custom AI prompts	Enables multimodal or structured responses for extended functionality later.
🎨 User Flow

User installs the PrivyAI Chrome Extension.

When writing an email, report, or message, the user highlights text and opens the extension popup.

They select an action:

🪶 Proofread

🔁 Rewrite

📄 Summarize

PrivyAI instantly processes the text on-device and displays the result in the popup.

User copies or replaces their text with the improved version.

🧱 Core Features (MVP)

✅ Proofreading (grammar + spelling)
✅ Rewriting (style & clarity improvement)
✅ Summarization (short, medium, or key-points mode)
✅ Offline processing (using Gemini Nano)
✅ Local storage for user preferences (e.g., tone or summary length)

🌟 Stretch Features (if time allows)

🔒 PII Detection: Highlight and anonymize personal info like names or emails.

📊 AI Insights Panel: Show how much text improved in clarity or correctness.

🧩 Multimodal Input: Summarize text from images (using Prompt API with image input).

🎯 Impact

PrivyAI showcases how client-side AI can empower users with intelligent writing assistance while guaranteeing data privacy, offline reliability, and user trust.

It embodies Google’s vision of bringing AI from the cloud to the client — accessible, secure, and efficient.

🛠️ Tech Stack

Platform: Chrome Extension (Manifest V3)

Frontend: HTML, CSS, JavaScript (possibly React for UI polish)

APIs: Proofreader, Rewriter, Summarizer (from Chrome Built-in AI)

Storage: localStorage or IndexedDB (for preferences & settings)

🕒 Timeline
Day	Goal
Day 1–2	Setup environment + test APIs
Day 3–5	Build core MVP (proofread, rewrite, summarize)
Day 6–7	Polish UI + record demo + finalize submission
