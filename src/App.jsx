import { Editor } from "./components/Editor";

export function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-zinc-700 bg-gradient-to-r from-violet-200 to-pink-200 ">
      <div
        className="w-[100%] h-screen md:w-[80%] xl:w-[1100px] sm:h-[720px] mx-auto rounded-xl bg-white shadow-sm overflow-hidden flex flex-col "
        id="windowFrame">
        <header className="bg-zinc-100 border-b border-zinc-200 p-4">
          <div className="flex gap-1 group">
            <button className="w-3 h-3 rounded-full bg-red-400"></button>
            <button className="w-3 h-3 rounded-full bg-yellow-400"></button>
            <button className="w-3 h-3 rounded-full bg-green-400"></button>
          </div>
        </header>
        <main>
          <Editor />
        </main>
      </div>
    </div>
  );
}
