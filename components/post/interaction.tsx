import type { InteractionCount } from "sakuin";

export function InteractionView({
  interaction,
}: {
  interaction: InteractionCount,
}) {
  return (
    <div className="flex gap-4">
      <span className="flex gap-2 items-center">
        <span className="i-lucide-eye text-sm" />
        <span className="text-lg">{interaction.views}</span>
      </span>
      <span className="flex gap-2 items-center">
        <span className="i-lucide-thumbs-up text-sm" />
        <span className="text-lg">{interaction.likes}</span>
      </span>
      <span className="flex gap-2 items-center">
        <span className="i-lucide-circle-dollar-sign text-sm" />
        <span className="text-lg">{interaction.tips}</span>
      </span>
      <span className="flex gap-2 items-center">
        <span className="i-lucide-message-circle text-sm" />
        <span className="text-lg">{interaction.comments}</span>
      </span>
    </div>
  );
}
