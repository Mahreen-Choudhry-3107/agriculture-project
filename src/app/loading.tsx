'use client';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center">
      <div className="relative mb-8">
        <div className="w-20 h-20 border-4 border-green-100 rounded-full animate-spin" />
        <div className="absolute inset-0 w-20 h-20 border-4 border-transparent border-t-agri-green rounded-full animate-spin" />
        <div className="absolute inset-2 w-16 h-16 border-4 border-transparent border-t-agri-yellow rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }} />
      </div>
      <h1 className="text-2xl font-bold text-agri-green mb-2">Agriculture Department</h1>
      <p className="text-gray-400 text-sm">Government of the Punjab</p>
      <div className="flex gap-1.5 mt-6">
        <span className="w-2 h-2 bg-agri-green rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
        <span className="w-2 h-2 bg-agri-green rounded-full animate-bounce" style={{ animationDelay: '0.15s' }} />
        <span className="w-2 h-2 bg-agri-green rounded-full animate-bounce" style={{ animationDelay: '0.3s' }} />
      </div>
    </div>
  );
}
