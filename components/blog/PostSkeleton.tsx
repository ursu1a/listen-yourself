import { Card, Skeleton } from "@heroui/react";

export const PostSkeleton = () => {
  return (
    <Card className="space-y-4 bg-none shadow-none">
      <Skeleton className="rounded-lg">
        <div className="h-[160px] bg-default-100" />
      </Skeleton>
      <div className="space-y-4">
        <Skeleton className="rounded-lg">
          <div className="h-4 bg-default-100" />
        </Skeleton>
        <Skeleton className="rounded-lg">
          <div className="h-12 bg-default-100" />
        </Skeleton>
      </div>
    </Card>
  );
};
