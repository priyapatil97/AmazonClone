import React from "react";
import { useContext } from "react";
import { Logincontext } from "../context/Contextprovider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Option = ({deletedata, get}) => {

    const { account, setAccount } = useContext(Logincontext)


    const removedata = async(req,res)=>{
        try{
            const res = await fetch(`/remove/${deletedata}`,{
                method:"DELETE",
                headers:{
                    Accept:"application/json",
                    "Content-type":"application/json"
                },
                credentials:"include"
            });

            const data = await res.json();
            console.log(data);

            if(res.status === 400 || !data){
                console.log("error");
                toast.warn("Invalid details",{
                    position: "top-center",
                })
            }else{
                console.log("User delete");
                toast.success("Item remove from cart ",{
                    position: "top-center",
                })
                setAccount(data);
                get();
            }

        }catch(error){
            console.log("error");
        }
    }

    return(
        <>
        <div className="add_remove_select">
            <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
            <p style={{cursor:"pointer"}} onClick={()=>removedata(deletedata)} >Delete</p><span>|</span>
            <p className="forremovemedia">Save Or Later</p><span>|</span>
            <p className="forremovemedia">See More like this</p>
            <ToastContainer />
        </div>
        </>
    );
}

export default Option;