import mongoose from "mongoose";

export const connDB = ()=>{
    try {
        mongoose.connect('mongodb+srv://amityadavimmanent:kRlZRaSsMNIXbGCW@first.th6gfyr.mongodb.net/test').then((res)=>{
            console.log(`MongoDB connected`)
        })
    } catch (error) {
        console.log(error,"jj");
    }
}