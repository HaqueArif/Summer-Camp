import ShowClass from "./ShowClass";


const ClasseCard = ({classData}) => {

    const {classes } = classData;
    console.log( classes);
    
    return (
        <>
        
            {
                classes.map((c, i)=> <ShowClass key={i} classData={classData} Class={c}></ShowClass>)
            }
        </>
    );
};

export default ClasseCard;