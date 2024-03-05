import { Editor } from "./components/Editor";

export function App() {
  return (
    <div className="min-h-screen flex flex-col items-center text-zinc-700">
      <div className="w-full overflow-hidden flex flex-col " id="windowFrame">
        <header className=" border-b border-zinc-200 p-4">
          <div className="flex gap-1">
            <img src="/logo.svg" alt="Logo FastNotes" />
          </div>
        </header>
        <main>
          <Editor />
        </main>
      </div>
    </div>
  );
}
