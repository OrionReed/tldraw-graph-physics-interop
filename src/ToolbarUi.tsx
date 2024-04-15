import { track, useEditor } from "@tldraw/tldraw";
import { useEffect } from "react";
import "./css/toolbar-ui.css";
import { useCollection } from "../tldraw-collections/src";

export const ToolbarUi = track(() => {
  const editor = useEditor();
  const { collection: physicsCollection, size: physicsSize } = useCollection('physics')
  const { collection: graphCollection, size: graphSize } = useCollection('graph')

  const handleAddPhysics = () => {
    if (physicsCollection) {
      physicsCollection.add(editor.getSelectedShapes())
      editor.selectNone()
    }
  }

  const handleRemovePhysics = () => {
    if (physicsCollection) {
      physicsCollection.remove(editor.getSelectedShapes())
      editor.selectNone()
    }
  }

  const handleShortcutPhysics = () => {
    if (!physicsCollection) return
    if (physicsSize === 0)
      physicsCollection.add(editor.getCurrentPageShapes())
    else
      physicsCollection.clear()
  };

  const handleHelp = () => {
    alert("Use the 'Add' and 'Remove' buttons to add/remove selected shapes, or hit 'P' to add/remove all shapes. \n\nUse the highlight button (🔦) to visualize shapes in the simulation. \n\nShapes' physical properties vary by color (Orange is bouncy, Blue is slippery, Violet is a keyboard-controlled character, etc). \n\nYou can group shapes for compound rigidbodies. \n\nFor more details, check the project's README.");
  }

  const handleHighlightPhysics = () => {
    if (physicsCollection) {
      editor.setHintingShapes([...physicsCollection.getShapes().values()])
    }
  }

  const handleAddGraph = () => {
    if (graphCollection) {
      graphCollection.add(editor.getSelectedShapes())
      editor.selectNone()
    }
  }

  const handleRemoveGraph = () => {
    if (graphCollection) {
      graphCollection.remove(editor.getSelectedShapes())
      editor.selectNone()
    }
  }

  const handleShortcutGraph = () => {
    if (!graphCollection) return
    const empty = graphCollection.getShapes().size === 0
    if (empty)
      graphCollection.add(editor.getCurrentPageShapes())
    else
      graphCollection.clear()

  };

  const handleHighlightGraph = () => {
    if (graphCollection) {
      editor.setHintingShapes([...graphCollection.getShapes().values()])
    }
  }

  useEffect(() => {
    window.addEventListener('togglePhysicsEvent', handleShortcutPhysics);
    return () => {
      window.removeEventListener('togglePhysicsEvent', handleShortcutPhysics);
    };
  }, [handleShortcutPhysics]);

  useEffect(() => {
    window.addEventListener('toggleGraphLayoutEvent', handleShortcutGraph);

    return () => {
      window.removeEventListener('toggleGraphLayoutEvent', handleShortcutGraph);
    };
  }, [handleShortcutGraph]);

  return (
    <div className="custom-layout">
      <div className="custom-toolbar">
        <div>
          <span>{physicsSize} shapes</span>
          <button
            type="button"
            title="Add Selected"
            className="custom-button"
            onClick={handleAddPhysics}
          >
            Add
          </button>
          <button
            type="button"
            title="Remove Selected"
            className="custom-button"
            onClick={handleRemovePhysics}
          >
            Remove
          </button>
          <button
            type="button"
            title="Highlight Collection"
            className="custom-button"
            onClick={handleHighlightPhysics}
          >
            🔦
          </button>
          <span>|</span>
          <button
            type="button"
            title="Add Selected"
            className="custom-button"
            onClick={handleAddGraph}
          >
            Add
          </button>
          <button
            type="button"
            title="Remove Selected"
            className="custom-button"
            onClick={handleRemoveGraph}
          >
            Remove
          </button>
          <button
            type="button"
            title="Highlight Collection"
            className="custom-button"
            onClick={handleHighlightGraph}
          >
            🔦
          </button>
          <div>{graphSize} shapes</div>
        </div>
      </div>
    </div>
  );
});
