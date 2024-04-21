'use client'

import { useFormStatus } from 'react-dom'

import { Button } from '../ui/button'

export function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button
      type="submit"
      variant="secondary"
      size="sm"
      disabled={pending}
      aria-disabled={pending}
    >
      Submit
    </Button>
  )
}
