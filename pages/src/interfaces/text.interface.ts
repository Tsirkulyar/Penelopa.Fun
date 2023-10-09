export interface IText{
    id: number;
    title: string;
    author: string;
}
// происходит описание базы данных 

export interface ITextData{
    cars: IText[]
}
export interface ITextDataSingle {
    car: IText
}