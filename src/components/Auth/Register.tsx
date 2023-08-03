import { useRef } from "react";
interface IRegisterProps {
  setUserName: any;
}

const Register = ({ setUserName }: IRegisterProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.value && setUserName(inputRef.current.value);
  };
  return (
    <div className="start">
      <input
        className="startInput"
        placeholder="enter your name"
        ref={inputRef}
      />
      <button className="startButton" onClick={handleClick}>
        Start
      </button>
    </div>
  );
};

export default Register;
