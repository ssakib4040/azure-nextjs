import Link from 'next/link';

export default function SmallCard({ Icon, title, slug }) {
  return (
    <Link className="card-small" href={`/project/${slug}`}>
      <h3>{title}</h3>
    </Link>
  );
}
