import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import { Table,Button,Container,FormGroup,
    Modal,ModalHeader,ModalBody,ModalFooter,
    } from "reactstrap";

import "./Empleados.css";


const Empleados = () => {
    const [empleado, setEmpleado] = useState([]);
    const [nuevoEmpleado, setNuevoEmpleado] = useState({idUsuario: "", nombre: "", pApellido: "", uApellido: "", estaEnProyecto: "", porcentajeStaff: "", fechaIngreso: "",fechaNacimiento: ""});
    const [editarEmpleado, setEditarEmpleado] = useState(null);
    
    const apiUrl = "http://localhost:5000/empleados/"; 

    const fetchEmpleados = async () => {
        try {
            const response = await axios.get(apiUrl);
            setEmpleado(response.data);
        } catch (error) {
            console.error("Error fetching empleados:", error);
        }
    };

    useEffect(() => {
        fetchEmpleados();
    }, []);

    const createEmpleado = async () => {
        try {
            await axios.post(apiUrl, nuevoEmpleado);
            fetchEmpleados();
            setNuevoEmpleado({idUsuario: "", nombre: "", pApellido: "", uApellido: "", estaEnProyecto: "", porcentajeStaff: "", fechaIngreso: "",fechaNacimiento: ""});
        } catch (error) {
            console.error("Error creating empleado:", error);
        }
    };

    const updateEmpleado = async (idUsuario) => {
        try {
            await axios.put(`${apiUrl}/${idUsuario}`, editarEmpleado);
            fetchEmpleados();
            setEditarEmpleado(null);
        } catch (error) {
            console.error("Error updating empleado:", error);
        }
    };

    const deleteEmpleado = async (idUsuario) => {
        try {
            await axios.delete(`${apiUrl}/${idUsuario}`);
            fetchEmpleados();
        } catch (error) {
            console.error("Error deleting empleado:", error);
        }
    };
    return (
        <div>
            <h1>CRUD de Empleados</h1>

            <h2>Crear empleado</h2>
            <input 
                type="text"
                placeholder="Nombre"
                value={nuevoEmpleado.nombre}
                onChange={(e) => setNuevoEmpleado({ ...nuevoEmpleado, nombre: e.target.value })}
            />
            <input
                type="text"
                placeholder="Primer Apellido"
                value={nuevoEmpleado.pApellido}
                onChange={(e) => setNuevoEmpleado({ ...nuevoEmpleado, pApellido: e.target.value })}
            />
            <input
                type="text"
                placeholder="Segundo Apellido"
                value={nuevoEmpleado.uApellido}
                onChange={(e) => setNuevoEmpleado({ ...nuevoEmpleado, uApellido: e.target.value })}
            />
            <input
                type="text"
                placeholder="Esta en Proyecto"
                value={nuevoEmpleado.estaEnProyecto}
                onChange={(e) => setNuevoEmpleado({ ...nuevoEmpleado, estaEnProyecto: e.target.value })}
            />
            <input
                type="number"
                placeholder="Porcentaje Staff"
                value={nuevoEmpleado.porcentajeStaff}
                onChange={(e) => setNuevoEmpleado({ ...nuevoEmpleado, porcentajeStaff: e.target.value })}
            />
            <input
                type="date"
                placeholder="Fecha Ingreso"
                value={nuevoEmpleado.fechaIngreso}
                onChange={(e) => setNuevoEmpleado({ ...nuevoEmpleado, fechaIngreso: e.target.value })}
            />
            <input
                type="date"
                placeholder="Fecha Nacimiento"
                value={nuevoEmpleado.fechaNacimiento}
                onChange={(e) => setNuevoEmpleado({ ...nuevoEmpleado, fechaNacimiento: e.target.value })}
            />
            <button onClick={createEmpleado}>Crear</button>

            <h2>Lista de empleados</h2>
            <ul>
                {empleado.map((emp) => (
                    <li key={emp.idUsuario}>
                        <p>{emp.nombre}</p>
                        <p>{emp.pApellido}</p>
                        <p>{emp.uApellido}</p>
                        <p>{emp.estaEnProyecto}</p>
                        <p>{emp.porcentajeStaff}</p>
                        <p>{emp.fechaIngreso}</p>
                        <p>{emp.fechaNacimiento}</p>
                        <button onClick={() => setEditarEmpleado(emp)}>Editar</button>
                        <button onClick={() => deleteEmpleado(emp.idUsuario)}>Eliminar</button>
                    </li>
                ))}
            </ul>

            {editarEmpleado && (
                <div>
                    <h2>Editar empleado</h2>
                    <input
                        type="text"
                        placeholder="Nombre"
                        value={editarEmpleado.nombre}
                        onChange={(e) => setEditarEmpleado({ ...editarEmpleado, nombre: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Primer Apellido"
                        value={editarEmpleado.pApellido}
                        onChange={(e) => setEditarEmpleado({ ...editarEmpleado, pApellido: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Segundo Apellido"
                        value={editarEmpleado.uApellido}
                        onChange={(e) => setEditarEmpleado({ ...editarEmpleado, uApellido: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Esta en Proyecto"
                        value={editarEmpleado.estaEnProyecto}
                        onChange={(e) => setEditarEmpleado({ ...editarEmpleado, estaEnProyecto: e.target.value })}
                    />
                    <input
                        type="number"
                        placeholder="Porcentaje Staff"
                        value={editarEmpleado.porcentajeStaff}
                        onChange={(e) => setEditarEmpleado({ ...editarEmpleado, porcentajeStaff: e.target.value })}
                    />
                    <input
                        type="date"
                        placeholder="Fecha Ingreso"
                        value={editarEmpleado.fechaIngreso}
                        onChange={(e) => setEditarEmpleado({ ...editarEmpleado, fechaIngreso: e.target.value })}
                    />
                    <input
                        type="date"
                        placeholder="Fecha Nacimiento"
                        value={editarEmpleado.fechaNacimiento}
                        onChange={(e) => setEditarEmpleado({ ...editarEmpleado, fechaNacimiento: e.target.value })}
                    />
                    <button onClick={() => updateEmpleado(editarEmpleado.idUsuario)}>Actualizar</button>
                </div>
             )}
        </div>      
    ) 
}

/* class Empleados extends React.Component {
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
                    <h1 className="titulo">Empleados de Accenture</h1>
                    <br />
                    <Button className="btn btn-success boton-fondo" onClick={() => this.mostrarModalInsertar()}>Crear</Button>
                    <br />
                    <br />
                    <Table className="tabla-BD">
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
                                <th>Modificar</th>
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
                                            <Button color="primary boton-fondo" onClick={() => this.mostrarModalActualizar(dato)}>Editar</Button>
                                            
                                            <Button color="danger boton-fondo " onClick={() => this.eliminar(dato)}>Eliminar</Button>
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
                            <input className="form-control" name="porcentajeStaff" type="number" min="0" max="1" step="0.01" onChange={this.handleChange} value={this.state.form.porcentajeStaff} />
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
                        <Button  color="primary boton-fondo" onClick={() =>  this.insertar()} >Insertar </Button> 
                        <Button  className="btn btn-danger boton-fondo" onClick={() =>  this.cerrarModalInsertar()}>Cancelar</Button>
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
                            <input className="form-control" name="porcentajeStaff" type="number" min="0" max="1" step="0.01" onChange={this.handleChange} value={this.state.form.porcentajeStaff} />
                        </FormGroup>
                        <FormGroup>
                            <label>Fecha Ingreso: </label>
                            <input className="form-control" name="fechaIngreso" type="date" onChange={this.handleChange} value={this.state.form.fechaIngreso} />
                        </FormGroup>
                        <FormGroup>
                            <label>Fecha Nacimientio: </label>
                            <input className="form-control" name="fechaNacimiento" type="date" onChange={this.handleChange} value={this.state.form.fechaNacimiento} />
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                            <Button  color="primary boton-fondo" onClick={() =>  this.editar(this.state.form)} > Editar</Button>
                            <Button  color="danger boton-fondo" onClick={() =>  this.cerrarModalActualizar()} > Cancelar</Button>
                    </ModalFooter> 
                </Modal>
            </>
        )
    }
} */
export default Empleados;