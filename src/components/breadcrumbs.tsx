import { Breadcrumbs, Anchor } from "@mantine/core";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";
import { useNavigate, Link  } from "react-router-dom";

const items = [
  { title: "HOME", href: "/" },
  //{ title: "FLORES", href: "#" },
  { title: "FLORES E JARDINAGEM", href: "#" },
  { title: "EXP90118", href: "#" },
].map((item, index) => (
  <Link className="text-xs" to={item.href} key={index}>
    {item.title}
  </Link>
)).reverse();

export default function BreadcrumbsComponent() {
  const navigate = useNavigate();

  return (
    <div className="w-full flex pb-4 gap-2">
      <div className="xl:hidden w-8 h-8 bg-blue-600 text-white flex items-center justify-center rounded-md" onClick={() => navigate(-1)}>
        <HiOutlineChevronLeft size={20} />
      </div>
      <div className="h-8 flex-1 overflow-hidden flex justify-start md:justify-end">
        <div className="w-fit h-full overflow-hidden flex items-center px-4 bg-slate-100 rounded-md rtl">
          <Breadcrumbs separator={<HiOutlineChevronRight size={20} />}>
            {items}
          </Breadcrumbs>
        </div>
      </div>
    </div>
  );
}
