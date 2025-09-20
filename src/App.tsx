import ImportDoc from "./components/ImportDoc";
import Navigation from "./components/Navigation";
import Results from "./components/Results";
import Selection from "./components/Selection";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "./components/ui/resizable";

function App() {
	return (
		<div className="flex flex-col items-center gap-4 p-4">
			{/* Create loading animation before hand */}
			<Navigation /> {/* Add navigation */}

      <ResizablePanelGroup direction="horizontal" className="flex justify-around gap-4 w-full max-w-5/6">
      <ResizablePanel defaultSize={30}>
				<Selection /> {/* Add Side bar with the selection of component */}
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel className="w-full flex flex-col gap-4" defaultSize={70}>
					<ImportDoc />
					<Results /> {/* Results component with buttons to export */}
      </ResizablePanel>
      </ResizablePanelGroup>
		</div>
	);
}

export default App;
