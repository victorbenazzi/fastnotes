import { Editor } from "./components/Editor";

export function App() {
  return (
    <div className="min-h-screen p-8 text-zinc-700 bg-gradient-to-r from-violet-200 to-pink-200">
      <div className="bg-white w-[1100px] mx-auto rounded-xl min-h-[720px] shadow-sm overflow-hidden grid grid-cols-[16rem_1fr]">
        <aside className="bg-zinc-100 border-r border-zinc-100 p-4">
          <div className="flex gap-1 group">
            <button className="w-3 h-3 rounded-full bg-red-400"></button>
            <button className="w-3 h-3 rounded-full bg-yellow-400"></button>
            <button className="w-3 h-3 rounded-full bg-green-400"></button>
          </div>
        </aside>
        <main className="p-4">
          <Editor />
        </main>
      </div>
    </div>
  );
}
