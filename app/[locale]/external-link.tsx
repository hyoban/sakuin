"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

type AppLinkProps = React.PropsWithChildren<{
  transition?: boolean;
  className?: ((isLoading: boolean) => string) | string;
}> &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "className">;

export function AppLink({
  href,
  className,
  children,
  transition,
  ...props
}: AppLinkProps) {
  const router = useRouter();
  const [isLoading, startTransition] = useTransition();
  const classNameFn =
    typeof className === "function" ? className : () => className;
  const classNameStr =
    typeof className === "function" ? className(isLoading) : className;

  if (!href) return <>{children}</>;

  if (href.startsWith("http") && !transition) {
    return (
      <a
        {...props}
        target="_blank"
        rel="noreferrer noopener"
        href={href}
        className={classNameStr}
      >
        {children}
      </a>
    );
  }

  if (!transition) {
    return (
      <Link {...props} href={href} className={classNameStr}>
        {children}
      </Link>
    );
  }

  return (
    <a
      {...props}
      href={href}
      onClick={(e) => {
        e.preventDefault();
        startTransition(() => {
          router.push(href);
        });
      }}
      className={classNameFn(isLoading)}
    >
      {children}
    </a>
  );
}
