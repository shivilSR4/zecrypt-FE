import { LoginPage } from '@/components/login-page';

export default async function LocalizedLoginPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  // Await params to resolve the Promise
  const { locale } = await params;

  // Pass as 'language' prop instead of 'locale' to match the component's prop interface
  return <LoginPage language={locale} />;
}