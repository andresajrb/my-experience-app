type InputFormikProps = {
    label: string;
    name: string;
    type: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
    value: string;
}
  

  
const InputFormik = ({ label, name, type, onChange, onBlur, value }: InputFormikProps) => {
    return (
      <div className="mb-4">
        <label htmlFor={name} className="block text-gray-800 dark:text-gray-200 font-semibold mb-1">{label}</label>
        <input
          type={type}
          id={name}
          name={name}
          className="w-full px-4 py-2 rounded-md text-gray-800 bg-white dark:bg-[#39445d] dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          autoComplete="off"
          onChange={onChange}
          onBlur={onBlur}
          value={value}
        />
      </div>
    )
}
  
export default InputFormik;