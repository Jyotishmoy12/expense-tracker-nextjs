"use client"

import addTransaction from "@/app/actions/addTransaction"

const AddTranscation = () => {
  const clientAction = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
     const {data, error} = await addTransaction(formData)
     if(error){
      alert(error)
     }
     else{
      alert("Transaction Added")
      console.log(data)
     }
  }
  return (
    <>
    <h3>Add Transcation</h3>
    <form onSubmit={clientAction}>
      <div className="form-control">
        <label htmlFor="text">Text</label>
        <input type="text"  id="text" placeholder="Enter Text..." name="text"/>
      </div>
      <div className="form-control">
        <label htmlFor="amount">Amount <br /> (negative - expense, positive - income)</label>
        <input type="number" name="amount" id="amount" placeholder="Enter amount..." step="0.01"/>
      </div>
      <button className="btn" type="submit">Add Transaction</button>
    </form>
    </>
  )
}

export default AddTranscation