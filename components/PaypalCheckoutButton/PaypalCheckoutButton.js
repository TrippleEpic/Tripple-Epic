import React, { useEffect, useState } from "react";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useAuth } from "../../context/UserContext";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";

const PaypalCheckoutButton = (props) => {
  console.log(props.amount);
  const [amount, setAmount] = useState(props.amount);
  const { user } = useAuth();
  const [userid, setUserid] = useState();
  const [orderStatus, setOrderStatus] = useState({});

  useEffect(() => {
    setAmount(props.amount);
  }, [props.amount]);

  useEffect(() => {
    if (orderStatus.status === "COMPLETED") {
      var balance = 0;
      const getBalance = async () => {
        await getDoc(doc(db, "USERS", user.uid))
          .then((document) => {
            if (document.data().balance) {
              balance = document.data().balance;
            }
            console.log(balance);
          })
          .then(() => {
            updateDoc(doc(db, "USERS", user.uid), {
              balance:
                parseFloat(balance) + parseFloat(orderStatus.amount.value),
            })
              .then(() => {
                console.log("Balance Added");
                alert("Money Added Successfully");
                setOrderStatus({});
              })
              .catch((err) => {
                console.log(err);
                alert(err);
                setOrderStatus({});
              });
          });
      };
      getBalance();
    }
  }, [orderStatus]);

  return (
    <PayPalScriptProvider>
      <PayPalButtons
        style={{
          tagline: false,
          shape: "pill",
        }}
        forceReRender={[amount]}
        disabled={
          props.amount === 0 || props.amount < 0 || props.amount === null
            ? true
            : false
        }
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: "Add Money",
                amount: {
                  value: amount,
                },
              },
            ],
          });
        }}
        onApprove={async (data, action) => {
          console.log(userid);
          const order = await action.order.capture();
          console.log(order);
          if (order.status === "COMPLETED") {
            setOrderStatus({
              status: "COMPLETED",
              amount: order.purchase_units[0].amount,
            });
          }

          // handleApprove(data.orderID)
        }}
        onCancel={() => {}}
        onError={(err) => {
          console.log(err);
        }}
      />
    </PayPalScriptProvider>
  );
};

export default PaypalCheckoutButton;
