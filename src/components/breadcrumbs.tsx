import { Breadcrumbs } from "@mantine/core";
import { HiOutlineChevronRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

const items = [
  { title: "HOME", href: "/" },
  { title: "FLORES E JARDINAGEM", href: "#" },
  { title: "EXP90118", href: "#" },
].map((item, index) => (
  <Link
    className="text-xs px-1 first:pl-0 rounded-md"
    to={item.href}
    key={index}
  >
    {item.title}
  </Link>
));

export default function BreadcrumbsComponent() {
  return (
    <div className="w-full flex pb-4 gap-2">
    <div className="w-1 bg-blue-500 rounded-md"/>
      <div className="flex-1 overflow-hidden flex justify-start relative">
        <div className="w-fit h-full overflow-hidden flex items-center rounded-md ">
          <Breadcrumbs
            separator={<HiOutlineChevronRight size={12} />}
            separatorMargin={0}
          >
            {items}
          </Breadcrumbs>
        </div>
      </div>
    </div>
  );
}
