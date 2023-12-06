import Layout from "@/components/layout";
import SectorDotList from "@/components/sector/sector-dot-list";
import SectorList from "@/components/sector/sector-list";

export default function Root() {
  return (
    <Layout defaultPadding={false}>
      <div className="flex flex-col gap-4 py-4">
        <SectorDotList className="px-4 min-xl:px-0" />
        <SectorList className="px-4 min-xl:px-0"/>
      </div>
    </Layout>
  );
}
