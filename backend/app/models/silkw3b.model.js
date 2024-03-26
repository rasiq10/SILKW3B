module.exports = mongoose => {
    var contactSchema = new mongoose.Schema({
            name: { type: String, required: true },
            email: { type: String, required: true },
            phone: { type: String, required: false },
            subject: { type: String, required: false },
            message: { type: String },
        }, { timestamps: true }
    );

    contactSchema.method("toJSON", function(){
        const{__v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });
    
    const Contact = mongoose.model('Contact', contactSchema);
     
    return Contact;
}