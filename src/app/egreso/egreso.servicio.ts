import { Egreso } from "./egreso.model";

export class EgresoServicio{
    egresos: Egreso[]=[
        new Egreso("colegio Delfi", 4500), new Egreso("Seguro Auto", 4000)
    ];

    eliminar(egreso: Egreso){
        const indice: number= this.egresos.indexOf(egreso);
        this.egresos.splice(indice, 1);
    }
}