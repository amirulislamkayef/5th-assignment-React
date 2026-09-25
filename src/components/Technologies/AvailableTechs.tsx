import YourStack from "./YourStack";
import type { Itechnology } from "../../Types/Technology Type";
import { toast } from "react-toastify";

interface AvailableTechsProps {
    techList: Itechnology[];

    selectedTechs: Itechnology[];

    onAddToStack: (tech: Itechnology) => void;

    onRemove: (id: number) => void;

    onRemoveAll: () => void;
}

const AvailableTechs = ({
    techList,
    selectedTechs,
    onAddToStack,
    onRemove,
    onRemoveAll,
}: AvailableTechsProps) => {

    return (
        <div className="flex justify-between max-w-7xl mx-auto px-4 my-4 gap-4">

            <div className="grid md:grid-cols-3 gap-3 grid-cols-1">

                {techList.map((tech: Itechnology) => {

                    return (
                        <div
                            key={tech.id}
                            className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                        >

                            <div className="flex items-center justify-between">

                                <img
                                    src={tech.icon}
                                    alt={tech.name}
                                    className="h-10 w-10 object-contain"
                                />

                                <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-500">
                                    {tech.badge}
                                </span>

                            </div>

                            <h2 className="mt-5 text-xl font-bold text-slate-900">
                                {tech.name}
                            </h2>

                            <p className="mt-2 min-h-18 text-sm leading-6 text-slate-500">
                                {tech.description}
                            </p>

                            <div className="mt-4 flex items-center gap-4 border-t border-slate-100 pt-3">

                                <span className="rounded bg-slate-50 px-2 py-1 text-xs text-slate-600">
                                    {tech.category}
                                </span>

                                <span className="text-xs text-slate-500">
                                    {tech.difficulty}
                                </span>

                                <span className="ml-auto flex items-center gap-1 text-sm font-medium text-slate-700">
                                    <span className="text-yellow-500">★</span>
                                    {tech.rating}
                                </span>

                            </div>

                            <button
                                onClick={() => {
                                    onAddToStack(tech);
                                    toast.success(`${tech.name} added to your stack!`);
                                }}
                                className="mt-4 w-full rounded-lg bg-slate-950 py-3 text-sm font-medium text-white transition hover:bg-slate-800 cursor-grab"
                            >
                                Add to Stack
                            </button>

                        </div>
                    );
                })}

            </div>

            <div>
                <YourStack
                    selectedTechs={selectedTechs}
                    onRemove={onRemove}
                    onRemoveAll={onRemoveAll}
                />
            </div>

        </div>
    );
};

export default AvailableTechs;