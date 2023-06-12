import { useForm } from "react-hook-form";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";


const AddClass = () => {

    const { user } = useAuth() ;
    const [axiosSecure] = useAxiosSecure()
    console.log(user);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    
    
    const onSubmit = data => {
        const { name, image, price, seats } = data;
        const randomId = Math.random().toString(36).substr(2, 20);
        const classData = {
          instructor_name: user.displayName,
          instructor_email: user.email,
          classes: [
            {
              class_id: randomId,
              name,
              image,
              price: Number(price),
              seats: Number(seats),
              students: 0,
            },
          ],
          status: 'Pending', 
        };
      
        console.log(classData);

        axiosSecure.post('/instructors', classData)
        .then(res=>{
            console.log(res.data);
            if(res.data.insertedId){
                // 
                alert('class added')
            }
        })
      };
    
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className=" w-full shadow-2xl bg-[#5436ecbb] hover:bg-[#5436EC] duration-300 py-5 px-3 md:p-10">
            <div className="">
                            <label className="label">
                                <span className="text-white font-bold">Class Name</span>
                            </label>
                            <input
                                type="text" name="name" {...register('name')} placeholder="Class Name"
                                className=" px-5 py-3 w-full"
                            />
                        </div>

                        <div className="">
                            <label className="label">
                                <span className="text-white font-bold">Class Photo</span>
                            </label>
                            <input
                                type="text" name="image" {...register('image')} placeholder="Class Photo"
                                className=" px-5 py-3 w-full"
                            />
                        </div>

                        <div className="">
                            <label className="label">
                                <span className="text-white font-bold">Price</span>
                            </label>
                            <input
                                type="number" name="price" {...register('price')} placeholder="Price"
                                className=" px-5 py-3 w-full"
                            />
                        </div>
                
                        <div className="">
                            <label className="label">
                                <span className="text-white font-bold">Available seats</span>
                            </label>
                            <input
                                type="number" name="seats" {...register('seats')} placeholder="Available seats"
                                className=" px-5 py-3 w-full"
                            />
                        </div>

                        <div className="">
                            <label className="label">
                                <span className="text-white font-bold">Instructor Name</span>
                            </label>
                            <input
                                type="text" defaultValue={user.displayName} disabled name="instructor_name" {...register('instructor_name')} placeholder="Instructor name"
                                className=" px-5 py-3 w-full"
                            />
                        </div>

                        <div className="">
                            <label className="label">
                                <span className="text-white font-bold">Instructor Email</span>
                            </label>
                            <input
                                type="email" defaultValue={user.email} disabled name="instructor_email" {...register('instructor_email')} placeholder="Instructor email"
                                className=" px-5 py-3 w-full"
                            />
                        </div>

                        
                        
                        <div className=" loginHover mt-6">
                            <input type='submit' className="btn font-extrabold hover:bg-[#3870E8] hover:text-white border-none bg-[#C0E246]  text-xl mr-5 px-7 py-1" value='Add Class' />
                        </div>
                    </form>
        </div>
    );
};

export default AddClass;