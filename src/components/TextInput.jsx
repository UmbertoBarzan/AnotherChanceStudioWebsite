import React from "react";

const TextInput = ({ label, ...props }) => {
  const inputId = `input-${label.replace(/\s+/g, '-').toLowerCase()}`;
  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={inputId}
        {...props}
        placeholder=" "
        className="peer block w-full border border-white/30 bg-transparent px-6 pb-4 pt-12 text-base/6 text-white caret-white ring-4 ring-transparent transition placeholder:text-white/50 focus:border-white focus:outline-none focus:ring-white/10 group-first:rounded-t-2xl group-last:rounded-b-2xl"
      />
      <label
        htmlFor={inputId}
        className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-white/70 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-white peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-white"
      >
        {label}
      </label>
    </div>
  );
};

export default TextInput;
