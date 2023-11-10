import Layout from "@/components/layout";
import SectorDotList from "@/components/sector/sector-dot-list";
import SectorList from "@/components/sector/sector-list";

export default function Root() {
  return (
    <Layout>
      <div className="flex flex-col gap-6">
        <SectorDotList />
        <SectorList />
      </div>
    </Layout>
  );
}
