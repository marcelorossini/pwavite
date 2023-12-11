import { Breadcrumbs, Anchor } from "@mantine/core";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";
import { useNavigate, Link  } from "react-router-dom";

const items = [
  { title: "HOME", href: "/" },
  { title: "FLORES E JARDINAGEM", href: "#" },
  { title: "EXP90118", href: "#" },
].map((item, index) => (
  <Link className="text-xs" to={item.href} key={index}>
    {item.title}
  </Link>
));

export default function BreadcrumbsComponent() {
  const navigate = useNavigate();

  return (
    <div className="w-full flex pb-4 gap-4">
      <div className="xl:hidden w-8 h-8 bg-slate-200 text-slate-800 flex items-center justify-center rounded-md cursor-pointer" onClick={() => navigate(-1)}>
        <HiOutlineChevronLeft size={20} />
      </div>
      <div className="h-8 flex-1 overflow-hidden flex justify-start relative">
        <div className="w-fit h-full overflow-hidden flex items-center rounded-md ">
          <Breadcrumbs separator={<HiOutlineChevronRight size={20} />}>
            {items}
          </Breadcrumbs>
        </div>
        {/*
        
        <div className="absolute top-0 right-0 w-8 h-full bg-gradient-to-l from-white border">
            
        </div>
        */}
      </div>
    </div>
  );
}
