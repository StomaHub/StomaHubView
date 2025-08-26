import type { IconNode } from "lucide-react";
import "../../styles.css"
type SimpleButtonProps = {
    label: string;
    icon?: IconNode
  
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