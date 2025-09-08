type AvatarProps = {
  url: string;
  x: string;
  github: string;
  displayName: string;
  avatar: string;
};

function Avatar({ url, x, github, displayName, avatar }: AvatarProps) {
  const targetUrl =
    url !== ""
      ? url
      : x !== ""
        ? `https://x.com/${x}`
        : github !== ""
          ? `https://github.com/${github}`
          : null;

  if (!targetUrl) {
    return (
      <div className="grid place-items-center gap-1">
        <img
          src={avatar ? `/staffs/${avatar}` : "/staffs/sample.png"}
          alt={displayName}
          className="w-[6.25rem] h-[6.25rem] rounded-[20px] object-cover"
        />
        <span className="text-white text-base font-medium">{displayName}</span>
      </div>
    );
  }

  return (
    <a
      href={targetUrl}
      target="_blank"
      rel="noreferrer"
      className="grid place-items-center gap-1"
    >
      <img
        src={avatar ? `/staffs/${avatar}` : "/staffs/sample.png"}
        alt={displayName}
        className="w-[6.25rem] h-[6.25rem] rounded-[20px] object-cover"
      />
      <span className="text-white text-base font-medium">{displayName}</span>
    </a>
  );
}

export { Avatar };
