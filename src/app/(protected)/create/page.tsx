'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { api } from "@/trpc/react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

type FormInput = {
    repoUrl: string;
    projectName: string;
    githubToken?: string;
}

const CreatePage = () => {
    const { register, handleSubmit, reset } = useForm<FormInput>();
    const createProject = api.project.createProject.useMutation()

    const onSubmit = (data: FormInput) => {
           createProject.mutate({
            githubUrl: data.repoUrl,
            name: data.projectName,
            githubToken: data.githubToken 
           },{
            onSuccess:()=>{
                toast.success('Project created successfully')
            },
            onError:()=>{
                toast.error('Failed to create project')
            }
           }
        );
           return true;
    }
    return (
        <div className="flex items-center gap-12 h-full justify-center">
            {/* <image undraw */}
            <div>
                <div>
                    <h1 className="font-semibold text-2xl">
                        Link your Github Repository
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        Enter the URL of your repository to link it to Grapnel
                    </p>
                </div>
                <div className="h-4">
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input required {...register('projectName', {required:true})}
                                placeholder='Project Name'
                                />
                            <div className="h-2"></div>
<Input required {...register('repoUrl', {required:true})}
                                placeholder='Github Url'
                                />
                                <div className="h-2"></div>
<Input required {...register('githubToken')}
                                placeholder='Github Token (Optional)'
                                />
                                <div className="h-4">

                                </div>
                                <Button type="submit" disabled={createProject.isPending}>
                                    Create Project
                                </Button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )

}

export default CreatePage;