import { Schema, model, Document } from 'mongoose';

const PostSchema = new Schema({
    created: {
        type: Date,
    },
    mensaje: {
        type: String,
    },
    imgs: [{
        type: String,
    }],
    coords: {
        type: String
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: [ true, 'Debe estar relacionado a un usuario']
    }
});

PostSchema.pre<IPost>('save', function(next){
    this.created = new Date();
    next();
});

interface IPost extends Document{
    created: Date,
    mensaje: string,
    img: string[],
    coords: string,
    usuario: string
}

export const Post = model<IPost>('Post', PostSchema);

