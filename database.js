import mongoose  from 'mongoose'
// const mongouri ="mongodb+srv://ranaDatabase:ahmedimran96yoo@cluster0.xer9vl6.mongodb.net/megadata?retryWrites=true&w=majority"
const mongouri  = 'mongodb://ranaDatabase:ranaDatabase@ac-6a8enaz-shard-00-00.syhobim.mongodb.net:27017,ac-6a8enaz-shard-00-01.syhobim.mongodb.net:27017,ac-6a8enaz-shard-00-02.syhobim.mongodb.net:27017/megaback?ssl=true&replicaSet=atlas-owx8h2-shard-0&authSource=admin&retryWrites=true&w=majority'

// const mongouri='mongodb://hockeyJob:hockJob345WE@ac-mx3bdn2-shard-00-00.uugspp0.mongodb.net:27017,ac-mx3bdn2-shard-00-01.uugspp0.mongodb.net:27017,ac-mx3bdn2-shard-00-02.uugspp0.mongodb.net:27017/myfirstDatabase?ssl=true&replicaSet=atlas-nxhsix-shard-0&authSource=admin&retryWrites=true&w=majority'
const connectDB = () => {

    mongoose.connect(mongouri
    ).then((result) => {
        console.log('mongo connected');
    })
        .catch((err) => { console.log(err) });
}

export default connectDB




