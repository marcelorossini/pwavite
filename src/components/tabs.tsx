import React from "react";

interface TabsItemsProps {
  id: string;
  name: string;
  icon: React.ReactNode;
  component: React.ReactNode;
}

interface TabsProps {
  items: Array<TabsItemsProps>;
  default: string;
  alignCenter?: boolean;
}

export default function Tabs(props: TabsProps) {
  const { items = [], alignCenter = false } = props;
  const [activeId, setActiveId] = React.useState(props.default);

  return (
      <div>
        <div className="">
          <div className="border-b border-gray-200">
            <nav
              className={`mb-px flex gap-6 ${
                alignCenter ? "justify-center" : ""
              }`}
              aria-label="Tabs"
            >
              {items.map((item) => {
                return (
                  <button
                    key={item.name}
                    type="button"
                    className={`inline-flex shrink-0 items-center gap-2 border-b-2 ${
                      item.id == activeId
                        ? "border-sky-500 px-1 pb-2 text-sm font-medium text-sky-600"
                        : "border-transparent px-1 pb-2 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                    }`}
                    onClick={() => setActiveId(item.id)}
                  >
                    <div>{item.icon}</div>
                    {item.name}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
        <>{items.find((item) => item.id === activeId)?.component}</>
      </div>
  );
}
