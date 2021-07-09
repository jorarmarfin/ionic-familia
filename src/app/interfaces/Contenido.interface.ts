export interface Contenido {
    type: Type[];
    title: Title[];
    body: Title[];
    field_fecha: Title[];
  }
  
export interface Title {
    value: string;
  }
  
export interface Type {
    target_id: string;
  }