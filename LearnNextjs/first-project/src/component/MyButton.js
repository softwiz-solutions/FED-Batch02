const MyButton = (props) => {
  const { title, handleClick } = props;
  return <button onClick={handleClick}> {title}</button>;
};
export default MyButton;
