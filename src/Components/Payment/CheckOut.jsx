import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import swal from 'sweetalert';
import jsPDF from 'jspdf';
const CheckOut = ({ price, name }) => {
    const [download, setDownload] = useState(false);
    const { id } = useParams();
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setClientSecret(data.clientSecret)
                // alert('added successfully');
            })
            .catch(error => console.log(error.message));
    }, [])
    // console.log(clientSecret);
    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            setCardError(error.message);
        }
        else {
            setCardError('');
            // console.log(paymentMethod);
        }
        const { paymentIntent, error: confirmedError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                    },
                },
            },
        );
        if (confirmedError) {
            // console.log(confirmedError)
            swal({
                title: "Payment failed",
                text: "back!",
                icon: "warning",
                button: "ok!",
            });
        }
        const transactionId = {
            transaction: paymentIntent.id,
        }
        if (paymentIntent?.status) {

            fetch(`http://localhost:5000/payment/saveAddress/${id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(transactionId)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        setDownload(true);
                        console.log("payment ok")
                    }
                    else {
                        console.log("something is wrong")
                    }
                });

            swal({
                title: "Payment success",
                text: "back!",
                icon: "success",
                button: "ok!",
            });
        }
        else {
            swal({
                title: "Payment failed",
                text: "back!",
                icon: "warning",
                button: "ok!",
            });
        }
    };
    const generatePDF = () => {
        const doc = new jsPDF();
        let y = 10;

        fetch(`http://localhost:5000/saveAddress/${id}`)
            .then(res => res.json())
            .then(result => {
                console.log(result);

                // Add text for name
                y += 10;
                doc.text('Foundation name: ', 50, y);
                doc.text("Crowd Founding", 100, y);
                y += 5;

                // Draw a horizontal line
                const lineY = y + 5;
                doc.line(10, lineY, 200, lineY);
                y += 15;
                // Add text for name
                doc.text('Name:', 10, y);
                doc.text(` ${result.name}`, 50, y);
                y += 20;

                doc.text('Address:', 10, y);
                doc.text(` ${result.address}`, 50, y);
                y += 20;

                doc.text('Price:', 10, y);
                doc.text(` ${result.price}`, 50, y);
                y += 20;

                // Add text for mobile number
                doc.text('Mobile Number:', 10, y);
                doc.text(result.number, 70, y);
                y += 20;

                // Add text for transaction ID
                doc.text('Transaction ID:', 10, y);
                doc.text(result.transaction, 70, y);
                y += 20;

                const messageLines = doc.splitTextToSize(result.message, 100); // Adjust width as needed
                doc.text('Message:', 10, y);
                doc.text(messageLines, 70, y);
                y += (messageLines.length * 10) + 10; // Adjust line spacing
                // Save the PDF
                doc.save('payment.pdf');
            })
            .catch(error => console.log(error));
    };


    return (
        <div>
            <form className='text-center mt-9 lg:p-0 md:p-0 p-4 ' onSubmit={handleSubmit}>
                <CardElement className=''
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='mt-5 ps-9 pr-9 btn bg-[#F99F24]' type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-red-600'>{cardError}</p>
            }
            <div className='text-center my-5'>
                {
                    download ? <button onClick={generatePDF} className='btn bg-[#F99F24] text-white'>Download Payment PDF</button> : <button disabled className='btn bg-[#F99F24]'>Download Payment</button>
                }
            </div>
        </div>
    );
};

export default CheckOut;