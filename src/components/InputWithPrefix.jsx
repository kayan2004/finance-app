const InputWithPrefix = () => {
  return (
    <div>
      <label>Target</label>
      <div className="w-full flex border border-beige500 rounded-xl gap-3 px-4 py-3">
        <span className="text-beige500">$</span>
        <input
          className="w-full outline-none placeholder:text-beige500"
          type="number"
          placeholder="e.g.2000"
        ></input>
      </div>
    </div>
  );
};

export default InputWithPrefix;
