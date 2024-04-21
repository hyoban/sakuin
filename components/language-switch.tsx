"use client";

import { usePathname, useRouter } from "next/navigation";
import type { Language } from "sakuin";
import { languages } from "sakuin";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

export function LanguageSwitch({ currentLocale }: { currentLocale: Language }) {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <Select
      value={currentLocale}
      onValueChange={(locale: Language) => {
        const nextPathname = pathname.replace(
          `/${currentLocale}`,
          `/${locale}`,
        );
        router.push(nextPathname);
      }}
    >
      <SelectTrigger className="w-[120px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {languages.map((language) => (
          <SelectItem value={language} key={language}>
            {language}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
