import React from 'react';

const Sidebar = () => {
  const dataStructures = [
    'Array',
    'Linked List',
    'Stack',
    'Queue',
    'Tree',
    'Graph',
    'Hash Table',
  ];

  return (
    <div className="w-1/6 bg-[var(--background)] p-4 h-full border-r border-gray-300">
      <input
        type="text"
        placeholder="Search..."
        className="w-full p-2 border border-gray-300 rounded-md"
      />
      <ul className="mt-4">
        {dataStructures.map((ds) => (
          <li key={ds} className="p-2 hover:bg-gray-200 cursor-pointer">
            {ds}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
