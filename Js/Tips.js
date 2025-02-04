// components/Tip.js
export default function Tip({ children }) {
  return (
    <div
      style={{
        borderLeft: '5px solid #ff9800',
        backgroundColor: '#fff3e0',
        padding: '10px 15px',
        borderRadius: '5px',
        fontSize: '16px',
        color: '#333',
      }}
    >
      <strong style={{ color: '#e65100' }}>💡 TIP:</strong> {children}
    </div>
  );
}
