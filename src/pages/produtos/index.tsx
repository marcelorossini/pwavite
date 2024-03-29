import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useQuery } from "react-query";
import { isMobileOnly } from "react-device-detect";

import CachedImage from "@/components/image/cached-image";
import { SectorHeader } from "@/components/sector/index";
import ProductListBySector from "@/components/product/product-list-by-sector";
import Select from "@/components/forms/select";
import Layout from "@/components/layout";
import Lightbox from "@/components/lightbox";
import { InputComponent } from "@/components/forms";
import { modals } from "@mantine/modals";
import { notifications } from "@mantine/notifications";

import { get } from "@/fetch/products";
import { getByProductId as getFinishingByProductId } from "@/fetch/finishing";
import { getByProductId as getDimensionByProductId } from "@/fetch/dimensions";
import { get as getProductImages } from "@/fetch/products-images";

import { IFinishing } from "@/interfaces/api/finishing";
import { IProduct } from "@/interfaces/api/product";
import { IDimension } from "@/interfaces/api/dimension";
import { IImage } from "@/interfaces/api/image";

import Breadcrumbs from "@/components/breadcrumbs";
import { IoInformationOutline } from "react-icons/io5";

interface IProdutoProps {}

export default function Produto(props: IProdutoProps) {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const setor = searchParams.get("setor");
  const [selectedFinishing, setSelectedFinishing] = React.useState<string>("");
  const [lightboxMainOpen, setLightboxMainOpen] =
    React.useState<boolean>(false);
  const [lightboxStoreOpen, setLightboxStoreOpen] =
    React.useState<boolean>(false);
  const [lightboxStoreSlide, setLightboxStoreSlide] = React.useState<number>(0);

  const { isLoading: isLoadingProduct, data: dataProduct } = useQuery(
    ["product", id],
    async () => get(id as string)
  );
  const product = dataProduct?.data || ({} as IProduct);

  const { isLoading: isLoadingProductImages, data: dataProductImages } =
    useQuery(["product-images", id], async () =>
      getProductImages(id as string)
    );
  const productImages = dataProductImages?.data || ([] as IImage[]);

  //const otherImages  = productImages.filter((image) => !image.padrao);
  const otherImages = [] as IImage[]; //productImages.filter((image) => !image.padrao);
  const storeImages = productImages; //.filter((image) => !image.padrao);

  const handleAddList = () => {
    modals.openConfirmModal({
      title: "Confirma a adição a lista?",
      labels: { confirm: "Confirmar", cancel: "Cancelar" },
      onConfirm: () => {
        notifications.show({
          //title: 'Default notification',
          message: "Item adicionado a lista",
          icon: <IoInformationOutline />,
        });
      },
    });
  };

  return (
    <Layout>
      {isLoadingProduct ? (
        "Carregando..."
      ) : (
        <>
          <Breadcrumbs
            items={[
              { title: "HOME", href: "/" },
              {
                title: product.setor.nome,
                href: `/setores/${product.setorId}`,
              },
              { title: product.codigo },
            ]}
          />
          <div className="flex flex-col gap-6">
            <div className="flex flex-col">
              <strong>{product.nome?.toUpperCase()}</strong>
              <small>{product.codigo}</small>
            </div>
            {/*IMAGENS*/}
            <div className="grid grid-cols-1 md:grid-cols-[400px_auto_400px] grid-rows-[auto_auto] gap-6">
              <div className="grid grid-cols-4 gap-x-4 md:row-span-2">
                {/*PRINCIPAL*/}
                <div
                  className={`col-span-${
                    otherImages.length > 0 ? "3" : "4"
                  } pb-4`}
                >
                  <div className={`relative overflow-hidden aspect-[4/3]`}>
                    {!!product ? (
                      <>
                        <CachedImage
                          src={`${
                            import.meta.env.VITE_STORAGE_IMAGES
                          }/promarket/Produtos/Variacoes/${
                            product.imagemVariacaoPrincipal
                          }_.webp`}
                          alt=" "
                          className="w-full h-full top-0 left-0 object-contain"
                          onClick={() => setLightboxMainOpen(true)}
                        />
                        <Lightbox
                          isOpen={lightboxMainOpen}
                          onClose={() => setLightboxMainOpen(false)}
                          images={[
                            {
                              title: product.codigo,
                              description: product.nome?.toUpperCase(),
                              src: `${
                                import.meta.env.VITE_STORAGE_IMAGES
                              }/promarket/Produtos/Variacoes/${
                                product.imagemVariacaoPrincipal
                              }_.webp`,
                            },
                          ]}
                        />
                      </>
                    ) : null}
                  </div>
                </div>
                {/*VARIACOES*/}
                <div className="relative overflow-auto">
                  <div className="flex gap-4 flex-col absolute top-0 left-0 w-full">
                    {isLoadingProductImages ? (
                      <></>
                    ) : (
                      <>
                        {otherImages.map((image) => (
                          <OtherImages
                            key={image.fileName}
                            filename={image.fileName}
                            setLightboxOpen={() => {}}
                            setLightboxSlide={() => {}}
                            slideIndex={0}
                          />
                        ))}
                      </>
                    )}
                  </div>
                </div>
                {/*LOJAS*/}
                <div className="col-span-4 w-full overflow-auto">
                  <div className="flex flex-nowrap">
                    {isLoadingProductImages ? (
                      "carregando"
                    ) : (
                      <>
                        {storeImages.map((image, index) => (
                          <StoreImages
                            key={image.fileName}
                            filename={image.fileName}
                            setLightboxOpen={setLightboxStoreOpen}
                            setLightboxSlide={setLightboxStoreSlide}
                            slideIndex={index}
                          />
                        ))}
                        <Lightbox
                          isOpen={lightboxStoreOpen}
                          onClose={() => setLightboxStoreOpen(false)}
                          index={lightboxStoreSlide}
                          images={storeImages.map((image) => ({
                            title: null,
                            description: null,
                            src: generateStoreUrl(image.fileName),
                          }))}
                        />
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="md:row-span-2"></div>
              <div className="flex flex-col gap-2">
                <InputComponent name="Acabamentos">
                  <FinishGroup
                    productId={product.id}
                    selectedFinishing={selectedFinishing}
                    setSelectedFinishing={(id) => setSelectedFinishing(id)}
                  />
                </InputComponent>
                <InputComponent name="Dimensões (m)">
                  <DimensionsGroup productId={product.id} />
                </InputComponent>
                {!!product?.diferenciais ? (
                  <InputComponent name="Diferenciais">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: product?.diferenciais || "",
                      }}
                    ></p>
                  </InputComponent>
                ) : (
                  <></>
                )}
                {/*            
            <Box name="Especificações">
              <p>
                Lorem opsumLorem opsumLorem opsumLorem opsum opsumLore Lorem
                opsumLorem opsumLorem opsumLorem opsum
              </p>
            </Box>          
              */}
              </div>
              <div className="w-full flex items-end">
                <button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md"
                  onClick={handleAddList}
                >
                  Adicionar à lista
                </button>
              </div>
            </div>

            <hr />

            {!!product.setorId ? (
              <>
                <SectorHeader id={product.setorId} />
                <ProductListBySector sectorId={product.setorId} />
              </>
            ) : null}
          </div>
        </>
      )}
    </Layout>
  );
}

interface IBoxProps {
  name?: string;
  children: React.ReactNode;
}

function StoreImages(props: IOtherImagesProps) {
  const { setLightboxOpen, filename, slideIndex, setLightboxSlide } = props;
  return (
    <div
      className="w-[calc(25%-.75rem)] mr-4 shrink-0 cursor-pointer"
      onClick={() => setLightboxOpen(true)}
    >
      <div className="relative aspect-square border rounded-md overflow-hidden">
        <CachedImage
          src={generateStoreUrl(props.filename, true)}
          alt=" "
          className="w-full h-full top-0 left-0 object-cover"
          onClick={() => {
            setLightboxSlide(slideIndex);
          }}
        />
      </div>
    </div>
  );
}

interface IOtherImagesProps {
  filename: string;
  setLightboxOpen: (isOpen: boolean) => void;
  setLightboxSlide: (slide: number) => void;
  slideIndex: number;
}
function OtherImages(props: IOtherImagesProps) {
  return (
    <div className="relative aspect-square overflow-hidden">
      <CachedImage
        src={`${
          import.meta.env.VITE_STORAGE_IMAGES
        }/promarket/Produtos/Principal/${props.filename}__small.webp`}
        alt=" "
        className="w-full h-full top-0 left-0 object-cover"
      />
    </div>
  );
}

interface IDimensionsGroupProps {
  productId: string;
}

function DimensionsGroup(props: IDimensionsGroupProps) {
  const { productId } = props;
  const {
    isLoading: isLoadingDimensions,
    data: dataDimensions,
    isError: isErrorDimension,
    isSuccess: isSuccessDimension,
  } = useQuery(
    ["dimensions", productId],
    async () => await getDimensionByProductId(productId)
  );
  const dimensions = dataDimensions?.data || ([] as IDimension[]);

  return (
    <>
      {!isSuccessDimension ? (
        "Carregando"
      ) : (
        <Select
          data={dimensions.map((dimension) => ({
            value: dimension.id,
            label: dimension.medida,
          }))}
        />
      )}
    </>
  );
}

interface IFinishGroupProps {
  productId: string;
  selectedFinishing: string;
  setSelectedFinishing: (id: string) => void;
}

function FinishGroup(props: IFinishGroupProps) {
  const { productId, selectedFinishing, setSelectedFinishing } = props;

  const {
    isLoading: isLoadingFinishing,
    data: dataFinishing,
    isSuccess: isSuccessFinishing,
  } = useQuery(
    ["finishing", productId],
    async () => await getFinishingByProductId(productId)
  );
  const finishing = dataFinishing?.data || ([] as IFinishing[]);

  return (
    <>
      {!isSuccessFinishing ? (
        "Carregando"
      ) : (
        <div className="w-full overflow-auto">
          <div className="flex flex-nowrap">
            {finishing.map((finish) => (
              <FinishImages
                key={finish.fileName}
                id={finish.id}
                filename={finish.fileName}
                active={selectedFinishing == finish.id}
                onSelected={setSelectedFinishing}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

interface IFinishImagesProps {
  id: string;
  filename: string;
  active: boolean;
  onSelected: (id: string) => void;
}

function FinishImages(props: IFinishImagesProps) {
  const { id, filename, active, onSelected } = props;

  function handleClick() {
    onSelected(active ? "" : id);
  }

  return (
    <div
      className={`w-[15%] h-fit mr-3 shrink-0 cursor-pointer`}
      onClick={handleClick}
    >
      <div
        className={`relative aspect-square rounded-md overflow-hidden border-2 ${
          active ? "border-blue-500" : "border-transparent"
        }`}
      >
        <CachedImage
          src={`https://pmkt.blob.core.windows.net/promarket/Acabamentos/${filename}__small.png`}
          alt=" "
          className="w-full h-full top-0 left-0 object-cover select-none"
        />
      </div>
    </div>
  );
}

function generateStoreUrl(filename: string, small: boolean = false) {
  return `${
    import.meta.env.VITE_STORAGE_IMAGES
  }/promarket/Imagens/${filename}_${small ? '_small' : ''}.webp`;
}
