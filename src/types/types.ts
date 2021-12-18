export interface AutoProps{
    openProp: boolean;
    getAutorization: Function
}
export interface NavbarProps{
    open: boolean;
    handleDrawerOpen: Function;
    handleDrawerClose: Function;
    theme: any;
    disabled?: boolean;
}

export interface EditorType {
    openProp: boolean;
    addPost: Function;
    id?: any;
    oldText?: string;
    cardId?: string;
    setCardId?: Function;
}