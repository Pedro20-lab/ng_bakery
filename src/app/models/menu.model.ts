export interface Product {
    id: number;
    nombre: string;
    precio: number;
    descripcion: string
}

export interface Menu {
    id: number;
    name: string;
    icon: string;
    productos: Product[];
    
}