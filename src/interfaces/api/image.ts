export interface IImage {
    fileName: string;
    padrao?: boolean;
    id?: string;
    createdWhen?: string;
    updatedWhen?: string | null;
    deletedWhen?: string | null;
    createdByUserId?: string;
    updatedByUserId?: string | null;    
}