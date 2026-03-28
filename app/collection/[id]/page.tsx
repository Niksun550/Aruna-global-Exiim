import { Metadata } from 'next';
import { products } from '@/lib/products';
import { notFound } from 'next/navigation';
import ProductClient from '@/components/ProductClient';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = products.find((p) => p.id === parseInt(id));
  if (!product) return { title: 'Product Not Found' };

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: `${product.name} | Aruna Global Exiim`,
      description: product.description,
      images: [{ url: product.img }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.name} | Aruna Global Exiim`,
      description: product.description,
      images: [product.img],
    },
  };
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const product = products.find((p) => p.id === parseInt(id));
  if (!product) notFound();

  return <ProductClient product={product} />;
}
