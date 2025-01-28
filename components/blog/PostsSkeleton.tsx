import { PostSkeleton } from "./PostSkeleton";

export const PostsSkeleton = () => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-y-5 gap-4">
      {[...Array(5)].map((_, i) => (
        <li key={i}>
          <PostSkeleton />
        </li>
      ))}
    </ul>
  );
};
