export const LoadingFallback = () => {
    return (
        <>now loading</>
    );
};

export const ErrorFallback = () => {
    return (
        <>
            <h1 className="text-error-content bg-base-200 text-center text-2xl font-bold sm:text-4xl">
                Something went wrong
            </h1>
            <button className="btn btn-error">Back To Home</button>
        </>
    );
};
