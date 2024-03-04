import { useEditor, EditorContent, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { RxFontBold, RxFontItalic, RxStrikethrough } from "react-icons/rx";
import { Heading1, Heading2, Heading3 } from "lucide-react";

export function Editor() {
  const editor = useEditor({
    extensions: [StarterKit],
    onUpdate: ({ editor }) => {
      const htmlContent = editor.getHTML();
      localStorage.setItem("autosaveContent", htmlContent);
      console.log(localStorage);
    },
    editorProps: {
      attributes: {
        class: "outline-none",
      },
    },
    content: getSavedContentFromLocalStorage(),
  });

  function getSavedContentFromLocalStorage() {
    const savedContent = localStorage.getItem("autosaveContent");
    return savedContent ? savedContent : "";
  }

  return (
    <>
      <EditorContent
        className="max-w-[700px] mx-auto pt-16 prose prose-sky"
        editor={editor}
      />

      {editor && (
        <BubbleMenu
          className="bg-zinc-50 shadow-sm shadow-black/10 border border-zinc-100 rounded-lg overflow-hidden flex divide-x divide-zinc-300"
          editor={editor}>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
            data-active={editor.isActive("heading", { level: 1 })}
            className="p-2 text-zinc-700 text-sm flex items-center font-medium leading-none hover:text-zinc-800 hover:bg-white data-[active=true]:text-sky-500">
            <Heading1 className="w-4 h-4" />
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
            data-active={editor.isActive("heading", { level: 2 })}
            className="p-2 text-zinc-700 text-sm flex items-center font-medium leading-none hover:text-zinc-800 hover:bg-white data-[active=true]:text-sky-500">
            <Heading2 className="w-4 h-4" />
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 3 }).run()
            }
            data-active={editor.isActive("heading", { level: 3 })}
            className="p-2 text-zinc-700 text-sm flex items-center font-medium leading-none hover:text-zinc-800 hover:bg-white data-[active=true]:text-sky-500">
            <Heading3 className="w-4 h-4 " />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            disabled={!editor.can().chain().focus().toggleBold().run()}
            data-active={editor.isActive("bold")}
            className="p-2 text-zinc-700 text-sm flex items-center font-medium leading-none hover:text-zinc-800 hover:bg-white data-[active=true]:text-sky-500">
            <RxFontBold className="w-4 h-4" />
          </button>

          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            disabled={!editor.can().chain().focus().toggleItalic().run()}
            data-active={editor.isActive("italic")}
            className="p-2 text-zinc-700 text-sm flex items-center font-medium leading-none hover:text-zinc-800 hover:bg-white data-[active=true]:text-sky-500">
            <RxFontItalic className="w-4 h-4" />
          </button>

          <button
            onClick={() => editor.chain().focus().toggleStrike().run()}
            disabled={!editor.can().chain().focus().toggleStrike().run()}
            data-active={editor.isActive("strike")}
            className="p-2 text-zinc-700 text-sm flex items-center font-medium leading-none hover:text-zinc-800 hover:bg-white data-[active=true]:text-sky-500">
            <RxStrikethrough className="w-4 h-4" />
          </button>
        </BubbleMenu>
      )}
    </>
  );
}
