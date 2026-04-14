import PageLayout from "@/components/PageLayout";
import Shop from "@/components/Shop";
import { Suspense } from "react";

export default function ShopPage() {
  return (
    <PageLayout>
      <Suspense fallback={<div>Loading...</div>}>
        <Shop />
      </Suspense>
    </PageLayout>
  );
}
