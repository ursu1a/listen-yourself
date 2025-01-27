import { TimerIcon } from "../shared/icons";

import { formatReadTime } from "@/utils/functions";
import { siteConfig as strings } from "@/config/site";

export const ReadTime = ({ time }: { time?: number }) => (
  <div className="flex items-center gap-1 text-default-500 text-small">
    <TimerIcon size={20} />
    <span>{`${formatReadTime(time || 0)} ${strings.blog.read}`}</span>
  </div>
);
