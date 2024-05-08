/* eslint-disable @next/next/no-img-element */
type AvatarProps = {
  imageUrl: string;
  size?: "sm" | "lg";
};

export function Avatar({ imageUrl, size = "sm" }: AvatarProps) {
  const className = `rounded-full flex items-center justify-center p-2 border-2 border-blue-500 ${
    size === "sm" ? "w-14" : "w-20"
  }`;
  return (
    <div className={className}>
      <img src={imageUrl} alt="avatar" />
    </div>
  );
}
