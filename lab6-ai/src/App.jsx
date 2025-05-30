
import React, { useState } from "react";
import "./App.css";
function App() {
  const [userInput, setUserInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const apiKey = import.meta.env.VITE_apiKey;
  const handleSend = async () => {
    setLoading(true);
    setResponse("");  // Limpiar la respuesta anterior

    try {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: userInput,
                  },
                ],
              },
            ],
          }),
        }
      );

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(
          `Error ${res.status}: ${errorData.error?.message || "Solicitud fallida"}`
        );
      }

      const data = await res.json();
      const aiReply =
        data.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Gemini no quiso responder.";

      setResponse(aiReply);
    } catch (error) {
      console.error("Error:", error);
      setResponse(`Ocurrió un error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="contenedor">
      <div className="titulo">
        <h2>Interfaz con Gemini</h2>
      </div>
      <div className="chat">
        <input
          className="input"
          placeholder="Escribe tu mensaje para la IA..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />

        <button className="button" onClick={handleSend} disabled={loading}>
          {loading ? "Enviando..." : "Enviar"}
        </button>
      </div>

      <div className="texto">
        <strong>Respuesta:</strong>
        <p>{response}</p>
      </div>
    </div>
  );
}

export default App;
