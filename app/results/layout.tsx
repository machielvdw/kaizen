import React, { Suspense } from "react";
import SkeletonLoader from "@/components/skeleton-loader";

export const dynamic = "force-dynamic";

export default function ResultsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Suspense fallback={<SkeletonLoader />}>{children}</Suspense>;
}
