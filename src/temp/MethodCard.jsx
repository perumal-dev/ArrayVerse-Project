const MethodCard = ({
  title,
  description,
}) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
      <h3 className="text-xl font-bold text-blue-600 mb-3">
        {title}
      </h3>

      <p className="text-slate-600">
        {description}
      </p>
    </div>
  );
};

export default MethodCard;