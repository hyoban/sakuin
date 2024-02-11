import { AppearanceSwitch } from "~/components/appearance-switch"
import { Button } from "~/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Button variant="outline">Hi</Button>
      <AppearanceSwitch />
    </div>
  )
}
