'use client'

import { useRouter } from 'next/navigation'
import type { Language } from 'sakuin'
import { languages } from 'sakuin'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select'

export function LanguageSwitch({ currentLocale }: { currentLocale: Language }) {
  const router = useRouter()
  return (
    <Select
      value={currentLocale}
      onValueChange={(locale: Language) => {
        router.push(`/${locale}`)
      }}
    >
      <SelectTrigger className="w-[120px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {languages.map(language => (
          <SelectItem value={language} key={language}>
            {language}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
