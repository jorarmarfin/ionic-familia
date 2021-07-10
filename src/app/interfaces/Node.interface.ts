export interface Node {
    type: Type[];
    title: Title[];
    body: Title[];
    field_diagnostico?: Title[];
    field_fecha?: Title[];
    field_miembro?: Campo[];
    field_institucion?: Campo[];
  }
  
export interface Title {
    value: string;
  }
  
export interface Type {
    target_id: string;
  }
export interface Campo {
    target_id: string;
    target_type: string;
    target_uuid: string;
    url: string;
  }