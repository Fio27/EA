class Users{
    correo;
    nombre;
    apellido;
    nacimiento;
    contraseña;

    constructor(correo, nombre, apellido, nacimiento, contraseña){
        this.correo = correo;
        this.nombre = nombre;
        this.apellido = apellido;
        this.nacimiento = nacimiento;
        this.contraseña = contraseña;
    }

    set correo (correo){
        this.correo = correo;
    }
    get correo(){
        return this.correo;
    }

    set nombre (nombre){
        this.nombre = nombre;
    }
    get nombre(){
        return this.nombre;
    }

    set apellido (apellido){
        this.apellido = apellido;
    }
    get apellido(){
        return this.apellido;
    }

    set nacimiento (nacimiento){
        this.nacimiento = nacimiento;
    }
    get nacimiento(){
        return this.nacimiento;
    }

    set contraseña (contraseña){
        this.contraseña = contraseña;
    }
    get contraseña(){
        return this.contraseña;
    }
}