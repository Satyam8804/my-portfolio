const Capsule = ({ skill, isSkill }) => {
  if (isSkill) {
    return (
      <span className="inline-flex items-center text-xs font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 px-2.5 py-1 rounded-md hover:bg-accent-100 dark:hover:bg-accent-500/15 hover:text-accent-700 dark:hover:text-accent-300 transition-colors duration-150 cursor-default">
        {skill}
      </span>
    );
  }

  return (
    <span className="group inline-flex items-center gap-1.5 text-xs font-semibold text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 px-3 py-1.5 rounded-full hover:border-accent-400 dark:hover:border-accent-500 transition-colors duration-200 cursor-default">
      <span className="w-1.5 h-1.5 rounded-full bg-accent-500 group-hover:scale-125 transition-transform duration-200" />
      {skill}
    </span>
  );
};

export default Capsule;
