
export class ShareValueChildren {
    private value: string;

    constructor(value: string) {
        this.value = value;
    }
    getValue(){
        return this.value
    }

    setValue(value: string){
        if (typeof value !== 'string') throw new Error('value must be a string')
        this.value = value
    }

}

export const shareValueChildren = new ShareValueChildren("");