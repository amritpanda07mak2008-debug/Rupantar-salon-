import { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface LuxuryImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'eager' | 'lazy';
}

export function LuxuryImage({
  src,
  alt,
  className = 'w-full h-full object-cover',
  loading = 'lazy',
}: LuxuryImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className="w-full h-full min-h-[180px] flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#F7F1E8] via-[#EFE3D5] to-[#E6D1CA] text-[#652B3A]"
      >
        <Sparkles className="w-6 h-6 mb-2 opacity-70" aria-hidden="true" />
        <p className="font-editorial text-lg italic">{alt}</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
