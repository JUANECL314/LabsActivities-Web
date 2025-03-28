import React from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Table,Button,Container,FormGroup,
    Modal,ModalHeader,ModalBody,ModalFooter,
    } from "reactstrap";

const data  =[
    { idUsuario: 1, nombre: "Juan Eduardo", pApellido: "Cibrián", uApellido: "Loera", estaEnProyecto: "true", porcentajeStaff: 0.75, fechaIngreso: "2023-06-11",fechaNacimiento: "2003-03-14"},
    { idUsuario: 2, nombre: "Axel Ariel", pApellido: "Grande", uApellido: "Ruiz", estaEnProyecto: "true", porcentajeStaff: 0.94, fechaIngreso: "2023-01-10", fechaNacimiento: "2002-08-12"},
    { idUsuario: 3, nombre: "Marco Antonio", pApellido: "Lucio", uApellido: "Sosa", estaEnProyecto: "false", porcentajeStaff: 0.85, fechaIngreso: "2023-09-01", fechaNacimiento: "2003-12-25"},
    { idUsuario: 4, nombre: "Gabriel Ernesto", pApellido: "Mujica", uApellido: "Proulx", estaEnProyecto: "true", porcentajeStaff: 0.77, fechaIngreso: "2022-03-22", fechaNacimiento: "2002-06-30"},
    { idUsuario: 5, nombre: "José Emilio", pApellido: "Ramírez", uApellido: "García", estaEnProyecto: "false", porcentajeStaff: 0.80, fechaIngreso: "2021-02-13", fechaNacimiento: "2001-09-20"},
    { idUsuario: 6, nombre: "Leonardo", pApellido: "Pequeño", uApellido: "Moreno", estaEnProyecto: "true", porcentajeStaff: 0.81, fechaIngreso: "2024-05-16", fechaNacimiento: "2004-02-15"},
];

class Empleados extends React.Component {
    state = {
        data: data,
        modalActualizar: false,
        modalInsertar: false,
        form: {
            idUsuario: "",
            nombre: "",
            pApellido: "",
            uApellido: "",
            estaEnProyecto: "",
            porcentajeStaff: "",
            fechaIngreso: "",
            fechaNacimiento: "",
        },  
    };
    mostrarModalActualizar = (dato) => {
        this.setState({
            form: dato,
            modalActualizar: true,
        });
    };
    cerrarModalActualizar = () =>  {
        this.setState({ modalActualizar: false }); };
        mostrarModalInsertar = () =>  {
        this.setState({
            modalInsertar: true,
        });
    };
    cerrarModalInsertar = () =>  {
        this.setState({ modalInsertar: false }); 
    };

    editar = (dato) => {
        var contador = 0;
        var arreglo = this.state.data;
        arreglo.map((registro) => {
            if (dato.idUsuario === registro.idUsuario) {
                arreglo[contador].nombre = dato.nombre;
                arreglo[contador].pApellido = dato.pApellido;
                arreglo[contador].uApellido = dato.uApellido;
                arreglo[contador].estaEnProyecto = dato.estaEnProyecto;
                arreglo[contador].porcentajeStaff = dato.porcentajeStaff;
                arreglo[contador].fechaIngreso = dato.fechaIngreso;
                arreglo[contador].fechaNacimiento = dato.fechaNacimiento;
            }
            contador++;
        });
        this.setState({ data: arreglo, modalActualizar: false });
    };
    
    eliminar = (dato) => {
        var opcion = window.confirm("Estás seguro que deseas dar de baja a al empleado "+dato.nombre+" "+dato.pApellido+" "+dato.uApellido);
        if (opcion === true) {
            var contador = 0;
            var arreglo = this.state.data;
            arreglo.map((registro) => {
                if (dato.idUsuario === registro.idUsuario) {
                    arreglo.splice(contador, 1);
                }
                contador++;
            });
            this.setState({ data: arreglo, modalActualizar: false });
        }
    };
    insertar = () => {
        var valorNuevo = { ...this.state.form };
        valorNuevo.idUsuario = this.state.data.length + 1;
        var lista = this.state.data;
        lista.push(valorNuevo);
        this.setState({ modalInsertar: false, data: lista });}
        handleChange = (e) => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            },
        });
    };

    render() {
        return (
            <>
            
                <Container>
                    <br />
                    <Button className="btn btn-success" onClick={() => this.mostrarModalInsertar()}>Crear</Button>
                    <br />
                    <Table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Primer Apellido</th>
                                <th>Segundo Apellido</th>
                                <th>Esta en Proyecto</th>
                                <th>Porcentaje Staff</th>
                                <th>Fecha Ingreso</th>
                                <th>Fecha Nacimiento</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.data.map((dato) => (
                                    <tr key = {dato.idUsuario}>
                                        <td>{dato.idUsuario}</td>
                                        <td>{dato.nombre}</td>
                                        <td>{dato.pApellido}</td>
                                        <td>{dato.uApellido}</td>
                                        <td>{dato.estaEnProyecto}</td>
                                        <td>{dato.porcentajeStaff*100+"%"}</td>
                                        <td>{dato.fechaIngreso}</td>
                                        <td>{dato.fechaNacimiento}</td>
                                        <td>
                                            <Button color="primary" onClick={() => this.mostrarModalActualizar(dato)}>Editar</Button>
                                            <Button color="danger" onClick={() => this.eliminar(dato)}>Eliminar</Button>
                                        </td>
                                        </tr>

                                    )
                                )
                            }
                        </tbody>
                    </Table>
                </Container>
                <Modal isOpen={this.state.modalInsertar}>
                    <ModalHeader>
                        <div><h3>Insertar Empleado</h3></div>
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <label>ID: </label>
                            <input className="form-control" readOnly type="text" value={this.state.data.length + 1} />
                        </FormGroup>
                        <FormGroup>
                            <label>Nombre: </label>
                            <input className="form-control" name="nombre" type="text" onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <label>Primer Apellido: </label>
                            <input className="form-control" name="pApellido" type="text" onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <label>Segundo Apellido: </label>
                            <input className="form-control" name="uApellido" type="text" onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <label>Esta en Proyecto: </label>
                            <select className="form-control" name="estaEnProyecto" onChange={this.handleChange}>
                                <option value="true">true</option>
                                <option value="false">false</option>
                            </select>

                        </FormGroup>
                        <FormGroup>
                            <label>Porcentaje Staff: </label>
                            <input className="form-control" name="porcentajeStaff" type="text" onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <label>Fecha Ingreso: </label>
                            <input className="form-control" name="fechaIngreso" type="date" onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <label>Fecha Nacimiento: </label>
                            <input className="form-control" name="fechaNacimiento" type="date" onChange={this.handleChange} />
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button  color="primary" onClick={() =>  this.insertar()} >Insertar </Button> 
                        <Button  className="btn btn-danger" onClick={() =>  this.cerrarModalInsertar()}>Cancelar</Button>
                    </ModalFooter>
                </Modal>
                <Modal isOpen={this.state.modalActualizar}>
                    <ModalHeader>
                        <div><h3>Editar información</h3></div>
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <label>ID: </label>
                            <input className="form-control" readOnly type="text" value={this.state.form.idUsuario} />
                        </FormGroup>
                        <FormGroup>
                            <label>Nombre: </label>
                            <input className="form-control" name="nombre" type="text" onChange={this.handleChange} value={this.state.form.nombre} />
                        </FormGroup>
                        <FormGroup>
                            <label>Primer Apellido: </label>
                            <input className="form-control" name="pApellido" type="text" onChange={this.handleChange} value={this.state.form.pApellido} />
                        </FormGroup>
                        <FormGroup>
                            <label>Segundo Apellido: </label>
                            <input className="form-control" name="uApellido" type="text" onChange={this.handleChange} value={this.state.form.uApellido} />
                        </FormGroup>
                        <FormGroup>
                            <label>Esta en Proyecto: </label>
                            <select className="form-control" name="estaEnProyecto" onChange={this.handleChange}>
                                <option value="true">true</option>
                                <option value="false">false</option>
                            </select>
        
                        </FormGroup>
                        <FormGroup>
                            <label>Porcentaje Staff: </label>
                            <input className="form-control" name="porcentajeStaff" type="text" onChange={this.handleChange} value={this.state.form.porcentajeStaff} />
                        </FormGroup>
                        <FormGroup>
                            <label>Fecha Ingreso: </label>
                            <input className="form-control" name="fechaIngreso" type="date" onChange={this.handleChange} value={this.state.form.fechaIngreso} />
                        </FormGroup>
                        <FormGroup>
                            <label>Fecha Nacimientio: </label>
                            <input className="form-control" name="fechaNacimiento" type="date" onChange={this.handleChange} value={this.state.form.fechaIngreso} />
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                            <Button  color="primary" onClick={() =>  this.editar(this.state.form)} > Editar</Button>
                            <Button  color="danger" onClick={() =>  this.cerrarModalActualizar()} > Cancelar</Button>
                    </ModalFooter> 
                </Modal>
            </>
        )
    }
}

export default Empleados;