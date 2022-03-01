function Button({func,value}){
    return(
        <button onClick={func} className="bg-cyan-900 text-white mt-10 mb-5 ml-5 rounded-md px-3 py-2 ">
            {value}
        </button>
    );
}

export default Button;