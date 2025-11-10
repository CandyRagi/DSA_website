export default function Home() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow overflow-y-auto">
        <h1 className="text-2xl font-bold">Select a Data Structure</h1>
        <p>Click on a data structure from the sidebar to view its details.</p>
      </div>
      <div className="h-1/4 border-t border-gray-300 p-4 w-full">
        <h2 className="text-xl font-bold">Bottom Section</h2>
      </div>
    </div>
  );
}
