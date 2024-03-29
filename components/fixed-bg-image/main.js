import Image from 'next/image'

export function FixedBgImage({ imageUrl }) {
  return (
    <div className="fixed invisible xl:visible opacity-80 z-0 bottom-[-6px] left-0 pointer-events-none">
      <Image
        src={imageUrl}
        alt="image"
        width="258"
        height="406"
        layout="intrinsic"
      />
    </div>
  )
}
