import BasicLayout from "../layouts/BasicLayout";
import { useState,useEffect } from "react";
import { Grid } from "semantic-ui-react";
import { getOrdersApi } from "../api/order";
import useAuth from "../hooks/useAuth";
import Seo from "../components/Seo"; 

export default function Orders(){
    const [orders,setOrders] = useState(null);
    const {auth,logout} = useAuth();

    useEffect(() => {
        (async () => {
            const response = await getOrdersApi(auth.idUser,logout);
            console.log(response);
            setOrders(response || []);
        })();
    }, []);

    return (
        <BasicLayout className="orders">
            <Seo
                title="GameWorks"
            />
            <div className="orders__block">
                <div className="title">Mis pedidos</div>
                <div className="data">
                    <p>Lista de pedidos</p>
                </div>
            </div>
        </BasicLayout>
    )
}