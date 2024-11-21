import mongoose from 'mongoose';

const SupportRequestSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        
    },
    title: {
        type: String,
        
    },
    titleNr: {
        type: String,
      
    },
    vin: {
        type: String,
        
    },
    message: {
        type: String,
        
    },
}, { timestamps: true });  


export default mongoose.models.SupportRequest || mongoose.model('SupportRequest', SupportRequestSchema);
