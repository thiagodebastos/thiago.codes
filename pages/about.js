import Image from 'next/image'
import { Container } from '@/components/container'

export default function AboutPage() {
  return (
    <Container title="About - Thiago de Bastos">
      <div className="flex flex-col items-start justify-center w-full mx-auto mb-16 max-w-3xl">
        <div className="w-full h-[350px] relative mb-16 opacity-80">
          <Image
            src="/static/images/undraw_Designer_by46.svg"
            alt="developer"
            layout="fill"
          />
        </div>
        <h1 className="mb-8 text-3xl font-bold text-indigo-500 md:text-5xl dark:text-white">
          About Me
        </h1>
        <div className="prose prose-lg dark:prose-dark">
          <p>
            I&apos;m Thiago, a <em>Javascript Developer</em>, based in Sydney.
          </p>

          <p>
            I grew up in Goiânia, Brazil, and moved to Sydney, Australia when I
            was 7 years old. I spent most of my life in Sydney, until my late
            20&apos;s when I moved to England for 2 years, spending most of that
            time in a town at the end of the Thames River named Leigh-on-Sea -
            where I began my journey as a software engineer.
          </p>

          <p>
            Today, I am still on that same learning journey, having pushed
            myself beyond Javascipt into TypeScript, as well as backend
            languages and database query syntax. I keep myself busy pushing my
            capabilities further into the space of Clean Code and Domain Driven
            Design principles and have created this blog to share my journey so
            far.
          </p>

          <p>
            Join me as descend ever deeper into the world of software
            engineering and product development!
          </p>
        </div>
      </div>
    </Container>
  )
}
