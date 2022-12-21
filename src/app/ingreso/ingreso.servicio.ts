import { Ingreso } from "./ingreso.model";

export class IngresoServicio{
    ingresos: Ingreso[]= [
        new Ingreso("Salario", 68000), new Ingreso("Venta Celular", 15000 )
    ];

    eliminar(ingreso: Ingreso){
        const indice: number= this.ingresos.indexOf(ingreso);
        this.ingresos.splice(indice, 1);
    }
}