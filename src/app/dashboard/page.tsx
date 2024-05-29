import { getServerSession } from "next-auth";

import { redirect } from "next/navigation";
import ButtonLogout from "./ButtonLogout";
import Image from "next/image";

export default async function Page() {
  const session = await getServerSession();

  if (!session) {
    redirect("/");
  }

  return (
    <div>
      <div>Olá, {session?.user?.name}</div>

      {session.user?.image && (
        <div className="w-[150px">
          <Image
            src={session.user.image}
            alt="Avatar"
            width={150}
            height={150}
          />
        </div>
      )}

      <div>Dashboard</div>
      <div>
        <ButtonLogout />
      </div>
    </div>
  );
}
