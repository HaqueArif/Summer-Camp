import useEnrolledClass from "../../../../hooks/useEnrolledClass";
import ShowPaymentHistroy from "./ShowPaymentHistroy";


const PaymentHistory = () => {

    const [payments] = useEnrolledClass();

    // const pay = payments.map(p=>p);


    return (
        <div>
            <h2 className="text-3xl text-center">History</h2>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}

                    <tbody>

                        {
                            payments.map((history, i) => <tr key={i}>

                                <td>
                                    <div key={i}>
                                        <div className="  md:ps-3 bg-base-100 shadow">
                                           
                                            <div className="p-1 md:p-3">
                                                <div className="flex flex-wrap items-center justify-between gap-3">
                                                <h2 className="card-title">Quantity: {history.quantity} </h2>
                                                <p>TransactionID:  {history.transactionId}</p>
                                                    
                                                    <span>Date: {history.date}</span>

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>)

                        }


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default PaymentHistory;


{/* <ShowPaymentHistroy key={i} history={history}></ShowPaymentHistroy> ) */ }