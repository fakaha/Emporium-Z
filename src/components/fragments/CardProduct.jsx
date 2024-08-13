export const CardProduct = (props) => {
    const { children } = props
  return (
    <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow mx-2">
        {children}
    </div>
  );
};