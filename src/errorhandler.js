class ErrorHandler {

    Handle(error){
        alert(error);
        throw new unhandledError(error);
    }
}

export { ErrorHandler }