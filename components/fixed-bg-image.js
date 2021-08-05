import Image from 'next/image'

export function FixedBgImage({ imageUrl }) {
  return (
    <div className="fixed z-0 bottom-[-6px] left-0">
      <Image
        src={imageUrl}
        alt="image"
        width="258"
        height="406"
        layout="intrinsic"
      />
      <style jsx>{`
        div {
          display: none;
        }
        @media only screen and (min-width: 1040px) {
          div {
            display: initial;
          }
        }
      `}</style>
    </div>
  )
}
