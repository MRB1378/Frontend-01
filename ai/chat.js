const form   = document.getElementById('chat-form');
const input  = document.getElementById('user-input');
const msgs   = document.getElementById('messages');

// Helper to add a message bubble
function appendMessage(text, who='bot') {
    const div = document.createElement('div');
    div.className = `message ${who}`;
    div.textContent = text;
    msgs.appendChild(div);
    msgs.scrollTop = msgs.scrollHeight; // auto‑scroll
}

// Simple function to call the API (you can adjust endpoint/path)
async function sendToAPI(prompt) {
    const url = 'mrb1378.server.net/api/v1/chat/completions';  // <-- relative to server2.net
    const payload = {
        model: "gpt-oss-20b",
        messages: [{role:"user", content: prompt}]
    };

    try {
        const res = await fetch(url, {
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(payload)
        });

        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const data = await res.json();

        // Extract the assistant message (adjust according to your API response format)
        const reply = data.choices[0].message.content.trim();
        return reply;
    } catch(err) {
        console.error(err);
        return "Sorry, I couldn't reach the server.";
    }
}

form.addEventListener('submit', async e => {
    e.preventDefault();
    const userText = input.value.trim();
    if (!userText) return;

    appendMessage(userText, 'user');
    input.value = '';
    input.focus();

    // Show a placeholder while waiting
    appendMessage("Thinking…", 'bot');

    const reply = await sendToAPI(userText);
    // Remove the "Thinking…" placeholder (first bot message)
    msgs.lastChild.remove();
    appendMessage(reply, 'bot');
});
