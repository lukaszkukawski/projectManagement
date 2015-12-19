declare type Subject = {
    _id?: string,
    title: string,
    description: string,
    attachments?: string[],
    projectId: string,
    response: number,
    owner: string,
    properties: PropertySubject[]
}