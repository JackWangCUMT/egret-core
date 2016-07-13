module dragonBones
{
    export class During
    {
        public frame:number
        public height:number;

        public constructor(data:DuringData)
        {
            this.frame = data.frame;
            this.height = data.height;
        }
        public dispose()
        {

        }

    }
}