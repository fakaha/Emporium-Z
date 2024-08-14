export const CardProduct = (props) => {
    const { children } = props
  return (
    <div className="w-full max-w-xs bg-gray-800 border border-gray-700 rounded-lg shadow mx-2 my-2 flex flex-col justify-between">
        {children}
    </div>
  );
};
