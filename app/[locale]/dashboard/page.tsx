import { DashboardLayout } from '@/components/dashboard-layout';
import { LocalizedOverviewContent } from '@/components/localized-overview-content';

export default async function DashboardPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  // Await params to resolve the Promise
  const { locale } = await params;

  return (
    <DashboardLayout locale={locale}>
      <LocalizedOverviewContent />
    </DashboardLayout>
  );
}