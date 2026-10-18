import { useState } from 'react';
import { photos } from '../content/photos';
import { useLang } from '../i18n/LangContext';
import Mandala from './Mandala';

// A photo from content/photos.js. If the file is missing or fails to load, a designed
// scene (warm gradient + mandala) takes its place so layouts never show a broken image.
export default function Photo({ name, className = '', eager = false, decorative = false, style }) {
  const { pick } = useLang();
  const [failed, setFailed] = useState(false);
  const photo = photos[name];

  if (!photo || failed) {
    return (
      <div className={`photo-fallback ${className}`} style={style} role={decorative ? undefined : 'img'} aria-label={decorative || !photo ? undefined : pick(photo.alt)} aria-hidden={decorative ? 'true' : undefined}>
        <Mandala className="photo-fallback__mandala" />
      </div>
    );
  }

  return (
    <img
      className={className}
      src={photo.src}
      width={photo.w}
      height={photo.h}
      alt={decorative ? '' : pick(photo.alt)}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      draggable="false"
      style={{ objectPosition: photo.pos, ...style }}
      onError={() => setFailed(true)}
    />
  );
}
