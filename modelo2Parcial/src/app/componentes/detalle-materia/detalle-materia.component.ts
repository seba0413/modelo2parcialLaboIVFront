import { Component, OnInit, Input } from '@angular/core';
import { Entidad2Service } from 'src/app/servicios/entidad2/entidad2.service';
import { Entidad2 } from '../../clases/entidad2';

@Component({
  selector: 'app-detalle-materia',
  templateUrl: './detalle-materia.component.html',
  styleUrls: ['./detalle-materia.component.css']
})
export class DetalleMateriaComponent implements OnInit {

  @Input() listadoMaterias: Array<any>
  listadoAlumnos: Array<any> = new Array<any>(); 
  idMateriaSeleccionada;
  fotoMateriaSeleccionada;

  constructor(private serviceEntidad2: Entidad2Service) { }

  mostrarDetalles(idMateriaSeleccionada){debugger

    this.listadoMaterias.forEach(materia => {
      if(materia.id == idMateriaSeleccionada)
        this.fotoMateriaSeleccionada = materia.foto;
    });

    this.serviceEntidad2.ObtenerAlumnosInscriptosEnMateria(idMateriaSeleccionada).subscribe(respuesta => {
      this.listadoAlumnos = respuesta;
    })
  }

  ngOnInit() {
     
  }
}
