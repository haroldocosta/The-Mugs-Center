export class MugDto {
    name: string;
    description: string;
    isActive: boolean;
    isArchived: boolean;
    createDateTime: Date;
    createdBy: string;
    lastChangedDateTime: Date;
    lastChangedBy: string;
    internalComment: string | null;
}