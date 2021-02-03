export interface IVisibleProjects {
    image: string;
    title: string;
    description: string;
    category: string;
    project: string;
    link: string;
    public: boolean;
    tags: Array<string>;
}

export interface IService {
    title: string;
    description: string;
    icon: string;
}
