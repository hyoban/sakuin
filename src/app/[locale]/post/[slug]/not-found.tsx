import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="mx-auto max-w-[692px] px-6 my-6 sm:my-16 antialiased prose prose-neutral dark:prose-invert break-all">
      <h2>The post you were looking for could not be found.</h2>
      <p>
        Go back to
        {' '}
        <Link href="/">home</Link>
      </p>
    </main>
  )
}
