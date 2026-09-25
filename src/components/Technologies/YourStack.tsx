import type { Itechnology } from "../../Types/Technology Type";

interface YourStackProps {
  selectedTechs: Itechnology[];

  onRemove: (id: number) => void;

  onRemoveAll: () => void;
}

const YourStack = ({
  selectedTechs,
  onRemove,
  onRemoveAll,
}: YourStackProps) => {

  return (
    <div className="w-72 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">

      <h2 className="text-lg font-bold text-slate-900">
        Your Stack
      </h2>

      <p className="mt-1 text-sm text-slate-400">
        {selectedTechs.length === 0
          ? "No technologies selected yet."
          : `${selectedTechs.length} Technolog${
              selectedTechs.length > 1 ? "ies" : "y"
            } Selected`}
      </p>

      {selectedTechs.length === 0 ? (

        <div className="mt-5 flex h-20 items-center justify-center rounded-xl border border-dashed border-slate-200 text-sm text-slate-400">
          Your stack is empty.
        </div>

      ) : (

        <>

          <div className="mt-5 space-y-2">

            {selectedTechs.map((tech) => (

              <div
                key={tech.id}
                className="flex items-center justify-between rounded-lg border border-slate-200 p-3"
              >

                <div className="flex items-center gap-3">

                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="h-7 w-7 object-contain"
                  />

                  <div>

                    <h3 className="text-sm font-semibold text-slate-800">
                      {tech.name}
                    </h3>

                    <p className="text-[10px] text-slate-400">
                      {tech.category}
                    </p>

                  </div>

                </div>

                <button
                  onClick={() => onRemove(tech.id)}
                  className="text-xl text-slate-400 hover:text-red-500"
                >
                  x
                </button>

              </div>

            ))}

          </div>

          <button
            onClick={onRemoveAll}
            className="mt-5 w-full rounded-lg border border-red-300 py-2.5 text-sm font-medium text-red-500 hover:bg-red-50"
          >
            Remove All
          </button>

        </>

      )}

    </div>
  );
};

export default YourStack;