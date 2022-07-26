export interface Content {
    readonly id: number;
    title: string;
    body?: string;        //optional string
    author: string;
    imageLink?: string;  //optional string
    type: string;
    hashtags?: string[]; //optional array of string
    price?: number
    
}
