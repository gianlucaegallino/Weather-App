class ErrorHandler {

    static handle(error){
        if (error.message == 400){
            alert("Invalid Request, try again!");
            console.error("Invalid Request 400");
        } else{
            alert(error);
            console.error(error);
        }

    }
}

export { ErrorHandler }