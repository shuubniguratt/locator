import type { RouterOutputs } from "@acme/api";
import { format } from "@acme/utils";

export function MeetingCard(props: {
  meeting: RouterOutputs["group"]["all"][number]["days"][number]["meetings"][number];
}) {
  // TODO: Implement 'This is my meeting' badge
  // TODO: Implement 'passed' / 'incoming' badge
  const start = format(props.meeting?.start, "h:mm a");
  const end = format(props.meeting?.end, "h:mm a");
  return (
    <div className="flex flex-row rounded-lg bg-muted p-4">
      <div className="flex-grow">
        <p>
          <span className="font-medium">{start}</span>~
          <span className="font-medium">{end}</span>
        </p>
        <p className="text-xl font-medium text-primary">
          {props.meeting?.topics.join(", ")}
        </p>
      </div>
    </div>
  );
}
