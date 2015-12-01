declare type Subject = {
    _id?: string,
    title: string,
    description: string,
    attachments?: string[],
    projectId: string,
    owner: string
}