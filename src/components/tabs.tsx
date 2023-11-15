import React from "react";
import { useSearchParams } from "react-router-dom";

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
  const [searchParams, setSearchParams] = useSearchParams();
  const { items = [], alignCenter = false } = props;
  const [activeId, setActiveId] = React.useState(props.default);

  React.useEffect(() => {
    const selectedTab = searchParams.get("tab")

    if(!!selectedTab) {
      setActiveId(selectedTab);
    }
  }, [searchParams]);

  async function onChangeTab(id: string) {
    setActiveId(id);
    // @ts-ignore
    setSearchParams((prevParams) => {
      searchParams.set("tab", id);
      return searchParams;
    });
  }

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
                  onClick={() => onChangeTab(item.id)}
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
