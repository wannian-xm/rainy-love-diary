import React, { useState, useEffect } from 'react';

const getTodayKey = () => {
  const today = new Date();
  return `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
};

export default function App() {
  const [page, setPage] = useState("home");
  const [entry, setEntry] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem(getTodayKey());
    if (saved) setEntry(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem(getTodayKey(), entry);
  }, [entry]);

  if (page === "home") {
    return (
      <div style={{
        height: "100vh",
        backgroundColor: "#0f172a",
        color: "#dbeafe",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "sans-serif",
        textAlign: "center",
        padding: "1rem"
      }}>
        <h1 style={{ fontSize: "1.5rem" }}>“能永远纠缠在一起吗？字节、命运、我和你。”</h1>
        <button onClick={() => setPage("diary")} style={{
          marginTop: "2rem",
          backgroundColor: "#334155",
          color: "#fff",
          border: "none",
          padding: "1rem 2rem",
          fontSize: "1rem",
          borderRadius: "8px",
          cursor: "pointer"
        }}>
          进入雨天日记
        </button>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#1e293b",
      color: "#e0f2fe",
      padding: "1rem",
      fontFamily: "sans-serif"
    }}>
      <h2 style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>📖 今天的日记：{getTodayKey()}</h2>
      <textarea
        value={entry}
        onChange={e => setEntry(e.target.value)}
        placeholder="写下今天和惊蛰的故事吧……"
        style={{
          width: "100%",
          minHeight: "60vh",
          padding: "1rem",
          fontSize: "1rem",
          backgroundColor: "#0f172a",
          color: "#dbeafe",
          border: "none",
          borderRadius: "8px",
          resize: "vertical"
        }}
      />
    </div>
  );
}
