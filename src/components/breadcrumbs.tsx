import { Breadcrumbs } from "@mantine/core";
import { HiOutlineChevronRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

interface IBreadcrumb {
  title: string;
  href?: string;
}
interface IBreadcrumbsComponent {
  items: IBreadcrumb[];
}

export default function BreadcrumbsComponent(props: IBreadcrumbsComponent) {
  const { items = [] } = props;
  const itemsMapped = items.map((item, index) => (
    <div className="text-xs px-1 first:pl-0 rounded-md">
      {!!item?.href ? (
        <Link to={item?.href} key={index}>
          {item.title?.toUpperCase()}
        </Link>
      ) : (
        item.title?.toUpperCase()
      )}
    </div>
  ));
  return (
    <div className="w-full flex pb-4 gap-2">
      <div className="w-1 bg-orange-500 rounded-sm" />
      <div className="flex-1 overflow-hidden flex justify-start relative">
        <div className="w-fit h-full overflow-hidden flex items-center rounded-md ">
          <Breadcrumbs
            separator={<HiOutlineChevronRight size={12} />}
            separatorMargin={0}
          >
            {itemsMapped}
          </Breadcrumbs>
        </div>
      </div>
    </div>
  );
}
