import { bundles, getBundleBySlug } from "../../../../lib/bundles";
import BundleDetailContent from "./BundleDetailContent";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return bundles.map((bundle) => ({
    slug: bundle.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const bundle = getBundleBySlug(slug);

  if (!bundle) {
    return { title: "Bundle Not Found" };
  }

  return {
    title: `${bundle.name} | Jolli by iZone`,
    description: bundle.description,
  };
}

export default async function BundleDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const bundle = getBundleBySlug(slug);

  if (!bundle) {
    notFound();
  }

  return <BundleDetailContent bundle={bundle} />;
}
