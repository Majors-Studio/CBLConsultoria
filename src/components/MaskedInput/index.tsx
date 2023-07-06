import InputMask from "react-input-mask";

interface MaskedInputProps {
  mask: string;
  value?: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  name: string;
}

const MaskedInput = ({
  mask,
  onChange,
  value,
  placeholder,
  required,
  name,
}: MaskedInputProps) => (
  <InputMask
    className="maskinput"
    style={{
      width: "100%",
      backgroundColor: "#f8f8f8",
      padding: "5px 14px",
      borderRadius: "15px",
      height: "50px",
      outline: "none",
      color: "#333",
    }}
    name={name}
    mask={mask}
    maskChar={null}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    required={required}
  />
);

export default MaskedInput;
