interface AvatarProps {
  userId: string;
  isLarge?: boolean;
  hasBorder?: boolean;
}

import useUser from "@/hooks/useUser";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useCallback } from "react";

const Avatar: React.FC<AvatarProps> = ({ userId, isLarge, hasBorder }) => {
  const router = useRouter();
  const { data: fetchedUser } = useUser(userId);

  const onClick = useCallback(
    (event: any) => {
      event.stopPropagation();

      const url = `/users/${userId}`;

      router.push(url);
    },
    [router, userId]
  );
  return (
    <div
      className={`
      ${hasBorder ? "border-black border-4" : ""} 
      ${isLarge ? "h-32 w-32" : "h-12 w-12"}
      rounded-full hover:opacity-90 transition cursor-pointer relative
      `}
    >
      <Image
        fill
        style={{ objectFit: "cover", borderRadius: "100%" }}
        alt="avatar"
        onClick={onClick}
        src={fetchedUser.profileImage || "/images/placeholder.png"}
      />
    </div>
  );
};

export default Avatar;
