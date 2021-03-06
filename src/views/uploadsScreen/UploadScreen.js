import React, { useState } from 'react';

import { DropZone } from '../../components/dropZone/DropZone';
import { FilesTable } from '../../components/tables/filesTables/FilesTable';
import { TableFilesData } from '../../context/TableFilesContext';

export const UploadScreen = () => {
  const [filesArray, setfilesArray] = useState([]);

  return (
    <TableFilesData.Provider value={{ filesArray, setfilesArray }}>
      <div>
        <h1 className='h3 mb-0 text-gray-800'>Subir recursos</h1>
        <div className='row'>
          <div className='col-lg-8'>
            <div className='card shadow mb-4 mt-3'>
              <div className='card-header py-3'>
                <h6 className='m-0 font-weight-bold text-primary'>Recursos</h6>
              </div>
              <div className='card-body'>
                <p>
                  Selecciona el tipo de recurso que quieres subir y arrastralos
                  o seleccionalos en la zona de subida
                </p>
                <div className='input-group mb-3'>
                  <div className='input-group-prepend'>
                    <span className='input-group-text' id='basic-addon1'>
                      <i className='fas fa-folder-open'></i>
                    </span>
                  </div>
                  <select className='form-control'>
                    <option defaultValue>Selecciona un tipo de recurso</option>
                    <option>Anuncios</option>
                    <option value='banners'>Banners</option>
                    <option>Notificaciones</option>
                    <option value='products'>Productos</option>
                  </select>
                </div>
              </div>
            </div>
            <FilesTable />
          </div>

          <div className='col-lg-4'>
            <div className='card shadow mb-4 mt-3'>
              <div className='card-header py-3'>
                <h6 className='m-0 font-weight-bold text-primary'>
                  Zona de cargue
                </h6>
              </div>
              <div className='card-body'>
                <DropZone>Arrastra y suelta los elementos aqui</DropZone>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TableFilesData.Provider>
  );
};
