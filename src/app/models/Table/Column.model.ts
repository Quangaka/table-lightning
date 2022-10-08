export class Column {
    constructor(
        public fieldName: string,
        public type: 'text' | 'badge' | 'avatar',
        public label: string,
        public defaultType: 'string' | 'number' | 'boolean',
        public sortable: boolean,
        public direction: 'asc' | 'desc' | null,
        public contentAlignment: 'left' | 'right' | 'center'
    ){}
}