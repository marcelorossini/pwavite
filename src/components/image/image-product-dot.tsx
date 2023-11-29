import React from "react";
import { useNavigate } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import { Popover, Text, Button } from "@mantine/core";
import CachedImage from "@/components/cached-image";

export default function ImageProductDot() {
  return (
    <div className="absolute w-full h-full  overflow-hidden">
      <Dot />
    </div>
  );
}

export function Dot() {
  const navigate = useNavigate();
  const refDot = React.useRef<HTMLDivElement>(null);
  const [opened, { close, open }] = useDisclosure(false);

  React.useEffect(() => {
    if (!refDot.current) return;
    const element = refDot.current as HTMLDivElement;

    element.style.left = "50%";
    element.style.top = "50%";
  }, [refDot]);

  return (
    <div ref={refDot} className="absolute w-0 h-0 z-50">
      <Popover
        position="bottom"
        withArrow
        shadow="md"
        opened={opened}
        styles={{ dropdown: { marginTop: "-1rem" } }}
      >
        <Popover.Target>
          <div
            className="absolute top-[-2rem] left-[-2rem] w-[4rem] h-[4rem] z-50 cursor-pointer"
            onMouseEnter={open}
            onMouseLeave={close}
            onClick={() => {
              navigate(
                "/produtos/0fd0e97d-7363-4ea3-be92-f93aba88dd80?setor=3fdf9b10-58ac-42aa-a50e-8ddaff28b52b"
              );
            }}
          />
        </Popover.Target>
        <Popover.Dropdown style={{ pointerEvents: "none" }}>
          <DropdownProduct />
        </Popover.Dropdown>
      </Popover>
      <div className="absolute top-[-1rem] left-[-1rem] w-[2rem] h-[2rem] rounded-full bg-slate-300 animate-ping" />
      <div className="absolute top-[-.50rem] left-[-.50rem] w-[1rem] h-[1rem] rounded-full bg-white opacity-80" />
    </div>
  );
}

export function DropdownProduct() {
  return (
    <div className="grid grid-cols-[128px_300px] gap-x-2 cursor-pointer">
      <div className="row-span-2 aspect-[4/3]">
        <CachedImage
          src={`${
            import.meta.env.VITE_STORAGE_IMAGES
          }/promarket/Produtos/Principal/${"5b69d09ee7dd43f5a7baf9de5807bcba"}_.webp`}
          alt=""
          loading="lazy"
          className="w-full h-full object-contain"
        />
      </div>
      <strong>EXP90001</strong>
      <p className="text-sm">
        MESA PLANA AÇO INOX QUADRADA ISOLAMENTO TÉRMICO PRATELEIRA ARAMADA
        INFERIOR
      </p>
    </div>
  );
}
