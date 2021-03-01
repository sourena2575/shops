export const ButtonCard = ({ text }) => {
  return (
    <div className="w-24 h-24 cursor-pointer hover:bg-green-400 hover:text-white rounded-xl flex flex-col items-center py-6  border-2 hover:border-blue-600">
      <span>{text}</span>
      <span>ریال</span>
    </div>
  );
};
