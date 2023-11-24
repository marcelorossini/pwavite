import Layout from "@/components/layout";
import SectorDotList from "@/components/sector/sector-dot-list";
import SectorList from "@/components/sector/sector-list";

export default function Root() {
  return (
    <Layout defaultPadding={false}>
      <div className="flex flex-col gap-6 py-6 md:p-6">
        <SectorDotList className="px-6 md:p-0" />
        <SectorList className="px-6 md:p-0"/>
      </div>
    </Layout>
  );
}
