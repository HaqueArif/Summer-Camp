import useEnrolledClass from "../../../../hooks/useEnrolledClass";

const PaymentHistory = () => {
    const [payments] = useEnrolledClass();

    const sortedPayments = payments.sort((a, b) => new Date(b.date) - new Date(a.date));

    return (
        <div className="mb-20">
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <tbody>
                        {sortedPayments.map((history, i) => (
                            <tr key={i}>
                                <td className="text-end">
                                    <div key={i}>
                                        <div className="md:ps-3 bg-base-100 shadow">
                                            <div className="p-1 md:p-3">
                                                <div className="flex flex-wrap items-center justify-between gap-3">
                                                    <p className="card-title">{history.className}</p>
                                                    <div>
                                                        <p className="text-end">TransactionID: {history.transactionId}</p>
                                                        <span>Date: {history.date}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;