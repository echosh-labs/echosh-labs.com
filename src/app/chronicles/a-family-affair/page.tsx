'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function VoxelRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/foundations/a-family-affair');
  }, [router]);

  return (
    <div className="min-h-screen bg-[#05070a] text-slate-400 flex items-center justify-center font-mono text-xs">
      Redirecting to /foundations/a-family-affair...
    </div>
  );
}
