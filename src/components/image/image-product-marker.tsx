import React from "react";
import { useNavigate } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import { Popover, Text, Button } from "@mantine/core";
import { isMobileOnly } from "react-device-detect";
import CachedImage from "@/components/cached-image";
import { get } from "@/fetch/products";
import { useQuery } from "react-query";
import { IProduct } from "@/interfaces/api/product";

export interface IImageMarker {
  x: number;
  y: number;
  placeholder: string;
  productId: string;
}

export default function ImageProductMarker({
  markers,
}: {
  markers: IImageMarker[];
}) {
  return (
    <div className="absolute w-full h-full  overflow-hidden">
      {markers.map((item, index) => (
        <Dot key={index} {...item} />
      ))}
    </div>
  );
}

export function Dot(props: IImageMarker) {
  const { x, y, placeholder, productId } = props;
  const navigate = useNavigate();
  const refDot = React.useRef<HTMLDivElement>(null);
  const [opened, { close, open }] = useDisclosure(false);

  React.useEffect(() => {
    if (!refDot.current) return;
    const element = refDot.current as HTMLDivElement;

    element.style.left = `${x}%`;
    element.style.top = `${y}%`;
  }, [refDot]);

  function goToProductPage() {
    navigate(`/produtos/${productId}`);
  }

  return (
    <div ref={refDot} className="absolute w-0 h-0 z-50">
      <Popover
        position="bottom"
        withArrow
        shadow="md"
        opened={opened}
        trapFocus
        offset={20}
        zIndex={10}
        styles={{dropdown: {
          borderRadius: "10px",
          padding: 0
        }}}
      >
        <Popover.Target>
          <div>
            <DotClickArea
              close={close}
              open={open}
              goToProductPage={goToProductPage}
            />
          </div>
        </Popover.Target>
        <Popover.Dropdown>
          <DropdownProduct id={productId} goToProductPage={goToProductPage} />
        </Popover.Dropdown>
      </Popover>
      <div className="absolute top-[-1rem] left-[-1rem] w-[2rem] h-[2rem] rounded-full bg-slate-300 animate-ping cursor-pointer" />
      <div className="absolute top-[-.50rem] left-[-.50rem] w-[1rem] h-[1rem] rounded-full bg-white opacity-80 cursor-pointer" />
    </div>
  );
}

export function DotClickArea(props: {
  close?: any;
  open?: any;
  goToProductPage: () => void;
}) {
  const { goToProductPage, close, open } = props;

  function handleClick() {
    if (isMobileOnly) {
      open();
      setTimeout(() => {
        close();
      }, 2000)
    } else {
      goToProductPage();
    }
  }

  return (
    <div
      className="absolute top-[-2rem] left-[-2rem] w-[4rem] h-[4rem] z-50 cursor-pointer"
      onMouseEnter={open}
      //onMouseLeave={close}
      onClick={handleClick}
    />
  );
}

export function DropdownProduct({
  id,
  goToProductPage,
}: {
  id: string;
  goToProductPage: () => void;
}) {
  const { isLoading: isLoadingProduct, data: dataProduct } = useQuery(
    ["product", id],
    async () => get(id as string)
  );
  const product = dataProduct?.data || ({} as IProduct);

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-[auto_auto] p-4 gap-2 cursor-pointer"
      onClick={goToProductPage}
    >
      {isLoadingProduct ? (
        "Carregando"
      ) : (
        <>
          <div className="w-[36vw] md:w-32 row-span-2 aspect-[4/3]">
            <CachedImage
              src={`${
                import.meta.env.VITE_STORAGE_IMAGES
              }/promarket/Produtos/Principal/${
                product.imagemPrincipal
              }__preview.webp`}
              alt=""
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <strong className="text-center md:text-left md:w-72">
            {product.codigo}
          </strong>
          <p className="text-sm">{product.descricao?.toUpperCase()}</p>
        </>
      )}
    </div>
  );
}
