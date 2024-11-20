"use server"

import { auth } from "@clerk/nextjs/server"

interface TransactionData{
    text: string
    amount: number
}

interface TransactionResult{
    data?: TransactionData
    error?: string
}

async function addTransaction(formData:FormData):
Promise<TransactionResult>{
   const textValue = formData.get("text");
   const amountValue = formData.get("amount");

   // check for input values
   if(!textValue || textValue === "" || !amountValue){
    return {error: "Text or amount is missing"};
   }
   const text:string= textValue.toString(); // ensure text is string
   const amount:number = parseFloat(amountValue.toString()) // parse amount as number
   // get logged in user
   const { userId } = await auth();
   console.log(userId)
   const transactionData: TransactionData ={
    text,
    amount
   }
   return {data: transactionData};
}

export default addTransaction