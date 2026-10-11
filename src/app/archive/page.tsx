'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ArchiveForwarder() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/architecture');
  }, [router]);

  return (
    <div className="min-h-screen bg-[#05070a] text-slate-400 flex items-center justify-center font-mono text-xs">
      Redirecting to /architecture...
    </div>
  );
}
