type SimpleButtonProps = {
    label: string;
    color?: string;
    bgColor?: string;
}

function SimpleButton({label, color = "#f1f1f1", bgColor = "#3b954d"}: SimpleButtonProps) {
  return (
    <button
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded w-70 h-10"
        style={{ color: color, backgroundColor: bgColor, borderRadius: '8px', fontSize: '16px', borderColor: color, borderWidth: '1px', borderStyle: 'solid' }}>
        {label} 
    </button>
  );
}

export default SimpleButton;