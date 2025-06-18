import "./Title.css";

type TitleProps = {
    title: string;
    description?: string;
}

function Title({ title, description }: TitleProps) {
  return (
    <div className="flex flex-col items-center justify-center p-8">
        <p className="text-4xl font-bold mb-[2%]">{title}</p>
        <p className="text-lg w-[60%] text-center">{description}</p>               
    </div> 
  );
}

export default Title;