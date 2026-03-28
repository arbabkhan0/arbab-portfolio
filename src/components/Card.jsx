const Card = ({ project }) => {
  return (
    <div className="relative min-w-[250px] h-[160px] rounded-lg overflow-hidden group cursor-pointer">

      {/* Image */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center text-center px-4">

        <h2 className="text-lg font-bold mb-2 text-red-500">
          {project.title}
        </h2>

        <p className="text-sm text-gray-300 mb-3">
          {project.description}
        </p>

        <div className="space-x-2">
          <a href={project.github} target="_blank">
            <button className="bg-red-600 px-3 py-1 rounded text-sm">
              GitHub
            </button>
          </a>

          <a href={project.live} target="_blank">
            <button className="border px-3 py-1 rounded text-sm">
              Live
            </button>
          </a>
        </div>

      </div>

    </div>
  );
};

export default Card;