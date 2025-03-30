import { api } from "@/trpc/react"
import { set } from "date-fns";
import { useLocalStorage } from 'usehooks-ts'

export const useProject = () => {
    const {data: projects} = api.project.getProjects.useQuery();
    const [ projectId, setProjectId] = useLocalStorage('grapnel-projectId','');
    const project = projects?.find(project => project.id === projectId);

    return {
        projects,
        project,
        projectId,
        setProjectId
    }
}