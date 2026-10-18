import Photo from './Photo';

// A photo inside a temple-arch (jharokha) frame: the one repeated shape of the site.
export default function Arch({ name, className = '', eager = false, ratio = '4 / 5' }) {
  return (
    <figure className={`arch ${className}`} style={{ '--arch-ratio': ratio }}>
      <Photo name={name} eager={eager} />
    </figure>
  );
}
