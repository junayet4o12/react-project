import './friend.css'

export default function Friend({friend}){
    const {name,email,id}=friend;
    console.log(friend);
    return (
        <div className='box'>
            <h2>{id}</h2>
            <h4>Name: {name} </h4>
            <p>Email: {email}</p>

        </div>
    )
}