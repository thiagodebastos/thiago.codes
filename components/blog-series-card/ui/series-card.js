import Link from "next/link";

export function SeriesCard({title, slug, abstract}) {
  return (
    <div>
      <Link href={slug}>
        <h3>{title}</h3>
      </Link>
    </div>
  )
}
