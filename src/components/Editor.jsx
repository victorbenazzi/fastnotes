import { useEditor, EditorContent, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { initialContent } from "./initialContent";
import { RxFontBold, RxFontItalic, RxStrikethrough } from "react-icons/rx";

export function Editor() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: initialContent,
    editorProps: {
      attributes: {
        class: "outline-none",
      },
    },
  });

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
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={`p-2 text-zinc-700 text-sm flex items-center font-medium leading-none hover:text-zinc-800 hover:bg-white ${
              editor.isActive("bold") ? "is-active" : ""
            }`}>
            <RxFontBold className="w-4 h-4" />
          </button>
          <button className="p-2 text-zinc-700 text-sm flex items-center font-medium leading-none hover:text-zinc-800 hover:bg-white">
            <RxFontItalic className="w-4 h-4" />
          </button>
          <button className="p-2 text-zinc-700 text-sm flex items-center font-medium leading-none hover:text-zinc-800 hover:bg-white">
            <RxStrikethrough className="w-4 h-4" />
          </button>
        </BubbleMenu>
      )}
    </>
  );
}
