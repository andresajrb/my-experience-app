type InputTextAreaFormikProps = {
    label: string;
    name: string;
    rows: number;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onBlur: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
    value: string;
}

const InputTextAreaFormik = ({ label, name, rows, onChange, onBlur, value }: InputTextAreaFormikProps) => {
    return (
      <div className="mb-6">
        <label htmlFor={name} className="block text-gray-800 dark:text-gray-200 font-semibold mb-1">{label}</label>
        <textarea
          id={name}
          name={name}
          rows={rows}
          className="w-full px-4 py-2 rounded-md text-gray-800 bg-white dark:bg-[#39445d] dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          onChange={onChange}
          onBlur={onBlur}
          value={value}
        />
      </div>
    )
}

export default InputTextAreaFormik;