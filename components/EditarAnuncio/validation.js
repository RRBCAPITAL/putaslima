

export const validation = (formContent) => {
    const errors = {};
  
  
    // Validar que el nombre no esté vacío y no tenga más de 20 caracteres
    if (!formContent.name) {
      errors.name = "El nombre es requerido.";
    } else if (formContent.name.length > 20) {
      errors.name = "El nombre no puede tener más de 20 caracteres.";
    }
    // Validar que el tarifaxhr no esté vacío
    if (!formContent.tarifaxhr || formContent.tarifaxhr === "") {
        errors.tarifaxhr = "La tarifa es requerida.";
      } else if(formContent.tarifaxhr < 0){
        errors.tarifaxhr = "La tarifa no puede ser negativa.";
      }
      else if (formContent.tarifaxhr.length > 4) {
        errors.tarifaxhr = "La tarifa no puede tener más de 4 dígitos.";
      }

      // Validar que el tarifaxmr no esté vacío
    if (!formContent.tarifaxmr || formContent.tarifaxmr === "") {
      errors.tarifaxmr = "La tarifa es requerida.";
    } else if(formContent.tarifaxmr < 0){
      errors.tarifaxmr = "La tarifa no puede ser negativa.";
    }
    else if (formContent.tarifaxhr.length > 4) {
      errors.tarifaxhr = "La tarifa no puede tener más de 4 dígitos.";
    }


      // Validar que el peso no esté vacío
      if (!formContent.peso || formContent.peso=== "") {
        errors.peso = "El peso es requerido.";
      } else if (isNaN(formContent.peso)) {
        errors.peso = "El peso debe ser un número.";
      } else if (formContent.peso < 40 || formContent.peso > 120) {
        errors.peso = "El peso debe estar entre 40 y 120 kg.";
      } else if(formContent.peso < 0){
        errors.peso = "El peso no puede ser negativo.";
      }
  
      // Validar que el n de whatsapp no esté vacía y no tenga más de 300 caracteres
    if (!formContent.whatsapp) {
        errors.whatsapp = "El número de WhatsApp es requerido.";
      } else if (formContent.whatsapp.length !== 9) {
        errors.whatsapp = "El whatsapp debe tener 9 dígitos.";
      }  else if (isNaN(formContent.whatsapp)) {
        errors.whatsapp = "El whatsapp debe ser un número.";
      }
    // Validar que la descripción no esté vacía y no tenga más de 300 caracteres
    if (!formContent.description) {
      errors.description = "La descripción es requerida.";
    } else if (formContent.description.length > 1000) {
      errors.description = "La descripción no puede tener más de 1000 caracteres.";
    }
  
    // Validar que la edad sea un número entre 1 y 100
    if (isNaN(formContent.edad) || formContent.edad < 18 || formContent.edad > 100) {
      errors.edad = "La edad debe ser un número entre 18 y 100.";
    }
  
    //altura
    if (isNaN(formContent.altura)) {
        errors.altura = "La altura debe ser un número.";
      }
    else if (!formContent.altura) {
        errors.altura = "La altura es requerida.";
      }  else if(formContent.altura < 0){
        errors.altura = "La altura no puede ser negativa.";
      }
    // Validar que al menos un idioma haya sido seleccionado
    if (formContent?.idioma?.length === 0) {
      errors.idioma = "Debes seleccionar al menos un idioma.";
    }

    if (formContent?.atencion?.length === 0) {
      errors.atencion = "Selecciona al menos un modo de atención.";
    }
  
    // // Validar que la imagen principal haya sido seleccionada
    // if (!formContent.imagenPrincipal) {
    //   errors.imagenPrincipal = "Debes seleccionar la imagen de tu anuncio.";
    // }

    // Validar que al menos un departamento haya sido seleccionado
    if (!formContent.region) {
        errors.region = "Debes seleccionar un departamento.";
      }

      // Validar que al menos una provincia haya sido seleccionada
    if (!formContent.lugar) {
        errors.lugar = "Debes seleccionar una provincia.";
      }

      // Validar que al menos una nacionalidad haya sido seleccionada
    if (!formContent.nacionalidad) {
        errors.nacionalidad = "Debes seleccionar una nacionalidad.";
      }
    
      // Validar que al menos un dia de atencion haya sido seleccionada
    if (!formContent.diasAtencion) {
        errors.diasAtencion = "Selecciona los días de atención.";
      }
  
    // Resto de las validaciones que desees agregar
  
    console.log(errors);

    return errors
  };
  