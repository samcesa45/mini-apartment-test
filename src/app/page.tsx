import TowersList from '@/features/towers/components/towers-list';

export default function Home() {
  return (
    <>
      <div className="min-h-screen  font-helvetica">
        <main className="flex flex-col">
          <TowersList />
        </main>
      </div>
    </>
  );
}
