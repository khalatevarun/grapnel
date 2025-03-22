import { db } from "@/server/db";
import { auth, clerkClient } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const SyncUSer = async () => {

    const { userId } = await auth();
    if(!userId){
        throw new Error("User not found");
    }

    const client = await clerkClient();
    const user = await client.users.getUser(userId);
    if(!user.emailAddresses[0]?.emailAddress){
        throw new Error("Email not found");
    }

    await db.user.upsert({
        where: {
            emailAddress: user.emailAddresses[0].emailAddress,
        },
        update: {
            imageUrl: user.imageUrl,
            firstName: user.firstName,
            lastName: user.lastName,
        },
        create: {
            clerkId: user.id,
            emailAddress: user.emailAddresses[0].emailAddress,
            imageUrl: user.imageUrl,
            firstName: user.firstName,
            lastName: user.lastName,
        },
    });

    return redirect("/dashboard");
    }


export default SyncUSer;