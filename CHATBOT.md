# Chatbot Shortcut (Frontend-01/ai)

A simple AI chat UI that sends your message to a local/API endpoint and renders the assistant reply as chat bubbles.

## Files

- `ai/index.html` – Page layout (chat container, messages list, input form) + inline script to call the API
- `ai/chat.js` – (Optional/extra) Helper script that handles chat submission and message rendering using DOM updates
- `ai/style.css` – Basic styling for the chat container, message bubbles, and input/button UI

## UI Behavior

- Messages are shown inside `#messages` as bubbles:
  - user messages align to the right
  - bot/assistant messages align to the left
- When you submit the form:
  - the input is cleared
  - the user message is appended
  - the app calls a chat completions endpoint
  - the assistant reply is appended
- If the request fails, it displays: `⚠️ Something went wrong – check the console.`

## API Request

From `ai/index.html`, the request is made with:

- `POST /api/v1/chat/completions`
- Payload includes:
  - `model: "gpt-4o-mini"`
  - `messages: [{ role: "user", content: message }]`

In `ai/chat.js`, the request is shown as:

- `POST mrb1378.server.net/api/v1/chat/completions`
- Payload includes:
  - `model: "gpt-oss-20b"`
  - `messages: [{ role:"user", content: prompt }]`

## How to Use (quick start)

1. Open `ai/index.html` in your browser (or serve the folder with a small local server).
2. Ensure your backend route exists at:
   - `/api/v1/chat/completions` (as used by `ai/index.html`)
3. Type a message and press **Send**.

## Styling

The chat UI uses `ai/style.css` / inline styles for:
- Chat card container (`#chat-container`)
- Scrollable message area (`#messages`)
- Bubble styles (`.user`, `.bot`)
- Input row layout (`#chat-form`, `#user-input`, button)
