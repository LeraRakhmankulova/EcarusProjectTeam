
export interface ICategoryProps {
    title: string;
    checked: boolean;
}

export const gender: ICategoryProps[] = [
    {title: "Мужской", checked: false},
    {title: "Женский", checked: false},
]

export const type: ICategoryProps[] = [
    {title: "Одежда", checked: false},
    {title: "Обувь", checked: false},
    {title: "Аксессуары", checked: false},
]

export const brand: ICategoryProps[] = [
    {title: "H&M", checked: false},
    {title: "P&B", checked: false},
    {title: "Adidas", checked: false},
    {title: "Nike", checked: false},
    {title: "Reebok", checked: false},
    {title: "Puma", checked: false},
]

export const allTp: ICategoryProps[] = [
    {title: "Выбрать все", checked: false}
]

export const allBr: ICategoryProps[] = [
    {title: "Выбрать все", checked: false}
]
