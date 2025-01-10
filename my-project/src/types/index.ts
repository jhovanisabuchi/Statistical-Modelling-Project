export interface User {
    id: number;
    username: string;
    email: string;
    createdAt: Date;
}

export interface Post {
    id: number;
    userId: number;
    title: string;
    content: string;
    createdAt: Date;
}