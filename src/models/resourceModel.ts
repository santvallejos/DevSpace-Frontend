export interface Resource {
    id: string;
    folderId: string;
    folderName: string;
    name: string;
    description: string;
    url: string;
    favorite: boolean;
    createdOn: Date;
}

/* ejemplo de modelo de la base de datos
 {
    "id": "67f2fc523d6fa372d5c8c5c4",
    "folderId": "67f2fc273d6fa372d5c8c5c3",
    "folderName": "Test Folder",
    "name": "resource 1",
    "description": "resource 1",
    "url": "resource 1",
    "favorite": false,
    "createdOn": "2025-04-06T22:12:34.543Z"
  } 
*/