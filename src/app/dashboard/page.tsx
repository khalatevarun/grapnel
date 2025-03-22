'use client'
import { useUser } from "@clerk/nextjs";


const Dashboard = () => {
    const {user} = useUser();
    if(!user){
        return <div>Loading...</div>
    }
    return (
        <div>
            {user?.firstName}
        </div>
    )

}

export default Dashboard