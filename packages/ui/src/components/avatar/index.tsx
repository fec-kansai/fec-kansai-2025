import { type HTMLAttributes, useMemo } from "react";

export type AvatarProps = {
  url?: string;
  x?: string;
  github?: string;
  displayName?: string;
  avatar?: string;
} & HTMLAttributes<HTMLImageElement>;

const avatarImage = ({ displayName, avatar, ...rest }: AvatarProps) => {
  return (
    <div className="grid place-items-center gap-1">
      <img
        src={avatar ?? "/staffs/sample.png"}
        className="w-[6.25rem] h-[6.25rem] rounded-[20px] object-cover"
        {...rest}
        alt={displayName}
      />
      <span className="text-white text-base font-medium">{displayName}</span>
    </div>
  );
};

function Avatar({
  avatar,
  url = "",
  x = "",
  github = "",
  displayName,
  ...rest
}: AvatarProps) {
  const targetUrl = useMemo(() => {
    if (url) return url;
    if (x) return `https://x.com/${x}`;
    if (github) return `https://github.com/${github}`;
    return null;
  }, [url, x, github]);

  if (!targetUrl) {
    return <>{avatarImage({ displayName, avatar, ...rest })}</>;
  }

  return (
    <a href={targetUrl} target="_blank" rel="noreferrer">
      {avatarImage({ displayName, avatar, ...rest })}
    </a>
  );
}

export { Avatar };
