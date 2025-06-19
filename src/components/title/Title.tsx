import "../../styles.css"
type TitleProps = {
    title: string;
    description?: string;
}

function Title({ title, description }: TitleProps) {
  return (
    <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">{title}</h2>
        <p className="text-lg max-w-2xl mx-auto">{description}</p>               
    </div> 
  );
}

export default Title;