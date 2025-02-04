// components/Tip.js
export default function Tip({ children }) {
  return (
    <div
      style={{
        borderLeft: '5px solid #4caf50',
        padding: '10px',
        backgroundColor: '#e8f5e9',
        borderRadius: '5px',
      }}
    >
      <strong style={{ color: '#4caf50' }}>💡 TIP:</strong> {children}
    </div>
  );
}
