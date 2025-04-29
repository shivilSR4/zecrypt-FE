import { redirect } from 'next/navigation';

export default async function LocalePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  // Await params to resolve the Promise
  const { locale } = await params;

  // Redirect to the login page
  redirect(`/${locale}/login`);
}