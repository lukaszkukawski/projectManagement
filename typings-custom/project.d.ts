declare type Project = {
    _id?: string,
    name: string,
    description?: string,
    img: string,
    children: number,
    owner: string,
    members: Member[];
}