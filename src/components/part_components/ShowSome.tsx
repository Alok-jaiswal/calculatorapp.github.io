interface Props {
  text?: string;
  amount?: number;
}
const ShowSome = ({ text, amount }: Props) => {
  return (
    <span className="text-success ml-4 font-weight-bold border border-info p-2 rounded m-2 mt-2 ">
      <span>{text}</span> 
      <span className="border-info"> {amount}</span>
    </span>
  );
};

export default ShowSome;
