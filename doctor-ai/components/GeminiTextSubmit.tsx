import React, { useState } from "react";

const GEMINI_API_KEY = "AIzaSyAQzJVq-Du0w0L6r4cVr7FsdlPTh8tZ45U";
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateText?key=${GEMINI_API_KEY}`;

const GeminiTextSubmit: React.FC = () => {
  const [inputText, setInputText] = useState("");
  const [responseText, setResponseText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    setResponseText("");

    try {
      const response = await fetch(GEMINI_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: inputText }] }],
        }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      const generatedText = data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response received.";

      setResponseText(generatedText);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h2>Gemini Text Submission</h2>
      <textarea
        rows={5}
        style={{ width: "100%", padding: "10px", fontSize: "16px" }}
        placeholder="Enter your text here..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        disabled={loading || !inputText.trim()}
        style={{
          marginTop: "10px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        {loading ? "Processing..." : "Submit"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {responseText && (
        <div style={{ marginTop: "20px", padding: "10px", background: "#f4f4f4", borderRadius: "5px" }}>
          <strong>Response:</strong>
          <p>{responseText}</p>
        </div>
      )}
    </div>
  );
};

export default GeminiTextSubmit;