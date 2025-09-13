import React, { useState } from "react";

const doctors = [
  { id: 1, name: "Dr. Sawithika", specialization: "Physician" },
  { id: 2, name: "Dr. Antoni Shkraba", specialization: "Cardiologist" },
  { id: 3, name: "Dr. Vinod Raina", specialization: "Oncologist" },
  { id: 4, name: "Dr. Randhir Sud", specialization: "Gastroenterologist" },
  { id: 5, name: "Dr. Sandeep Vaishya", specialization: "Neurologist" },
];

const specializationMap = {
  fever: "Physician",
  cough: "Physician",
  cold: "Physician",
  "chest pain": "Cardiologist",
  "heart pain": "Cardiologist",
  cancer: "Oncologist",
  tumor: "Oncologist",
  stomach: "Gastroenterologist",
  liver: "Gastroenterologist",
  brain: "Neurologist",
  headache: "Neurologist",
};

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hello! Tell me your problem, I will allot you a doctor." },
  ]);
  const [input, setInput] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { from: "user", text: input }]);

    let foundSpec = null;
    for (let key in specializationMap) {
      if (input.toLowerCase().includes(key)) {
        foundSpec = specializationMap[key];
        break;
      }
    }

    if (foundSpec) {
      const filtered = doctors.filter((doc) => doc.specialization === foundSpec);
      const randomDoc = filtered[Math.floor(Math.random() * filtered.length)];
      setSelectedDoctor(randomDoc);

      setMessages((prev) => [
        ...prev,
        { from: "bot", text: `You may need a ${foundSpec}. I recommend ${randomDoc.name}.` },
        { from: "bot", text: "Would you like to book an appointment?" },
      ]);
    } else {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "Sorry, I could not understand. Please describe more clearly." },
      ]);
    }

    setInput("");
  };

  const handleBooking = () => {
    if (selectedDoctor) {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: `✅ Appointment booked with ${selectedDoctor.name}` },
      ]);
      setSelectedDoctor(null);
    }
  };

  return (
    <div style={styles.wrapper}>
      {/* Floating button to open/close bot */}
      {!open && (
        <button style={styles.toggleBtn} onClick={() => setOpen(true)}>
          💬 Chat with Bot
        </button>
      )}

      {open && (
        <div style={styles.container}>
          <div style={styles.header}>
            <h4>Doctor Bot 🤖</h4>
            <button style={styles.closeBtn} onClick={() => setOpen(false)}>
              ✖
            </button>
          </div>

          <div style={styles.chatbox}>
            {messages.map((msg, i) => (
              <p
                key={i}
                style={{
                  ...styles.message,
                  background: msg.from === "bot" ? "#f1f1f1" : "#d1e7ff",
                  alignSelf: msg.from === "bot" ? "flex-start" : "flex-end",
                }}
              >
                <b>{msg.from === "bot" ? "Bot: " : "You: "}</b>
                {msg.text}
              </p>
            ))}
          </div>

          {selectedDoctor && (
            <button style={styles.bookBtn} onClick={handleBooking}>
              Book Appointment with {selectedDoctor.name}
            </button>
          )}

          <div style={styles.inputBox}>
            <input
              style={styles.input}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter your symptoms..."
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button style={styles.sendBtn} onClick={handleSend}>
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  wrapper: {
    position: "fixed",
    bottom: "20px",
    left: "20px",
    zIndex: 9999,
  },
  container: {
    width: "320px",
    height: "420px",
    background: "white",
    border: "1px solid #ccc",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  },
  header: {
    background: "#007bff",
    color: "white",
    padding: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  closeBtn: {
    background: "transparent",
    border: "none",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
  },
  chatbox: {
    flex: 1,
    padding: "10px",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  message: {
    padding: "8px 12px",
    borderRadius: "6px",
    maxWidth: "80%",
  },
  inputBox: { display: "flex", borderTop: "1px solid #ddd" },
  input: { flex: 1, padding: "8px", border: "none", outline: "none" },
  sendBtn: {
    padding: "8px 12px",
    border: "none",
    background: "#007bff",
    color: "white",
    cursor: "pointer",
  },
  toggleBtn: {
    padding: "12px 16px",
    background: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "50px",
    cursor: "pointer",
    boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
  },
  bookBtn: {
    margin: "10px",
    padding: "10px",
    background: "green",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};
