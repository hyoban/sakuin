import { ExternalLink } from './external-link'

export function ListItem(
  {
    title,
    description,
    superscript,
    link,
  }: {
    title: string
    description: string
    superscript: string
    link: string
  },
) {
  return (
    <ExternalLink
      href={link}
      className="-mx-3 px-3 py-3 flex flex-col font-normal no-underline rounded-md hover:bg-neutral-50 dark:hover:bg-neutral-800"
    >
      <div className="flex gap-2">
        <span>{title}</span>
        <span className="opacity-70 text-xs">
          {superscript}
        </span>
      </div>
      <span className="opacity-70 mt-1">{description}</span>
    </ExternalLink>
  )
}
