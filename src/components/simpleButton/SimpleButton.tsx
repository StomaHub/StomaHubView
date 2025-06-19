import "../../styles.css"
type SimpleButtonProps = {
    label: string;
  
}

function SimpleButton({label}: SimpleButtonProps) {
  return (
    <button
        className="w-full h-full flex items-center justify-center">
        {label} 
    </button>
  );
}

export default SimpleButton;