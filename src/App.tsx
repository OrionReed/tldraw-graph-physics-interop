import { Editor, Tldraw } from "@tldraw/tldraw";
import "@tldraw/tldraw/tldraw.css";
import { ToolbarUi } from "./ToolbarUi";
import { CollectionProvider } from "../tldraw-collections/src";
import { PhysicsCollection } from "./physics/PhysicsCollection";
import { GraphLayoutCollection } from "./graph/GraphLayoutCollection";
import { useState } from "react";

const collections = [PhysicsCollection, GraphLayoutCollection]

export default function Canvas() {
	const [editor, setEditor] = useState<Editor | null>(null)

	return (
		<div className="tldraw__editor">
			<Tldraw
				autoFocus
				onMount={setEditor}
				persistenceKey="tldraw-physics"
			>
				{editor && (
					<CollectionProvider editor={editor} collections={collections}>
						<ToolbarUi />
					</CollectionProvider>
				)}
			</Tldraw>
		</div>
	);
}